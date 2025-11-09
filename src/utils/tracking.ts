interface TrackingEvent {
  eventType: 'page_view' | 'click' | 'form_submit' | 'custom' | 'error'
  eventName: string
  source: string
  properties?: Record<string, unknown>
}

class TrackingService {
  private readonly baseUrl?: string
  private readonly isConfigured: boolean
  private readonly source = 'kombi-prijevoz'

  constructor() {
    this.baseUrl = import.meta.env.VITE_TRACKING_SERVICE_URL
    const trackingEnabled = import.meta.env.VITE_TRACKING_ENABLED === 'true'
    this.isConfigured = !!this.baseUrl && trackingEnabled

    // Only warn in browser environment, not during SSR/SSG builds
    if (!this.isConfigured && typeof window !== 'undefined') {
      console.warn('Tracking is not available.')
    }
  }

  private async sendEvent(event: TrackingEvent): Promise<void> {
    if (!this.isConfigured) {
      return
    }

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      }

      const response = await fetch(this.baseUrl as string, {
        method: 'POST',
        headers,
        body: JSON.stringify(event),
      })

      if (!response.ok) {
        console.warn('Tracking event failed:', response.status, await response.text())
      }
    } catch (error) {
      console.warn('Tracking error:', error)
    }
  }

  trackPageView(page: string, properties?: Record<string, unknown>) {
    this.sendEvent({
      eventType: 'page_view',
      eventName: `page_view_${page}`,
      source: this.source,
      properties: {
        page,
        ...properties,
      },
    })
  }

  trackClick(eventName: string, properties?: Record<string, unknown>) {
    this.sendEvent({
      eventType: 'click',
      eventName,
      source: this.source,
      properties,
    })
  }

  trackFormSubmit(formName: string, properties?: Record<string, unknown>) {
    this.sendEvent({
      eventType: 'form_submit',
      eventName: formName,
      source: this.source,
      properties,
    })
  }

  trackError(eventName: string, error: unknown, properties?: Record<string, unknown>) {
    let errorMessage: string

    try {
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      } else {
        errorMessage = JSON.stringify(error, Object.getOwnPropertyNames(error))
      }
    } catch {
      errorMessage = String(error)
    }

    this.sendEvent({
      eventType: 'error',
      eventName: eventName,
      source: this.source,
      properties: {
        error: errorMessage,
        ...properties,
      },
    })
  }
}

export const trackingService = new TrackingService()

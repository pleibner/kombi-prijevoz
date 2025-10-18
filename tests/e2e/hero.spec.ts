import { test, expect } from '@playwright/test'

// Freeze animations and movement for deterministic snapshots
const freezeAnimations = `
  * { animation: none !important; transition: none !important; }
  .moving-vehicles { animation: none !important; }
`

test('hero map snapshot', async ({ page }) => {
  await page.goto('/')
  await page.addStyleTag({ content: freezeAnimations })
  // Ensure fonts & images loaded
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    await (document as any).fonts?.ready
  })

  const hero = page.locator('section.hero')
  await expect(hero).toBeVisible()
  await expect(hero).toHaveScreenshot('hero-map.png', {
    animations: 'disabled',
    caret: 'hide',
    maxDiffPixelRatio: 0.01,
    timeout: 15000,
  })
})

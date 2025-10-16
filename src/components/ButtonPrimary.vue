<template>
  <button
    class="btn-primary"
    :class="buttonClass"
    @click="$emit('click')"
  >
    <slot>{{ text }}</slot>
    <!-- Ripple effect -->
    <div class="btn-ripple" v-if="showRipple"></div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
  buttonClass?: string
  showRipple?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.btn-primary {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.6);
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  animation: none;
  pointer-events: none;
}

@keyframes ripple {
  to {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Enhanced styling for hero section */
.btn-primary.hero-btn {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.btn-primary.hero-btn:hover {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(239, 68, 68, 0.6);
}

/* Contact section styling */
.btn-primary.contact-btn {
  background-color: #ef4444;
  color: white;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary.contact-btn:hover {
  background-color: #a02828;
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .btn-primary {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .btn-primary.hero-btn {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .btn-primary.contact-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .btn-primary {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }

  .btn-primary.hero-btn {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }

  .btn-primary.contact-btn {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
}
</style>

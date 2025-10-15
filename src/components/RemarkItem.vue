<script setup lang="ts">
// Props for the remark item component
interface Props {
  text: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

<template>
  <div class="remark-item" :style="{ animationDelay: `${props.delay}s` }">
    <span class="checkmark">✓</span>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.remark-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  animation: remarkSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  border-left: 4px solid #ef4444;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.remark-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px) scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.checkmark {
  color: #ef4444;
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(239, 68, 68, 0.2);
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}

.remark-item:hover .checkmark {
  background: rgba(239, 68, 68, 0.4);
  transform: rotate(360deg) scale(1.1);
}

@keyframes remarkSlideIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .remark-item {
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    margin-bottom: 0.6rem;
  }
}

@media (max-width: 480px) {
  .remark-item {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>

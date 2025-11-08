<template>
  <router-link :to="to" class="service-card-link">
    <div class="service-card">
      <div class="card-icon">{{ icon }}</div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <div class="card-arrow">→</div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped>
.service-card-link {
  text-decoration: none;
  transition: transform 0.3s ease;
  display: block;
  height: 100%;
}

.service-card-link:hover {
  transform: translateY(-5px);
}

.service-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.service-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-color, #333);
  margin-bottom: 0.5rem;
}

.card-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  flex: 1;
}

.card-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  color: #ef4444;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-10px);
}

.service-card-link:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .service-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-description {
    font-size: 0.95rem;
  }

  .card-arrow {
    display: none;
  }
}
</style>
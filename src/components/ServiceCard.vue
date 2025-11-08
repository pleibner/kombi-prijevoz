<template>
  <router-link :to="link" class="service-link">
    <div class="service-card">
      <div class="service-icon">{{ icon }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
  link: string;
}

defineProps<Props>();
</script>

<style scoped>
.service-link {
  text-decoration: none;
  color: inherit;
  display: contents;
  width: 100%;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .service-card {
    padding: 2rem 1.5rem;
    min-height: 250px;
  }

  .service-card p {
    font-size: 1rem;
  }
}
</style>

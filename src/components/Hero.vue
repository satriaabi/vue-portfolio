<template>
  <section class="section-hero">
    <div class="hero grid grid-columns--2 container">
      <div class="hero-img-box">
        <img
          class="hero-img"
          src="@/assets/img/man-person-icon.svg"
          alt="hero"
        />
      </div>
      <div class="hero-text-box">
        <h1 class="heading-primary">{{ $t('hero.heading') }},</h1>
        <p class="hero-description">{{ $t('hero.description') }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

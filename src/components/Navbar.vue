<template>
  <header class="header flex">
    <a href="#skills" class="header-logo flex">
      <img class="logo" src="@/assets/img/man-person-icon.svg" alt="logo" />
      <div class="grid grid-rows--2">
        <span>Satria</span>
        <span>Abimanyu</span>
      </div>
    </a>

    <nav class="main-nav flex">
      <ul class="main-nav-list flex">
        <li>
          <!-- <a class="main-nav-link" href="#home">{{ $t('navbar.home') }}</a> -->
          <a class="main-nav-link" href="#home">Home</a>
        </li>
        <li><a class="main-nav-link" href="#skills">Skills</a></li>
        <li><a class="main-nav-link" href="#contacts">Contacts</a></li>
      </ul>
      <span class="divider"></span>
      <ul class="main-nav-list flex">
        <li>
          <select
            id="language-select"
            v-model="selectedLanguage"
            @change="changeLanguage"
          >
            <option
              v-for="(lang, key) in languages"
              :key="key"
              :value="key"
              class="language-option"
            >
              {{ lang }}
            </option>
          </select>
        </li>
        <!-- <li>Theme</li> -->
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const languages = {
  en: 'English',
  id: 'Indonesia',
};

const selectedLanguage = ref(locale.value); // Default language

const changeLanguage = event => {
  locale.value = event.target.value;
};
</script>
<style scoped></style>

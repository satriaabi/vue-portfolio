<template>
  <footer class="footer">
    <div class="grid grid--footer">
      <p class="footer-description">Get in touch anytime :)</p>
      <div class="address-col">
        <address class="contacts">
          <p class="address">Jakarta</p>
          <p>
            <a class="footer-link" href="tel:+62-878-7788-1508"
              >+62-878-7788-1508</a
            ><br />
            <a class="footer-link" href="mailto:satriaabi43@gmail.com"
              >satriaabi43@gmail.com</a
            >
          </p>
        </address>
      </div>
      <div class="logo-col">
        <ul class="social-links">
          <li>
            <a
              class="footer-link"
              href="https://www.linkedin.com/in/satria-abimanyu/"
              target="_blank"
              ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
            ></a>
          </li>
          <li>
            <a
              class="footer-link"
              href="https://github.com/satriaabi"
              target="_blank"
              ><ion-icon class="social-icon" name="logo-github"></ion-icon
            ></a>
          </li>
          <li>
            <a class="footer-link" href="mailto:satriaabi43@gmail.com"
              ><ion-icon class="social-icon" name="mail"></ion-icon
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <p class="copyright">
      Satria Abimanyu Copyright &copy; 2024 All rights reserved.
    </p>
  </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

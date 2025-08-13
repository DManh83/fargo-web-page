import { createI18n } from 'vue-i18n';

const modules = import.meta.glob('./locales/*/*.js', { eager: true });

function loadLocaleMessages() {
  const messages = {};

  Object.entries(modules).forEach(([path, module]) => {
    const m = path.match(/\.\/locales\/([^/]+)\/(.+)\.js$/);
    if (!m) return;
    const locale = m[1];        // en-US, zh-CN, vi-VN...
    const data = module.default || {};
    messages[locale] ??= {};
    Object.keys(data).forEach((ns) => {
      messages[locale][ns] = {
        ...(messages[locale][ns] || {}),
        ...data[ns],
      };
    });
  });

  return messages;
}

const messages = loadLocaleMessages();

const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale: localStorage.getItem('lang') || 'en-US',
  fallbackLocale: 'en-US',
  messages,
});

export function setLocale(lang) {
  localStorage.setItem('lang', lang);
  i18n.global.locale = lang;
}

export default i18n;
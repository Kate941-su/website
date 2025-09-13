# i18n Setup Guide

## Overview
This project uses `react-i18next` for internationalization with support for English, Japanese, and Spanish.

## Features
- 🌍 Multi-language support (EN, JA, ES)
- 🔄 Automatic language detection from browser/localStorage
- 💾 Language preference persistence
- 🎨 Beautiful language switcher component
- 📱 Responsive design support

## File Structure
```
src/
├── lib/
│   ├── i18n.ts                 # Main i18n configuration
│   └── locales/
│       ├── en/translation.json # English translations
│       ├── ja/translation.json # Japanese translations
│       └── es/translation.json # Spanish translations
├── components/
│   ├── I18nProvider.tsx        # i18n context provider
│   └── LanguageSwitcher.tsx    # Language selection dropdown
└── hooks/
    └── useI18n.ts              # Custom hook for i18n
```

## Usage in Components

### Basic Usage
```tsx
'use client';
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle', { field: 'AI', topics: 'ML' })}</p>
    </div>
  );
}
```

### Using Custom Hook
```tsx
'use client';
import { useI18n } from '@/hooks/useI18n';

export default function MyComponent() {
  const { t, changeLanguage, currentLanguage } = useI18n();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <button onClick={() => changeLanguage('ja')}>
        Switch to Japanese
      </button>
      <p>Current: {currentLanguage}</p>
    </div>
  );
}
```

## Adding New Languages

1. Create translation file: `src/lib/locales/[code]/translation.json`
2. Add to i18n config: `src/lib/i18n.ts`
3. Update LanguageSwitcher: `src/components/LanguageSwitcher.tsx`

## Translation Keys Structure
```json
{
  "nav": { ... },           // Navigation items
  "home": { ... },          // Home page content
  "common": { ... }         // Shared/common text
}
```

## Best Practices
- Always use translation keys, never hardcode text
- Use interpolation for dynamic content: `t('key', { variable })`
- Organize keys by page/component
- Test all languages before deployment
- Keep translation files in sync

## Supported Languages
- 🇺🇸 English (en) - Default
- 🇯🇵 Japanese (ja)
- 🇪🇸 Spanish (es)
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import I18nProvider from '@/components/I18nProvider';

function HomePage(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <LanguageSwitcher />
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('home.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t('home.subtitle', {
              field: 'artificial intelligence and machine learning',
              topics: 'cutting-edge research and technological innovation'
            })}
          </p>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('home.aboutTitle')}
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              {t('home.aboutText1')}
            </p>
            <p className="mb-4">
              {t('home.aboutText2')}
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('home.researchTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('home.researchArea1.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('home.researchArea1.description')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('home.researchArea2.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('home.researchArea2.description')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('home.researchArea3.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('home.researchArea3.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Updates */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('home.updatesTitle')}
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">December 2024</p>
              <p className="text-gray-900">
                {t('home.updates.december')}
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">November 2024</p>
              <p className="text-gray-900">
                {t('home.updates.november')}
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">October 2024</p>
              <p className="text-gray-900">
                {t('home.updates.october')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <I18nProvider>
      <HomePage />
    </I18nProvider>
  );
}

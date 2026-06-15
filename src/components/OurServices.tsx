
'use client';
import {useTranslations} from 'next-intl';
import { RadioIcon, ShieldIcon, TriangleAlertIcon, UsersIcon } from './Icons';

export default function OurServices(){
  const t = useTranslations('OurServices');
    return (
        <section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-gray-900 mb-4">{t('title')}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {t('description')}
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <a className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" href="/alerts" data-discover="true">
        <div className="flex items-start gap-4">
          <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
            <TriangleAlertIcon />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{t('realTimeAlerts.title')}</h3>
            <p className="text-gray-600">{t('realTimeAlerts.description')}</p>
          </div>
        </div>
      </a>
      <a className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" href="/awareness" data-discover="true">
        <div className="flex items-start gap-4">
          <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
            <ShieldIcon />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{t('emergencyResponse.title')}</h3>
            <p className="text-gray-600">{t('emergencyResponse.description')}</p>
          </div>
        </div>
      </a>
      <a className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" href="/appreciation" data-discover="true">
        <div className="flex items-start gap-4">
          <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
            <UsersIcon />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{t('communitySupport.title')}</h3>
            <p className="text-gray-600">{t('communitySupport.description')}</p>
          </div>
        </div>
      </a>
      <a className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" href="/help" data-discover="true">
        <div className="flex items-start gap-4">
          <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
            <RadioIcon />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{t('communicationHub.title')}</h3>
            <p className="text-gray-600">{t('communicationHub.description')}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
    )
}
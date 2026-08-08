
'use client';
import { useTranslations, useLocale } from 'next-intl';
import { RadioIcon, ShieldIcon, TriangleAlertIcon, NewspaperIcon } from './Icons';

export default function OurServices(){
  const t = useTranslations('OurServices');
  const locale = useLocale();

  const handleNotificationRequest = async () => {
    if (!('Notification' in window)) {
      alert(t('notifications.unsupported'));
      return;
    }

    if (Notification.permission === 'granted') {
      alert(t('notifications.alreadyGranted'));
      return;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification(t('notifications.successTitle'), {
          body: t('notifications.successBody'),
          icon: '/logo.svg'
        });
      }
    } else {
      alert(t('notifications.denied'));
    }
  };

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
          {/* تنبيهات في الوقت الفعلي - يطلب صلاحية الإشعارات */}
          <button 
            onClick={handleNotificationRequest}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group text-left w-full cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
                <TriangleAlertIcon />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{t('realTimeAlerts.title')}</h3>
                <p className="text-gray-600">{t('realTimeAlerts.description')}</p>
              </div>
            </div>
          </button>
          {/* الاستجابة للطوارئ */}
          <a 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" 
            href={`/${locale}/awareness`}
          >
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
          
          {/* التوعية والمجتمع */}
          <a 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" 
            href={`/${locale}/posts`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-(--secondary-color) p-3 rounded-lg group-hover:bg-(--primary-color) transition-colors">
                <NewspaperIcon />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{t('communitySupport.title')}</h3>
                <p className="text-gray-600">{t('communitySupport.description')}</p>
              </div>
            </div>
          </a>
          
          {/* مركز الاتصالات */}
          <a 
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group" 
            href={`/${locale}/help`}
          >
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
  );
}
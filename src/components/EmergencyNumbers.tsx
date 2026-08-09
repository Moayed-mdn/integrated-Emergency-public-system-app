'use client';
import { useTranslations } from 'next-intl'; 
import { AmbulanceIcon, FireDepartmentIcon, PoliceIcon, RedCrescentIcon, TrafficPoliceIcon } from './Icons';
import Container from './Container';

export default function EmergencyNumbers() {
  const t = useTranslations('EmergencyNumbers');

  const numbers = [
    { name: t('ambulance'), number: '110', icon: <AmbulanceIcon /> },
    { name: t('fire_department'), number: '113', icon: <FireDepartmentIcon /> },
    { name: t('police'), number: '112', icon: <PoliceIcon /> },
    { name: t('traffic_police'), number: '115', icon: <TrafficPoliceIcon /> },
    { name: t('red_crescent'), number: '133', icon: <RedCrescentIcon /> },
  ];

  return (
    <section className="py-16 px-4" id='emergency-numbers'>
      <Container>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {numbers.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-lg font-semibold">{item.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
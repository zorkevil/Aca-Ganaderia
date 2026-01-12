'use client';

import TabRemates from '../tabs/tabRemates';
import TabComercializacion from '../tabs/tabComercializacion';
import TabIdentificacion from '../tabs/tabIdentificacion';
import TabAlianzas from '../tabs/tabAlianzas';

import type { AlianzaItem, RemateItem, RemateCategory } from '@/lib/types';

import { identificacionItems } from '@/lib/mock';

type Props = {
  magTab: React.ReactNode;
  alliances: {
    text: string;
    items: AlianzaItem[];
  };

  auctions: {
    text: string;
    items: RemateItem[];
  };

  auctionModalities: RemateCategory[];
  auctionTypes: RemateCategory[];
};

export default function HaciendaTabsSection({
  magTab,
  alliances,
  auctions,
  auctionModalities,
  auctionTypes,
}: Props) {
  // Validación adicional por seguridad
  const safeAlliances = alliances ?? { text: '', items: [] };
  const safeAuctions = auctions ?? { text: '', items: [] };

  const tabs = [
    { id: 'mag', label: 'MAG', component: magTab },
    {
      id: 'remates',
      label: 'Remates',
      component: (
        <TabRemates
          remates={safeAuctions.items}
          text={safeAuctions.text}
          modalidades={auctionModalities}
          tipos={auctionTypes}
        />
      ),
    },
    { id: 'comercializacion', label: 'Comercialización', component: <TabComercializacion /> },
    {
      id: 'identificacion',
      label: 'Identificación y Gestión electrónica',
      component: <TabIdentificacion items={identificacionItems} />,
    },
    {
      id: 'alianzas',
      label: 'Alianzas estratégicas',
      component: <TabAlianzas alianzas={safeAlliances.items} text={safeAlliances.text} />,
    },
  ];

  return (
    <section id="tabs-hacienda" className="py-7">
      <div className="container">
        <div className="accordion accordion-tabs" id="haciendaAccordion">
          {tabs.map((tab, index) => (
            <div className="accordion-item" key={tab.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${tab.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse-${tab.id}`}
                >
                  {tab.label}
                </button>
              </h2>

              <div
                id={`collapse-${tab.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#haciendaAccordion"
              >
                <div className="accordion-body">{tab.component}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

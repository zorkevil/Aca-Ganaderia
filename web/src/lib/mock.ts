import type {
  HeroSlide,
  ServicesItem,
  ServicesProduccionItem,
  NewsItem,
  InformesItem,
  SubserviceItem,
  ProductItem,
  CarouselItem,
  AlianzaItem,
  IdentificacionItem,
  RemateCategory,
  RemateItem,
  MagRow,
  WhatsAppContact,
} from './types';

export const heroImageNutricion = '/img/sections/nutricion/nutricion-hero-bg.webp';
export const heroImageSanidad = '/img/sections/sanidad/sanidad-hero-bg.webp';
export const heroImageHacienda = '/img/sections/hacienda/hacienda-hero-bg.webp';
export const heroImageProduccion = '/img/sections/produccion/produccion-hero-bg.webp';
export const heroImageProduccionCarne =
  '/img/sections/produccion/carne/produccion-carne-hero-bg.webp';
export const heroImageProduccionTambo =
  '/img/sections/produccion/tambo/produccion-tambo-hero-bg.webp';
export const heroImageProduccionProyectoCampoGanadero =
  '/img/sections/produccion/proyecto-campo-ganadero/produccion-proyecto-campo-ganadero-hero-bg.webp';
export const heroImageNoticias = '/img/sections/noticias/noticias-hero-bg.webp';
export const heroImageInformes = '/img/sections/noticias/noticias-hero-bg.webp';
export const heroImageContacto = '/img/sections/contacto/contacto-hero-bg.webp';
export const heroImageGracias = '/img/sections/contacto/contacto-hero-bg.webp';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/img/sections/home/home-hero-bg-01.webp',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
  {
    id: 2,
    image: '/img/sections/home/home-hero-bg-02.webp',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
  {
    id: 3,
    image: '/img/sections/home/home-hero-bg-03.webp',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
];

export const services: ServicesItem[] = [
  {
    id: 'nutricion',
    title: 'Nutrición',
    description:
      'Nos proponemos atender y acompañar todas las etapas de la vida productiva de su animal y en las primeras etapas de vida como la Crianza o el Destete Hiperprecoz o Precoz.',
    bgClass: 'bg-color-7',
    icon: '/img/icons/icon-nutricion.svg',
    href: '/nutricion',
  },
  {
    id: 'sanidad',
    title: 'Sanidad',
    description:
      'En ACA desarrollamos un ecosistema ganadero eficiente, sostenible y rentable, integrando todos los eslabones de la cadena productiva.',
    bgClass: 'bg-color-9',
    icon: '/img/icons/icon-sanidad.svg',
    href: '/sanidad',
  },
  {
    id: 'hacienda',
    title: 'Hacienda',
    description:
      'Consolidamos un modelo productivo y comercial innovador que agrega valor a cada etapa, con foco en la trazabilidad, la calidad y el impacto positivo en el entorno.',
    bgClass: 'bg-color-11',
    icon: '/img/icons/icon-hacienda.svg',
    href: '/hacienda',
  },
  {
    id: 'produccion',
    href: '/produccion',
    title: 'Producción',
    description:
      'Compartimos soluciones y asesoramiento para potenciar cada etapa de la cadena ganadera y láctea, ayudando a productores y asesores a lograr mejores resultados.',
    bgClass: 'bg-color-13',
    icon: '/img/icons/icon-produccion.svg',
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    slug: 'carne-vacuna-precios-firmes',
    title: 'Carne vacuna: precios firmes y una demanda que no afloja',
    excerpt:
      'El escenario internacional sostiene valores históricamente altos y redefine el mapa de negocios con impacto en Argentina, Brasil, Australia y Uruguay.',
    category: 'Hacienda',
    colorBadge: '',
    badgeClass: 'bg-color-11',
    date: '2025-11-14',
    image: '/img/sections/noticias/noticias-01.webp',
    metaDescription:
      'El escenario internacional sostiene valores históricamente altos y redefine el mapa de negocios con impacto en Argentina, Brasil, Australia y Uruguay.',
    content: `
    <p>La firmeza en los precios y continua demanda de la carne vacuna en el mercado internacional sigue traccionando en forma positiva en el negocio de ganados y carnes, estableciendo un piso de precios para las distintas categorías de la hacienda, lo cual lleva a valores históricamente altos en dólares y en pesos constantes.</p>

    <p>Así lo sostienen los consultores ganaderos y médicos veterinarios Fernando Gil y Federico Santangelo, de Agroideas, en un detallado panorama internacional sobre la materia realizado para la Asociación de Cooperativas Argentinas (ACA) bajo el título “Informe de la Cadena Carne Vacuna. Agosto 2025”.</p>

    <h2>Los aranceles de Estados Unidos</h2>

    <p>Los aranceles de Estados Unidos impactaron en el mercado de la carne de Brasil. Tras la suba del gravamen para los productos brasileños, los operadores detuvieron las compras a ese mercado. Estos cambios en la política arancelaria dan la posibilidad de modificaciones estructurales en los flujos comerciales de Brasil, redireccionando su oferta a China y otros destinos.</p>

    <highlight>
      Los aranceles reconfiguran el comercio con Brasil, que redirige su oferta a China y otros destinos.
    </highlight>

    <p>Estados Unidos se encuentra con los precios de la carne más altos de la historia. Durante las últimas semanas, hubo un aumento de nueve centavos por kilo gancho, con lo que se logró superar al récord de mediados de junio, que había sido de 8,40.</p>

    <h2>Motivo de los buenos precios</h2>

    <p>La firmeza en los precios internacionales responde a la escasez de oferta mundial. Los volúmenes comercializados de muchos países exportadores de carne vacuna están hacia la baja.</p>

    <h2>Excepciones a la regla</h2>

    <p>Australia, en cambio, consolida su crecimiento con un notable dinamismo en varios destinos clave y una competitividad que se fortalece mes a mes, destacándose un salto en los embarques a Estados Unidos. En julio, las exportaciones totales de carne de res alcanzaron las 150.435 toneladas, lo que representa un aumento del 16 % con respecto a las cifras de julio de 2024 y del 12 % con respecto al récord anterior, establecido tan solo un mes antes, en junio. Eso fue logrado básicamente por el incremento en el peso de la canal, cuyo promedio en el primer trimestre de 2025 para el ganado adulto fue de 313 kg/cabeza.</p>

    <p>Australia generalmente representa entre el 15 % y el 20 % de las exportaciones mundiales de carne vacuna. Eso significa que la suba de las exportaciones australianas, si bien significativa, no modifica por sí solo la situación de la oferta mundial. Por lo tanto, si bien las exportaciones australianas aumentaron, el efecto de la disminución de las exportaciones de otros países significa que la oferta mundial se mantiene limitada. Además, es muy difícil que Australia pueda incrementar sustancialmente su exportación a Estados Unidos porque tiene una oferta establecida.</p>

    <p>Brasil es otra excepción en la reducción de las exportaciones. A pesar de que entraron en vigor los aranceles del 50% para las exportaciones de Brasil a Estados Unidos, logró los mayores volúmenes en el mes y en el acumulado a doce meses, mientras que el precio del novillo obtuvo fuertes subas de precios.</p>

    <p>Tras varias postergaciones y acuerdos selectivos, el presidente del país norteamericano, Donald Trump, impuso un arancel del 50% adicional para la nación sudamericana, lo que, sumado a los tributos ya vigentes, marca un cierre virtual de sus exportaciones de carne al mercado estadounidense. Brasil, que pagaba 26,4% de derecho de importación por la carne vacuna, ahora debería pagar 76,4%, lo que supone que se acaba esa corriente comercial.</p>

    <p>Estados Unidos era el segundo cliente por lo que deberá redirigir esa mercadería a otros, entre los que se destaca China como candidata. Los envíos a Estados Unidos, segundo mercado hasta junio, tuvieron un gran retroceso a causa del conflicto arancelario. La medida, en medio de un clima mundial incierto, podría presionar los precios en otros destinos.</p>

    <p>Uruguay, con un volumen de 311 mil toneladas, refuerza en julio su crecimiento interanual en un 7% de exportaciones con un mercado del gordo con precios estables. En julio sus exportaciones se incrementaron un 26%, unas 42 mil toneladas, siendo China su principal destino, en tanto que el Reino Unido y Estados Unidos incrementaron sus compras en la misma comparación.</p>

    <p>El mercado permanece expectante con lo que pueda pasar con el mapa de negocios: cómo van a repercutir los aranceles a Brasil, con un precio de la tonelada muy firme.</p>

    <p>En el caso de Uruguay y la Argentina, con una cuota de apenas 20.000 toneladas, los volúmenes deberán pagar fuera de cuota un total de 36,4%, que corresponde a un 26,4% adicional que ya tenía, más el 10%.</p>

    <img src="/img/sections/noticias/noticias-02.webp">
    
    <h2>Argentina: merma de exportaciones</h2>

    <p>Con relación a los primeros seis meses de 2024, los volúmenes exportados de Argentina son un 16,4 % inferiores, mientras que el valor obtenido fue un 11,6% superior. En los primeros seis meses de este año, las ventas al exterior de carne bovina refrigerada y congelada resultaron cercanas a las 312,6 mil toneladas peso producto, por un valor de aproximadamente 1.587,9 millones de dólares.</p>

    <h2>Caen las importaciones de China</h2>

    <p>En el primer semestre de este año, las importaciones de carne vacuna de China acumulan 1,3 millones de toneladas, que resultan 9% inferiores a las del período comparable del año previo.</p>

    <p>No obstante, en junio mostraron el primer aumento interanual del año. En ese mes, el gigante oriental importó 217 mil toneladas peso embarque, superando en 22 mil al registro de mayo y en 8 mil al de un año atrás (4%). Aunque los precios siguen estables, son más altos que el año pasado en casi un 10%.</p>

    <highlight>
      La firmeza en los precios internacionales responde a la escasez de oferta mundial.
    </highlight>

    <h2>La oportunidad de Argentina</h2>

    <p>Entre los principales proveedores de China, la Argentina y Brasil ganan participación mientras que Estados Unidos prácticamente desaparece como consecuencia del fuerte conflicto comercial entre Trump y el presidente de China, Xi Jinping, por los aranceles.</p>
  `,
  },
  {
    id: 2,
    slug: 'desafios-sanitarios-de-la-ganaderia-argentina-en-el-contexto-actual',
    title: 'Desafíos sanitarios de la ganadería argentina en el contexto actual',
    excerpt:
      'La ganadería argentina avanza con nuevas oportunidades, pero los desafíos sanitarios siguen marcando la agenda productiva y exportadora.',
    category: 'Sanidad',
    colorBadge: '',
    badgeClass: 'bg-color-9',
    date: '2025-11-15',
    image: '/img/sections/noticias/noticias-03.webp',
    metaDescription:
      'La ganadería argentina avanza con nuevas oportunidades, pero los desafíos sanitarios siguen marcando la agenda productiva y exportadora.',
    content: `
    <p>La ganadería argentina atraviesa un escenario de grandes oportunidades. Con el precio del ternero por encima de los $4.000 por kilo vivo, un mercado de exportación firme y diversificado, que ya no depende exclusivamente de China o la Unión Europea, sino que comienza a incluir otros destinos como EE. UU., México e Israel. Sumada la reciente eliminación de retenciones a la carne, hacen que la ganadería bovina, se perfile como uno de los motores del sector agropecuario nacional.</p>

    <p>En este contexto favorable, la sanidad animal se consolida como un factor estratégico, ya que, un rodeo sano no solo garantiza rentabilidad a los productores, sino también confianza en los mercados internacionales y seguridad para el consumidor en general.</p>

    <p>En diálogo con ACAECER, Juan Ghirardi, Vet. PhD asesor ACA Sanidad Animal, explicó que a pesar de este escenario positivo, persisten desafíos sanitarios con repercusiones productivas que son muy relevantes.</p>

    <p>• <strong>Fiebre aftosa:</strong> sigue siendo el eje central de las políticas oficiales. Mantener el estatus de país libre con vacunación requiere constancia en las campañas y vigilancia epidemiológica.</p>

    <p>• <strong>Zoonosis obligatorias:</strong> brucelosis y tuberculosis continúan afectando tanto la productividad como la salud pública.</p>

    <p>• <strong>Enfermedades reproductivas:</strong> IBR, DVB, Tricomoniasis y Campylobacteriosis generan pérdidas silenciosas en los porcentajes de preñez y destete, comprometiendo la eficiencia del rodeo nacional. Históricamente la tasa de destete se sitúa en 63%, y en 2024 fue del 65,2%. Si bien se observa una mejora, aún queda mucho por hacer.</p>

    <p>• <strong>Patologías parasitarias:</strong> la resistencia a los tratamientos limita el control. Problemas como los nematodos en la región pampeana o la garrapata que se expande cada vez más en el NEA y NOA, requieren enfoques de manejo integrado, ya que se traducen en menores cantidades de terneros, menor ganancia de peso y mayores costos sanitarios.</p>

    <h2>Prevención y capacitación: la base del éxito</h2>

    <p>Por otro lado, Ghirardi especificó que la prevención es la herramienta más eficaz y accesible para seguir luchando contra estos desafíos sanitarios. “Las vacunaciones con calendarios planificados, el diagnóstico temprano y el uso responsable de antiparasitarios constituyen la primera línea de defensa. Sin embargo, el éxito depende tanto de la ciencia como del factor humano. Muchas pérdidas se originan en fallas de manejo: dosis mal aplicadas, registros incompletos o deficiencias en el control de información de ingresos y movimientos de ganado”, detalló.</p>

    <p>Y explicó que, en este contexto, desde Sanidad Animal de ACA, no solo se asegura acceso confiable a medicamentos y vacunas de calidad, también se brinda soporte técnico a equipos de trabajo y entes sanitarios de cada región del país. “Su acompañamiento técnico facilita la implementación de planes sanitarios efectivos y convierte a las cooperativas en un engranaje indispensable para que las políticas nacionales se traduzcan en resultados concretos en el campo”, rescató el veterinario.</p>

    <highlight>
      La sanidad animal sigue siendo el factor clave para sostener la competitividad de la ganadería argentina.
    </highlight>

    <img src="/img/sections/noticias/noticias-04.webp">

    <h2>La importancia de la trazabilidad</h2>

    <p>Otro tema que destacó Ghirardi es la trazabilidad ganadera, que toma trascendencia por la reciente Resolución 530/25 del SENASA, la cual establece la identificación electrónica obligatoria en bovinos a partir de enero de 2026.</p>

    <p>De esta forma, los animales deberán ser identificados individualmente al destete o primer movimiento mediante un binomio de dispositivos, es decir una caravana electrónica de tipo botón y una tarjeta visual. Ambas de color blanco y con un código de identificación que cumple los estándares internacionales ISO.</p>

    <highlight>
      Prevención, capacitación y trazabilidad: tres pilares para enfrentar los desafíos sanitarios actuales.
    </highlight>

    <p>“Con esta medida no solo se fortalece la confianza de los mercados internacionales, sino que también permite integrar información productiva, reproductiva y sanitaria en sistemas digitalizados, potenciando la eficiencia del manejo y la toma de decisiones, por ende, la eficiencia productiva”, indicó el veterinario. Y agregó que desde Sanidad Animal de ACA, acompañan esta transición en alianza con proveedores líderes en sistemas de identificación electrónica internacional, asegurando que los productores cuenten con dispositivos con la tecnología más eficiente como son las caravanas HDX, bastones lectores que incluyen GPS y el soporte técnico necesario para implementarlos con éxito.</p>

    <p>“En definitiva, la sanidad animal es un pilar clave de la competitividad de la ganadería argentina. Los desafíos persisten, pero también lo hacen las oportunidades. Prevenir, capacitar, innovar y articular esfuerzos entre productores, veterinarios, cooperativas y Estado es el camino para consolidar un modelo ganadero eficiente, que crezca en stock, sea sustentable y mejore la proyección internacional”, concluyó Juan Ghirardi.</p>
  `,
  },
];

export const subservicesByArea: Record<string, SubserviceItem[]> = {
  nutricion: [
    {
      icon: '/img/icons/icon-asesoramiento-en-produccion.svg',
      title: 'Asesoramiento en producción',
    },
    {
      icon: '/img/icons/icon-asesoramiento-en-formulacion-de-raciones.svg',
      title: 'Asesoramiento en formulación de raciones',
    },
    {
      icon: '/img/icons/icon-analisis-completo-de-raciones-o-materias-primas.svg',
      title: 'Análisis completo de raciones o materias primas',
    },
    {
      icon: '/img/icons/icon-venta-de-materias-primas-especificas.svg',
      title: 'Venta de materias primas específicas',
    },
  ],
  sanidad: [
    {
      icon: '/img/icons/icon-antiparasitarios-externos.svg',
      title: 'Antiparasitarios Externos',
    },
    {
      icon: '/img/icons/icon-endectocidas.svg',
      title: 'Endectocidas',
    },
    {
      icon: '/img/icons/icon-antiparasitarios-internos.svg',
      title: 'Antiparasitarios Internos',
    },
    {
      icon: '/img/icons/icon-antibioticos.svg',
      title: 'Antibióticos',
    },
    {
      icon: '/img/icons/icon-minerales.svg',
      title: 'Minerales',
    },
    {
      icon: '/img/icons/icon-biologicos.svg',
      title: 'Biológicos',
    },
    {
      icon: '/img/icons/icon-identificacion-animal.svg',
      title: 'Identificación Animal',
    },
  ],
};

export const categoriesNutricion = [
  { id: '1', name: 'Porcinos' },
  { id: '2', name: 'Sistema de crianza de terneros' },
  { id: '3', name: 'Sistema de producción de leche' },
  { id: '4', name: 'Sistema de producción de carne' },
  { id: '5', name: 'Sistema de producción industrial' },
];

export const categoriesSanidad = [{ id: 'farmacos', name: 'Fármacos' }];

export const subcategoriesSanidad = [
  { id: 'mineral', name: 'Mineral' },
  { id: 'endectocida', name: 'Endectocida' },
  { id: 'antiparasitario-interno', name: 'Antiparasitario interno' },
  { id: 'antiparasitario-externo', name: 'Antiparasitario externo' },
  { id: 'antibiotico', name: 'Antibiótico' },
];

export const products: ProductItem[] = [
  {
    id: 1,
    sku: '16-005570',
    slug: 'pre-starter-concentrado-recria',
    name: 'Pre Starter - Concentrado Recría',
    title: 'Pre Starter',
    subtitle: 'Concentrado Recría',
    description:
      'Permiten pasar rápidamente, y minimizando el stress, de dieta líquida en lactancia a alimento sólido. La presentación especial de este alimento permite mejorar las conversiones, evitar desperdicios en comederos y optimizar la ganancia de peso.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Porcinos',
    iconCategory: '/img/icons/icon_nutricion_porcino.svg',
    secondCategory:
      'Lechones a partir de los 7-10 días de vida en comedores adecuados mientras están al pie de la madre, para luego continuar desde el destete hasta los 9 kg de peso vivo.',
    presentation: 'Bolsa 25 kg',
    administration: 'Se debe controlar que la proporción utilizada sea la indicada.',
    dosage: '2 kg por lechon. A continuación de este alimento se suministrará STARTER ACA.',
    image: '/img/products/nutricion/af-cerdos-intensivo-pre-starter.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 2,
    sku: '16-005573',
    slug: 'starter-concentrado-recria',
    name: 'Starter - Concentrado Recría',
    title: 'Starter',
    subtitle: 'Concentrado Recría',
    description:
      'Concentrado proteico y vitamínico mineral que permite el óptimo desarrollo de lechones en la etapa inicial y de recría. Para ser utilizado como ingrediente en la elaboración de raciones para lechones.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Porcinos',
    iconCategory: '/img/icons/icon_nutricion_porcino.svg',
    secondCategory: 'A continuación del Concentrado Iniciador hasta los 70 días de vida.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Moler adecuadamente pellets de soja y maíz de buena calidad y mezclar con AF Cerdos Concentrado Recría.',
    dosage: 'Incluir 5% de la ración.',
    image: '/img/products/nutricion/af-cerdos-intensivos-starter.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 3,
    sku: '16-005572',
    slug: 'starter-concentrado-iniciador',
    name: 'Starter - Concentrado Iniciador',
    title: 'Starter',
    subtitle: 'Concentrado Iniciador',
    description:
      'Formulado con los aditivos necesarios para balancear los nutrientes aportados por el maíz y harina de soja molidos en las granjas. Indicado para ser utilizado como ingredientes en la elaboración de alimento para lechones desde 12 hasta los 18kg de peso vivo. Consumo estimado por lechón para alcanzar los 18kg de peso vivo: 7kg.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Porcinos',
    iconCategory: '/img/icons/icon_nutricion_porcino.svg',
    secondCategory:
      'Formulado para la elaboración de raciones para lechones a partir de los 12 kg hasta los 20 kg de PV o de los 42 a los 55 días de vida.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Moler adecuadamente pellets de soja y maíz de buena calidad y mezclar con AF Cerdos Concentrado Iniciador.',
    dosage: 'Incluir en un 10% en ración con pellets de soja y maíz molido.',
    image: '/img/products/nutricion/af-cerdos-intesivos-concentrado-iniciador.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 4,
    sku: '16-005573',
    slug: 'cerdo-recria-concentrado-recria',
    name: 'Cerdo Recría - Concentrado Recría',
    title: 'Cerdo Recría',
    subtitle: 'Concentrado Recría',
    description:
      'Concentrado proteico y vitamínico mineral que permite el óptimo desarrollo de lechones en la etapa inicial y de recría. Para ser utilizado como ingrediente en la elaboración de raciones para lechones.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Porcinos',
    iconCategory: '/img/icons/icon_nutricion_porcino.svg',
    secondCategory: 'A continuacion del Concentrado Iniciador hasta los 70 dias de vida.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Moler adecuadamente pellets de soja y maíz de buena calidad y mezclar con AF Cerdos Concentrado Recría.',
    dosage: 'Incluir 5% de la ración.',
    image: '/img/products/nutricion/af-cerdos-intensivo-concentrado-recria.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 5,
    sku: '16-022002',
    slug: 'ruter-vg',
    name: 'Ruter VG',
    description:
      'Es un alimento de alta tecnología, exstrusado, de alta concentracción de proteínas y grasas de máxima calidad, maximizando la degradación ruminal. Esto permite menores emisiones de dióxido de carbono y óxido nitroso generando un resultado productivo y sustentable, cuidando el medio ambiente, el bienestar animal y agregando un nuevo enfoque: la salud del ser humano.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Tambo: Terneros desde 1 a 45 días de Vida. Cría: Terneros de 30 a 60 días de Vida',
    presentation: 'Bolsa 15 kg',
    administration: 'Consultar al departamento técnico el plan de alimentación.',
    dosage: 'Consulte al departamento técnico el plan de alimentación acorde para su crianza.',
    image: '/img/products/nutricion/ruter-15kg.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 6,
    sku: '16-022010',
    slug: 'ruter-inicia',
    name: 'Ruter Inicia',
    description:
      'Es un complemento vitamínico, mineral y energético formulado para ser utilizado durante la crianza artificial o en el destete de los terneros, agregándolo a la dieta láctea que esté recibiendo el ternero/a, en tambo o en cría, que incluye una dieta líquida no proveniente de la leche. Energia Metabolizable: 3400 kcal/kg',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Terneras/os de tambo o cría desde el primer día de vida en dos dosis diarias, con las dos tomas de leche (o entre tomas) durante los primeros 7 días de vida.',
    presentation: '15 litros',
    administration:
      'Disolver una dosis de 50 cm cúbicos en dos litros de leche o agua a 38 °C, según sistema. Se puede administrar directamente en balde, en mamadera o por medio de sondas nasoesofagica para los casos en que exista adinamia o falta de apetito.',
    dosage:
      'Tambo: Terneras/os desde el primer día de vida en dos dosis diarias, con las dos tomas de leche, o entre tomas, durante 7 días. Dosis: 50 cc c/u. Cría: desde el momento del destete Hiperprecoz, en dos dosis diarias por 7 días.Se pueden suministrar en el agua de bebida a razón de 50 cc por litro; calcular 1 litro de agua por ternero en cada dosis. Una vez consumida el agua ofertada dejar la misma a voluntad.',
    image: '/img/products/nutricion/ruter-inicia.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 7,
    sku: '16-023008',
    slug: 'af-mix-preparto-anionicas',
    name: 'AF Mix Preparto Aniónicas',
    description:
      'Suplemento vitamínico mineral aniónico diseñado para lograr un correcto balance ácido-básico dentro del sistema homeostático de la vaca, corrigiendo los bajos niveles de Calcio sérico pre y post parto. Con la finalidad de prevenir problemas metabólicos como la hipocalcemia.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de leche',
    iconCategory: '/img/icons/icon_nutricion_prod_leche.svg',
    secondCategory: 'Vacas preparto, un mínimo de 15 días y un máximo de 21 días antes del parto',
    presentation: 'Bolsa 25 kg',
    administration:
      'Recomendamos ingresar las vacas al lote y dosificar en la ración 21 días antes del parto. Recomendado para hacer en balanceados o en raciones en mixer con el resto de los ingredientes.',
    dosage: '300 gramos por vaca por día.',
    image: '/img/products/nutricion/af-mix-adq-preparto-anionica.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 8,
    sku: '16-023110',
    slug: 'adq-lactancia-ar',
    name: 'ADQ Lactancia AR',
    description:
      'Suplemento vitamínico mineral para ser suministrado en vacas en producción desde el inicio de su lactancia.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de leche',
    iconCategory: '/img/icons/icon_nutricion_prod_leche.svg',
    secondCategory: 'Vacas lecheras en etapa de lactancia.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Agregar en la ración con la que se alimentan las vacas. Recomendado para hacer raciones balanceadas en el mixer mezclándolo con el resto de los ingredientes.',
    dosage: '300 gramos por vaca por día.',
    image: '/img/products/nutricion/af-mix-adq-terneros.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 9,
    sku: '16-023014',
    slug: 'nucleo-tambo',
    name: 'Núcleo Tambo',
    description:
      'Núcleo vitamínico y mineral formulado para ser utilizado en la elaboración de alimentos balanceados y raciones para bovinos lecheros en producción.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de leche',
    iconCategory: '/img/icons/icon_nutricion_prod_leche.svg',
    secondCategory: 'Vacas lecheras en producción.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Agregar como suplemento junto al resto de los ingredientes que se incluyen en la formulación del blanceado.',
    dosage: 'Vacas en lactancia: 0,5 kg por tonelada.',
    image: '/img/products/nutricion/af-mix-produccion-de-leche-25kg.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 10,
    sku: '16-021600',
    slug: 'af-mix-industrial',
    name: 'AF Mix Industrial',
    description:
      'Suplemento vitamínico y mineral diseñado para su utilización en fábricas de alimentos para la formulación de productos destinados a bovinos en los diferentes sistemas de producción, incorporando ionóforo y micro minerales orgánicos e inorgánicos.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción industrial',
    iconCategory: '/img/icons/icon_nutricion_prod_industrial.svg',
    secondCategory: 'Desde recría hasta animales en producción',
    presentation: 'Bolsa 25 kg',
    administration: 'Mezclar la dosis sugerida con el resto de los ingredientes.',
    dosage: '10 kg por tonelada de alimento.',
    image: '/img/products/nutricion/af-mix-industrial-blend.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 11,
    sku: '16-007013',
    slug: 'sustituto-af',
    name: 'Sustituto AF',
    description:
      'Producto formulado para ser utilizado como reemplazante de leche para alimentar a terneros durante la etapa de crianza artificial. Sustituto 100% lácteo. Libre de antibioticos y/o medicamentos. Contiene 23% de proteína y 15 % de grasa. Energía Metabolizable: 4000 kcal/kg.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory: 'Terneros',
    presentation: 'Bolsa 25 kg',
    administration:
      'Calentar agua hasta una temperatura de 45/50°C y mezclar con el producto. Dilución AL 12% o según criterio profesional. Para su preparación utilizar agua apta para consumo humano.',
    dosage:
      'Suministrar 2 tomas diarias de 2 litros cada una, a la misma hora y temperatura. Temperatura de suministro 37/38 °C. Se debe suministrar alimento balanceado con 18% de Proteína (materia tal cual) de excelente calidad.',
    image: '/img/products/nutricion/cooperacion-af.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 12,
    sku: '16-007001',
    slug: 'sustituto-cl',
    name: 'Sustituto CL',
    description:
      'Producto formulado para ser utilizado como reemplazante de leche para alimentar a terneros durante la etapa de crianza artificial. Libre de antibióticos. Contiene 21% de Proteína y 10% grasa.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory: 'Terneros',
    presentation: 'Bolsa 25 kg',
    administration:
      'Calentar agua hasta una temperatura de 45/50°C y mezclar con el producto. Dilución 9 partes de agua más 1 de producto (10%) o según criterio profesional. Para su preparación utilizar agua apta para consumo humano.',
    dosage:
      'Suministrar 2 tomas diarias de 2 litros cada una, a la misma hora y temperatura. Temperatura de suministro 37/38°C. Se debe suministrar alimento balanceado con 18% de Proteína (materia tal cual) de excelente calidad.',
    image: '/img/products/nutricion/cooperacion cl-sustituto-lacteo.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 13,
    sku: '16-013003',
    slug: 'rehidratante-para-terneros',
    name: 'Rehidratante para terneros',
    description: 'Suplemento mineral con aporte de electrolitos para rehidratación de terneros.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory: 'Bovinos hasta 6 meses de edad.',
    presentation: 'Frasco 1 kg',
    administration:
      'Disolver una (1) medida colmada (33g) en un (1) litro de agua a 38 °C. Se puede administrar directamente en balde, en mamadera o por medio de sondas nasoesofagica para los casos en que exista adinamia o falta de apetito.',
    dosage:
      'Suministrar el suplemento mineral en 4 tomas diarias de 1 litro cada 6 u 8hs, durante 2 días. De ser imposible este manejo, reducir a 2 tomas diarias de 2 lts cada 12hs durante dos días.',
    image: '/img/products/nutricion/suplemento-mineral.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 14,
    sku: '16-006105',
    slug: 'arranque-terneros',
    name: 'Arranque Terneros',
    description:
      'Alimento balanceado completo con 18% de proteinas para ser utilizado en la alimentación durante la etapa de crianza artificial o Creep Feeding.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory: 'Terneros en crianza artificial. Creep Feeding.',
    presentation: 'Bolsa 25 kg',
    administration: 'A partir de la primer semana de vida hasta los 90 kg de peso vivo',
    dosage: 'Suministración a discreción.',
    image: '/img/products/nutricion/cooperacion-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 15,
    sku: '16-017111',
    slug: 'concentrado-bovinos-iniciador-40',
    name: 'Concentrado Bovinos Iniciador 40%',
    description:
      'Suplemento alimenticio concentrado proteico con medicamento pelleteado, para ser utilizado en la preparación de raciones para la alimentación y engorde de bovinos y/o recrías.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Indicado para utilizar en animales de 60 a 110 kg de PV, tanto en terneros de cría como de tambo, respetando las dosis sugeridas.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Para la preparación de la ración suministrar combinado con granos de cereal (maíz, sorgo, trigo, etc). De acuerdo a la categoría a suplementar las dosis sugeridas van desde el 10 al 30% de la ración o según criterio profesional. Puede ser utilizado en la preparación de raciones con Mixer. En cualquier sistema de alimentación respetar un tiempo de acostumbramiento a la dieta de 15 días como mínimo.',
    dosage:
      'Terneros de Cría a engorde: 60 a 80 kg de peso vivo. Utilizar al 30% en la ración. Terneros de 80 a 110 kg peso vivo: utilizar al 25% de la ración. Recría Tambo: Recría 1: Utilizar al 25% de la ración - Recría 2: Utilizar al 20% de la ración - Recría 3: utilizar al 15% de la ración.',
    image: '/img/products/nutricion/cooperacion-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 16,
    sku: '16-017110',
    slug: 'concentrado-bovinos-terminador-40',
    name: 'Concentrado Bovinos Terminador 40%',
    description:
      'Concentrado proteico pelleteado desarrollado para balancear dietas en vacas lecheras y engordes de bovinos. Presenta macro - micro minerales y complejo vitamínicos.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Animales en engorde (novillos o vaquillonas) utilizar desde los 110 kg de peso vivo hasta la terminación. En vaca lechera durante toda la lactación. Desde que ingresa al tambo luego del parto hasta que sale al rodeo de vaca seca.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Para la preparación de la ración suministrar combinado con granos de cereal (maíz, sorgo, trigo, etc). De acuerdo a la categoría a suplementar las dosis sugeridas van desde el 10 al 30% de la ración o según criterio profesional. Puede ser utilizado en la preparación de raciones con Mixer. En cualquier sistema de alimentación respetar un tiempo de acostumbramiento a la dieta de 15 días como mínimo.',
    dosage:
      'Engordes: 110 a 150 kg de peso vivo. Utilizar al 20 % en la ración. Engorde de 150 a 200 kg peso vivo: utilizar al 15 % de la ración. Engorde de a 200 kg a 300 kg peso vivo: utilizar al 10 % de la ración. Lechera 13%: Utilizar al 15% de la ración - Lechera 25% : Utilizar al 25% de la ración.',
    image: '/img/products/nutricion/cooperacion-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 17,
    sku: '16-017008',
    slug: 'concentrado-bovinos-iniciador-45',
    name: 'Concentrado Bovinos Iniciador 45%',
    description:
      'Suplemento alimenticio concentrado proteico con medicamento pelleteado, para ser utilizado en la preparación de raciones para la alimentación y engorde de bovinos y/o recrías en tambos.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Indicado para utilizar en animales de 60 a 110 kg de peso vivo, tanto en terneros de cría como de tambo, respetando las dosis sugeridas.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Para la preparación de la ración suministrar combinado con granos de cereal (maíz, sorgo, trigo, etc). De acuerdo a la categoría a suplementar las dosis sugeridas van desde el 10 al 30% de la ración o según criterio profesional. Puede ser utilizado en la preparación de raciones con Mixer. En cualquier sistema de alimentación respetar un tiempo de acostumbramiento a la dieta de 15 días como mínimo.',
    dosage:
      'Terneros de Cría a engorde: 60 a 80 kg de peso vivo. Utilizar al 20% en la ración. Terneros de 80 a 110 kg peso vivo: utilizar al 18% de la ración. Recría Tambo: Recría 1: Utilizar al 20% de la ración - Recría 2: Utilizar al 18% de la ración - Recría 3: Utilizar al 10% de la ración.',
    image: '/img/products/nutricion/cooperacion-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 18,
    sku: '16-017106',
    slug: 'concentrado-bovinos-terminador-45',
    name: 'Concentrado Bovinos Terminador 45%',
    description:
      'Concentrado proteico pelleteado desarrollado para balancear dietas en vacas lecheras y engordes de bovinos. Presenta macro - micro minerales y complejo vitamínicos.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de crianza de terneros',
    iconCategory: '/img/icons/icon_nutricion_prod_terneros.svg',
    secondCategory:
      'Animales en engorde (novillos o vaquillonas) utilizar desde los 110 kg de peso vivo hasta la terminación. En vaca lechera durante toda la lactación. Desde que ingresa al tambo luego del parto hasta que sale al rodeo de vaca seca.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Para la preparación de la ración suministrar combinado con granos de cereal (maíz, sorgo, trigo, etc). De acuerdo a la categoría a suplementar las dosis sugeridas van desde el 10 al 30% de la ración o según criterio profesional. Puede ser utilizado en la preparación de raciones con Mixer. En cualquier sistema de alimentación respetar un tiempo de acostumbramiento a la dieta de 15 días como mínimo.',
    dosage:
      'Engordes: 110 a 150 kg de peso vivo. Utilizar al 15 % en la ración. Engorde de 150 a 200 kg peso vivo: utilizar al 10% de la ración. Engorde de a 200 kg a 300 kg peso vivo: utilizar al 8% de la ración. Lechera 13%: Utilizar al 15% de la ración - Lechera 16%: Utilizar al 22% de la ración.',
    image: '/img/products/nutricion/cooperacion-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 19,
    sku: '16-023104',
    slug: 'af-mix-abq-feed-lot-ad',
    name: 'AF Mix ABQ Feed Lot AD',
    description:
      'Complemento vitamínico mineral para ser suministrado a bovinos que se encuentrean iniciando su etapa de ADAPTACIÓN en engorde a corral. Sastifaciendo sus requerimientos de minerales y vitaminas en cantidad y calidad. Incluye Monensina como ionóforo para mejorar la conversión y/o evitar cuadros de acidosis o timpanismo.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de carne',
    iconCategory: '/img/icons/icon_nutricion_prod_carne.svg',
    secondCategory:
      'Utilizado en animales que van desde el inicio de la recría (220 kg de peso Vivo) hasta fin de la terminación (340/460). Otras Categorías: Toros.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Permite ser utilizado como ingrediente de la ración o puede ser administrado ad libitum en bateias.',
    dosage:
      'Utilizar al 2% sobre la MS (materia seca) de la ración. Autoconsumo 100-150g. Diarios por animal. SE DEBE UTILIZAR EN LOS PRIMEROS 21 DÍAS DE ENCIERRE.',
    image: '/img/products/nutricion/af-mix-abq-feed-lot.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 20,
    sku: '16-023105',
    slug: 'af-mix-abq-feed-lot',
    name: 'AF Mix ABQ Feed Lot',
    description:
      'Suplemento mineral indicado para ser suministrado a bovinos que se encuentran en su etapa de recría o terminación a corral. Puede usarse en animales que reciben altas suplementaciones a campo. Satisfaciendo sus requerimientos de minerales en cantidad y calidad. Incluye Monensina como ionóforo para mejorar la conversión y/o evitar problemas de acidosis.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de carne',
    iconCategory: '/img/icons/icon_nutricion_prod_carne.svg',
    secondCategory:
      'Utilizado en animales que van desde el inicio de la recría (220 kg de peso vivo) hasta fin de la terminación (340/460). Otras Categorías: Toros.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Permite ser utilizado como ingrediente de la ración o puede ser administrado ad libitum en bateias.',
    dosage:
      'Utilizar al 2% sobre la MS (materia seca) de la ración. Autoconsumo 100-150g diarios por animal.',
    image: '/img/products/nutricion/af-mix-abq-feed-lot.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 21,
    sku: '16-023103',
    slug: 'af-mix-abq-feed-lot-ar',
    name: 'AF Mix ABQ Feed Lot AR',
    description:
      'Suplemento vitamínico mineral indicado para ser suministrado a bovinos que se encuentran en su etapa de recría o terminación a corral. Puede usarse en animales que reciben altas suplementaciones a campo. Satisfaciendo sus requerimientos de minerales y vitaminas en cantidad y calidad. Incluye Monensina como ionóforo para mejorar la conversión y/o evitar problemas de acidosis. Es el complemento ideal para animales en sistemas de produccion que buscan altos rendimientos en ganancia de peso y la eficiencia de conversión',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de carne',
    iconCategory: '/img/icons/icon_nutricion_prod_carne.svg',
    secondCategory:
      'Utilizado en animales que van desde el inicio de la recría (220 kg de peso Vivo) hasta fin de la terminación (340/460). Otras Categorías: Toros.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Permite ser utilizado como ingrediente de la ración o puede ser administrado ad libitum en bateas.',
    dosage:
      'Utilizar al 2% sobre la MS (materia seca) de la ración. Autoconsumo 100-150g diarios por animal.',
    image: '/img/products/nutricion/af-mix-abq-feed-lot.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 22,
    sku: '16-011010',
    slug: 'microconcentrados-engorde-novillo',
    name: 'Microconcentrados Engorde Novillo',
    description:
      'Suplemento mineral y vitamínico con monensina destinada a corregir deficiencias minerales, para ser utilizado en bovinos en producción bajo confinamiento a corral (Feed lots) o suplementación basada en granos y subproductos proteicos, sobre pasturas en porcentajes superiores al 1%.',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de carne',
    iconCategory: '/img/icons/icon_nutricion_prod_carne.svg',
    secondCategory: 'Bovinos en recría o terminación.',
    presentation: 'Bolsa 25 kg',
    administration:
      'Mezclado con la ración. Período de carencia: no posee periodo de prefaena tanto en ganado de carne como de leche.',
    dosage: '100g por novillo por día, homogéneamente mezclado en la ración.',
    image: '/img/products/nutricion/af-mix-produccion-de-carne.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
  {
    id: 23,
    sku: '16-011017',
    slug: 'microconcentrados-vaca-lechera',
    name: 'Microconcentrados Vaca Lechera',
    description:
      'Suplemento vitaminico mineral para ser utilizado en animales en producción (vacas lecheras).',
    generalCategory: 'nutricion',
    generalCategoryName: 'Nutrición',
    category: 'Sistema de producción de leche',
    iconCategory: '/img/icons/icon_nutricion_prod_leche.svg',
    secondCategory: 'Suplemento para vacas lecheras en producción.',
    presentation: 'Bolsa 25 kg',
    administration: 'Junto a la ración balanceada o incorporada al Mixer.',
    dosage: '100g por vaca por día.',
    image: '/img/products/nutricion/af-mix-produccion-de-leche-25kg.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
  },
];

export const productsSanidad: ProductItem[] = [
  {
    id: 25,
    sku: '15-07616-0',
    slug: 'derribante-sm',
    name: 'DERRIBANTE SM',
    description:
      'Antiparasitario externo garrapaticida para baño de inmersión. Control de garrapata común.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '5 Litros',
    formula: 'Cipermetrina 10% - Etion 40%',
    administration: 'Baño de inmersión.',
    dosage:
      'Pie de baño: 1 L/1000 L. Reposición: 1.5 L/1000 L. Refuerzo seco: 0.5 L por cada 1000 L que baje.',
    senasa: '15-105',
    image: '/img/products/sanidad/derribante-sm-5l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 26,
    sku: '15-06033-0',
    slug: 'derribante-inmersion',
    name: 'DERRIBANTE Inmersión',
    description:
      'Antiparasitario externo. Control de garrapata común, piojos chupadores y masticadores.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '4 Lts',
    formula: 'Amitraz 12,5%',
    administration: 'Baño de inmersión.',
    dosage:
      'Pie de baño: 4 L/2000 L + 20 kg estabilizante. Reposición: 4 L + 20 kg/1000 L. Refuerzo seco: 2 L/1000 L.',
    senasa: '1633',
    image: '/img/products/sanidad/derribante-inmersion-4l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Caninos',
  },
  {
    id: 27,
    sku: '15-06040-0',
    slug: 'derribante-pour-on',
    name: 'DERRIBANTE Pour On',
    description: 'Antiparasitario externo para control de moscas, miasis y ura en bovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '5 Lts',
    formula: 'Cipermetrina 4% - Imidacloprid 4% - Butóxido de Piperonilo 4%',
    administration: 'Pour on.',
    dosage:
      'Terneros 80–150 kg: 10 ml. Novillos/Vaquillonas 150–300 kg: 15 ml. Bovinos adultos según peso.',
    senasa: '13-007',
    image: '/img/products/sanidad/derribante-pour-on-5l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 28,
    sku: '15-07618-2',
    slug: 'derribante-takle',
    name: 'DERRIBANTE TAKLE',
    description:
      'Tratamiento de parasitosis externas e internas en bovinos. Garrapatas, piojos, mosca de los cuernos y helmintos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '5 Litros',
    formula: 'Fipronil 2% - Ivermectina 1%',
    administration: 'Pour on.',
    dosage:
      '1 ml/20 kg sobre la línea dorsal. Poder residual garrapatas: 20 días. Mosca de cuernos: 28 días.',
    senasa: '19-001',
    image: '/img/products/sanidad/derribante-takle.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 29,
    sku: '15-07583-0',
    slug: 'inandex-3-15',
    name: 'INANDEX 3,15',
    description:
      'Endectocida de amplio espectro para control de parásitos internos y externos en bovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Endectocida',
    iconSubcategory: '/img/icons/icon_sanidad_endectocidas.svg',
    secondCategory: '',
    presentation: '500 cm3',
    formula: 'Ivermectina 3,15%',
    administration: 'Inyectable subcutáneo.',
    dosage: '1 ml cada 50 kg p.v.',
    senasa: '08-224',
    image: '/img/products/sanidad/inandex-3,15.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 30,
    sku: '15-07610-0',
    slug: 'dorandex',
    name: 'Dorandex',
    description:
      'Endectocida para control simultáneo de parásitos internos y externos en bovinos y ovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Endectocida',
    iconSubcategory: '/img/icons/icon_sanidad_endectocidas.svg',
    secondCategory: '',
    presentation: '500 cm3',
    formula: 'Doramectina 1%',
    administration: 'Inyectable subcutáneo.',
    dosage: '1 ml/50 kg p.v.',
    senasa: '14-110',
    image: '/img/products/sanidad/dorandex-500ml.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos',
  },
  {
    id: 31,
    sku: '15-06042-2',
    slug: 'derribante-ixo-po',
    name: 'Derribante IXO PO',
    description: 'Garrapaticida pour-on autorizado en zona control y zona indemne.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '5 Lts',
    formula: 'Fluazurón 2,5%',
    administration: 'Pour on.',
    dosage: '10 ml cada 100 kg p.v., aplicando en dos franjas paralelas a la línea dorsal.',
    senasa: '14-008',
    image: '/img/products/sanidad/derribante-ixo-po-5l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 32,
    sku: '15-07617-0',
    slug: 'imidac',
    name: 'IMIDAC',
    description: 'Tratamiento y prevención de anaplasmosis, piroplasmosis y tristeza bovina.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_internos.svg',
    secondCategory: '',
    presentation: '100 ml',
    formula: 'Imidocarb 12% - Cianocobalamina 0,005%',
    administration: 'Inyectable.',
    dosage: '1 ml/100 kg p.v. — Anaplasmosis: 2.5 ml/100 kg p.v.',
    senasa: '15-158',
    image: '/img/products/sanidad/imidac.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Porcinos',
  },
  {
    id: 33,
    sku: '15-06003-2',
    slug: 'inandex-1',
    name: 'Inandex 1%',
    description: 'Tratamiento y control de parásitos internos y externos en bovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Endectocida',
    iconSubcategory: '/img/icons/icon_sanidad_endectocidas.svg',
    secondCategory: '',
    presentation: '500 cm3',
    formula: 'Ivermectina 1%',
    administration: 'Inyectable subcutáneo.',
    dosage: '1 ml/50 kg p.v.',
    senasa: '97279',
    image: '/img/products/sanidad/inandex-1.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 34,
    sku: '15-06011-0',
    slug: 'unicon',
    name: 'UNICLON',
    description:
      'Antiparasitario interno de amplio espectro contra nemátodes gastrointestinales y pulmonares.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_interno.svg',
    secondCategory: '',
    presentation: '5 Litros',
    formula: 'Oxfendazol 9,06%',
    administration: 'Oral e intrarruminal.',
    dosage: '1 ml/36 kg p.v.',
    senasa: '88024',
    image: '/img/products/sanidad/uniclon.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 35,
    sku: '15-07612-0',
    slug: 'cuotar-aca',
    name: 'CUOTAR ACA',
    description:
      'Antiparasitario interno de triple acción para control de nemátodes gastrointestinales.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_internos.svg',
    secondCategory: '',
    presentation: '500 cm3',
    formula: 'Ricobendazol 15%',
    administration: 'Inyección subcutánea.',
    dosage: '1 ml/40 kg p.v. — Para Ostertagia inhibida: 1 ml/20 kg p.v.',
    senasa: '02-102',
    image: '/img/products/sanidad/cuotar-500ml.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 36,
    sku: '15-07611-0',
    slug: 'optimisol',
    name: 'OPTIMISOL',
    description:
      'Antiparasitario interno para control de nemátodes gastrointestinales y pulmonares.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_internos.svg',
    secondCategory: '',
    presentation: '500 cm3',
    formula: 'Levamisol fosfato 22,3 g',
    administration: 'Inyección subcutánea o intramuscular.',
    dosage: '1 ml/30 kg p.v.',
    senasa: '10-185',
    image: '/img/products/sanidad/optimisol.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos',
  },
  {
    id: 37,
    sku: '15-07627-2',
    slug: 'oxicam-250',
    name: 'OXICAM x 250 ml',
    description: 'Antibiótico antiinflamatorio para bovinos, ovinos, porcinos y equinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: '250 ml',
    formula: 'Cada 100 ml contiene: Oxitetraciclina clorhidrato 20 g – Meloxicam 0.50 g',
    administration: 'Inyectable.',
    dosage: '1 ml/10 kg p.v. en bovinos. Ver detalle para cada especie.',
    senasa: '12/168',
    image: '/img/products/sanidad/oxicam.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos',
  },
  {
    id: 38,
    sku: '15-07557-0',
    slug: 'oxilong',
    name: 'OXILONG',
    description:
      'Antibiótico de amplio espectro y acción prolongada para bovinos, ovinos y porcinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: '250 ml',
    formula: 'Oxitetraciclina 20%',
    administration: 'Inyectable intramuscular.',
    dosage: '1 ml/10 kg p.v. Máx: Bovinos 20 ml, Porcinos 5 ml, Ovinos 5 ml.',
    senasa: '04-079',
    image: '/img/products/sanidad/oxilong.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos',
  },
  {
    id: 39,
    sku: '15-07568-0',
    slug: 'penitrepto-fen',
    name: 'PENITREPTO FEN',
    description:
      'Antimicrobiano de amplio espectro con agente antiinflamatorio, analgésico y antipirético.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: 'Caja (6 frascos)',
    formula: 'Penicilina – Estreptomicina – Diclofenac',
    administration: 'Intramuscular.',
    dosage: '1 ml/25 kg p.v.',
    senasa: '05-201',
    image: '/img/products/sanidad/penitrepto-fen.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos, Porcinos',
  },
  {
    id: 40,
    sku: '15-06010-2',
    slug: 'bermat-oral',
    name: 'Bermat Oral',
    description: 'Antibiótico de amplio espectro para diversas infecciones bacterianas.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: '1 L',
    formula: 'Enrofloxacina 10%',
    administration: 'Aplicación oral.',
    dosage: 'Según asesoramiento veterinario.',
    senasa: '94221',
    image: '/img/products/sanidad/bermat-1l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Caninos',
  },
  {
    id: 41,
    sku: '15-07564-0',
    slug: 'derribante-aerosol-plata',
    name: 'DERRIBANTE AEROSOL PLATA',
    description: 'Antiparasitario externo cicatrizante preventivo y curativo de miasis.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '400 cm3',
    formula: 'Cipermetrina 0,36% - DDVP 1,6% - Sulfadiazina Plata',
    administration: 'Externo.',
    dosage: 'Pulverizar a 15–20 cm durante 2–3 segundos sobre heridas limpias.',
    senasa: '10-132',
    image: '/img/products/sanidad/derribante-aerosol-plata.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos, Porcinos, Equinos, Caninos',
  },
  {
    id: 42,
    sku: '15-07600-0',
    slug: 'derribante-pomada-ta',
    name: 'DERRIBANTE POMADA TA',
    description: 'Antimiásico de acción residual. Preventivo y curativo para heridas y miasis.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: 'Lata 900 g',
    formula: 'Cipermetrina 0,8% - DDVP 2,5% - Cloruro de Benzalconio 0,2%',
    administration: 'Externo.',
    dosage: 'Cubrir completamente la herida. Una aplicación suele ser suficiente.',
    senasa: '10-140',
    image: '/img/products/sanidad/derribante-pomada-900ml.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos, Ovinos, Porcinos',
  },
  {
    id: 43,
    sku: '15-07620-0',
    slug: 'derribante-takle-1l',
    name: 'DERRIBANTE TAKLE 1L',
    description:
      'Tratamiento de parasitosis externas e internas. Garrapaticida para despacho de tropa.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '1 L',
    formula: 'Fipronil 2% - Ivermectina 1%',
    administration: 'Pour on.',
    dosage: '1 ml/20 kg p.v. Residual garrapatas: 20 días. Mosca de cuernos: 28 días.',
    senasa: '19-001',
    image: '/img/products/sanidad/derribante-takle-1l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 44,
    sku: '15-07623-2',
    slug: 'flumina',
    name: 'FLUMINA',
    description: 'Antiinflamatorio analgésico no esteroide para equinos, bovinos y caninos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: '100 ml',
    formula: 'Flunixin meglumine 50 mg',
    administration: 'Inyectable.',
    dosage:
      'Equinos: 1.1 mg/kg p.v. Bovinos: 0.44 ml/10 kg p.v. Caninos: 1.1–2 mg/kg p.v. según cuadro.',
    senasa: '99210',
    image: '/img/products/sanidad/flumina.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Equinos, Caninos',
  },
  {
    id: 45,
    sku: '15-07567-0',
    slug: 'milcosina',
    name: 'MILCOSINA',
    description: 'Eficaz contra infecciones respiratorias y oculares en bovinos y ovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antibiótico',
    iconSubcategory: '/img/icons/icon_sanidad_antibioticos.svg',
    secondCategory: '',
    presentation: '100 ml',
    formula: 'Tilmicosina 300 mg',
    administration: 'Inyectable subcutáneo.',
    dosage: 'Según indicación veterinaria.',
    senasa: '09-032',
    image: '/img/products/sanidad/milcosina.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves, Bovinos',
  },
  {
    id: 46,
    sku: '15-07609-0',
    slug: 'dorandex-ovinos',
    name: 'Dorandex Ovinos/Bovinos',
    description: 'Endectocida para control de parásitos internos y externos en bovinos y ovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Endectocida',
    iconSubcategory: '/img/icons/icon_sanidad_endectocidas.svg',
    secondCategory: '',
    presentation: '50 ml',
    formula: 'Doramectina 1%',
    administration: 'Inyectable subcutáneo.',
    dosage: '1 ml cada 50 kg p.v.',
    senasa: '14-110',
    image: '/img/products/sanidad/dorandex-50ml.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
  {
    id: 47,
    sku: '15-07628-2',
    slug: 'equinex-aca',
    name: 'EQUINEX ACA',
    description: 'Antiparasitario de amplio espectro para equinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_internos.svg',
    secondCategory: '',
    presentation: '10 g',
    formula: 'Ivermectina 12 mg – Praziquantel 150 mg',
    administration: 'Aplicación oral.',
    dosage: '1 g cada 60 kg p.v. Jeringa 10 g = 600 kg.',
    senasa: '10-143',
    image: '/img/products/sanidad/equinex-1-dosis.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Porcinos',
  },
  {
    id: 48,
    sku: '15-07629-2',
    slug: 'equinex-aca-3-dosis',
    name: 'EQUINEX ACA x 3 dosis',
    description:
      'Antiparasitario oral para equinos. Control de parásitos gastrointestinales, pulmonares, cestodes y cutáneos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármacos',
    subcategory: 'Antiparasitario interno',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_internos.svg',
    secondCategory: '',
    presentation: '30 g',
    formula: 'Ivermectina 12 mg – Praziquantel 150 mg',
    administration: 'Aplicación oral.',
    dosage: '1 g cada 60 kg p.v. Jeringa 10 g = 1800 kg.',
    senasa: '10-143',
    image: '/img/products/sanidad/equinex-3-dosis.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Porcinos',
  },
  {
    id: 49,
    sku: '15-06041-2',
    slug: 'derribante-pour-on-1lt',
    name: 'Derribante Pour On 1 lt',
    description:
      'Antiparasitario externo pour on para el control de mosca de los cuernos, mosca brava, miasis y ura en bovinos.',
    generalCategory: 'sanidad',
    generalCategoryName: 'Sanidad',
    category: 'Fármaco',
    subcategory: 'Antiparasitario externo',
    iconSubcategory: '/img/icons/icon_sanidad_antiparasitarios_externos.svg',
    secondCategory: '',
    presentation: '1 lt',
    formula: 'Cipermetrina 4% - Imidacloprid 4% - Butóxido de Piperonilo 4%',
    administration: 'Pour on.',
    dosage:
      'Terneros 80–150 kg: 10 ml. Novillos y vaquillonas 150–300 kg: 15 ml. Vacas y novillos pesados >350 kg: 20 ml. Toros: 40 ml.',
    senasa: '13-007',
    image: '/img/products/sanidad/derribante-pour-on-1l.webp',
    price: 0,
    sales: 0,
    date: '2025-01-01',
    especieAnimal: 'Aves',
  },
];

export const carouselNutricion: CarouselItem[] = [
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/products/nutricion/af-mix-adq-preparto-anionica.webp',
    productAlt: 'Producto Nutrición',
    title: 'Potenciá tu producción con la mejor nutrición.',
    description: 'Descubrí nuestros productos para llevar tu rendimiento al siguiente nivel.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/products/nutricion/ruter-15kg.webp',
    productAlt: 'Producto Nutrición',
    title: 'Potenciá tu producción con la mejor nutrición.',
    description: 'Descubrí nuestros productos para llevar tu rendimiento al siguiente nivel.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/products/nutricion/cooperacion-af.webp',
    productAlt: 'Producto Nutrición',
    title: 'Potenciá tu producción con la mejor nutrición.',
    description: 'Descubrí nuestros productos para llevar tu rendimiento al siguiente nivel.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
];

export const carouselSanidad: CarouselItem[] = [
  {
    backgroundImage: '/img/sections/sanidad/sanidad-carousel-bg-01.jpg',
    productImage: '/img/sections/sanidad/sanidad-carousel-producto-01.webp',
    productAlt: 'Producto Sanidad',
    title: 'Invertí en Sanidad, para un ganado más fuerte y rentable.',
    description: 'Descubrí nuestros productos y llevá tu rendimiento al siguiente nivel.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
  {
    backgroundImage: '/img/sections/sanidad/sanidad-carousel-bg-01.jpg',
    productImage: '/img/sections/sanidad/sanidad-carousel-producto-02.webp',
    productAlt: 'Producto Sanidad',
    title: 'Invertí en Sanidad, para un ganado más fuerte y rentable.',
    description: 'Descubrí nuestros productos y llevá tu rendimiento al siguiente nivel.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
];

export const servicesProduccion: ServicesProduccionItem[] = [
  {
    id: 'carne',
    title: 'Carne',
    img: '/img/sections/produccion/produccion-01.webp',
    href: '/produccion/carne',
  },
  {
    id: 'tambo',
    title: 'Tambo',
    img: '/img/sections/produccion/produccion-02.webp',
    href: '/produccion/tambo',
  },
  {
    id: 'proyecto-campo-ganadero',
    title: 'Proyecto Campo Ganadero',
    img: '/img/sections/produccion/produccion-03.webp',
    href: '/produccion/proyecto-campo-ganadero',
  },
];

export const alianzas: AlianzaItem[] = [
  {
    title: 'Frigorífico Los Aromos',
    img: '/img/sections/hacienda/alianza/logo-los-aromos.webp',
  },
  {
    title: 'Frigorífico Arrebeef',
    img: '/img/sections/hacienda/alianza/logo-arrebeef.svg',
  },
  {
    title: 'Frigorífico Friar',
    img: '/img/sections/hacienda/alianza/logo-friar.svg',
  },
  {
    title: 'Agroideas',
    img: '/img/sections/hacienda/alianza/logo-agroideas.webp',
  },
  {
    title: 'Frigorífico Fridevi',
    img: '/img/sections/hacienda/alianza/logo-fridevi.svg',
  },
  {
    title: 'Frigorífico Magret',
    img: '/img/sections/hacienda/alianza/logo-magret.svg',
  },
  {
    title: 'MAG',
    img: '/img/sections/hacienda/alianza/logo-mag.png',
  },
  {
    title: 'Alimentos Magros',
    img: '/img/sections/hacienda/alianza/logo-alimentos-magros.svg',
  },
];

export const identificacionItems: IdentificacionItem[] = [
  {
    id: 'invernada',
    title: 'Invernada',
    img: '/img/icons/icon-invernada.svg',
    text: 'Ofrecemos alternativas de producción y comercialización de recría con seguimiento técnico y trazabilidad desde el origen, impulsando animales de calidad para su terminación.',
  },
  {
    id: 'gordo',
    title: 'Gordo',
    img: '/img/icons/icon-gordo.svg',
    text: 'Producimos animales gordos de feedlot bajo protocolo ACA, con alto estándar sanitario, nutricional y de bienestar animal. Garantizando calidad y rinde al Mercado.',
  },
  {
    id: 'cria',
    title: 'Cría',
    img: '/img/icons/icon-cria.svg',
    text: 'Entendiendo que son la base estructural de la producción actual y futura. Consideramos que la obtención de datos y su comparación, les permitirá a los productores, técnicos y propietarios poder tomar decisiones con mucha mayor certeza y precisión. La puerta de entrada a un largo camino en la gestión del individuo y sus datos productivos.',
  },
  {
    id: 'carne',
    title: 'Carne',
    img: '/img/icons/icon-carne.svg',
    text: 'Nuestro sistema permite seguir cada lote en tiempo real y garantizar transparencia en toda la cadena. Trazabilidad completa, desde el origen hasta el consumidor.',
  },
];

export const remateTipos: RemateCategory[] = [
  { id: 'propios', name: 'Propios' },
  { id: 'terceros', name: 'De terceros' },
];

export const remateModalidades: RemateCategory[] = [
  { id: 'virtual', name: 'Virtual' },
  { id: 'presencial', name: 'Presencial' },
];

export const remates: RemateItem[] = [
  {
    id: 1,
    title: 'Remate Cooperativa la Ganadera de Ramirez',
    modalidad: 'Presencial',
    tipo: 'De terceros',
    date: '2025-11-20',
    time: '09.30 / 15:00',
    description:
      'Remate General de Hacienda en la Feria de Gral. Ramirez, Entre Ríos. Con destino a faena a partir de las 09:30 hs, Cría e Invernada a partir de las 15:00 hs. Invita La Ganadera.',
    image: 'img/sections/hacienda/remates/remate-gralramirez.webp',
    href: '',
  },
  {
    id: 2,
    title: 'Remate del Grupo de Hacienda Cooperativo',
    modalidad: 'Virtual',
    tipo: 'De terceros',
    date: '2025-12-05',
    time: '08:45',
    description:
      '51º remate por internet. 800 cabezas de invernada & cría. Invitan Cooperativa Espartillar, Cooperativa Puan, Cooperativa La Alianza y Cooperativa Agro Darregueira.',
    image: 'img/sections/hacienda/remates/remate-ghc.webp',
    href: 'https://www.ghc.com.ar',
  },
  {
    id: 3,
    title: 'Remate Televisado',
    modalidad: 'Virtual',
    tipo: 'De terceros',
    date: '2025-12-12',
    time: '10:00',
    description: 'Remate Televisado desde General Ramirez. Invita La Ganadera.',
    image: 'img/sections/hacienda/remates/remate-chacratv.webp',
    href: 'https://www.youtube.com/watch?v=6HpY1ta4bsk',
  },
];

export const magData: MagRow[] = [
  {
    categoria: 'NOVILLOS Esp.Joven + 430',
    maximo: 3420.0,
    minimo: 2750.0,
    promedio: 3228.102,
    promedioKgs: 489,
  },
  {
    categoria: 'NOVILLOS Regular h 430',
    maximo: 2700.0,
    minimo: 2300.0,
    promedio: 2407.852,
    promedioKgs: 472,
  },
  {
    categoria: 'NOVILLOS Regular + 430',
    maximo: 2800.0,
    minimo: 2800.0,
    promedio: 2753.304,
    promedioKgs: 454,
  },
  {
    categoria: 'NOVILLITOS Esp. h 390',
    maximo: 3450.0,
    minimo: 2700.0,
    promedio: 3289.397,
    promedioKgs: 350,
  },
  {
    categoria: 'NOVILLITOS Esp. + 390',
    maximo: 3300.0,
    minimo: 2400.0,
    promedio: 2815.149,
    promedioKgs: 436,
  },
  {
    categoria: 'NOVILLITOS Regular',
    maximo: 3300.0,
    minimo: 2700.0,
    promedio: 3031.399,
    promedioKgs: 356,
  },
  {
    categoria: 'VAQUILLONAS Esp. h 390',
    maximo: 3400.0,
    minimo: 1500.0,
    promedio: 3056.526,
    promedioKgs: 329,
  },
  {
    categoria: 'VAQUILLONAS Esp. + 390',
    maximo: 3120.0,
    minimo: 2050.0,
    promedio: 2852.394,
    promedioKgs: 437,
  },
  {
    categoria: 'VAQUILLONAS Regular',
    maximo: 2950.0,
    minimo: 2400.0,
    promedio: 2600.457,
    promedioKgs: 369,
  },
  {
    categoria: 'VACAS Esp.Joven h 430',
    maximo: 2500.0,
    minimo: 1800.0,
    promedio: 2040.789,
    promedioKgs: 406,
  },
  {
    categoria: 'VACAS Esp.Joven + 430',
    maximo: 2850.0,
    minimo: 1800.0,
    promedio: 2286.163,
    promedioKgs: 505,
  },
  {
    categoria: 'VACAS Regular',
    maximo: 2540.0,
    minimo: 1300.0,
    promedio: 2017.331,
    promedioKgs: 471,
  },
  {
    categoria: 'VACAS Conserva Buena',
    maximo: 2000.0,
    minimo: 1300.0,
    promedio: 1729.269,
    promedioKgs: 427,
  },
  {
    categoria: 'VACAS Conserva Inferior',
    maximo: 1700.0,
    minimo: 1700.0,
    promedio: 1690.981,
    promedioKgs: 355,
  },
  { categoria: 'TOROS Esp.', maximo: 2500.0, minimo: 1800.0, promedio: 2146.911, promedioKgs: 691 },
  {
    categoria: 'TOROS Regular',
    maximo: 2000.0,
    minimo: 1200.0,
    promedio: 1554.545,
    promedioKgs: 565,
  },
  {
    categoria: 'MEJ Esp. h 430',
    maximo: 3300.0,
    minimo: 2000.0,
    promedio: 2929.104,
    promedioKgs: 414,
  },
  { categoria: 'MEJ Regular', maximo: 2000.0, minimo: 2000.0, promedio: 2000.0, promedioKgs: 380 },
];

export const whatsappContacts: WhatsAppContact[] = [
  {
    section: 'hacienda',
    phone: '5491137987619',
    label: 'Rodrigo Miguez',
  },
  {
    section: 'nutricion',
    phone: '5493401418484',
    label: 'Alejandro Aghemo',
  },
  {
    section: 'produccion',
    phone: '5493401418484',
    label: 'Alejandro Aghemo',
  },
  {
    section: 'sanidad',
    phone: '5491166170733',
    label: 'Juan Ghirardi',
  },
];

export const terminosCondiciones = `
<h2>1. ALCANCE DEL SERVICIO</h2>

<p><strong>1.1</strong> ACA Ganadería proporciona servicios de asesoramiento y apoyo técnico en las áreas de nutrición animal, sanidad, hacienda y producción ganadera, facilitando el acceso de los usuarios a información, productos y servicios relacionados con la actividad ganadera.</p>

<p><strong>1.2</strong> Los servicios están dirigidos a productores ganaderos, cooperativas agropecuarias y sus asociados, promoviendo el desarrollo de la actividad ganadera y facilitando el contacto entre usuarios interesados en servicios y productos del sector.</p>

<p>La plataforma no garantiza la veracidad de la información publicada por terceros, conforme Ley 24.240 (Defensa del Consumidor). Se establece expresamente que la comunicación o el contacto facilitado debe ajustarse a las regulaciones de spam y comunicaciones comerciales no solicitadas, y que ACA Ganadería no es responsable de la veracidad de la comunicación e intercambio de información entre el usuario y terceros.</p>

<p><strong>1.3</strong> ACA Ganadería actúa como proveedor de servicios técnicos y asesoramiento, sin intervenir directamente en las operaciones comerciales que pudieran concretarse entre usuarios, excepto cuando actúe a través de sus Centros de Desarrollo Cooperativo.</p>

<p><strong>1.4</strong> Los servicios se rigen por la ley argentina.</p>

<p><strong>1.5</strong> ACA Ganadería realiza sus mejores esfuerzos, pero no garantiza resultados específicos de comercialización o idoneidad para propósitos particulares.</p>

<h2>2. DE LOS USUARIOS</h2>

<h3>2.1 Requisitos</h3>

<p>Los usuarios que realicen consultas por los formularios que presente el sitio en las diferentes secciones de la página deben ser mayores de edad con capacidad para contratar. Deben poseer los permisos, licencias o autorizaciones requeridas para la actividad ganadera que desarrollen. Los usuarios suspendidos o inhabilitados no pueden utilizar los servicios.</p>

<p>ACA Ganadería podrá requerir acreditación documental de identidad, de la capacidad y habilitaciones, conforme Ley 25.326 (Protección de Datos). El usuario asegura indemnidad por cualquier reclamo que surja de la falta de sus permisos o licencias, en el marco de la responsabilidad que asume en el entorno digital.</p>

<h3>2.2 Registro</h3>

<p>Los usuarios deben completar el registro con información personal o corporativa precisa y veraz. Los usuarios declaran que poseen autoridad suficiente y se comprometen a actualizar la información cuando sea necesario.</p>

<p>ACA Ganadería se reserva los derechos de solicitar documentación adicional, rechazar solicitudes de registro, cancelar registros previos sin explicación e informar datos de usuarios a autoridades competentes mediante solicitud apropiada. La falsedad en la información suministrada podrá acarrear consecuencias penales y/o civiles.</p>

<h3>2.3 Baja y/o suspensión</h3>

<p>ACA Ganadería se reserva la discreción de suspender o cancelar usuarios cuyos datos no puedan confirmarse, eliminando todas las consultas o publicaciones sin compensación.</p>

<p>ACA Ganadería puede cancelar registros, eliminar o editar publicaciones si infringen estos términos, la ley, la moralidad, el orden público, las buenas costumbres, los derechos de propiedad intelectual, protección de datos, derechos de privacidad, o si se detecta actividad fraudulenta o engañosa. La suspensión no genera derecho a indemnización.</p>

<h2>3. PRIVACIDAD DE LA INFORMACIÓN Y DATOS</h2>

<p>Los usuarios consienten al procesamiento y almacenamiento de datos personales en servidores seguros que cumplen con altos estándares de protección física y tecnológica. Consulte las Políticas de Privacidad para más detalles.</p>

<p>Bajo la Ley 25.326, ACA Ganadería actúa como Responsable de Base de Datos inscripto ante la AAIP, indicando los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición). En caso de un incidente de seguridad o data breach, ACA Ganadería notificará a los usuarios afectados según el protocolo establecido en la Política de Privacidad y la Ley 25.326.</p>

<h2>4. USO DEL SITIO</h2>

<p>Los usuarios se comprometen a usar el sitio según estos términos, la ley, la moralidad, las costumbres y el orden público. Los usuarios no deben realizar actividades ilícitas, fraude, infringir derechos de terceros o violar regulaciones de propiedad intelectual.</p>

<p>Los infractores enfrentan suspensión o cancelación de publicaciones o registros sin recurso o indemnización, además de acciones legales.</p>

<p>Cualquier uso indebido podrá ser denunciado penalmente conforme al Código Penal (fraude informático) y la Ley 11.723 (Propiedad Intelectual) para acciones asociadas a actividad ilícita o fraude en el entorno digital, tales como phishing, scraping no autorizado o inyección de código malicioso.</p>

<h2>5. SANCIONES</h2>

<p>ACA Ganadería puede desestimar consultas de usuarios que incumplan leyes o términos, fallen en compromisos, participen en conductas fraudulentas o engañosas, proporcionen información falsa, contraria a la moral y a las buenas costumbres, o si las publicaciones pudieran crear responsabilidad. Estas acciones podrían acarrear consecuencias civiles y penales de corresponder.</p>

<h2>6. CONSULTAS</h2>

<p>Los usuarios que realicen consultas de información sobre sus necesidades ganaderas deben proporcionar descripciones completas y suficientes de sus requerimientos. Las consultas pueden incluir textos, gráficos y fotografías que no violen estos términos. ACA Ganadería se reserva el derecho de editar o modificar el formato de la consulta.</p>

<h2>7. PROTECCIÓN DE PROPIEDAD INTELECTUAL</h2>

<p>ACA Ganadería respeta los derechos de propiedad intelectual de terceros y se reserva el derecho de tomar medidas necesarias para su protección, incluyendo la suspensión de consultas. Los usuarios aceptan que todos los elementos y servicios del sitio, incluyendo diseño, estructura, información, plataforma y materiales, están legalmente protegidos como propiedad intelectual o derechos industriales de ACA Ganadería o terceros.</p>

<h2>8. OBLIGACIONES DE LOS USUARIOS</h2>

<p>Los usuarios deben tener capacidad legal para solicitar servicios ganaderos y acceder a la información publicada.</p>

<h2>9. PROHIBICIONES</h2>

<p>Los usuarios no pueden realizar conductas de mala fe perjudicando a otros usuarios o a ACA Ganadería.</p>

<p>Al realizar consultas en los foros del sitio, queda expresamente prohibida la publicación de datos personales de terceros sin consentimiento, así como el uso de bots, crawlers o sistemas automatizados para acceder, recopilar o interactuar con el sitio.</p>

<h2>11. ALCANCE DE LA RESPONSABILIDAD DE ACA GANADERÍA</h2>

<h3>11.1 General</h3>

<p>Los usuarios aceptan que el uso del sitio es exclusivamente su responsabilidad. ACA Ganadería no asume responsabilidad por daños o pérdidas derivadas de fallas del sistema, servidor, errores de contenido, daños personales o materiales, interrupciones de transmisión, virus, errores o pérdidas de contenido, ni por la seguridad o privacidad del sitio.</p>

<p>ACA Ganadería no es responsable por daños directos, indirectos o imprevistos. Los usuarios asumen responsabilidad por el uso apropiado del sitio, evitando acciones que dañen sistemas o servicios, y se obligan a indemnizar a ACA Ganadería frente a reclamos de terceros.</p>

<h3>11.2 Del contenido</h3>

<p>ACA Ganadería no controla ni es responsable por artículos, mensajes o materiales enviados por los usuarios, ni garantiza su precisión, confiabilidad, autenticidad, legalidad o cumplimiento de derechos de propiedad intelectual.</p>

<h3>11.3 De los conflictos entre usuarios</h3>

<p>Los usuarios involucrados en reclamos o acciones legales contra otros usuarios eximen a ACA Ganadería y a sus asociados, entidades, directivos, empleados, agentes y representantes de toda responsabilidad.</p>

<p>ACA Ganadería podrá colaborar con autoridades judiciales proporcionando datos y promover el uso de mecanismos de resolución de conflictos en línea (ODR) o arbitraje digital como vía preferente antes de recurrir a la vía judicial ordinaria.</p>

<h3>11.4 De la relación entre ACA Ganadería y los usuarios</h3>

<p>Este acuerdo no crea asociación, mandato, franquicia ni relación laboral. La relación entre el usuario y el sitio es estrictamente de prestación de servicios digitales y no otorga al usuario ningún derecho sobre el software ni sobre la propiedad intelectual de la plataforma.</p>
`;

export const politicasPrivacidad = `
<h2>Información del Operador</h2>

<p>El sitio web de ACA Ganadería es operado por <strong>ASOCIACIÓN DE COOPERATIVAS ARGENTINAS COOP. LTDA.</strong>, ubicada en Av. Eduardo Madero 942, 7º Piso, Ciudad Autónoma de Buenos Aires (CABA).</p>

<p>La organización está registrada en el Registro de Bases de Datos bajo el número RL-2019-15178591-APN-DNPDP//AAIP. La inscripción ante la AAIP se encuentra vigente y se cumple con la Ley 25.326 sobre la obligación de informar domicilio y responsable.</p>

<h2>Recopilación de Datos y Consentimiento</h2>

<p>Los usuarios autorizan a ACA Ganadería a obtener y utilizar la información proporcionada para acceder al sitio web. El registro requiere que los usuarios proporcionen datos personales a fin de verificar que pueden realizar consultas y acceder a servicios ganaderos.</p>

<p>Los datos ingresados serán procesados, almacenados y utilizados, en primer lugar, para proporcionar servicios ganaderos a través del sitio web, facilitar la comunicación entre productores y especialistas y mejorar nuestros servicios.</p>

<h2>Uso de la Información</h2>

<p>Los datos personales respaldan las operaciones de servicios ganaderos, facilitan las conexiones entre usuarios, mejoran los servicios y permiten comunicaciones de marketing relacionadas con la actividad ganadera.</p>

<p>La plataforma utiliza cookies para rastrear el comportamiento de navegación y compilar estadísticas de uso. Esto permite mejorar la experiencia del usuario y personalizar los servicios ofrecidos.</p>

<h2>Cookies</h2>

<p>El sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio.</p>

<p>Utilizamos cookies para:</p>

<ul>
  <li>Mantener su sesión activa y recordar sus preferencias.</li>
  <li>Analizar el tráfico del sitio y comprender cómo los usuarios interactúan con el contenido.</li>
  <li>Mejorar el rendimiento y la funcionalidad del sitio.</li>
  <li>Personalizar el contenido según los intereses del usuario.</li>
</ul>

<p>Los usuarios pueden configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

<p>El uso de cookies se ajusta a la normativa de la AAIP y se ofrece un banner de aceptación conforme a buenas prácticas internacionales.</p>

<h2>Compartir Datos</h2>

<p>ACA Ganadería no informará datos personales a terceros, salvo que el usuario haya otorgado su consentimiento expreso. No obstante, los datos podrán transferirse entre entidades afiliadas con el fin de mejorar los servicios prestados.</p>

<p>Nos reservamos el derecho de compartir información con autoridades competentes cuando sea requerido por ley o cuando resulte necesario para proteger nuestros derechos legales.</p>

<h2>Derechos de los Usuarios</h2>

<p>Bajo la Ley 25.326 de Protección de Datos Personales, los usuarios pueden:</p>

<ul>
  <li>Corregir información inexacta o desactualizada.</li>
  <li>Eliminar sus datos personales cuando ya no sean necesarios para los fines para los que fueron recopilados.</li>
  <li>Revocar el consentimiento otorgado para el tratamiento de datos.</li>
</ul>

<p>Para ejercer estos derechos, los usuarios deberán contactar a ACA Ganadería por escrito, adjuntando documentación que acredite su identidad. Las solicitudes deberán incluir una copia firmada del Documento Nacional de Identidad.</p>

<h2>Seguridad de los Datos</h2>

<p>ACA Ganadería emplea medidas de seguridad técnicas, administrativas y físicas para proteger los datos personales contra accesos no autorizados, alteración, divulgación o destrucción.</p>

<p>Estas medidas incluyen:</p>

<ul>
  <li>Servidores seguros con altos estándares de protección física y tecnológica.</li>
  <li>Encriptación de datos sensibles durante la transmisión.</li>
  <li>Controles de acceso estrictos limitados a personal autorizado.</li>
  <li>Monitoreo regular de los sistemas para detectar vulnerabilidades.</li>
  <li>Políticas internas de confidencialidad para todos los empleados.</li>
</ul>

<p>Sin embargo, ningún sistema de transmisión por Internet o método de almacenamiento electrónico es completamente seguro. Si bien se realizan los máximos esfuerzos para proteger los datos personales, no se puede garantizar una seguridad absoluta.</p>

<h2>Retención de Datos</h2>

<p>ACA Ganadería conservará los datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, incluyendo el cumplimiento de obligaciones legales, contables o de reporte.</p>

<p>Cuando los datos ya no sean necesarios, serán eliminados de forma segura o anonimizados para evitar su asociación con usuarios específicos.</p>

<h2>Transferencias Internacionales</h2>

<p>En caso de que sea necesario transferir datos personales a países fuera de la República Argentina, ACA Ganadería garantizará que dichas transferencias cumplan con la legislación vigente y cuenten con garantías adecuadas para la protección de la privacidad de los usuarios.</p>

<h2>Menores de Edad</h2>

<p>Los servicios están dirigidos exclusivamente a personas mayores de 18 años. ACA Ganadería no recopila intencionalmente información personal de menores de edad.</p>

<p>Si se detectara la recopilación inadvertida de datos de un menor, se procederá a su eliminación inmediata y se realizará la denuncia correspondiente conforme a la Ley 26.061 de Protección Integral de los Derechos de Niños, Niñas y Adolescentes.</p>

<h2>Enlaces a Sitios de Terceros</h2>

<p>El sitio web puede contener enlaces a sitios de terceros. ACA Ganadería no es responsable de las prácticas de privacidad de dichos sitios externos.</p>

<p>Se recomienda a los usuarios revisar las políticas de privacidad de cualquier sitio de terceros que visiten. ACA Ganadería no asume responsabilidad por daños derivados del uso de sitios externos, conforme al Código Civil y Comercial.</p>

<h2>Modificaciones a la Política de Privacidad</h2>

<p>ACA Ganadería se reserva el derecho de modificar esta Política de Privacidad en cualquier momento y sin previo aviso. Las modificaciones serán efectivas desde su publicación en el sitio web.</p>

<p>Se recomienda a los usuarios revisar periódicamente esta política para mantenerse informados. El uso continuado del sitio tras la publicación de cambios implica la aceptación de los mismos. Las modificaciones sustanciales serán notificadas conforme a la Ley 25.326.</p>

<h2>Notificación de Cambios</h2>

<p>Ante cambios significativos en las prácticas de privacidad, los usuarios serán notificados mediante un aviso destacado en el sitio web o por correo electrónico, cuando corresponda.</p>

<h2>Contacto</h2>

<p>Si tiene preguntas, comentarios o inquietudes sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactarse con:</p>

<p>
<strong>ASOCIACIÓN DE COOPERATIVAS ARGENTINAS COOP. LTDA.</strong><br />
Av. Eduardo Madero 942, 7º Piso<br />
Ciudad Autónoma de Buenos Aires (CABA)<br />
República Argentina
</p>

<p>Se pondrá a disposición un correo electrónico específico para el ejercicio de los derechos ARCO y se referencia a la Agencia de Acceso a la Información Pública (AAIP) como autoridad de control: <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">www.argentina.gob.ar/aaip</a>.</p>
`;

export const informes: InformesItem[] = [
  {
    id: 1,
    title: 'Informe ACA Ganadería',
    date: '2025-11-26',
    image: '/img/sections/informes/informes-imagen-bg.jpg',
    href: 'https://youtube.com/shorts/7z_y6CeI8t4',
  },
  {
    id: 2,
    title: 'Informe ACA Ganadería',
    date: '2025-11-28',
    image: '/img/sections/informes/informes-imagen-bg.jpg',
    href: 'https://www.youtube.com/shorts/D_x0QP1junA',
  },
  {
    id: 3,
    title: 'Informe ACA Ganadería',
    date: '2025-12-03',
    image: '/img/sections/informes/informes-imagen-bg.jpg',
    href: 'https://www.youtube.com/shorts/7enUjgwGXbY',
  },
  {
    id: 4,
    title: 'Informe ACA Ganadería',
    date: '2025-12-11',
    image: '/img/sections/informes/informes-imagen-bg.jpg',
    href: 'https://youtu.be/idnLIM0HpQM',
  },
];

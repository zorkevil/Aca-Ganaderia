import type {
  HeroSlide,
  ServicesItem,
  NewsItem,
  SubserviceItem,
  ProductItem,
  CarouselItem,
} from './types';

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
    {
      icon: '/img/icons/icon-vacuna-antiaftosa.svg',
      title: 'Vacuna Antiaftosa',
    },
  ],
};

export const heroImageNutricion = '/img/sections/nutricion/nutricion-hero-bg.webp';
export const heroImageSanidad = '/img/sections/sanidad/sanidad-hero-bg.webp';
export const heroImageGracias = '/img/sections/contacto/contacto-hero-bg.webp';
export const heroImageNoticias = '/img/sections/noticias/noticias-hero-bg.webp';

export const categoriesNutricion = [
  { id: '1', name: 'Porcinos' },
  { id: '2', name: 'Sistema de crianza de terneros' },
  { id: '3', name: 'Sistema de producción de leche' },
  { id: '4', name: 'Sistema de producción de carne' },
  { id: '5', name: 'Sistema de producción industrial' },
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
    description: '',
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

export const carouselNutricion: CarouselItem[] = [
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/sections/nutricion/nutricion-carousel-producto-01.png',
    productAlt: 'Producto Nutrición',
    title: 'Mejorá tu ganado con la mejor nutrición.',
    description:
      'Producción sustentable, resultados reales. Encontrá todos nuestros productos en nuestra web y dónde conseguirlos.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/sections/nutricion/nutricion-carousel-producto-01.png',
    productAlt: 'Producto Nutrición',
    title: 'Mejorá tu ganado con la mejor nutrición.',
    description:
      'Producción sustentable, resultados reales. Encontrá todos nuestros productos en nuestra web y dónde conseguirlos.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
  {
    backgroundImage: '/img/sections/nutricion/nutricion-carousel-bg-01.jpg',
    productImage: '/img/sections/nutricion/nutricion-carousel-producto-01.png',
    productAlt: 'Producto Nutrición',
    title: 'Mejorá tu ganado con la mejor nutrición.',
    description:
      'Producción sustentable, resultados reales. Encontrá todos nuestros productos en nuestra web y dónde conseguirlos.',
    showButton: true,
    buttonLabel: 'Contacto',
    buttonUrl: '/contacto',
  },
];

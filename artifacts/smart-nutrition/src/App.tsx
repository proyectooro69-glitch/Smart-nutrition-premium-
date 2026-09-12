import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowLeft, ArrowUpRight, ChevronRight, CircleUserRound, Compass, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, X, Menu, BadgeCheck, FlaskConical, MapPin, Phone } from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const adrianPhoto = '/adrian-real.jpg';
const adrianRutina = '/adrian-rutina.jpg';
const adrianTrajeBeige = '/adrian-traje-beige.jpg';
const heroVideo = '/hero-batido.mp4';
const heroVideoPoster = '/hero-batido-poster.jpg';
const fotoMilitar = '/historia-militar.jpg';
const fotoCiencias = '/historia-ciencias.jpg';
const fotoHerbalife = '/historia-herbalife.jpg';
const testimonioReto = '/testimonio-reto5semanas.jpg';
const leafLogo = '/leaf-logo.jpg';
const productoProteina = '/producto-proteina.jpg';
const productoLiftoff = '/producto-liftoff.jpg';
const productoBatido = '/producto-batido.jpg';
const productoTe = '/producto-te.jpg';
const productoShakeDeportistas = '/producto-shake-deportistas.jpg';
const productoAloe = '/producto-aloe.jpg';
const productoBannerActivo = '/producto-banner-activo.jpg';
const productoKit = '/producto-kit.jpg';
const respaldoCofepris = '/respaldo-cofepris.jpg';
const respaldoNfs = '/respaldo-nfs.jpg';
const respaldoLab = '/respaldo-lab.jpg';
const marcaHerbalife = '/marca-herbalife.jpg';
const opportunityVideo = '/oportunidad-smart-nutrition.mp4';
const phone = '523329482640';
const generalWhatsAppMessage = 'Hola Adrian, vi tu página Smart Nutrition y quiero más información.';
const catalogueUrl = 'https://viewer.ipaper.io/herbalife-nutrition/catalogoherbalife2024/catalogoherbalife/?page=2';

function whatsappHref(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function Meta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} · Smart Nutrition`;
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', description);
    document.head.appendChild(meta);
  }, [description, title]);
  return null;
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/salud-y-bienestar', label: 'Salud y bienestar' },
    { href: '/ingresos-desde-casa', label: 'Ingresos desde casa' },
  ];
  return (
    <header className="relative z-40 border-b border-[#e3f0e8] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3" data-testid="link-brand">
          <img src={leafLogo} alt="Smart Nutrition" className="h-10 w-10 rounded-full object-cover border border-[#0d7a3f]/20" />
          <div className="leading-none">
            <p className="font-caps text-[10px] font-bold text-[#0d7a3f]">Smart Nutrition</p>
            <p className="mt-1 text-[10px] text-[#5b6b62]">Adrian · Guadalajara</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replaceAll(' ', '-')}`} className={`relative py-2 text-[11px] font-semibold uppercase tracking-[.13em] transition-colors hover:text-[#0d7a3f] ${location === link.href ? 'text-[#0d7a3f]' : 'text-[#3d4a42]'}`}>
              {link.label}
              {location === link.href && <span className="absolute inset-x-0 -bottom-[17px] mx-auto h-px bg-[#0d7a3f]" />}
            </Link>
          ))}
          <a href={whatsappHref('Hola Adrian, me gustaría conocer más sobre Smart Nutrition.')} target="_blank" rel="noreferrer" data-testid="link-nav-whatsapp" className="flex items-center gap-2 rounded-full bg-[#0d7a3f] px-4 py-2 text-[10px] font-bold uppercase tracking-[.13em] text-white transition-colors hover:bg-[#0a5f31]">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[#0d7a3f]/20 p-2 text-[#0d7a3f] md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} data-testid="button-mobile-menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#e3f0e8] px-5 pb-5 pt-3 md:hidden" aria-label="Navegación móvil">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${link.label.toLowerCase().replaceAll(' ', '-')}`} className="flex items-center justify-between border-b border-[#e3f0e8] py-4 text-sm text-[#16241c]">
              {link.label}<ChevronRight size={16} className="text-[#0d7a3f]" />
            </Link>
          ))}
          <a href={whatsappHref('Hola Adrian, me gustaría conocer más sobre Smart Nutrition.')} target="_blank" rel="noreferrer" data-testid="link-mobile-whatsapp" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0d7a3f] py-3 text-xs font-bold uppercase tracking-widest text-white">
            <MessageCircle size={15} /> Escribir por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#0a3d23]/20 bg-[#06301c]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src={leafLogo} alt="Smart Nutrition" className="h-9 w-9 rounded-full object-cover" />
            <p className="font-caps text-[11px] font-bold text-white">Smart Nutrition</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5b6b62]">Bernard Adrián Neyra Rivery · Asociado Independiente de Herbalife Nutrition. Una conversación clara sobre nutrición, bienestar y una posibilidad de construir algo propio.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#cfe4d8]">
          <p className="font-caps text-[10px] font-bold text-white">Contacto</p>
          <a href="https://maps.google.com/?q=Ignacio+Bernal+4286,+Rancho+Nuevo,+Guadalajara,+Jalisco" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-white" data-testid="link-footer-address"><MapPin size={16} className="shrink-0 text-[#3fbf7f]" /> Club Havana, Ignacio Bernal 4286, Rancho Nuevo, Guadalajara, Jalisco</a>
          <a href={whatsappHref('Hola Adrian, quiero comenzar una conversación.')} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold transition-colors hover:text-white" data-testid="link-footer-phone"><Phone size={16} className="shrink-0 text-[#3fbf7f]" /> +52 33 2948 2640</a>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#cfe4d8]">
          <p className="font-caps text-[10px] font-bold text-white">Explora</p>
          <Link href="/" data-testid="link-footer-inicio" className="transition-colors hover:text-white">Inicio</Link>
          <Link href="/salud-y-bienestar" data-testid="link-footer-salud" className="transition-colors hover:text-white">Salud y bienestar</Link>
          <Link href="/ingresos-desde-casa" data-testid="link-footer-ingresos" className="transition-colors hover:text-white">Ingresos desde casa</Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] border-t border-[#e3f0e8] px-5 py-5 text-[11px] leading-5 text-[#8fb09e] lg:px-8">
        La información de este sitio es introductoria y no sustituye la orientación de un profesional de la salud. Los productos Herbalife Nutrition no son medicamentos y no deben utilizarse para diagnosticar, tratar, curar o prevenir ninguna enfermedad.
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return <div className="app-shell grain"><Header />{children}<Footer /><a href={whatsappHref(generalWhatsAppMessage)} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp con Adrian" data-testid="link-floating-whatsapp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d7a3f] text-white shadow-[0_10px_30px_rgba(13,122,63,.35)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0a5f31] sm:bottom-7 sm:right-7"><MessageCircle size={24} /></a></div>;
}

function GoldButton({ href, externalHref, children, testId, secondary = false, message }: { href?: string; externalHref?: string; children: ReactNode; testId: string; secondary?: boolean; message?: string }) {
  const className = `group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] transition-all duration-300 hover:-translate-y-0.5 ${secondary ? 'border border-[#0d7a3f]/40 text-[#0d7a3f] hover:bg-[#0d7a3f]/5' : 'bg-[#0d7a3f] text-white shadow-[0_10px_28px_rgba(13,122,63,.2)] hover:bg-[#0a5f31]'}`;
  if (externalHref) return <a href={externalHref} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></a>;
  if (message) return <a href={whatsappHref(message)} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></a>;
  return <Link href={href ?? '/'} data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></Link>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#0d7a3f]"><span className="h-px w-8 bg-[#0d7a3f]" />{children}</div>;
}

function Home() {
  return (
    <Layout>
      <Meta title="Salud, bienestar y oportunidad" description="Conoce el acompañamiento de Adrian en Smart Nutrition: orientación clara sobre bienestar y una conversación transparente sobre la oportunidad independiente." />
      <main>
        <section className="relative isolate -mt-[1px] min-h-[560px] w-full overflow-hidden sm:min-h-[640px] lg:min-h-[760px]">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={heroVideoPoster} data-testid="video-hero-batido">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#052013] via-[#052013]/55 to-[#052013]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052013]/80 via-[#052013]/20 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1240px] items-end px-5 pb-14 pt-32 sm:pb-20 lg:px-8 lg:pt-40">
            <div className="animate-rise max-w-xl">
              <Eyebrow>Una conversación clara sobre nutrición</Eyebrow>
              <h1 className="max-w-lg font-display text-[clamp(2.6rem,6vw,5rem)] leading-[.98] tracking-[-.03em] text-white">Nutrición que se nota.<br /><em className="not-italic text-[#7be3a0]">Bienestar que se vive.</em></h1>
              <p className="mt-6 max-w-md text-base leading-7 text-[#dcefe4]">Soy Adrian, Asociado Independiente de Herbalife Nutrition en Guadalajara. Te acompaño a mejorar tu alimentación y bienestar, o a construir un ingreso propio — sin presión, con información clara.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <GoldButton href="/salud-y-bienestar" testId="link-hero-salud">Quiero mejorar mi nutrición</GoldButton>
                <GoldButton href="/ingresos-desde-casa" testId="link-hero-ingresos" secondary>Quiero generar ingresos</GoldButton>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-[#dcefe4]"><ShieldCheck size={18} className="text-[#7be3a0]" /> Información clara. Decisiones tuyas.</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_.85fr]">
            <div>
              <Eyebrow>Bernard Adrián Neyra Rivery</Eyebrow>
              <h2 className="max-w-lg font-display text-3xl leading-tight text-[#16241c] sm:text-4xl">La persona detrás de <em className="not-italic text-[#0d7a3f]">Smart Nutrition.</em></h2>
              <div className="mt-6 max-w-md space-y-4 text-justify text-sm leading-6 text-[#4b5b52]">
                <p className="font-display text-lg italic text-[#0d7a3f]">De buscar una solución para mí a descubrir una nueva forma de vivir.</p>
                <p>Antes de conocer Herbalife®, mi relación con la alimentación no era la mejor. Tenía malos hábitos alimenticios y poco conocimiento sobre la importancia de una nutrición adecuada. Vivía con obesidad, cansancio y falta de energía durante buena parte del día.</p>
                <p>Soy Ingeniero en Aeronáutica y profesor, una formación que siempre me ha llevado a buscar respuestas, entender cómo funcionan las cosas y, sobre todo, encontrar maneras de mejorar.</p>
                <p>Mi historia con Herbalife comenzó en México, cuando conocí un Club de Nutrición. Allí me realizaron una evaluación física que mostró que varios de mis parámetros corporales no se encontraban dentro de los rangos que yo esperaba.</p>
                <p>Fue entonces cuando decidí probar una nueva forma de complementar mi alimentación. Comencé a consumir los productos de nutrición y, durante los primeros 21 días, experimenté un cambio que para mí fue muy significativo: bajé 6 kilos y empecé a sentirme mejor, con una mejor digestión y más energía para mis actividades diarias.</p>
                <p>Ese resultado despertó en mí algo más importante que el cambio físico: el interés por aprender. Comencé a conocer más sobre nutrición, bienestar y sobre la posibilidad de ayudar a otras personas a transformar sus propios hábitos. Y entonces descubrí que había mucho más...</p>
                <p>Al conocer el modelo de negocio, descubrí una oportunidad que iba mucho más allá de consumir productos. Me atrajo especialmente la posibilidad de construir un negocio a largo plazo, desarrollar un equipo, ayudar a más personas y generar ingresos de diferentes maneras dentro de la compañía. También descubrí algo que para mí tiene un enorme valor: la libertad de construir mi propia actividad y administrar mi tiempo.</p>
                <p>Hoy, además de continuar desarrollando mi proyecto, genero ingresos a través de varias de las formas que contempla el modelo de negocio de Herbalife® y sigo trabajando para alcanzar nuevas metas.</p>
                <p>Para mí, Smart Nutrition representa precisamente eso: nutrición, aprendizaje, acompañamiento y una oportunidad para crecer. Mi objetivo ahora es seguir ayudando a más personas, desarrollar nuevos líderes y continuar avanzando hacia nuestro próximo gran objetivo: Nivel de Equipo del Presidente.</p>
                <p className="font-display text-lg italic text-[#0d7a3f]">Esta es mi historia. Y quizás el próximo capítulo pueda comenzar contigo.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#e3f0e8] shadow-[0_20px_50px_rgba(6,48,28,.08)] lg:sticky lg:top-24">
              <img src={adrianTrajeBeige} alt="Bernard Adrián Neyra Rivery, Asociado Independiente de Herbalife Nutrition" className="h-[460px] w-full object-cover object-top sm:h-[560px]" data-testid="img-adrian-hero" />
            </div>
          </div>
        </section>

        <section className="border-y border-[#e3f0e8] bg-[#f6fbf8]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-xl"><Eyebrow>Su historia</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Un camino <em className="not-italic text-[#0d7a3f]">poco común.</em></h2></div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <TimelineCard image={fotoMilitar} step="01" title="Militar" text="Su formación comenzó en las fuerzas armadas, en Cuba." />
              <TimelineCard image={fotoCiencias} step="02" title="Doctor en Ciencias" text="Continuó su desarrollo profesional en el ámbito científico, en China." />
              <TimelineCard image={fotoHerbalife} step="03" title="Herbalife Nutrition" text="Hoy es Asociado Independiente de Herbalife Nutrition en Guadalajara." />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-xl"><Eyebrow>Respaldo y calidad</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Tu confianza es lo<br /><em className="not-italic text-[#0d7a3f]">más importante.</em></h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TrustCard image={respaldoNfs} icon={<BadgeCheck size={20} />} title="Certificación NSF" text="Nuestros productos están certificados por la Fundación Nacional para la Ciencia (NSF), que avala el cumplimiento de estrictos controles de calidad." />
            <TrustCard image={respaldoCofepris} icon={<ShieldCheck size={20} />} title="Aprobado por COFEPRIS y FDA" text="Los ingredientes de nuestros productos están aprobados por la Comisión Federal para la Protección contra Riesgos Sanitarios y la FDA de Estados Unidos." />
            <TrustCard image={respaldoLab} icon={<FlaskConical size={20} />} title="Respaldo científico" text="Nuestra fórmula insignia está respaldada por el Consejo Consultor de Nutrición, conformado por expertos en nutrición, ciencia y salud." />
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e3f0e8]">
            <div className="relative">
              <img src={marcaHerbalife} alt="Identidad de marca Herbalife Nutrition" className="h-72 w-full object-cover sm:h-[30rem]" data-testid="img-marca-herbalife" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052013]/90 via-[#052013]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="font-caps text-[10px] font-bold text-[#7be3a0]">¿Y si tú también construyes algo así?</p>
                <h3 className="mt-2 max-w-lg font-display text-2xl leading-tight text-white sm:text-3xl">Este es el tipo de negocio que puedes construir con Herbalife Nutrition.</h3>
                <div className="mt-5"><GoldButton href="/ingresos-desde-casa" testId="link-marca-oportunidad">Conocer la oportunidad</GoldButton></div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-[#5b6b62]">Imagen de referencia de la identidad de marca global Herbalife Nutrition.</p>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-xl"><Eyebrow>Elige tu punto de partida</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Dos caminos.<br /><em className="not-italic text-[#0d7a3f]">Una charla honesta.</em></h2></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <PathwayCard number="01" icon={<HeartHandshake size={22} />} title="Salud y bienestar" text="Explora el catálogo interactivo de productos Herbalife Nutrition y conoce sus distintas categorías." href={catalogueUrl} external testId="card-pathway-salud" />
            <PathwayCard number="02" icon={<Compass size={22} />} title="Ingresos desde casa" text="Una introducción a la oportunidad independiente: qué implica, cómo se conversa y por qué la claridad importa." href="/ingresos-desde-casa" testId="card-pathway-ingresos" />
            <a href={whatsappHref(generalWhatsAppMessage)} target="_blank" rel="noreferrer" data-testid="card-pathway-whatsapp" className="group glass relative flex min-h-[265px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1"><div className="flex items-start justify-between"><span className="font-caps text-[10px] text-[#0d7a3f]">03</span><span className="text-[#0d7a3f]"><MessageCircle size={22} /></span></div><div><h3 className="font-display text-3xl text-[#16241c]">Mi WhatsApp</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#5b6b62]">Escríbeme directamente y cuéntame qué te gustaría conocer. Recibirás una respuesta personal.</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#0d7a3f]">Iniciar conversación <ArrowRightIcon /></span></div></a>
          </div>
        </section>

        <section className="border-y border-[#e3f0e8] bg-[#f6fbf8]">
          <div className="mx-auto px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-xl"><Eyebrow>Resultados reales</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Si funciona.<br /><em className="not-italic text-[#0d7a3f]">Si decides disciplinarte.</em></h2></div>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#e3f0e8] shadow-[0_20px_50px_rgba(0,0,0,.3)]">
                <img src={testimonioReto} alt="Reto de 5 semanas de Adrian: antes, durante y construcción actual" className="w-full object-cover" data-testid="img-testimonio-reto" />
              </div>
              <div className="glass rounded-[1.5rem] p-8">
                <p className="font-display text-2xl italic leading-snug text-[#16241c]">"Participé en el Reto de 5 Semanas de FitCamp Guadalajara y esto fue lo que logré con disciplina, entrenamiento y la nutrición Herbalife como base. No es magia, es constancia — y yo puedo acompañarte a empezar tu propio proceso."</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[.1em] text-[#0d7a3f]">Bernard Adrián Neyra Rivery</p>
                <div className="mt-7"><GoldButton message="Hola Adrian, vi tu transformación en el Reto de 5 Semanas y quiero empezar mi propio proceso." testId="link-testimonio-whatsapp">¿Quieres tu propio antes y después?</GoldButton></div>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start gap-4 rounded-[1.5rem] border border-dashed border-white/25 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg">
                <p className="font-caps text-[10px] font-bold text-[#0d7a3f]">Próximamente aquí</p>
                <p className="mt-2 text-sm leading-6 text-[#4b5b52]">Este espacio está reservado para más testimonios reales de clientes de Adrian, con su autorización. Si ya viviste un cambio con Smart Nutrition, cuéntanoslo.</p>
              </div>
              <GoldButton message="Hola Adrian, quiero compartir mi testimonio con Smart Nutrition." testId="link-testimonio-nuevo">Compartir mi testimonio</GoldButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mb-10 overflow-hidden rounded-[2rem] border border-[#e3f0e8]">
            <img src={productoBannerActivo} alt="Alimentación balanceada y estilo de vida activo" className="h-56 w-full object-cover object-top sm:h-80" data-testid="img-producto-banner-activo" />
          </div>
          <div className="max-w-xl"><Eyebrow>Nuestros productos</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Nutrición para cada<br /><em className="not-italic text-[#0d7a3f]">etapa de tu día.</em></h2><p className="mt-5 text-sm leading-6 text-[#5b6b62]">Explora las categorías y escríbeme para conocer disponibilidad, precio y la combinación ideal para tu objetivo.</p></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard image={productoBatido} title="Batidos y control de peso" text="Nutrición balanceada en pocas calorías, para reemplazar una comida sin dejar de nutrirte." message="Hola Adrian, quiero información sobre los batidos y control de peso." testId="card-producto-batidos" />
            <ProductCard image={productoProteina} title="Proteína y desarrollo muscular" text="Apoya la recuperación y el desarrollo muscular después de entrenar." message="Hola Adrian, quiero información sobre los productos de proteína." testId="card-producto-proteina" />
            <ProductCard image={productoLiftoff} title="Energía y rendimiento" text="Un impulso natural de energía para tu día o tu rutina de entrenamiento." message="Hola Adrian, quiero información sobre los productos de energía (Té, LiftOff, N-R-G)." testId="card-producto-energia" />
            <ProductCard image={productoTe} title="Té e hidratación" text="Una opción refrescante para acompañar tu día y mantenerte hidratado." message="Hola Adrian, quiero información sobre el té Herbalife." testId="card-producto-te" />
            <ProductCard image={productoShakeDeportistas} title="Shake proteico para deportistas" text="19g de proteína por porción, ideal para antes o después de entrenar." message="Hola Adrian, quiero información sobre el shake proteico para deportistas." testId="card-producto-deportistas" />
            <ProductCard image={productoAloe} title="Bienestar y cuidado personal" text="Apoya la digestión y el bienestar general desde adentro." message="Hola Adrian, quiero información sobre los productos de bienestar y cuidado personal." testId="card-producto-bienestar" />
          </div>
          <p className="mt-6 text-xs text-[#5b6b62]">Consulta precio y disponibilidad directamente por WhatsApp.</p>

          <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-[2rem] border border-[#e3f0e8] bg-white lg:grid-cols-2">
            <img src={productoKit} alt="Kit Herbalife: malteada, té N-R-G, mochila, cuchara y catálogo" className="h-64 w-full object-cover lg:h-full" data-testid="img-kit-herbalife" />
            <div className="p-8 lg:p-12">
              <Eyebrow>Kit de inicio</Eyebrow>
              <h3 className="font-display text-3xl leading-tight text-[#16241c] sm:text-4xl">Empieza tu transformación <em className="not-italic text-[#0d7a3f]">hoy.</em></h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#4b5b52]">Incluye malteada, té de guaraná N-R-G, catálogo, cuchara y credencial — todo lo que necesitas para dar el primer paso.</p>
              <div className="mt-7"><GoldButton message="Hola Adrian, quiero información sobre el Kit de inicio Herbalife." testId="link-kit-whatsapp">Preguntar por el kit</GoldButton></div>
            </div>
          </div>
        </section>


        <section className="border-y border-[#e3f0e8] bg-[#f6fbf8]">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e3f0e8] bg-white p-2 shadow-[0_20px_50px_rgba(6,48,28,.08)]">
              <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[1.6rem] bg-white sm:h-[500px]">
                <img src={adrianRutina} alt="Bernard Adrián Neyra Rivery" className="h-full w-full object-contain" data-testid="img-about-adrian" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-lg border border-[#0d7a3f]/20 bg-white/90 px-4 py-3 backdrop-blur"><p className="font-display text-xl italic text-[#0d7a3f]">La mejor versión<br />empieza hoy.</p></div>
            </div>
            <div><Eyebrow>Sobre Adrian</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Primero la persona.<br /><em className="not-italic text-[#0d7a3f]">Después la opción.</em></h2><p className="mt-6 max-w-lg text-base leading-7 text-[#4b5b52]">Soy Bernard Adrián Neyra Rivery, conocido como Adrian. Soy Asociado Independiente de Herbalife Nutrition en Guadalajara. Mi trabajo es ayudarte a entender mejor tus opciones de nutrición, resolver tus dudas sin rodeos y acompañarte en el proceso — ya sea que busques mejorar tu bienestar o conocer la oportunidad de negocio.</p><p className="mt-4 max-w-lg text-base leading-7 text-[#4b5b52]">Yo mismo vivo lo que ofrezco: llevo la nutrición Herbalife como parte de mi rutina diaria y de mi entrenamiento.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{['Atención personal', 'Orientación clara', 'Seguimiento cercano'].map((item) => <div key={item} className="border-l-2 border-[#0d7a3f] pl-3 text-xs font-semibold uppercase leading-5 tracking-[.08em] text-[#16241c]">{item}</div>)}</div><div className="mt-10"><GoldButton message="Hola Adrian, quiero conocerte y saber cómo puedes orientarme." testId="link-about-whatsapp">Hablar con Adrian</GoldButton></div></div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-xl"><Eyebrow>Preguntas frecuentes</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Dudas comunes,<br /><em className="not-italic text-[#0d7a3f]">respuestas claras.</em></h2></div>
          <div className="mt-10 divide-y divide-[#e3f0e8] border-y border-[#e3f0e8]">
            <FaqItem q="¿Los productos Herbalife son seguros?" a="Los productos están respaldados por certificaciones de calidad (NSF) y sus ingredientes están aprobados por COFEPRIS y la FDA. No son medicamentos, por lo que te recomiendo siempre consultar a un profesional de la salud si tienes alguna condición particular." />
            <FaqItem q="¿Cuánto cuesta empezar?" a="Depende del producto o kit que elijas. Escríbeme por WhatsApp y te doy información actualizada de precios y opciones." />
            <FaqItem q="¿En cuánto tiempo se notan resultados?" a="Varía según cada persona, su punto de partida y su constancia. Lo que sí puedo garantizarte es acompañamiento y seguimiento cercano durante todo el proceso." />
            <FaqItem q="¿Cómo hago mi pedido?" a="Escríbeme directamente por WhatsApp, platicamos qué buscas y coordinamos la entrega o el punto de recolección." />
            <FaqItem q="¿Necesito experiencia para ser distribuidor?" a="No. Te acompaño desde cero, explicándote cómo funciona todo el proceso." />
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 text-center lg:px-8 lg:py-32">
          <p className="font-caps text-[10px] text-[#5b6b62]">El siguiente paso no tiene que ser grande</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight text-[#16241c] sm:text-6xl">Solo tiene que ser <em className="not-italic text-[#0d7a3f]">claro.</em></h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#5b6b62]">Escríbeme y cuéntame qué estás buscando. Te responderé personalmente.</p>
          <div className="mt-8"><GoldButton message="Hola Adrian, quiero empezar una conversación sobre bienestar y oportunidad." testId="link-final-whatsapp">Escribir por WhatsApp</GoldButton></div>
        </section>
      </main>
    </Layout>
  );
}

function PathwayCard({ number, icon, title, text, href, external = false, testId }: { number: string; icon: ReactNode; title: string; text: string; href: string; external?: boolean; testId: string }) {
  const content = <><div className="flex items-start justify-between"><span className="font-caps text-[10px] text-[#0d7a3f]">{number}</span><span className="text-[#0d7a3f]">{icon}</span></div><div><h3 className="font-display text-3xl text-[#16241c]">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#5b6b62]">{text}</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#0d7a3f]">Conocer más <ArrowRightIcon /></span></div></>;
  const className = "group glass relative flex min-h-[265px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1";
  return external ? <a href={href} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{content}</a> : <Link href={href} data-testid={testId} className={className}>{content}</Link>;
}

function ProductCard({ image, title, text, message, testId }: { image: string; title: string; text: string; message: string; testId: string }) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noreferrer" data-testid={testId} className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-[#0d7a3f]/25 bg-[#eafbf1] shadow-[0_10px_30px_rgba(6,48,28,.07)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-48 items-center justify-center overflow-hidden bg-white p-3"><img src={image} alt={title} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold text-[#16241c]">{title}</h3>
        <p className="mt-2 flex-1 text-xs leading-5 text-[#3f5b4c]">{text}</p>
        <span className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-[#0d7a3f]">Preguntar por WhatsApp <ArrowUpRight size={13} /></span>
      </div>
    </a>
  );
}

function TrustCard({ image, icon, title, text }: { image: string; icon: ReactNode; title: string; text: string }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#0d7a3f]/25 bg-[#eafbf1] shadow-[0_10px_30px_rgba(6,48,28,.06)]">
      <div className="flex h-44 items-center justify-center overflow-hidden bg-white p-2"><img src={image} alt={title} className="h-full w-full object-contain" /></div>
      <div className="p-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d7a3f]/10 text-[#0d7a3f]">{icon}</div>
        <h3 className="mt-4 text-sm font-bold text-[#16241c]">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-[#3f5b4c]">{text}</p>
      </div>
    </div>
  );
}

function TimelineCard({ image, step, title, text }: { image: string; step: string; title: string; text: string }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#0d7a3f]/25 bg-[#f0faf4] shadow-[0_10px_30px_rgba(6,48,28,.06)]">
      <div className="flex h-64 items-center justify-center overflow-hidden bg-white p-2"><img src={image} alt={title} className="h-full w-full object-contain" /></div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-[#0d7a3f] px-3 py-1 font-caps text-[10px] text-white">{step}</span>
        <h3 className="mt-3 text-sm font-bold text-[#16241c]">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-[#3f5b4c]">{text}</p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 text-left" data-testid={`faq-${q.slice(0, 10)}`}>
        <span className="text-sm font-bold text-[#16241c]">{q}</span>
        <ChevronRight size={16} className={`shrink-0 text-[#0d7a3f] transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b6b62]">{a}</p>}
    </div>
  );
}

function ArrowRightIcon() { return <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />; }

function IncomePage() {
  return <Layout><Meta title="Ingresos desde casa" description="Conoce de forma transparente la oportunidad independiente que Adrian presenta desde Smart Nutrition." /><main>
    <PageIntro eyebrow="Oportunidad independiente" title={<>Construye algo propio,<br /><em className="not-italic text-[#0d7a3f]">con información real.</em></>} copy="La oportunidad se entiende mejor cuando se conversa sin adornos. Aquí tienes un primer contexto; el detalle llega en una charla personal." />
     <section className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-8 lg:pb-32"><div className="glass overflow-hidden rounded-[2rem] p-3 sm:p-5"><div className="overflow-hidden rounded-[1.5rem] border border-[#e3f0e8] bg-white"><video className="aspect-video w-full object-cover" controls preload="metadata" playsInline poster={adrianPhoto} data-testid="video-income-opportunity"><source src={opportunityVideo} type="video/mp4" />Tu navegador no soporta la reproducción de video.</video></div><div className="px-3 pb-3 pt-6 sm:px-4"><Eyebrow>Video de introducción</Eyebrow><h2 className="max-w-2xl font-display text-3xl leading-tight text-[#16241c] sm:text-4xl">Conoce la oportunidad desde una conversación directa.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b6b62]">Reproduce el video cuando quieras. Después, si te quedan preguntas, Adrian puede orientarte personalmente.</p></div></div></section>
    <section className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-8 lg:pb-32"><div className="grid gap-5 lg:grid-cols-3">{[['01', 'Conoce el modelo', 'Una introducción a la forma de trabajo independiente y a las responsabilidades que implica.'], ['02', 'Haz tus preguntas', 'No necesitas llegar con experiencia. La conversación empieza desde lo que tú quieres entender.'], ['03', 'Decide a tu ritmo', 'No hay una decisión que tomar en esta página. Primero conoce, después elige.']].map(([number, title, copy]) => <div key={number} className="border-t-2 border-[#0d7a3f] pt-5"><span className="font-caps text-[10px] text-[#0d7a3f]">{number}</span><h2 className="mt-10 font-display text-3xl text-[#16241c]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#5b6b62]">{copy}</p></div>)}</div></section>
    <section className="border-y border-[#e3f0e8] bg-[#f6fbf8]"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-28"><div><Eyebrow>Transparencia primero</Eyebrow><h2 className="max-w-lg font-display text-4xl leading-tight text-[#16241c] sm:text-5xl">Una oportunidad no es una promesa de <em className="not-italic text-[#0d7a3f]">resultados.</em></h2><p className="mt-6 max-w-lg text-base leading-7 text-[#4b5b52]">Los resultados dependen de muchos factores, incluyendo el esfuerzo, el tiempo y las habilidades de cada persona. Por eso prefiero explicarte el proceso y que tú valores si encaja contigo.</p></div><div className="glass rounded-2xl p-7"><Sparkles size={22} className="text-[#0d7a3f]" /><h3 className="mt-7 text-lg font-bold text-[#16241c]">¿Quieres conocer los detalles?</h3><p className="mt-3 text-sm leading-6 text-[#5b6b62]">Mándame un mensaje. Te contaré cómo es mi experiencia y resolveré tus dudas con calma.</p><div className="mt-7"><GoldButton message="Hola Adrian, quiero conocer más sobre cómo ser Asociado Independiente de Herbalife." testId="link-income-whatsapp">Conversar con Adrian</GoldButton></div></div></div></section>
    <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8"><Link href="/" data-testid="link-income-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#0d7a3f]"><ArrowLeft size={15} /> Volver al inicio</Link></section>
  </main></Layout>;
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28"><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-[-.03em] text-[#16241c]">{title}</h1><p className="mt-8 max-w-xl text-base leading-7 text-[#4b5b52]">{copy}</p></section>;
}

function WellnessPage() {
  return <Layout><Meta title="Salud y bienestar" description="Consulta el catálogo de productos y la orientación personal de Smart Nutrition." /><main>
    <PageIntro eyebrow="Catálogo curado" title={<>Bienestar con<br /><em className="not-italic text-[#0d7a3f]">contexto.</em></>} copy="Explora las categorías de producto y escríbeme directamente para conocer disponibilidad, precio y la combinación ideal para tu objetivo." />
    <section className="mx-auto max-w-[1240px] px-5 pb-10 lg:px-8">
      <a href={catalogueUrl} target="_blank" rel="noreferrer" data-testid="link-wellness-catalogue-top" className="group flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-[#0d7a3f]/25 bg-[#0d7a3f]/5 p-7 sm:flex-row sm:items-center">
        <div>
          <p className="font-caps text-[10px] font-bold text-[#0d7a3f]">Catálogo interactivo</p>
          <h2 className="mt-2 font-display text-2xl text-[#16241c]">Ábrelo ahora mismo, sin vueltas.</h2>
        </div>
        <span className="inline-flex items-center gap-3 rounded-full bg-[#0d7a3f] px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-white transition-all group-hover:-translate-y-0.5 group-hover:bg-[#0a5f31]">Ver catálogo completo<ArrowUpRight size={15} /></span>
      </a>
    </section>
    <section className="mx-auto max-w-[1240px] px-5 pb-10 lg:px-8">
      <div className="glass overflow-hidden rounded-[2rem] p-3 sm:p-5">
        <div className="overflow-hidden rounded-[1.5rem] border border-[#e3f0e8] bg-white">
          <video className="aspect-video w-full object-cover" controls preload="metadata" playsInline poster={adrianPhoto} data-testid="video-wellness-explainer"><source src={opportunityVideo} type="video/mp4" />Tu navegador no soporta la reproducción de video.</video>
        </div>
        <div className="px-3 pb-3 pt-6 sm:px-4">
          <Eyebrow>Video explicativo</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-[#16241c] sm:text-4xl">Todo sobre Herbalife Nutrition, explicado directo.</h2>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard image={productoBatido} title="Batidos y control de peso" text="Nutrición balanceada en pocas calorías, para reemplazar una comida sin dejar de nutrirte." message="Hola Adrian, quiero información sobre los batidos y control de peso." testId="card-wellness-batidos" />
        <ProductCard image={productoProteina} title="Proteína y desarrollo muscular" text="Apoya la recuperación y el desarrollo muscular después de entrenar." message="Hola Adrian, quiero información sobre los productos de proteína." testId="card-wellness-proteina" />
        <ProductCard image={productoLiftoff} title="Energía y rendimiento" text="Un impulso natural de energía para tu día o tu rutina de entrenamiento." message="Hola Adrian, quiero información sobre los productos de energía (Té, LiftOff, N-R-G)." testId="card-wellness-energia" />
        <ProductCard image={productoTe} title="Té e hidratación" text="Una opción refrescante para acompañar tu día y mantenerte hidratado." message="Hola Adrian, quiero información sobre el té Herbalife." testId="card-wellness-te" />
        <ProductCard image={productoShakeDeportistas} title="Shake proteico para deportistas" text="19g de proteína por porción, ideal para antes o después de entrenar." message="Hola Adrian, quiero información sobre el shake proteico para deportistas." testId="card-wellness-deportistas" />
        <ProductCard image={productoAloe} title="Bienestar y cuidado personal" text="Apoya la digestión y el bienestar general desde adentro." message="Hola Adrian, quiero información sobre los productos de bienestar y cuidado personal." testId="card-wellness-bienestar" />
      </div>
      <div className="mt-10 flex flex-wrap gap-3"><GoldButton externalHref={catalogueUrl} testId="link-wellness-catalogue">Ver catálogo completo</GoldButton><GoldButton message="Hola Adrian, quiero hablar sobre salud y bienestar." testId="link-wellness-whatsapp" secondary>Preguntar por WhatsApp</GoldButton></div>
    </section>
    <section className="border-y border-[#e3f0e8] bg-[#f6fbf8]"><div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8"><div className="max-w-2xl"><Eyebrow>Nota importante</Eyebrow><p className="text-sm leading-7 text-[#4b5b52]">La información de este sitio es introductoria y no sustituye la orientación de un profesional de la salud. Los productos Herbalife Nutrition no son medicamentos y no deben utilizarse para diagnosticar, tratar, curar o prevenir ninguna enfermedad.</p></div></div></section>
    <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8"><Link href="/" data-testid="link-wellness-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#0d7a3f]"><ArrowLeft size={15} /> Volver al inicio</Link></section>
  </main></Layout>;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  return <Layout><Meta title="Producto en revisión" description="Este producto aún no está disponible en el catálogo verificado de Smart Nutrition." /><main className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-36"><Link href="/salud-y-bienestar" data-testid="link-product-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#0d7a3f]"><ArrowLeft size={15} /> Volver al catálogo</Link><div className="mt-20 grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#0d7a3f]/30 bg-[#f6fbf8] text-[#0d7a3f]"><HeartHandshake size={42} strokeWidth={1.2} /></div><div><Eyebrow>Referencia {id ? `#${id}` : ''}</Eyebrow><h1 className="font-display text-5xl leading-tight text-[#16241c] sm:text-7xl">Producto aún<br /><em className="not-italic text-[#0d7a3f]">no publicado.</em></h1><p className="mt-7 max-w-xl text-base leading-7 text-[#4b5b52]">No quiero mostrarte información incompleta. Este producto todavía no forma parte del catálogo verificado de Smart Nutrition. Si tienes un nombre específico en mente, escríbeme y lo revisamos juntos.</p><div className="mt-9"><GoldButton message={`Hola Adrian, quiero consultar el producto ${id ?? ''}.`} testId="link-product-whatsapp">Consultar producto</GoldButton></div></div></div></main></Layout>;
}

function NotFound() {
  return <Layout><main className="mx-auto max-w-[1240px] px-5 py-32 lg:px-8"><CircleUserRound size={28} className="text-[#0d7a3f]" /><h1 className="mt-7 font-display text-6xl text-[#16241c]">Esta página<br /><em className="not-italic text-[#0d7a3f]">no está aquí.</em></h1><p className="mt-5 text-[#5b6b62]">Volvamos a una conversación útil.</p><div className="mt-8"><GoldButton href="/" testId="link-not-found-home">Volver al inicio</GoldButton></div></main></Layout>;
}

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Home} /><Route path="/ingresos-desde-casa" component={IncomePage} /><Route path="/salud-y-bienestar" component={WellnessPage} /><Route path="/producto/:id" component={ProductDetail} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;

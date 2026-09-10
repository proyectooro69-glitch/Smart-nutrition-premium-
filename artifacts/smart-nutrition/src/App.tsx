import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowLeft, ArrowUpRight, ChevronRight, CircleUserRound, Compass, HeartHandshake, Leaf, Menu, MessageCircle, ShieldCheck, Sparkles, X } from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const referenceImage = '/networker-reference.png';
const phone = '523329482640';
const generalWhatsAppMessage = 'Hola Adrian, estoy interesado en contactar contigo para conocer más sobre la oportunidad de negocio, así como sobre los productos de salud y bienestar de Herbalife Nutrition. Me gustaría recibir información.';
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
    { href: '/ingresos-desde-casa', label: 'Ingresos desde casa' },
    { href: '/salud-y-bienestar', label: 'Salud y bienestar' },
  ];
  return (
    <header className="relative z-40 border-b border-white/[.08] bg-[#0b1521]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3" data-testid="link-brand">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7a940]/70 bg-[#101f2f] text-[#e5b74d]">
            <Leaf size={19} strokeWidth={1.6} />
          </div>
          <div className="leading-none">
            <p className="font-caps text-[10px] font-semibold text-[#f1d795]">Smart Nutrition</p>
            <p className="mt-1 text-[10px] text-[#8491a0]">Adrian · Guadalajara</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replaceAll(' ', '-')}`} className={`relative py-2 text-[11px] font-semibold uppercase tracking-[.13em] transition-colors hover:text-[#e8bd58] ${location === link.href ? 'text-[#e8bd58]' : 'text-[#aab3bd]'}`}>
              {link.label}
              {location === link.href && <span className="absolute inset-x-0 -bottom-[17px] mx-auto h-px bg-[#e8bd58]" />}
            </Link>
          ))}
          <a href={whatsappHref('Hola Adrian, me gustaría conocer más sobre Smart Nutrition.')} target="_blank" rel="noreferrer" data-testid="link-nav-whatsapp" className="flex items-center gap-2 rounded-full border border-[#d7a940]/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#f1d795] transition-colors hover:bg-[#d7a940]/10">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/10 p-2 text-[#f1d795] md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} data-testid="button-mobile-menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/[.08] px-5 pb-5 pt-3 md:hidden" aria-label="Navegación móvil">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${link.label.toLowerCase().replaceAll(' ', '-')}`} className="flex items-center justify-between border-b border-white/[.07] py-4 text-sm text-[#d7dce0]">
              {link.label}<ChevronRight size={16} className="text-[#d7a940]" />
            </Link>
          ))}
          <a href={whatsappHref('Hola Adrian, me gustaría conocer más sobre Smart Nutrition.')} target="_blank" rel="noreferrer" data-testid="link-mobile-whatsapp" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#d7a940] py-3 text-xs font-bold uppercase tracking-widest text-[#111a22]">
            <MessageCircle size={15} /> Escribir por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[.08] bg-[#08111b]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-caps text-[11px] font-bold text-[#f1d795]">Smart Nutrition</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#86929d]">Una conversación clara sobre nutrición, bienestar y una posibilidad de construir algo propio.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#aeb7c0] sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" data-testid="link-footer-inicio" className="transition-colors hover:text-[#e8bd58]">Inicio</Link>
          <Link href="/ingresos-desde-casa" data-testid="link-footer-ingresos" className="transition-colors hover:text-[#e8bd58]">Ingresos desde casa</Link>
          <Link href="/salud-y-bienestar" data-testid="link-footer-salud" className="transition-colors hover:text-[#e8bd58]">Salud y bienestar</Link>
          <a href={whatsappHref('Hola Adrian, quiero comenzar una conversación.')} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp" className="font-semibold text-[#e8bd58]">Contactar a Adrian</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] border-t border-white/[.06] px-5 py-5 text-[11px] leading-5 text-[#697582] lg:px-8">
        La información de este sitio es introductoria y no sustituye la orientación de un profesional de la salud. Los productos Herbalife Nutrition no son medicamentos y no deben utilizarse para diagnosticar, tratar, curar o prevenir ninguna enfermedad.
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return <div className="app-shell grain"><Header />{children}<Footer /><a href={whatsappHref(generalWhatsAppMessage)} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp con Adrian" data-testid="link-floating-whatsapp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7a940]/70 bg-[#0d6b50] text-white shadow-[0_10px_30px_rgba(0,0,0,.35)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#117c5d] sm:bottom-7 sm:right-7"><MessageCircle size={24} /></a></div>;
}

function GoldButton({ href, externalHref, children, testId, secondary = false, message }: { href?: string; externalHref?: string; children: ReactNode; testId: string; secondary?: boolean; message?: string }) {
  const className = `group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] transition-all duration-300 hover:-translate-y-0.5 ${secondary ? 'border border-[#d7a940]/45 text-[#f1d795] hover:bg-[#d7a940]/10' : 'bg-[#d7a940] text-[#111a22] shadow-[0_10px_28px_rgba(215,169,64,.15)] hover:bg-[#ebc568]'}`;
  if (externalHref) return <a href={externalHref} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></a>;
  if (message) return <a href={whatsappHref(message)} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></a>;
  return <Link href={href ?? '/'} data-testid={testId} className={className}>{children}<ArrowUpRight size={15} /></Link>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#d7a940]"><span className="h-px w-8 bg-[#d7a940]" />{children}</div>;
}

function Home() {
  return (
    <Layout>
      <Meta title="Salud, bienestar y oportunidad" description="Conoce el acompañamiento de Adrian en Smart Nutrition: orientación clara sobre bienestar y una conversación transparente sobre la oportunidad independiente." />
      <main>
        <section className="relative isolate mx-auto min-h-[680px] max-w-[1240px] overflow-hidden px-5 pb-16 pt-14 lg:min-h-[700px] lg:px-8 lg:pt-20">
          <div className="pointer-events-none absolute -right-28 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-[#183c55]/30 blur-[80px]" />
          <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="animate-rise relative z-10 max-w-xl">
              <Eyebrow>Una conversación diferente</Eyebrow>
              <h1 className="max-w-lg font-display text-[clamp(3.3rem,7vw,6.6rem)] leading-[.92] tracking-[-.04em] text-[#f2ede0]">Tu bienestar,<br /><em className="text-[#e6b953]">con dirección.</em></h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#aab4bd]">Soy Adrian. Acompaño a personas que buscan entender mejor sus opciones de nutrición y conocer, sin rodeos, una forma independiente de emprender.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <GoldButton href="/salud-y-bienestar" testId="link-hero-salud">Explorar bienestar</GoldButton>
                <GoldButton href="/ingresos-desde-casa" testId="link-hero-ingresos" secondary>Conocer la oportunidad</GoldButton>
              </div>
              <div className="mt-12 flex items-center gap-3 text-xs text-[#768391]"><ShieldCheck size={18} className="text-[#d7a940]" /> Información clara. Decisiones tuyas.</div>
            </div>
            <div className="animate-rise-delay relative -mx-5 min-h-[460px] overflow-hidden sm:min-h-[560px] lg:-mr-20 lg:ml-0 lg:min-h-[610px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,64,88,.35),transparent_65%)]" />
              <img src={referenceImage} alt="Adrian, networker de Herbalife Nutrition" className="hero-image relative z-10 h-full w-full object-contain object-top mix-blend-screen" data-testid="img-networker-reference" />
              <div className="absolute bottom-12 left-8 z-20 hidden items-center gap-3 rounded-full border border-[#d7a940]/30 bg-[#0e1b28]/75 px-4 py-2 text-[10px] uppercase tracking-[.15em] text-[#f1d795] backdrop-blur sm:flex"><span className="h-2 w-2 rounded-full bg-[#d7a940] animate-pulse-soft" /> Acompañamiento personal</div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[.08] bg-[#0c1925]/70">
          <div className="mx-auto grid max-w-[1240px] divide-y divide-white/[.08] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
            {[['01', 'Escucha primero', 'Cada persona parte de un lugar distinto.'], ['02', 'Explica sin complicar', 'Lo importante se entiende desde el principio.'], ['03', 'Acompaña de cerca', 'La conversación continúa cuando tú lo decides.']].map(([num, title, copy]) => (
              <div key={num} className="flex gap-4 py-6 sm:px-7 sm:first:pl-0 sm:last:pr-0">
                <span className="font-caps text-[11px] text-[#d7a940]">{num}</span>
                <div><h2 className="text-sm font-bold text-[#e9e4d9]">{title}</h2><p className="mt-1 text-xs leading-5 text-[#8995a0]">{copy}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-xl"><Eyebrow>Elige tu punto de partida</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#f2ede0] sm:text-5xl">Dos caminos.<br /><em className="text-[#d7a940]">Una charla honesta.</em></h2></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <PathwayCard number="01" icon={<HeartHandshake size={22} />} title="Salud y bienestar" text="Explora el catálogo de productos Herbalife Nutrition y conoce sus distintas categorías." href={catalogueUrl} external testId="card-pathway-salud" />
            <PathwayCard number="02" icon={<Compass size={22} />} title="Ingresos desde casa" text="Una introducción a la oportunidad independiente: qué implica, cómo se conversa y por qué la claridad importa." href="/ingresos-desde-casa" testId="card-pathway-ingresos" />
            <a href={whatsappHref(generalWhatsAppMessage)} target="_blank" rel="noreferrer" data-testid="card-pathway-whatsapp" className="group glass relative flex min-h-[265px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1"><div className="flex items-start justify-between"><span className="font-caps text-[10px] text-[#d7a940]">03</span><span className="text-[#e5b84f]"><MessageCircle size={22} /></span></div><div><h3 className="font-display text-3xl text-[#f0ebdf]">Mi WhatsApp</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#929da7]">Escríbeme directamente y cuéntame qué te gustaría conocer. Recibirás una respuesta personal.</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#e5b84f]">Iniciar conversación <ArrowRightIcon /></span></div></a>
          </div>
        </section>

        <section className="border-y border-white/[.08] bg-[#0b1722]">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d7a940]/25 bg-[#101f2e] p-2">
              <img src={referenceImage} alt="Adrian, fundador de la conversación Smart Nutrition" className="h-[320px] w-full rounded-[1.6rem] object-cover object-[center_18%] opacity-85 sm:h-[390px]" data-testid="img-about-adrian" />
              <div className="absolute bottom-5 left-5 rounded-lg border border-[#d7a940]/25 bg-[#0b1722]/85 px-4 py-3 backdrop-blur"><p className="font-display text-xl italic text-[#f1d795]">La mejor versión<br />empieza hoy.</p></div>
            </div>
            <div><Eyebrow>Sobre Adrian</Eyebrow><h2 className="font-display text-4xl leading-tight text-[#f2ede0] sm:text-5xl">Primero la persona.<br /><em className="text-[#d7a940]">Después la opción.</em></h2><p className="mt-6 max-w-lg text-base leading-7 text-[#a4afb9]">Mi trabajo es ayudarte a encontrar información útil, hacer preguntas y tomar una decisión que tenga sentido para ti. Sin presión, sin promesas extraordinarias y con una conversación directa.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{['Atención personal', 'Orientación clara', 'Seguimiento cercano'].map((item) => <div key={item} className="border-l border-[#d7a940]/50 pl-3 text-xs font-semibold uppercase leading-5 tracking-[.08em] text-[#d9d5ca]">{item}</div>)}</div><div className="mt-10"><GoldButton message="Hola Adrian, quiero conocerte y saber cómo puedes orientarme." testId="link-about-whatsapp">Hablar con Adrian</GoldButton></div></div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 text-center lg:px-8 lg:py-32">
          <p className="font-caps text-[10px] text-[#8f9ba6]">El siguiente paso no tiene que ser grande</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight text-[#f2ede0] sm:text-6xl">Solo tiene que ser <em className="text-[#d7a940]">claro.</em></h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#929eaa]">Escríbeme y cuéntame qué estás buscando. Te responderé personalmente.</p>
          <div className="mt-8"><GoldButton message="Hola Adrian, quiero empezar una conversación sobre bienestar y oportunidad." testId="link-final-whatsapp">Escribir por WhatsApp</GoldButton></div>
        </section>
      </main>
    </Layout>
  );
}

function PathwayCard({ number, icon, title, text, href, external = false, testId }: { number: string; icon: ReactNode; title: string; text: string; href: string; external?: boolean; testId: string }) {
  const content = <><div className="flex items-start justify-between"><span className="font-caps text-[10px] text-[#d7a940]">{number}</span><span className="text-[#e5b84f]">{icon}</span></div><div><h3 className="font-display text-3xl text-[#f0ebdf]">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#929da7]">{text}</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#e5b84f]">Conocer más <ArrowRightIcon /></span></div></>;
  const className = "group glass relative flex min-h-[265px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1";
  return external ? <a href={href} target="_blank" rel="noreferrer" data-testid={testId} className={className}>{content}</a> : <Link href={href} data-testid={testId} className={className}>{content}</Link>;
}

function ArrowRightIcon() { return <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />; }

function IncomePage() {
  return <Layout><Meta title="Ingresos desde casa" description="Conoce de forma transparente la oportunidad independiente que Adrian presenta desde Smart Nutrition." /><main>
    <PageIntro eyebrow="Oportunidad independiente" title={<>Construye algo propio,<br /><em>con información real.</em></>} copy="La oportunidad se entiende mejor cuando se conversa sin adornos. Aquí tienes un primer contexto; el detalle llega en una charla personal." />
    <section className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-8 lg:pb-32"><div className="grid gap-5 lg:grid-cols-3">{[['01', 'Conoce el modelo', 'Una introducción a la forma de trabajo independiente y a las responsabilidades que implica.'], ['02', 'Haz tus preguntas', 'No necesitas llegar con experiencia. La conversación empieza desde lo que tú quieres entender.'], ['03', 'Decide a tu ritmo', 'No hay una decisión que tomar en esta página. Primero conoce, después elige.']].map(([number, title, copy]) => <div key={number} className="border-t border-[#d7a940]/45 pt-5"><span className="font-caps text-[10px] text-[#d7a940]">{number}</span><h2 className="mt-10 font-display text-3xl text-[#f0ebdf]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#929da7]">{copy}</p></div>)}</div></section>
    <section className="border-y border-white/[.08] bg-[#0b1722]"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-28"><div><Eyebrow>Transparencia primero</Eyebrow><h2 className="max-w-lg font-display text-4xl leading-tight text-[#f2ede0] sm:text-5xl">Una oportunidad no es una promesa de <em className="text-[#d7a940]">resultados.</em></h2><p className="mt-6 max-w-lg text-base leading-7 text-[#a4afb9]">Los resultados dependen de muchos factores, incluyendo el esfuerzo, el tiempo y las habilidades de cada persona. Por eso prefiero explicarte el proceso y que tú valores si encaja contigo.</p></div><div className="glass rounded-2xl p-7"><Sparkles size={22} className="text-[#d7a940]" /><h3 className="mt-7 text-lg font-bold text-[#eee9de]">¿Quieres conocer los detalles?</h3><p className="mt-3 text-sm leading-6 text-[#929da7]">Mándame un mensaje. Te contaré cómo es mi experiencia y resolveré tus dudas con calma.</p><div className="mt-7"><GoldButton message="Hola Adrian, quiero conocer la oportunidad independiente y hacerte unas preguntas." testId="link-income-whatsapp">Conversar con Adrian</GoldButton></div></div></div></section>
    <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8"><Link href="/" data-testid="link-income-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#d7a940]"><ArrowLeft size={15} /> Volver al inicio</Link></section>
  </main></Layout>;
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28"><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-4xl font-display text-[clamp(3rem,7vw,6rem)] leading-[.95] tracking-[-.04em] text-[#f2ede0]">{title}</h1><p className="mt-8 max-w-xl text-base leading-7 text-[#a4afb9]">{copy}</p></section>;
}

function WellnessPage() {
  return <Layout><Meta title="Salud y bienestar" description="Consulta el espacio de productos y orientación de Smart Nutrition. El catálogo se habilitará con información verificada." /><main>
    <PageIntro eyebrow="Catálogo curado" title={<>Bienestar con<br /><em>contexto.</em></>} copy="Prefiero compartir solo información que esté lista para ser revisada contigo. Por ahora, este catálogo permanece intencionalmente en pausa mientras confirmo los productos y sus detalles." />
     <section className="mx-auto max-w-[1240px] px-5 pb-24 lg:px-8 lg:pb-32"><div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16"><div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#d7a940]/20" /><div className="absolute -right-2 -top-10 h-48 w-48 rounded-full border border-[#d7a940]/10" /><div className="relative max-w-2xl"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7a940]/45 text-[#d7a940]"><Leaf size={21} /></div><p className="mt-8 font-caps text-[10px] font-bold text-[#d7a940]">Catálogo de referencia</p><h2 className="mt-3 font-display text-4xl text-[#f0ebdf] sm:text-5xl">Bienestar con<br /><em className="text-[#d7a940]">información clara.</em></h2><p className="mt-5 max-w-lg text-sm leading-6 text-[#9ca8b1]">Consulta el catálogo de referencia de Herbalife Nutrition y, si quieres orientación sobre un producto, escríbeme directamente.</p><div className="mt-8 flex flex-wrap gap-3"><GoldButton externalHref={catalogueUrl} testId="link-wellness-catalogue">Abrir catálogo</GoldButton><GoldButton message="Hola Adrian, quiero hablar sobre salud y bienestar." testId="link-wellness-whatsapp" secondary>Preguntar por WhatsApp</GoldButton></div></div></div></section>
    <section className="border-y border-white/[.08] bg-[#0b1722]"><div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8"><div className="max-w-2xl"><Eyebrow>Nota importante</Eyebrow><p className="text-sm leading-7 text-[#a4afb9]">La información de este sitio es introductoria y no sustituye la orientación de un profesional de la salud. Los productos Herbalife Nutrition no son medicamentos y no deben utilizarse para diagnosticar, tratar, curar o prevenir ninguna enfermedad.</p></div></div></section>
    <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8"><Link href="/" data-testid="link-wellness-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#d7a940]"><ArrowLeft size={15} /> Volver al inicio</Link></section>
  </main></Layout>;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  return <Layout><Meta title="Producto en revisión" description="Este producto aún no está disponible en el catálogo verificado de Smart Nutrition." /><main className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-36"><Link href="/salud-y-bienestar" data-testid="link-product-back" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#d7a940]"><ArrowLeft size={15} /> Volver al catálogo</Link><div className="mt-20 grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#d7a940]/25 bg-[#101f2e] text-[#d7a940]"><Leaf size={42} strokeWidth={1.2} /></div><div><Eyebrow>Referencia {id ? `#${id}` : ''}</Eyebrow><h1 className="font-display text-5xl leading-tight text-[#f0ebdf] sm:text-7xl">Producto aún<br /><em className="text-[#d7a940]">no publicado.</em></h1><p className="mt-7 max-w-xl text-base leading-7 text-[#a4afb9]">No quiero mostrarte información incompleta. Este producto todavía no forma parte del catálogo verificado de Smart Nutrition. Si tienes un nombre específico en mente, escríbeme y lo revisamos juntos.</p><div className="mt-9"><GoldButton message={`Hola Adrian, quiero consultar el producto ${id ?? ''}.`} testId="link-product-whatsapp">Consultar producto</GoldButton></div></div></div></main></Layout>;
}

function NotFound() {
  return <Layout><main className="mx-auto max-w-[1240px] px-5 py-32 lg:px-8"><CircleUserRound size={28} className="text-[#d7a940]" /><h1 className="mt-7 font-display text-6xl text-[#f0ebdf]">Esta página<br /><em className="text-[#d7a940]">no está aquí.</em></h1><p className="mt-5 text-[#9da8b1]">Volvamos a una conversación útil.</p><div className="mt-8"><GoldButton href="/" testId="link-not-found-home">Volver al inicio</GoldButton></div></main></Layout>;
}

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Home} /><Route path="/ingresos-desde-casa" component={IncomePage} /><Route path="/salud-y-bienestar" component={WellnessPage} /><Route path="/producto/:id" component={ProductDetail} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
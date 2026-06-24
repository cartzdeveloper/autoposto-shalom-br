import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Constants ---
const companyConfig = {
  name: "PARRILLA 316",
  logoUrl: "https://ugc.production.linktr.ee/77d155e3-4bc3-4464-b3f2-9434c898e005_Imagem-do-WhatsApp-de-2025-07-17---s--14.24.28-0c2f80c6.jpeg?io=true&size=avatar-v3_0",
  tagline: "A Arte do Fogo e da Carne",
  description: "Bem-vindos ao Parrilla 316. Churrasco premium, ambiente familiar e sabor inesquecível.",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5582981691020&text&type=phone_number&app_absent=0",
  whatsappOfferImageUrl: "https://ugc.production.linktr.ee/ec03870b-9853-4380-aade-43626e17d61b_image.png?io=true&size=thumbnail-feature-v1_0",
  about: {
    title: "Nossa Essência",
    paragraphs: [
      "No Parrilla 316, o fogo é mais do que um método de cozimento; é nossa paixão. Trazemos a autêntica tradição da parrilla para Palmeira dos Índios, selecionando cortes nobres e respeitando o tempo de cada brasa.",
      "Acreditamos que a alta gastronomia deve ser acolhedora. Criamos um ambiente onde a sofisticação encontra o conforto, perfeito para celebrar momentos únicos com quem você ama.",
      "Muito mais que uma churrascaria, somos um destino gastronômico para quem não abre mão de excelência."
    ]
  }
};

const mainLinks = [
  {
    id: 1,
    text: "Cardápio Digital",
    href: "https://www.vucafood.com.br/parilla36/2827/cardapio-digital",
    iconName: "menu",
    subtitle: "Explore nossos cortes nobres",
    primary: false
  },
  {
    id: 2,
    text: "Instagram Oficial",
    href: "https://www.instagram.com/PARRILLA.316",
    iconName: "instagram",
    subtitle: "Acompanhe nossas novidades",
    primary: false
  },
  {
    id: 3,
    text: "Nossa História",
    action: "open_modal",
    iconName: "info",
    subtitle: "Conheça quem somos",
    primary: false
  },
  {
    id: 4,
    text: "Localização",
    href: "https://maps.app.goo.gl/nVjimAq8Cd8FUxQA6",
    iconName: "map-pin",
    subtitle: "Como chegar até nós",
    primary: false
  }
];

// --- Icons ---
const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.037l-1.03 3.777 3.847-1.002z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconByName = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'whatsapp': return <WhatsappIcon className={className} />;
    case 'instagram': return <InstagramIcon className={className} />;
    case 'map-pin': return <MapPinIcon className={className} />;
    case 'info': return <InfoIcon className={className} />;
    case 'menu': return <MenuIcon className={className} />;
    default: return null;
  }
};

// --- LinkButton Component ---
const LinkButton = ({ text, subtitle, href, primary, onClick, icon, iconName }: any) => {
  // Base Premium Styles
  const baseClasses = "group w-full flex items-center p-4 rounded-xl font-medium transition-all duration-300 ease-out cursor-pointer select-none";
  
  // Primary (WhatsApp) - Luxury Gradient
  const primaryClasses = "bg-gradient-to-r from-orange-600 via-orange-700 to-red-900 text-white shadow-lg shadow-orange-900/40 hover:shadow-orange-700/50 border border-orange-500/30";
  
  // Secondary (Standard Links) - Glassmorphism
  const secondaryClasses = "glass-button text-gray-100";

  const renderIcon = () => {
    // Wrapper for icon to ensure alignment
    const wrapperClass = `mr-4 p-2 rounded-lg transition-all duration-500 ${primary ? 'bg-white/10 text-white' : 'bg-white/5 text-gray-300 group-hover:bg-brand-gold/20 group-hover:text-brand-gold'}`;
    
    if (icon) return <div className={wrapperClass}><span className="w-5 h-5 block">{icon}</span></div>;
    if (iconName) return <div className={wrapperClass}><IconByName name={iconName} className="w-5 h-5" /></div>;
    return null;
  };

  const ArrowIcon = () => (
    <svg className={`w-4 h-4 ml-auto opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${primary ? 'text-white' : 'text-gray-400 group-hover:text-brand-gold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );

  const content = (
    <React.Fragment>
      {renderIcon()}
      <div className="flex flex-col text-left">
        <span className={`font-kanit tracking-wide text-base ${primary ? 'font-bold' : 'font-medium group-hover:text-brand-gold transition-colors'}`}>{text}</span>
        {subtitle && <span className="text-xs font-inter text-gray-400 font-light tracking-wider group-hover:text-gray-300 transition-colors">{subtitle}</span>}
      </div>
      <ArrowIcon />
    </React.Fragment>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {content}
    </button>
  );
};

// --- AboutModal Component ---
const AboutModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg transition-all duration-500"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg m-4 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
          aria-label="Fechar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="mb-8 text-center">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Parrilla 316</span>
            <h2 className="font-cinzel text-3xl text-white tracking-wide mb-3">
            {companyConfig.about.title}
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold/60 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6 text-gray-300 font-inter font-light leading-relaxed text-sm sm:text-base text-justify">
          {companyConfig.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="first-letter:text-2xl first-letter:text-brand-gold first-letter:font-cinzel first-letter:mr-1">{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center flex flex-col items-center">
            <img src={companyConfig.logoUrl} alt="Logo Small" className="w-10 h-10 rounded-full opacity-50 grayscale hover:grayscale-0 transition-all mb-3" />
            <p className="text-[10px] text-gray-600 font-inter tracking-widest uppercase">
                Excellence in every detail
            </p>
        </div>
      </div>
    </div>
  );
};

// --- Preloader Component (NEW & IMPROVED) ---
const Preloader = ({ loading }: { loading: boolean }) => {
  return (
      <div className={`preloader-bg ${!loading ? 'preloader-hidden' : ''}`}>
        <div className="flex flex-col items-center justify-center relative">
          
          {/* SVG Circle Animation */}
          <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-[1px] border-white/5"></div>
              
              {/* Golden Progress Ring */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(197, 160, 89, 0.2)" strokeWidth="1" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="60 240" strokeLinecap="round" />
              </svg>

              {/* Inner Glowing Pulse */}
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-2xl animate-pulse-slow"></div>

              {/* Logo */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/10 shadow-2xl z-10">
                  <img
                      src={companyConfig.logoUrl}
                      alt="Loading..."
                      className="w-full h-full object-cover opacity-90 brightness-110"
                  />
              </div>
          </div>

          {/* Text Animation */}
          <div className="mt-8 text-center space-y-2">
              <h2 className="font-cinzel text-2xl tracking-[0.4em] text-white/90 text-glow-gold">PARRILLA 316</h2>
              <div className="flex items-center justify-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-gold animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-1 h-1 rounded-full bg-brand-gold animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 rounded-full bg-brand-gold animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
          </div>

        </div>
      </div>
  );
};

// --- Header Component ---
const Header = () => {
  return (
    <header className="flex flex-col items-center text-center mb-10 relative z-10 animate-fade-in">
      <div className="relative mb-6 group cursor-default">
        {/* Ambient Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-orange/20 blur-[50px] rounded-full pointer-events-none"></div>
        
        <img
          src={companyConfig.logoUrl}
          alt={`${companyConfig.name} Logo`}
          className="relative w-32 h-32 rounded-full object-cover p-1 bg-[#0a0a0a] ring-1 ring-white/10 shadow-2xl animate-float brightness-105 contrast-110"
        />
      </div>
      
      <div className="space-y-3">
        <h1 className="font-cinzel font-bold text-4xl sm:text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-brand-gold via-white to-gray-400 drop-shadow-sm">
          {companyConfig.name}
        </h1>
        <div className="flex items-center justify-center gap-3 opacity-60">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold"></div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold"></div>
        </div>
        <p className="font-inter text-xs text-gray-400 uppercase tracking-[0.2em] font-light max-w-sm mx-auto leading-relaxed">
          {companyConfig.tagline}
        </p>
      </div>
    </header>
  );
};

// --- Main App Component ---
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Increase loading time slightly to show off animation
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (action: string) => {
    if (action === 'open_modal') {
      setIsModalOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Preloader loading={loading} />
      
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 pb-12">
        <div className={`w-full max-w-md mx-auto transition-all duration-1000 ease-out delay-500 ${loading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            
            <Header />
          
            <main className="space-y-6 flex flex-col items-center relative z-10">
              
              {/* Highlight Card - WhatsApp */}
              <div className="w-full relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-red-900 rounded-2xl opacity-40 group-hover:opacity-70 blur transition duration-500"></div>
                  <div className="relative bg-[#080808] border border-white/5 rounded-2xl p-4 flex flex-col items-center overflow-hidden">
                      {/* Glass shine effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"></div>

                      {companyConfig.whatsappOfferImageUrl && (
                          <div className="w-full mb-4 overflow-hidden rounded-lg border border-white/5 shadow-2xl relative">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                              <img 
                                  src={companyConfig.whatsappOfferImageUrl} 
                                  alt="Destaque" 
                                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                              />
                              <div className="absolute bottom-3 left-3 z-20">
                                  <span className="bg-brand-orange/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">Destaque</span>
                              </div>
                          </div>
                      )}
                      <div className="w-full text-center mb-1">
                          <h3 className="font-cinzel text-white text-lg">Experiência Gastronômica</h3>
                          <p className="font-inter text-gray-400 text-xs mb-4 font-light">Reserve sua mesa ou peça agora</p>
                      </div>
                      <LinkButton 
                          text="Solicitar via WhatsApp"
                          subtitle="Atendimento VIP e Reservas"
                          href={companyConfig.whatsappLink}
                          primary={true}
                          icon={<WhatsappIcon className="w-5 h-5" />}
                      />
                  </div>
              </div>

              {/* Elegant Divider */}
              <div className="w-full flex items-center justify-center py-2 opacity-50">
                 <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                 <span className="mx-2 text-[10px] text-gray-600 tracking-widest uppercase">Menu</span>
                 <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>
              
              {/* Main Links List */}
              <div className="w-full space-y-3">
                {mainLinks.map((link, index) => (
                  <div 
                    key={link.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                  >
                    <LinkButton 
                      text={link.text}
                      subtitle={link.subtitle}
                      href={link.href}
                      primary={link.primary}
                      iconName={link.iconName}
                      onClick={() => handleLinkClick(link.action)}
                    />
                  </div>
                ))}
              </div>

            </main>
        </div>
        
        <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </React.Fragment>
  );
};

// --- Mount the App ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

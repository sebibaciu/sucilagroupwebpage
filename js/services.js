// --- COMPONENTS ---
const Nav = ({ activeView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateTo = (page) => {
        if (page === 'home') window.location.href = 'index.html';
        else if (page === 'projects') window.location.href = 'projects.html';
        else if (page === 'services') window.location.href = 'services.html';
        else if (page === 'contact') window.location.href = 'contact.html';
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1800px] mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="cursor-pointer group"
                    onClick={() => navigateTo('home')}
                >
                    <img
                        src="https://i.ibb.co/FbnbJNck/2logo.png"
                        alt="SUCILA GROUP"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide uppercase">
                    <button onClick={() => navigateTo('home')} className={`hover:text-brand-gold transition-colors ${activeView === 'home' ? 'text-white' : 'text-zinc-500'}`}>Home</button>
                    <button onClick={() => navigateTo('projects')} className={`hover:text-brand-gold transition-colors ${activeView === 'projects' ? 'text-white' : 'text-zinc-500'}`}>Projects</button>
                    <button onClick={() => navigateTo('services')} className={`hover:text-brand-gold transition-colors ${activeView === 'services' ? 'text-white' : 'text-zinc-500'}`}>Services</button>
                    <button onClick={() => navigateTo('contact')} className={`hover:text-brand-gold transition-colors ${activeView === 'contact' ? 'text-white' : 'text-zinc-500'}`}>Contact</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-20 bg-black z-40 p-6 flex flex-col gap-8 md:hidden">
                    <button onClick={() => navigateTo('home')} className="text-3xl font-display font-bold text-white">HOME</button>
                    <button onClick={() => navigateTo('projects')} className="text-3xl font-display font-bold text-white">PROJECTS</button>
                    <button onClick={() => navigateTo('services')} className="text-3xl font-display font-bold text-white">SERVICES</button>
                    <button onClick={() => navigateTo('contact')} className="text-3xl font-display font-bold text-white">CONTACT</button>
                </div>
            )}
        </nav>
    );
};

const Footer = ({ setView }) => {
    const navigateTo = (page) => {
        if (page === 'home') window.location.href = 'index.html';
        else if (page === 'projects') window.location.href = 'projects.html';
        else if (page === 'services') window.location.href = 'services.html';
        else if (page === 'contact') window.location.href = 'contact.html';
    };

    return (
        <footer className="bg-black border-t border-zinc-800 py-16 px-6">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <img
                            src="https://i.ibb.co/FbnbJNck/2logo.png"
                            alt="SUCILA GROUP"
                            className="h-8 w-auto mb-6"
                        />
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                            Building & Innovation since 2018. We create spaces that transcend conventional architecture, blending industrial precision with artistic vision.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <div className="space-y-2">
                            <button onClick={() => navigateTo('home')} className="block text-zinc-500 hover:text-white transition-colors">Home</button>
                            <button onClick={() => navigateTo('projects')} className="block text-zinc-500 hover:text-white transition-colors">Projects</button>
                            <button onClick={() => navigateTo('services')} className="block text-zinc-500 hover:text-white transition-colors">Services</button>
                            <button onClick={() => navigateTo('contact')} className="block text-zinc-500 hover:text-white transition-colors">Contact</button>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-zinc-500" />
                                <span className="text-zinc-500 text-sm">info@sucilagroup.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-zinc-500" />
                                <span className="text-zinc-500 text-sm">+34 928 123 456</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-zinc-500" />
                                <span className="text-zinc-500 text-sm">Gran Canaria, Spain</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-zinc-600 text-sm">© 2025 SUCILA GROUP. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ServicesView = () => {
    const navigateTo = (page) => {
        if (page === 'contact') window.location.href = 'contact.html';
    };

    return (
        <div className="animate-in fade-in duration-700 bg-brand-dark min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-[1800px] mx-auto">
                {/* Services Header */}
                <div className="mb-20">
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Expertise</p>
                    <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-8">MASTERY IN<br/><span className="text-stroke">FORM & FUNCTION</span></h1>
                    <div className="h-px w-full bg-zinc-800"></div>
                </div>

                {/* Services List - Alternating Layout */}
                <div className="space-y-32">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="aspect-[4/3] overflow-hidden border border-zinc-800 relative bg-zinc-900">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Decorative Corner Lines */}
                                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-brand-gold/50 m-4"></div>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-brand-gold/50 m-4"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-brand-gold font-display text-4xl font-bold opacity-30">0{index + 1}</span>
                                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-xl text-brand-gold font-display">{service.subtitle}</p>
                                <p className="text-zinc-400 leading-relaxed text-lg max-w-xl">
                                    {service.description}
                                </p>

                                <div className="pt-8 border-t border-zinc-800/50">
                                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Capabilities</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.capabilities.map((cap, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-zinc-300">
                                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-40 bg-zinc-900 border border-zinc-800 p-12 md:p-24 text-center">
                    <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">READY TO BUILD?</h3>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-10">
                        From initial concept to final handover, our team is ready to bring your vision to life with precision and luxury.
                    </p>
                    <button
                        onClick={() => navigateTo('contact')}
                        className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Start a Conversation
                    </button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-brand-dark">
            <Nav activeView="services" />
            <ServicesView />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
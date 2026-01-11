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

const ContactView = () => {
    return (
        <div className="animate-in fade-in duration-700 bg-brand-dark min-h-screen pt-24 pb-20 px-6">
             <div className="max-w-[1600px] mx-auto">
                <div className="mb-16">
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Get in Touch</p>
                    <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-8">INITIATE A<br/><span className="text-stroke">PROJECT</span></h1>
                    <div className="h-px w-full bg-zinc-800"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <div className="space-y-12">
                        <p className="text-zinc-400 max-w-md text-lg">
                            Ready to build your vision? Tell us about your project, and we will schedule a consultation.
                        </p>
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500">Phone</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="+40 700 000 000" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="email@domain.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500">Project Details</label>
                                <textarea className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-brand-gold outline-none transition-colors min-h-[100px] resize-none" placeholder="Tell us about the location, size, and vision..."></textarea>
                            </div>
                            <button className="px-10 py-4 bg-white text-black uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-colors">
                                Send Request
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Visual */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-full text-brand-gold mb-2">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-display text-2xl text-white">Cluj-Napoca</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Strada Republicii 12<br/>
                                    Cluj-Napoca, Romania<br/>
                                    400015
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-full text-brand-gold mb-2">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-display text-2xl text-white">Marbella</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Golden Mile, Av. Bulevar<br/>
                                    Marbella, Spain<br/>
                                    29602
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-zinc-800">
                            <h3 className="font-display text-xl text-white">Direct Contact</h3>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:office@sucilagroup.com" className="flex items-center gap-4 text-zinc-400 hover:text-brand-gold transition-colors">
                                    <Mail size={18} /> office@sucilagroup.com
                                </a>
                                <a href="tel:+40700000000" className="flex items-center gap-4 text-zinc-400 hover:text-brand-gold transition-colors">
                                    <Phone size={18} /> +40 700 000 000 (RO)
                                </a>
                            </div>
                        </div>

                        <div className="w-full h-64 bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <button className="px-6 py-3 border border-white/30 text-white text-xs uppercase tracking-widest backdrop-blur-sm hover:bg-white hover:text-black transition-all">
                                    View on Map
                                </button>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-brand-dark">
            <Nav activeView="contact" />
            <ContactView />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
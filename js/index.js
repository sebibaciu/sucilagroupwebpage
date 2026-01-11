// --- COMPONENTS ---

const Nav = ({ activeView, setView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1800px] mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="cursor-pointer group"
                    onClick={() => setView('home')}
                >
                    <img
                        src="https://i.ibb.co/FbnbJNck/2logo.png"
                        alt="SUCILA GROUP"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide uppercase">
                    <button onClick={() => setView('home')} className={`hover:text-brand-gold transition-colors ${activeView === 'home' ? 'text-white' : 'text-zinc-500'}`}>Home</button>
                    <button onClick={() => setView('projects')} className={`hover:text-brand-gold transition-colors ${activeView.includes('project') ? 'text-white' : 'text-zinc-500'}`}>Projects</button>
                    <button onClick={() => setView('services')} className={`hover:text-brand-gold transition-colors ${activeView === 'services' ? 'text-white' : 'text-zinc-500'}`}>Services</button>
                    <button onClick={() => setView('contact')} className={`hover:text-brand-gold transition-colors ${activeView === 'contact' ? 'text-white' : 'text-zinc-500'}`}>Contact</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-20 bg-black z-40 p-6 flex flex-col gap-8 md:hidden">
                    <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-3xl font-display font-bold text-white">HOME</button>
                    <button onClick={() => { setView('projects'); setIsMenuOpen(false); }} className="text-3xl font-display font-bold text-white">PROJECTS</button>
                    <button onClick={() => { setView('services'); setIsMenuOpen(false); }} className="text-3xl font-display font-bold text-white">SERVICES</button>
                    <button onClick={() => { setView('contact'); setIsMenuOpen(false); }} className="text-3xl font-display font-bold text-zinc-500">CONTACT</button>
                </div>
            )}
        </nav>
    );
};

const Footer = ({ setView }) => {
    const [timeRO, setTimeRO] = useState('');
    const [timeES, setTimeES] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTimeRO(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Bucharest', hour: '2-digit', minute: '2-digit' }));
            setTimeES(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-brand-panel border-t border-brand-border pt-20 pb-10 px-6">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-display font-bold text-4xl mb-6">SUCILA GROUP</h2>
                    <p className="text-zinc-400 max-w-md mb-8">
                        Redefining luxury living through industrial innovation. We build spaces that stand the test of time, merging architectural rigor with premium aesthetics.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"><Mail size={18} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Locations</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-zinc-500 mt-1" size={16} />
                            <div>
                                <p className="font-bold text-white">Cluj-Napoca, Romania</p>
                                <p className="text-zinc-500 text-sm">Strada Republicii 12</p>
                                <div className="flex items-center gap-2 mt-2 text-xs text-brand-gold">
                                    <Clock size={12} />
                                    <span>{timeRO}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-zinc-500 mt-1" size={16} />
                            <div>
                                <p className="font-bold text-white">Marbella, Spain</p>
                                <p className="text-zinc-500 text-sm">Golden Mile, Av. Bulevar</p>
                                <div className="flex items-center gap-2 mt-2 text-xs text-brand-gold">
                                    <Clock size={12} />
                                    <span>{timeES}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Menu</h3>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                        <li><button onClick={() => setView('services')} className="hover:text-white transition-colors text-left">Services</button></li>
                        <li><button onClick={() => setView('projects')} className="hover:text-white transition-colors text-left">Projects</button></li>
                        <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
                <p>&copy; 2024 SUCILA GROUP INVEST. All rights reserved.</p>
                <p>BUILDING & INNOVATION</p>
            </div>
        </footer>
    );
};

const HomeView = ({ setView, setCurrentProject, projectsData, projectsLoading }) => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2942&auto=format&fit=crop"
                        className="w-full h-full object-cover brightness-[0.4]"
                        alt="Luxury Villa"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <p className="text-brand-gold uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-backwards">
                        Est. 2018
                    </p>
                    <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight leading-none animate-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards">
                        BUILDING &<br/>INNOVATION
                    </h1>
                    <button
                        onClick={() => setView('projects')}
                        className="mt-8 px-8 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 animate-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards"
                    >
                        View Projects
                    </button>
                </div>
            </header>

            {/* Services Bento Grid */}
            <section className="py-32 px-6 bg-brand-dark">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
                        <div>
                            <h2 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2">Our Expertise</h2>
                            <h3 className="font-display text-4xl md:text-5xl text-white">Capabilities</h3>
                        </div>
                        <p className="text-zinc-500 max-w-md mt-6 md:mt-0">
                            We integrate engineering precision with artistic vision. Our multidisciplinary approach ensures every detail serves a purpose.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">
                        {/* Tile 1: Residential (Large) */}
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-zinc-800 bg-zinc-900">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h4 className="font-display text-2xl text-white mb-2">Residential Construction</h4>
                                <p className="text-zinc-400 text-sm">Turnkey luxury villa development from foundation to finish.</p>
                            </div>
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={14} className="text-white" />
                            </div>
                        </div>

                        {/* Tile 2: Architecture */}
                        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-zinc-800 bg-zinc-900 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                            <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-sm text-brand-gold mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            </div>
                            <div>
                                <h4 className="font-display text-xl text-white mb-2">Architectural Design</h4>
                                <p className="text-zinc-500 text-xs">Blueprint to BIM visualization.</p>
                            </div>
                        </div>

                        {/* Tile 3: Outdoor */}
                        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden border border-zinc-800 bg-zinc-900">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-40"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h4 className="font-display text-xl text-white mb-2">Outdoor Living</h4>
                                <p className="text-zinc-400 text-xs">Landscaping, pools, and hardscapes.</p>
                            </div>
                        </div>

                        {/* Tile 4: Investment */}
                        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-zinc-800 bg-brand-gold p-8 flex flex-col justify-between">
                            <h4 className="font-display text-xl text-black font-bold">Invest with Sucila</h4>
                            <div className="flex justify-between items-end">
                                <p className="text-black/70 text-xs max-w-[120px]">Real estate opportunities in high-growth zones.</p>
                                <ArrowRight className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProjectsView = ({ setView, setCurrentProject, projectsData, projectsLoading }) => {
    const handleProjectClick = (project) => {
        setCurrentProject(project);
        setView('single-project');
        window.scrollTo(0,0);
    };

    if (projectsLoading) {
        return (
            <div className="pt-32 pb-20 px-6 min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center">
                    <Loader2 size={48} className="text-brand-gold mx-auto mb-4" />
                    <p className="text-zinc-400">Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-brand-dark animate-in fade-in duration-500">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-20">
                    <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-6">SELECTED<br/><span className="text-stroke">WORKS</span></h1>
                    <div className="h-px w-full bg-zinc-800"></div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                        >
                            <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-zinc-800">
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-brand-gold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-white font-display text-3xl font-bold">{project.title}</h3>
                                        <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowRight size={18} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SingleProjectView = ({ project, setView, setCurrentProject, projectsData }) => {
    if (!project) return null;

    // Logic to find next/prev projects
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
    const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

    const navigateToProject = (proj) => {
        setCurrentProject(proj);
        window.scrollTo(0,0);
    };

    const generateInvestmentInsight = async () => {
        // Placeholder for functionality from previous prompt context, ensuring it doesn't break
        // if not fully requested here, but good to keep structure consistent
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-brand-dark min-h-screen">
            {/* Full Hero Image */}
            <div className="h-[70vh] w-full relative">
                <img src={project.coverImage} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-brand-dark to-transparent">
                    <div className="max-w-[1800px] mx-auto">
                        <button onClick={() => setView('projects')} className="text-zinc-400 hover:text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <ArrowLeft size={14} /> Back to Projects
                        </button>
                        <h1 className="font-display font-bold text-5xl md:text-8xl text-white">{project.title.toUpperCase()}</h1>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1800px] mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-20 relative">

                    {/* Sticky Sidebar (Project Details) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 border border-zinc-800 p-8 bg-zinc-900/50 backdrop-blur-sm">
                            <div className="space-y-8">
                                <div>
                                    <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-white font-display text-xl">{project.location}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">Year</p>
                                        <p className="text-white font-display text-xl">{project.year}</p>
                                    </div>
                                    <div>
                                        <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">Size</p>
                                        <p className="text-white font-display text-xl">{project.size}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">Materials</p>
                                    <p className="text-white text-lg">{project.materials}</p>
                                </div>
                                <div className="pt-8 border-t border-zinc-800">
                                    <p className="text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Visual Story */}
                    <div className="lg:w-2/3 space-y-12">
                        {project.gallery.map((img, idx) => (
                            <div key={idx} className="w-full group">
                                <div className="overflow-hidden mb-4 border border-zinc-800">
                                    <img src={img} className="w-full h-auto hover:scale-105 transition-transform duration-1000" />
                                </div>
                                <p className="text-zinc-600 text-xs uppercase tracking-widest text-right">0{idx + 1} — Visual Detail</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Navigation */}
            <div className="border-t border-zinc-800 bg-zinc-900">
                <div className="grid grid-cols-2">
                    <div
                        onClick={() => navigateToProject(prevProject)}
                        className="p-12 border-r border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors group"
                    >
                        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 group-hover:text-brand-gold">Previous</p>
                        <h3 className="text-white font-display text-xl md:text-3xl">{prevProject.title}</h3>
                    </div>
                    <div
                        onClick={() => navigateToProject(nextProject)}
                        className="p-12 hover:bg-zinc-800 cursor-pointer transition-colors group text-right"
                    >
                        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 group-hover:text-brand-gold">Next Project</p>
                        <h3 className="text-white font-display text-xl md:text-3xl">{nextProject.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesView = ({ setView }) => {
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
                        onClick={() => setView('contact')}
                        className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Start a Conversation
                    </button>
                </div>
            </div>
        </div>
    );
};

const ContactView = ({ setView }) => {
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
    const [view, setView] = useState('home'); // home, projects, single-project, services, contact
    const [currentProject, setCurrentProject] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [projectsLoading, setProjectsLoading] = useState(true);

    useEffect(() => {
        fetch('projects/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjectsData(data);
                setProjectsLoading(false);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                setProjectsLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-black">
            <Nav activeView={view} setView={setView} />

            <main>
                {view === 'home' && <HomeView setView={setView} setCurrentProject={setCurrentProject} projectsData={projectsData} projectsLoading={projectsLoading} />}
                {view === 'projects' && <ProjectsView setView={setView} setCurrentProject={setCurrentProject} projectsData={projectsData} projectsLoading={projectsLoading} />}
                {view === 'single-project' && <SingleProjectView project={currentProject} setView={setView} setCurrentProject={setCurrentProject} projectsData={projectsData} />}
                {view === 'services' && <ServicesView setView={setView} />}
                {view === 'contact' && <ContactView setView={setView} />}
            </main>

            <Footer setView={setView} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
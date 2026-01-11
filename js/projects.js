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

const ProjectsView = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('projects/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjectsData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                setLoading(false);
            });
    }, []);

    const handleProjectClick = (project) => {
        // For now, just scroll to top. In a real implementation, you'd navigate to a project detail page
        window.scrollTo(0,0);
        // You could store the project in localStorage and navigate to a detail page
        localStorage.setItem('selectedProject', JSON.stringify(project));
        // window.location.href = 'project-detail.html'; // If you create a detail page
    };

    if (loading) {
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

const App = () => {
    return (
        <div className="min-h-screen bg-brand-dark">
            <Nav activeView="projects" />
            <ProjectsView />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
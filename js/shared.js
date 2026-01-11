const { useState, useEffect, useRef } = React;

// --- ICONS ---
const Icon = ({ size = 24, className = "", children }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
);

const ArrowRight = (props) => <Icon {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Icon>;
const ArrowLeft = (props) => <Icon {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></Icon>;
const MapPin = (props) => <Icon {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>;
const Clock = (props) => <Icon {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>;
const Menu = (props) => <Icon {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></Icon>;
const X = (props) => <Icon {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>;
const Instagram = (props) => <Icon {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></Icon>;
const Linkedin = (props) => <Icon {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></Icon>;
const Mail = (props) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></Icon>;
const Sparkles = (props) => <Icon {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 5H5" /><path d="M5 12V3" /></Icon>;
const MessageSquare = (props) => <Icon {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>;
const Loader2 = (props) => <Icon {...props} className={`animate-spin ${props.className || ''}`}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></Icon>;
const Phone = (props) => <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const Check = (props) => <Icon {...props}><polyline points="20 6 9 17 4 12" /></Icon>;

// --- DATA / CMS STRUCTURE ---

const servicesData = [
    {
        id: 1,
        title: "Residential Construction",
        subtitle: "Concept to Key",
        description: "We deliver turnkey luxury villas with an unwavering commitment to structural integrity and premium finishes. Our construction management process ensures transparency, speed, and precision at every stage.",
        capabilities: [
            "Full Project Management",
            "Structural Engineering",
            "High-End Interior Finishing",
            "Smart Home Integration"
        ],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2900&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Architectural Design",
        subtitle: "Visionary Concepts",
        description: "Our in-house design team collaborates with top engineers to create spaces that are both aesthetically striking and highly functional. We specialize in modern, industrial, and brutalist styles.",
        capabilities: [
            "3D Rendering & Visualization",
            "Architectural Planning",
            "BIM Modeling",
            "Permitting & Compliance"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Outdoor Living",
        subtitle: "Extending the Home",
        description: "We view the outdoors as an extension of the living space. From infinity pools to manicured hardscapes, we engineer environments that blend nature with architecture.",
        capabilities: [
            "Landscape Architecture",
            "Infinity Pools & Water Features",
            "Hardscaping & Patios",
            "Outdoor Lighting Design"
        ],
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2938&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Real Estate Investment",
        subtitle: "Strategic Growth",
        description: "Sucila Group Invest identifies high-potential land and development opportunities in emerging markets. We guide investors through acquisition, development, and exit strategies.",
        capabilities: [
            "Market Analysis",
            "Land Acquisition",
            "Development Feasibility",
            "ROI Optimization"
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
];
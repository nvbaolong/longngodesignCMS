
import React, { useState, useRef, useEffect } from 'react';

// Simplified Project Type
interface Project {
    title: string;
    description: string;
    slug: string;
    coverImage: string;
    isFeatured?: boolean;
}

interface SearchWidgetProps {
    projects: Project[];
}

export default function SearchWidget({ projects }: SearchWidgetProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<Project[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter projects based on query
    useEffect(() => {
        if (query.trim() === '') {
            // Show projects marked as featured first, fallback to first 3
            const featured = projects.filter(p => p.isFeatured).slice(0, 3);
            setResults(featured.length > 0 ? featured : projects.slice(0, 3));
        } else {
            const lowerQuery = query.toLowerCase();
            const filtered = projects.filter(p =>
                p.title.toLowerCase().includes(lowerQuery) ||
                p.description?.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered.slice(0, 8)); // Limit results
        }
    }, [query, projects]);

    // Handle click outside to close
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className={`relative group transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'w-[220px] md:w-64 z-50' : 'w-10 md:w-64'}`}>
            {/* Search Input */}
            <div
                onClick={() => !isOpen && setIsOpen(true)}
                className={`
                    bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center
                    transition-all duration-300 cursor-pointer overflow-hidden
                    ${isOpen
                        ? 'bg-white border-white shadow-lg shadow-black/5 ring-4 ring-white/10 px-4 py-2.5 w-full '
                        : 'hover:bg-white/15 hover:border-white/30 px-2.5 md:px-4 py-2.5 w-full justify-center md:justify-start'
                    }
                `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors ${isOpen ? 'text-black/50' : 'text-white/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                <input
                    ref={(el) => { if (isOpen && el) el.focus(); }}
                    type="text"
                    placeholder="Search projects..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={`
                        bg-transparent border-none outline-none text-sm w-full transition-all ml-3
                        ${isOpen ? 'text-black placeholder-black/50 block' : 'text-white placeholder-white/50 hidden md:block'}
                    `}
                />

                {query && isOpen && (
                    <button
                        onClick={(e) => { e.stopPropagation(); setQuery(''); setIsOpen(true); }}
                        className="p-0.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 flex-shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Dropdown Results */}
            {isOpen && (
                <div className="absolute top-full mt-3 right-0 w-full min-w-[280px] md:min-w-[320px] bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden py-2 z-[100] animate-in fade-in zoom-in-95 duration-200 origin-top-right">

                    <div className="px-4 py-2 border-b border-gray-100">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {query ? 'Search Results' : 'Featured Suggestions'}
                        </span>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {results.length > 0 ? (
                            results.map((project) => (
                                <a
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors group/item"
                                >
                                    {/* Small Thumbnail */}
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-100 group-hover/item:border-gray-300 transition-colors">
                                        <img
                                            src={project.coverImage || '/placeholder.png'}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Text Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-gray-800 truncate group-hover/item:text-black">{project.title}</h4>
                                        {project.description && (
                                            <p className="text-xs text-gray-500 truncate line-clamp-1 group-hover/item:text-gray-700">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover/item:text-gray-600 -translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))
                        ) : (
                            <div className="px-4 py-8 text-center text-gray-400">
                                <p className="text-sm">No projects found matching "{query}"</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

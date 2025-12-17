import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';

const ServicesSummary: React.FC = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden transition-colors duration-700">
            {/* Local decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-primary dark:text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2 transition-colors duration-500">Our Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white font-bold mb-4 transition-colors duration-500">Comprehensive Solutions</h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
                        We offer specialized strategies to drive sustainable growth. Explore our core service areas below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {SERVICE_CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="group p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-100 dark:border-white/10 hover:border-brand-primary/30 dark:hover:border-brand-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-default h-full"
                        >
                            <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-primary dark:text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 shadow-sm">
                                <i className={`fa-solid ${category.icon} text-2xl`}></i>
                            </div>

                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                                {category.title.replace('Category ', '').split(': ')[1] || category.title}
                            </h4>

                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 w-full text-left bg-slate-50/50 dark:bg-slate-900/30 p-4 rounded-lg flex-grow">
                                {category.services.slice(0, 2).map((s, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <i className="fa-solid fa-check text-brand-secondary text-[10px] mt-1.5 shrink-0"></i>
                                        <span className="leading-snug line-clamp-2 text-xs">{s.title}</span>
                                    </li>
                                ))}
                                {category.services.length > 2 && (
                                    <li className="text-xs text-center text-slate-400 italic pt-1">
                                        + {category.services.length - 2} more
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="services.html"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        View Full Service Details
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSummary;

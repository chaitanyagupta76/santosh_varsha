"use client";

import { useLanguage } from "@/context/LanguageProvider";
import images from "@/data/images.json";
import { motion } from "framer-motion";

export default function BrideGroom() {
    const { content } = useLanguage();

    return (
        <section id="brideGroom" className="py-24 relative overflow-hidden bg-white">
            {/* Subtle background decorative element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[url('/images/floral-pattern.png')] bg-repeat opacity-5"></div>
            
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-gold text-lg mb-2 block font-medium animate-dot-pulse italic">Forever & Always</span>
                    <h2 className="text-3xl md:text-4xl tracking-widest font-sans font-light uppercase text-textDark">
                        {content.brideGroom.title}
                    </h2>
                    <div className="flex justify-center items-center gap-3 mt-4">
                        <div className="h-[1px] w-20 bg-gold/30"></div>
                        <span className="text-gold text-xl">❦</span>
                        <div className="h-[1px] w-20 bg-gold/30"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative items-center">
                    {/* Groom Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center md:items-end text-center md:text-right"
                    >
                        <div className="relative mb-8 group">
                            {/* Elegant Arched Frame */}
                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-t-full overflow-hidden border-8 border-ivory shadow-2xl z-10">
                                <img
                                    src={images.groomImage}
                                    alt={content.brideGroom.groom.name}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            {/* Gold Background Frame */}
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-t-full -z-10 transform translate-x-2 translate-y-2"></div>
                        </div>
                        
                        <div className="space-y-3">
                            <span className="text-gold tracking-[0.3em] text-xs uppercase font-sans font-semibold">The Groom</span>
                            <h3 className="font-script text-5xl md:text-6xl text-textDark leading-tight drop-shadow-sm">
                                {content.brideGroom.groom.name}
                            </h3>
                            <div className="h-[1px] w-12 bg-gold/40 ml-auto mr-0 hidden md:block"></div>
                            <div className="space-y-1">
                                <p className="text-textDark font-sans text-sm tracking-wide">
                                    {content.brideGroom.groom.parents}
                                </p>
                                {content.brideGroom.groom.description && (
                                    <p className="text-rose font-medium text-xs tracking-widest uppercase italic bg-peach/50 inline-block px-3 py-1 rounded-full">
                                        {content.brideGroom.groom.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative "&" or "With" element */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-ivory border border-gold/20 items-center justify-center z-20 shadow-xl backdrop-blur-md">
                        <span className="font-script text-4xl text-gold">&</span>
                    </div>

                    {/* Bride Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-0"
                    >
                        <div className="relative mb-8 group order-first md:order-last lg:order-first">
                             {/* Elegant Arched Frame */}
                             <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-t-full overflow-hidden border-8 border-ivory shadow-2xl z-10">
                                <img
                                    src={images.brideImage}
                                    alt={content.brideGroom.bride.name}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            {/* Gold Background Frame */}
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 rounded-t-full -z-10 transform -translate-x-2 translate-y-2"></div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-gold tracking-[0.3em] text-xs uppercase font-sans font-semibold">The Bride</span>
                            <h3 className="font-script text-5xl md:text-6xl text-textDark leading-tight drop-shadow-sm">
                                {content.brideGroom.bride.name}
                            </h3>
                            <div className="h-[1px] w-12 bg-gold/40 mr-auto ml-0 hidden md:block"></div>
                            <div className="space-y-1">
                                <p className="text-textDark font-sans text-sm tracking-wide">
                                    {content.brideGroom.bride.parents}
                                </p>
                                {content.brideGroom.bride.description && (
                                    <p className="text-rose font-medium text-xs tracking-widest uppercase italic bg-peach/50 inline-block px-3 py-1 rounded-full">
                                        {content.brideGroom.bride.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle floating gold particles-like decoration */}
            <div className="absolute bottom-20 right-[10%] w-3 h-3 rounded-full bg-gold/20 animate-dot-pulse"></div>
            <div className="absolute top-40 left-[5%] w-2 h-2 rounded-full bg-gold/10 animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
        </section>
    );
}

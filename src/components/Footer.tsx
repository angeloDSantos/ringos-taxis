import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Accessibility } from "lucide-react";

const Footer = () => (
    <footer className="bg-yp-dark text-white">
        {/* Big phone banner */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] py-6">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <p className="font-display text-lg sm:text-xl text-yp-dark font-bold">
                        Need a ride? Call us now!
                    </p>
                    <p className="text-xs text-yp-dark/70 tracking-wider font-heading uppercase">
                        Available 24/7 • Ringwood & surrounding areas
                    </p>
                </div>
                <a
                    href="tel:07387777202"
                    className="flex items-center gap-3 bg-yp-dark text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-black transition-colors group"
                >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                    <span className="phone-banner text-xl sm:text-2xl md:text-3xl">07387 777202</span>
                </a>
            </div>
        </div>

        {/* Footer content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/ringo-logo.png" alt="Ringo's Taxis" className="h-10 w-10 object-contain" />
                        <span className="font-display text-xl font-bold text-yp-yellow">
                            Ringo's Taxis
                        </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Your trusted local taxi service in Ringwood, Bournemouth & South UK.
                        Wheelchair accessible vehicles and reliable airport transfers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-heading font-bold text-sm tracking-wider text-yp-yellow uppercase mb-4 pb-2 border-b border-white/10">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        {[
                            { label: "Home", path: "/" },
                            { label: "Disabled Access", path: "/disabled-access" },
                            { label: "Airport Trips", path: "/airport-trips" },
                            { label: "Service Areas", path: "/service-areas" },
                            { label: "Request a Call", path: "/request-a-call" },
                        ].map(({ label, path }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className="text-sm text-white/60 hover:text-yp-yellow transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Service Areas */}
                <div>
                    <h3 className="font-heading font-bold text-sm tracking-wider text-yp-yellow uppercase mb-4 pb-2 border-b border-white/10">
                        Service Areas
                    </h3>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Ringwood</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Bournemouth</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Christchurch</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Furlong</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> New Milton</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Verwood</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-yp-yellow" /> Ferndown</li>
                    </ul>
                </div>

                {/* Why Choose Us */}
                <div>
                    <h3 className="font-heading font-bold text-sm tracking-wider text-yp-yellow uppercase mb-4 pb-2 border-b border-white/10">
                        Why Ringo's?
                    </h3>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li className="flex items-start gap-2">
                            <Accessibility className="w-4 h-4 text-yp-yellow mt-0.5 shrink-0" />
                            <span>Wheelchair accessible vehicles</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-yp-yellow mt-0.5 shrink-0" />
                            <span>24/7 availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-yp-yellow mt-0.5 shrink-0" />
                            <span>Local knowledge, reliable routes</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-yp-yellow mt-0.5 shrink-0" />
                            <span>Friendly, professional service</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
                <p>© {new Date().getFullYear()} Ringo's Taxis. All rights reserved.</p>
                <p>Ringwood, Hampshire, United Kingdom</p>
            </div>
        </div>
    </footer>
);

export default Footer;

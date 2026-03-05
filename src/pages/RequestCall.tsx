import { Phone, MapPin, Clock, Accessibility } from "lucide-react";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import RequestCallForm from "@/components/RequestCallForm";
import { usePageSEO } from "@/hooks/usePageSEO";

const RequestCall = () => {
    usePageSEO({
        title: "Request a Call | Ringo's Taxis",
        description: "Leave your details and we'll call you back, or ring us directly — we're always happy to help.",
    });

    return (
        <YellowPagesLayout
            title="Request a Call"
            description="Leave your details and we'll call you back, or ring us directly — we're always happy to help."
        >
            <section className="py-10 sm:py-14 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                        {/* Left: info */}
                        <div>
                            {/* Big phone number */}
                            <div className="bg-yp-dark p-6 sm:p-8 mb-6 sm:mb-8 text-center">
                                <p className="font-heading text-xs tracking-[0.3em] uppercase text-yp-yellow/70 mb-2 sm:mb-3">
                                    Or Call Us Directly
                                </p>
                                <a
                                    href="tel:07387777202"
                                    className="inline-flex items-center gap-3 text-white hover:text-yp-yellow transition-colors"
                                >
                                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span className="phone-banner text-2xl sm:text-3xl md:text-4xl">07387 777202</span>
                                </a>
                                <p className="text-xs sm:text-sm text-white/50 mt-3 font-heading">
                                    Available 24 hours, 7 days a week
                                </p>
                            </div>

                            {/* Quick info cards */}
                            <div className="space-y-4">
                                <div className="bg-yp-cream yp-border-dashed p-5 flex items-start gap-4">
                                    <div className="bg-yp-yellow p-2 sm:p-3 shrink-0">
                                        <Clock className="w-5 h-5 text-yp-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-base sm:text-lg font-bold text-yp-dark mb-1">24/7 Availability</h3>
                                        <p className="text-xs sm:text-sm text-yp-dark/60 leading-relaxed">
                                            We operate around the clock — early morning airport runs,
                                            late-night pickups, weekends and bank holidays.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yp-cream yp-border-dashed p-5 flex items-start gap-4">
                                    <div className="bg-yp-yellow p-2 sm:p-3 shrink-0">
                                        <MapPin className="w-5 h-5 text-yp-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-base sm:text-lg font-bold text-yp-dark mb-1">Local & Long Distance</h3>
                                        <p className="text-xs sm:text-sm text-yp-dark/60 leading-relaxed">
                                            From a quick trip to the shops to an airport transfer —
                                            we cover it all across Ringwood, Bournemouth & South UK.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yp-cream yp-border-dashed p-5 flex items-start gap-4">
                                    <div className="bg-yp-yellow p-2 sm:p-3 shrink-0">
                                        <Accessibility className="w-5 h-5 text-yp-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-base sm:text-lg font-bold text-yp-dark mb-1">Disabled Access</h3>
                                        <p className="text-xs sm:text-sm text-yp-dark/60 leading-relaxed">
                                            Wheelchair accessible vehicles available with ramp access
                                            and trained, professional drivers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: form */}
                        <div>
                            <div className="bg-yp-cream p-1 sm:p-2 yp-border-thick">
                                <div className="bg-gradient-to-b from-[#FFD700] to-[#FFC107] px-4 sm:px-6 py-3 sm:py-4 mb-0">
                                    <h2 className="font-display text-lg sm:text-xl font-bold text-yp-dark text-center">
                                        Request a Call Back
                                    </h2>
                                    <p className="text-[10px] sm:text-xs text-yp-dark/70 text-center font-heading tracking-wider">
                                        We'll get back to you as soon as possible
                                    </p>
                                </div>
                                <RequestCallForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </YellowPagesLayout>
    );
};

export default RequestCall;

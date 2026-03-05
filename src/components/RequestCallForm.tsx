import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, User, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

// UK phone regex: mobile or landline
const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:7\d{3}|\d{2,4})\s?\d{3,4}\s?\d{3,4})$/;

const requestCallSchema = z
    .object({
        name: z.string().min(2, "Please enter your name"),
        email: z.string().email("Please enter a valid email").or(z.literal("")),
        phone: z
            .string()
            .regex(ukPhoneRegex, "Please enter a valid UK phone number")
            .or(z.literal("")),
        area: z.string().optional(),
        message: z.string().optional(),
    })
    .refine((data) => data.email !== "" || data.phone !== "", {
        message: "Please provide either an email address or a phone number",
        path: ["email"],
    });

type RequestCallFormData = z.infer<typeof requestCallSchema>;

const areas = [
    "Ringwood",
    "Bournemouth",
    "Christchurch",
    "Furlong",
    "New Milton",
    "Verwood",
    "Ferndown",
    "Wimborne",
    "Poole",
    "Other",
];

interface RequestCallFormProps {
    compact?: boolean;
}

const RequestCallForm = ({ compact = false }: RequestCallFormProps) => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RequestCallFormData>({
        resolver: zodResolver(requestCallSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            area: "",
            message: "",
        },
    });

    const onSubmit = (data: RequestCallFormData) => {
        console.log("Request a Call submission:", data);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            reset();
        }, 5000);
    };

    if (submitted) {
        return (
            <div className={`bg-white yp-border-thick p-6 sm:p-8 text-center ${compact ? "" : "max-w-xl mx-auto"}`}>
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-yp-dark mb-2">
                    Thank You!
                </h3>
                <p className="text-yp-dark/70 font-heading text-sm">
                    We'll get back to you shortly. In the meantime, you can call us directly:
                </p>
                <a
                    href="tel:07387777202"
                    className="inline-flex items-center gap-2 mt-4 bg-yp-dark text-white px-6 py-3 font-heading font-bold tracking-wider hover:bg-black transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    07387 777202
                </a>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-white yp-border-thick ${compact ? "p-4 sm:p-6" : "p-6 sm:p-8 max-w-xl mx-auto"}`}
        >
            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <User className="w-3.5 h-3.5" />
                        Your Name *
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        Email Address
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        Phone Number
                    </label>
                    <input
                        {...register("phone")}
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                    <p className="text-[10px] text-yp-dark/50 mt-1 font-heading">
                        * Please provide either an email or phone number
                    </p>
                </div>

                {/* Area */}
                <div>
                    <label className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        Your Area
                    </label>
                    <select
                        {...register("area")}
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30 appearance-none cursor-pointer"
                    >
                        <option value="">Select your area</option>
                        {areas.map((area) => (
                            <option key={area} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                {!compact && (
                    <div>
                        <label className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                            <MessageSquare className="w-3.5 h-3.5" />
                            Message (Optional)
                        </label>
                        <textarea
                            {...register("message")}
                            rows={3}
                            placeholder="Tell us about your journey..."
                            className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30 resize-none"
                        />
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-yp-dark text-white font-heading font-bold text-sm tracking-[0.15em] uppercase py-3.5 hover:bg-black transition-colors mt-2"
                >
                    <Send className="w-4 h-4" />
                    Request a Call Back
                </button>
            </div>
        </form>
    );
};

export default RequestCallForm;

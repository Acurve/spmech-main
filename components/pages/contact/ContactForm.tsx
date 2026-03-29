"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BACKEND_URL } from "@/constants/backendUrl";
import { cn } from "@/lib/utils";
import contactFormSchema, { contactFormSchemaType } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader, IconSend } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";


const ContactForm = ({ className = "" }: { className?: string }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<contactFormSchemaType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: undefined,
            message: ""
        }
    });

    const onSubmit = async (data: contactFormSchemaType) => {
        const toastId = toast.loading("Submitting your inquiry...");

        try {
            const payload = {
                ...data,
                service: "General Inquiry"
            };

            const response = await fetch(`${BACKEND_URL}/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            toast.success("Message sent successfully!", {
                id: toastId,
                description: "Our team will get back to you shortly."
            });

            reset();
        } catch (error) {
            toast.error("Failed to send message.", {
                id: toastId,
                description: "Please try again later or contact us directly."
            });
            console.error("Form submission error:", error);
        }
    };

    const inputClasses = "w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50/50 transition-all duration-300 focus:bg-white focus:border-brand! focus:ring-4 focus:ring-brand/10 hover:border-gray-300 placeholder:text-gray-400 font-medium text-gray-900";

    return (
        <div className={cn("bg-white p-8 md:p-10 flex h-full shadow-2xl shadow-gray-200/50 border border-gray-100", className)}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full w-full justify-between gap-8">

                <div className="space-y-6">
                    {/* ROW 1: Name & Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 ml-2">Full Name</label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="John Doe"
                                    className={inputClasses}
                                />
                            )}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm ml-2 font-medium">{errors.name.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 ml-2">Email Address</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="name@example.com"
                                    className={inputClasses}
                                />
                            )}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm ml-2 font-medium">{errors.email.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ROW 2: Phone Number */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 ml-2">Phone Number</label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field: { onChange, value, ...field } }) => (
                                <Input
                                    {...field}
                                    type="number"
                                    value={value || ""}
                                    onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
                                    placeholder="e.g. +91 98765 43210"
                                    className={inputClasses}
                                />
                            )}
                        />
                        <AnimatePresence>
                            {errors.phoneNumber && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm ml-2 font-medium">{errors.phoneNumber.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ROW 3: Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 ml-2">Project Details</label>
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    rows={6}
                                    placeholder="Tell us about your technical specifications, timeline, and any special requirements..."
                                    className={cn(inputClasses, "resize-none h-40 rounded-2xl")}
                                />
                            )}
                        />
                        <AnimatePresence>
                            {errors.message && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm ml-2 font-medium">{errors.message.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex h-14 rounded-full bg-brand items-center justify-center gap-2 text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_8px_25px_rgb(249,115,22,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                    {isSubmitting ? (
                        <>
                            <IconLoader className="w-5 h-5 animate-spin" />
                            Processing Request...
                        </>
                    ) : (
                        <>
                            <IconSend className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            Send Inquiry
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
export default ContactForm
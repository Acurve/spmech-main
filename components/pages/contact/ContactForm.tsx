"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import countryCodes from "@/constants/CountryCodes";
import { cn } from "@/lib/utils";
import contactFormSchema, { contactFormSchemaType } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader, IconSend } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";


const ContactForm = ({className=""}:{className?:string}) => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        control,
        handleSubmit,

        formState: { errors, isSubmitting }
    } = useForm<contactFormSchemaType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            countryCode: "+91",
            phone: "",
            message: ""
        }
    });


    const onSubmit = async (data: contactFormSchemaType) => {
        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted successfully:", data);
        setIsSuccess(true);

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className={cn("bg-background p-8 flex h-full", className)}>
            <form onSubmit={handleSubmit(onSubmit)} className="gap-6 flex flex-col h-full">

                {/* ROW 1: Name & Email */}
                <div className="grid grid-cols-1  gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="John Doe"
                                    className={`w-full px-5 py-5 rounded-full border transition-colors focus:border-brand! active:border-brand focus:outline-none`}
                                />

                            )}
                        />

                        <AnimatePresence>
                            {errors.name && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm mt-1">{errors.name.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="name@example.com"
                                    className={`w-full px-5 py-5 rounded-full border transition-colors focus:border-brand! active:border-brand focus:outline-none`}
                                />
                            )}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-sm mt-1">{errors.email.message}</motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ROW 2: Phone */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <div className="flex gap-3">
                        <Controller
                            name="countryCode"
                            control={control}
                            render={({ field }) => (
                                <Select {...field} value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-max p-5 rounded-full" >

                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                countryCodes.map((country, index) => (

                                                    <SelectItem key={`countryCode-${index}`} value={country.code}>{country.code}</SelectItem>
                                                ))
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder=""
                                    className={`w-full px-5 py-5 rounded-full border transition-colors focus:border-brand! active:border-brand focus:outline-none`}
                                />
                            )}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.phone && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-sm mt-1">{errors.phone.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>



                {/* ROW 3: Message */}
                <div className="space-y-2">
                    <label className="text-sm font-medium ">Project Details</label>
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                rows={10}
                                placeholder="Tell us about your technical specifications, timeline, and any special requirements..."
                                className={`w-full px-5 py-5 rounded-2xl border transition-colors focus:border-brand! active:border-brand focus:outline-none`}
                            />
                        )}
                    />
                    <AnimatePresence>
                        {errors.message && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-sm mt-1">{errors.message.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex mt-auto h-13 rounded-full bg-brand items-center justify-center gap-2 text-background font-medium  disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-md shadow-brand/20 cursor-pointer hover:bg-brand/90 duration-300"
                >
                    {isSubmitting ? (
                        <>
                            <IconLoader className="w-5 h-5 animate-spin" />
                            Processing Request...
                        </>
                    ) : (
                        <>
                            <IconSend className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
export default ContactForm
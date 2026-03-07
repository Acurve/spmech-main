import * as zod from 'zod'
const contactFormSchema = zod.object({
    name: zod
        .string()
        .min(2, { error: "Name must be at least 2 characters." }),

    email: zod
        .string()
        .email({ error: "Please enter a valid email address." }),

    countryCode: zod
        .string()
        .min(1, { error: "Required" }),

    phone: zod
        .string()
        .min(7, { error: "Please enter a valid phone number." }).regex(/^[0-9]+$/, "Only numbers allowed"),

    message: zod
        .string()
        .min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message is too long." })
});


export default contactFormSchema

export type contactFormSchemaType = zod.infer<typeof contactFormSchema>

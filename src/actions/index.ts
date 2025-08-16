import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const server = {
    submit1: defineAction({
        accept: 'form',
        input: z.object({
            email_address: z.string().email(),
            privacy: z.boolean(),
        }),
        handler: async (formData) => {
            console.log("inside handler")
            console.log("formData:" + formData)
            const { data, error } = await supabase
                .from('AddressBook')
                .insert([
                    { email_address: formData.email_address, privacy_statement: formData.privacy },
                ])
                .select()

            if (error) {
                console.error(error)

            }
            if (data) {
                console.log(data)
            }
        },
    })
}
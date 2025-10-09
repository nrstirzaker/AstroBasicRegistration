import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const server = {
    register: defineAction({
        accept: 'form',
        input: z.object({
            //title: z.string(),
            //first_name:z.string({message: 'First name is required'}).optional(),
            //surname:z.string(),
            //house_number_name:z.string({message: 'House number is required'}),
            //street:z.string(),
            //village:z.string(),
            //town:z.string(),
            //post_code:z.string(),
            //membership:z.enum(['Follower','Participant','Activist']),
            no_email_address: z.boolean().optional(),
            //ways_to_help:z.string(),
            //privacy_statement: z.boolean(),
            email_address: z.string().optional()
        }).refine(    data => {
            //throw new Error("got ere");
                console.log('no_email_address', data.no_email_address);
                console.log('email_address', data.email_address);
                if (data.no_email_address) {
                    return data.email_address === undefined;
                }

                return data.email_address !== undefined;
            },
            () => ({
                path: ['email_address'],
                message: '`email_address` field is required for the `web-dev` category',
            })),

        handler: async (formData) => {
            console.log("inside handler")
            console.log("formData:" + formData)
            const { data, error } = await supabase
                .from('AddressBook')
                .insert([
                    {
                        email_address: formData.email_address,
                        title: formData.title,
                        first_name: formData.first_name,
                        family_name:formData.surname,
                        house_number_or_name:formData.house_number_name,
                        street:formData.street,
                        village:formData.village,
                        town:formData.town,
                        post_code:formData.post_code,
                        membership:formData.membership,
                        ways_to_help:formData.ways_to_help,
                        privacy_statement: formData.privacy_statement
                    },
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
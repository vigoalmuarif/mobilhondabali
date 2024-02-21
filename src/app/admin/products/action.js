'use server'

import {z} from "zod"

const schema = z.object({
    typeName : z.string({invalid_type_error : 'Invalid Type Name'}).min(1, 'Harap diisi.')
})

export default async function CreateProduct(FormData){
    const validatedFields = schema.safeParse({
        typeName : FormData.get('typeName')
    })

     // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}


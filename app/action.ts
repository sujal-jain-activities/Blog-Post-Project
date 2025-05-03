'use server'
import React from 'react'
import { prisma } from './utils/dp'
import { get } from 'http'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export const  handlesub = async(formData:FormData) => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user) {
        return redirect('/')
    }

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const imageUrl = formData.get('Url') as string
        const data = await prisma.post.create({
            data:{
                title:title,
                content:content,
                imgUrl:imageUrl,
                authorId:user?.id as string,
                authorImage:user?.picture as string,
                authorName:user?.given_name as string,
            }
        })

    revalidatePath('/')

  return redirect('/dashboard')
}

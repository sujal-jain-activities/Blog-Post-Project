import { prisma } from '@/app/utils/dp'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const getData = async (id:string)=>{
    const data = await prisma.post.findUnique({
        where:{
            id:id,
        }
    })
    if(!data){
        return notFound()
    }
    return data
}
type Params = Promise<{id:string}>
const IDpage = async ({params}:{params:Params}) => {
    const {id} = await params
    const data = await getData(id)
  return (
    <div className='flex flex-col  items-center justify-center h-screen'>
        <div className='w-[65rem] h-screen  flex flex-col mt-10'>
            <div className='mb-10'>
            <Link href='/dashboard' className={buttonVariants({variant:'secondary'})}>Back to Dashboard</Link>
            </div>
            <div className=''>
            <h1 className='text-3xl font-bold text-left'>{data?.title}</h1>
            <div className='flex items-center mb-10 gap-5 mt-5'>
                <div className=' w-10 h-10 relative rounded-full overflow-hidden'>
                <Image src={data.authorImage} alt={data.authorName} fill/>
                </div>
                <h2 className='text-xl font-bold'>{data.authorName}</h2>
                <p className='text-md text-gray-500'>{new Date(data.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
                <Image src={data.imgUrl} alt='Image for blog' width={1000} height={500} className='object-cover w-full h-96 rounded-lg mb-10' unoptimized/> 
            </div>
            <p className='text-xl '>{data?.content}</p>
            </div>
        </div>
        
    </div>
  )
}

export default IDpage
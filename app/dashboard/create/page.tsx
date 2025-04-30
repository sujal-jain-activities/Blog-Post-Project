import { handlesub } from '@/app/action'
import Submithandler from '@/components/general/Submithandler'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
        <Card className='bg-zinc-950 w-[35rem] mt-20 border-none' >
            <CardHeader>
                <CardTitle className='text-white text-2xl'>Create Post</CardTitle>
                <CardDescription>Create a new Post to share it with the world</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col space-y-4' action={handlesub}>
                    <div className='flex flex-col space-y-4'>
                        <Label className='text-white'>Titles</Label>
                        <Input name='title' required placeholder='Title' className='text-white'/>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <Label className='text-white'>Content</Label>
                        <Textarea name='content' required placeholder='Content' className='text-white'/>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <Label className='text-white'>Image URL</Label>
                        <Input name='Url' required placeholder='URL' className='text-white'/>
                    </div>
                    <div className='mt-40 mx-auto '>
                    <Submithandler/>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default page
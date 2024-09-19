"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Registerpage() {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 bg-cover bg-center' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/04/11/08/30/teamwork-3309829_1280.jpg")' }}></div>
      <div className='w-2/3 flex items-center justify-center p-8 bg-slate-50'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Create an account</CardTitle>
            <CardDescription>Provide your details</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="your-name">Your name</Label>
                  <Input id="your-name" type="text" placeholder="First Last" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <p>By signing up I agree to the <Link href="#" className='text-blue-500 underline'>terms & conditions</Link> and <Link href="#" className="text-blue-500 underline">privacy policy</Link></p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 mt-auto">
            <Button className="w-full" style={{ background: 'linear-gradient(to right, #000DFF, #000899)', color: 'white' }}>Create An Account</Button>
            <Button className="w-full flex items-center justify-center space-x-2" style={{ background: 'linear-gradient(to right, #353535, #202020)', color: 'white' }}>
              <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Login With Google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </Button>
            <p>Already an Account? <Link href="/login" className='text-blue-500'>Sign In.</Link></p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Registerpage

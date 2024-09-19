"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

function Loginpage() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 bg-cover bg-center' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/02/03/07/37/child-5976952_1280.jpg")' }}></div>
            <div className='w-2/3 flex items-center justify-center p-8 bg-slate-50'>
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold">Welcome Back!</CardTitle>
                        <CardDescription>Let's learn together and grow! Join us on this journey of discovery and shared knowledge.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type='email' placeholder="Enter your email" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="Enter your password" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">Remember me</Label>
                                    </div>
                                    <Link href="#" className="text-blue-500 hover:underline">Forgot Password?</Link>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button className="w-full" style={{ background: 'linear-gradient(to right, #000DFF, #000899)', color: 'white' }}>Sign in</Button>
                        <Button className="w-full flex items-center justify-center space-x-2" style={{ background: 'linear-gradient(to right, #353535, #202020)', color: 'white' }}>
                            <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Login With Google" className="w-5 h-5" />
                            <span>Continue with Google</span>
                        </Button>
                        <p className="text-center text-sm">
                            If you don't have an account, <Link href="/register" className="text-blue-500">create one.</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Loginpage

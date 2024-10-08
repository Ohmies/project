"use client"; // ทำให้คอมโพเนนต์นี้เป็น Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { registerAction } from '@/lib/actions/register.actions';
import { set } from 'zod';

function Registerpage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState(''); // state สำหรับ confirm password
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // หยุดการส่งฟอร์ม
    setError(''); // เคลียร์ข้อผิดพลาดก่อนหน้า
    setSuccess(''); // เคลียร์ข้อความสำเร็จก่อนหน้า

    // ตรวจสอบรหัสผ่านว่าเหมือนกันไหม
    if (pin !== confirmPin) {
      setError('Passwords do not match');
      return;
    }

    // ตรวจสอบให้แน่ใจว่าทุกฟิลด์ถูกกรอก
    if (!username || !email || !pin || !confirmPin) {
      setError('Please complete all fields');
      return;
    }

    try {
      // เรียกใช้ API เพื่อลงทะเบียน
      const res = await fetch('http://localost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, pin }),
      });

      if (res.ok) {
        setSuccess('Registration successful!'); // แจ้งเตือนเมื่อสำเร็จ
        setUsername(''); // รีเซ็ตฟิลด์
        setEmail(''); 
        setPin('');
        setConfirmPin('');
      } else {
        setError('An error occurred during registration'); // แสดงข้อความข้อผิดพลาด
      }

    } catch (error) {
      console.log('An error occurred:', error);
      setError('An error occurred during registration.'); // แจ้งเตือนถ้ามีข้อผิดพลาด
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="your-name">Your name</Label>
                    <Input
                      id="your-name"
                      type="text"
                      placeholder="First Last"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPin}
                      onChange={(e) => setConfirmPin(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  {success && <p className="text-green-500">{success}</p>}
                  <p>
                    By signing up I agree to the <Link href="#" className='text-blue-500 underline'>terms & conditions</Link> and <Link href="#" className="text-blue-500 underline">privacy policy</Link>
                  </p>
                </div>
                <Button type="submit" className="w-full mt-4" style={{ background: 'linear-gradient(to right, #000DFF, #000899)', color: 'white' }}>
                  Create An Account
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-auto">
              <Button className="w-full flex items-center justify-center space-x-2" style={{ background: 'linear-gradient(to right, #353535, #202020)', color: 'white' }}>
                <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Login With Google" className="w-5 h-5" />
                <span>Continue with Google</span>
              </Button>
              <p>Already have an account? <Link href="/login" className='text-blue-500'>Sign In.</Link></p>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

export default Registerpage;

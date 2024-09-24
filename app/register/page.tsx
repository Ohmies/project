"use client"; // ทำให้คอมโพเนนต์นี้เป็น Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { registerAction } from '@/lib/actions/register.actions';

function Registerpage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState(''); // state สำหรับ confirm password
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ตรวจสอบให้แน่ใจว่าฟิลด์ทั้งหมดถูกกรอก
    if (!username || !email || !pin || !confirmPin) {
      setError('All fields are required.');
      return;
    }

    // ตรวจสอบให้แน่ใจว่า password และ confirm password ตรงกัน
    if (pin !== confirmPin) {
      setError('Passwords do not match.');
      return;
    }

    // ส่งข้อมูลไปยังฟังก์ชัน registerAction
    const response = await registerAction(username, pin, email);

    if (response.success) {
      setSuccess('Account created successfully!');
      setError(null);
      // ปิดข้อความสำเร็จหลังจาก 3 วินาที
      setTimeout(() => {
        setSuccess(null);
        // นำทางไปยังหน้าลงชื่อเข้าใช้
        router.push('/login');
      }, 3000);
    } else {
      setError(response.error || 'An error occurred.');
      setSuccess(null);
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

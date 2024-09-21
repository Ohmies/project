"use client";

import React from 'react';
import Search from '@/components/shared/seacrh';
import SideNav from '@/components/shared/sidenavbar';
import SideNav2 from '@/components/shared/sidenavbartwo';

function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen relative"> {/* ทำให้ container เป็น relative เพื่อให้ search ใช้ absolute ได้ */}
      <SideNav />
      <div className='flex justify-center'>
        <Search />
      </div>
      <div>
        <SideNav2 />
      </div>
      {/* Banner */}
      <div className="mt-6 w-full max-w-7xl mx-auto p-10 rounded-xl flex flex-col md:flex-row" 
           style={{ background: 'linear-gradient(to right, #0059FF, #DC1317, #FF8800)', color: 'white', zIndex: 10 }}>
        <div>
          <h3 className=''>ONLINE COURSE</h3>
          <h2 className="text-5xl font-bold ">Sharpen Your Skills With <br />Professional Online Courses</h2>
          <button className="mt-4 font-bold py-2 px-4 rounded-xl text-2xl bg-gray-900">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

"use client";

import React from 'react';
import Search from '@/components/shared/seacrh';
import SideNav from '@/components/shared/sidenavbar';
import SideNav2 from '@/components/shared/sidenavbartwo';

function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen"> {/* กำหนดพื้นหลังที่ต้องการ */}
      <SideNav />
      <div className='flex justify-center'>
        <Search />
      </div>
      <div>
        <SideNav2 />
      </div>
    </div>
  );
}

export default Dashboard;

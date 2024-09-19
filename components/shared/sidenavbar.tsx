"use client"

import Link from 'next/link';
import { FaComment, FaBook, FaTasks, FaCog, FaSignOutAlt, FaHome } from 'react-icons/fa';

import { RiShining2Fill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';

const SideNav = () => {
  return (
    <div className="flex flex-col w-64 h-full bg-white fixed">
      {/* Logo Section */}
      <div className="flex items-center justify-center p-4 border-b border-gray-800">
      <Link href="/" >
          <Button className="ml-3 text-2xl font-bold hover:bg-blue-500"><RiShining2Fill className='mr-2'/>COURSUE</Button>
      </Link>
        </div>

      {/* Navigation Section */}
      <div className="flex-grow">
        <ul className="p-4 space-y-4">
          <li>
            <h1 className='text-1xl p-2'>OVERVIEW</h1>
            <Link href="/dashboard" className="flex items-center p-2 hover:bg-blue-100 rounded">
              <FaHome className="text-2xl mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/inbox" className="flex items-center p-2 hover:bg-blue-100 rounded">
              <FaComment className="text-2xl mr-3" />
              Messages
            </Link>
          </li>
          <li>
            <Link href="/lesson" className="flex items-center p-2 hover:bg-blue-100 rounded">
              <FaBook className="text-2xl mr-3" />
              MyCourse
            </Link>
          </li>
          <li>
            <Link href="/task" className="flex items-center p-2 hover:bg-blue-100 rounded">
              <FaTasks className="text-2xl mr-3" />
              Assignments
            </Link>
          </li>
        </ul>
      </div>
      {/* Settings and Logout Section */}
      <div className="p-4 border-t border-gray-800">  
        <ul>
          <li>
            <Link href="/settings" className="flex items-center p-2 hover:bg-blue-100 rounded">
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/login" className="flex items-center p-2 text-red-500 hover:bg-red-100 rounded">
              <FaSignOutAlt className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

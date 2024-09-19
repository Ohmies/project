import Image from "next/image";
import { VscAccount, VscBell } from "react-icons/vsc";

const SideNav2 = () => {
  return (
    <div className="flex flex-col w-64 h-full bg-white text-black fixed right-0 top-0">
      <div>
        <div className="flex items-center justify-between mt-4 ml-5 mr-5">
          <h1 className="text-xl">Your Profile</h1>
        </div>
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-5">
          <div className="relative w-28 h-28">
            <Image
              src="/images/perapat.jpeg"
              alt="Profile Picture"
              layout="fill" // ใช้ layout fill เพื่อให้รูปภาพขยายเต็มขนาดของ parent element
              objectFit="cover" // ปรับให้รูปภาพเต็มขนาดของ container โดยไม่เสียสัดส่วน
              className="rounded-full"
            />
          </div>
          {/*Under profie Text*/}
          <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-center'>Hello Perapat</h1>
            <p className='mt-2 text-center text-gray-500'>Continue your Journey And Achieve Your Taget</p>
            <div className='flex flex-row space-x-4 mt-4'>
              <VscBell className="text-3xl" />
              <VscAccount className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav2;


import Image from "next/image"

const Navbar = () => {
  return (
    <div className=" bg-[#FFFFFF]">
       <header className="bg-[#FFF3E4] flex justify-between px-6 items-center py-3">
          <div>
            <Image src='/logo1.png' alt="logo1" width={100} height={100}/>
          </div>
           <nav className="flex gap-10 items-center text-semibold">
              <ul className="flex gap-8 items-cente text-gray-700" >
                <li className="hover:border-b-amber-600 hover:border-b-2 transition-all duration-200">Home</li>
                <li className="hover:border-b-amber-600 hover:border-b-2 transition-all duration-200">Careers</li>
                <li className="hover:border-b-amber-600 hover:border-b-2 transition-all duration-200">Blog</li>
                <li className="hover:border-b-amber-600 hover:border-b-2 transition-all duration-200">About Us</li>
              </ul>
               <div className="flex gap-5">
              <button className="bg-white px-4 py-2 rounded-full text-gray-500 hover:scale-105 transform transition-all duration-300">Login</button>
              <button className="bg-[#F48C06] px-4 py-2 rounded-full text-white hover:scale-105 transform transition-all duration-300" >Sign Up</button>
               </div>
           </nav>
       </header>
    </div>
  )
}

export default Navbar

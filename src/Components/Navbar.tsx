import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar () {
    return(<div >
        <nav className="bg-black  text-white h-40 py-2 px-3  flex justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <li><Link href={""}> <button > <img src="pk wheels.png" alt="logo" className="h-12 w-10000 "  /></button></Link></li>
                <h1 className="text-2xl font-semibold">
                    
                </h1>

            </div>
            <div>
                <ul className="flex space-x-5">
                    <li><Link href="/usedcars" className="hover:text-red-700">Used Cars</Link></li>
                    <li><Link href="/newcars" className="hover:text-red-700">New Cars</Link></li>
                    <li><Link href="/bikes" className="hover:text-red-700">Bikes</Link></li>
                    <li><Link href="/Auto Store" className="hover:text-red-700">Auto Store</Link></li>
                    <li><Link href="/Videos" className="hover:text-red-700">Videos</Link></li>
                    <li><Link href="/ Forums" className="hover:text-red-700">Forums</Link></li>
                    <li><Link href="/Blog" className="hover:text-red-700">Blog</Link></li>
                    <li><Link href="More" className="hover:text-red-700">More</Link></li>
                </ul>
            </div>
            <div>
            <button className="hover:text-red-700"> Post and Add</button>                    
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </nav>

    </div>
)
}
        
    export default Navbar

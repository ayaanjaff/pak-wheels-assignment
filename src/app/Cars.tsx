import React from "react"
import Link from "next/link"
import Image from "next/image"




export default function Cars (){
    return(
      <div className='flex flex-row space-x-1'>
      <li > <Link href={"./Suzuki"}> <img className='max-w-xl h-60 hover:scale-110 duration-500 transition-transform' src="Suzuki_Alto_-_PNG.png" alt="" /></Link></li>
      <p className="mt-2 text-center text-lg  gap-2 space-x-2 text-zinc-700 font-bold">Toyota Corolla price</p>
  
     <li> <button><img  className='max-w-2xl h-60 hover:scale-110 duration-500 transition-transform' src="Corolla-X-Cars-Cropped-Pictures-for-Website.jpg" alt="corolla" /></button></li>
     <p className="mt-2 text-end text-lg gap-2 space-x-2 text-zinc-700 font-bold ">Honda City Prices</p>
  
     <li> <button> <img className='max-w-2xl h-60 hover:scale-110 duration-500 transition-transform'  src="Honda_City_Front.jpg" alt=" honda city" /> </button></li>
     <p className="mt-2 text-center text-lg  gap-2 space-x-2 text-zinc-700 font-bold">Honda civic prices</p>
  
     <li >  <button> <img className='max-w-2xl h-60 hover:scale-110 duration-500 transition-transform' src="Cover.jpg" alt="toyota" /></button>  </li>
  <p className="mt-2 text-center text-lg">Honda civic prices</p>
  </div>
  )}
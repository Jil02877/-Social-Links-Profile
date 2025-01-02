import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className='md:w-[35%] bg-gray-900'>
       <div className='flex justify-center'>
       <Image
          src="/jil.jpeg"
          alt="Jil Patel"
          width={128} height={128}
          className="rounded-full object-cover mt-5"
        />
       </div>
       <div className='flex flex-col justify-center items-center m-3 gap-1'>
        <h1 className='mt-2 text-2xl font-bold'>Jil Patel</h1>
        <h4 className='text-sm font-semibold text-yellow-200'>Gujarat,India</h4>
       </div>
       <div className='flex justify-center text-xs'>
        <p>&quot;Full-Stack Developer and Avid reader&quot;</p>
       </div>
       <div className='flex flex-col justify-center items-center m-4 gap-7'>
        <button className='w-[75%] p-3 hover:bg-yellow-500 border rounded-lg bg-gray-800'><Link href="https://github.com/Jil02877/Jil02877">GitHub</Link></button>
        <button className='w-[75%] p-3 hover:bg-yellow-500 border rounded-lg bg-gray-800'><Link href="https://www.linkedin.com/in/jil-patel-22a958250/">Linkdin</Link></button>
        <button className='w-[75%] p-3 hover:bg-yellow-500 border rounded-lg bg-gray-800'><Link href="https://www.instagram.com/jil_280/">Instagram</Link></button>
        <button className='w-[75%] p-3 hover:bg-yellow-500 border rounded-lg bg-gray-800'><Link href="https://x.com/home">X</Link></button>
       </div>
    </div>
  )
}

export default Card

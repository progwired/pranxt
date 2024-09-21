import Image from 'next/image'
import React from 'react'
import homeImg from "@/public/home.jpg"

function HomePage() {
  return (
    <div>
      <h3 className='text-white text-3xl capitalize'>
        home page
      </h3>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt='Car Factory'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default HomePage

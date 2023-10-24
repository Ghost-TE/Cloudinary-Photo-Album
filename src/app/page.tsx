'use client'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import React from 'react';
 
type UploadResult = {
  info: {
    public_id: string;
  },
  event:"success",
}


export default function Home() {

  const [Image, setImage] = React.useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">

      <CldUploadButton 
      uploadPreset="jukisld6" 
      onUpload={(result: UploadResult) => {
       setImage(result.info.public_id)

      }}
      className='text-white'/>
     {
      Image&&
      <CldImage
      width="960"
      height="600"
      src={Image}
      tint="70:blue:green:purple"
      sizes="100vw"
      alt="Description of my image"
    />
     }

    </main>
  )
}

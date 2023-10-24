import React from 'react';
import cloudinary from 'cloudinary'
import { AlbumCard } from './album-card';

export type Folder = {name: string, path: string}
export default async function Albums(){

  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders : Folder[];
  }

 return (

         <section className='flex flex-col gap-12'>
           <div className='flex justify-between'>
             <h1 className='text-4xl font-bold'>Albums</h1>
          </div>

         <div className='grid grid-cols-3 gap-4'>
            {folders.map(folder => ( <AlbumCard key={folder.path} folder={folder} />))}
         </div>
        </section>
    )
}
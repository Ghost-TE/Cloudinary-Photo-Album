
import React from 'react';
import cloudinary from 'cloudinary'
import { ForceRefresh } from '@/components/force-refresh';
import AlbumGrid from '../album-grid';
import GalleryGrid from '@/app/gallery/gallery-grid';
import { SearchResult } from '@/app/gallery/page';
import UploadButton from '@/app/gallery/upload-button';




export default async function Gallery({params: {albumName}}:{params:{albumName:string}}){

  const result = await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albumName}`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute() as { resources : SearchResult[] }

  

        return (
            <section className='flex flex-col gap-12'>
                 <ForceRefresh/>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Album {albumName}</h1>
                    <UploadButton/>
                </div>

               <AlbumGrid 
               
               images={result.resources}

               />
            </section>
        )
}
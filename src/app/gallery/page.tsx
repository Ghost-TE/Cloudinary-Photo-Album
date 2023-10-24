
import React from 'react';
import UploadButton from './upload-button';
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '../../components/cloudinary-image';
import { ForceRefresh } from '@/components/force-refresh';
import { Key } from 'lucide-react';
import { ImageGrid } from '@/components/image-grid';
import GalleryGrid from './gallery-grid';
import SearchForm from './search-form';


export type SearchResult = {

  public_id:string;
  tags: string[];
}

export default async function Gallery({searchParams : {search}}:{
  searchParams: {
      search: string
  }
}){

  const result = await cloudinary.v2.search
  .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute() as { resources : SearchResult[] }

  

        return (
            <section className='flex flex-col gap-12'>
                 <ForceRefresh/>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Gallery</h1>
                    <UploadButton/>
                </div>

                <SearchForm initialSearch ={search}/>

               <GalleryGrid images={result.resources} />
            </section>
        )
}

import React from 'react';
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '../../components/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import FavouritesList from './favourites-list';
import { ImageGrid } from '@/components/image-grid';


export default async function Favourites(){

  const result = await cloudinary.v2.search
  .expression('resource_type:image AND tags=favourite')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute() as { resources : SearchResult[] }

        return (
      
            <section className='flex flex-col gap-12'>
              <ForceRefresh/>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Favourites</h1>
                </div>
                  <FavouritesList initialResources={result.resources}/>
            </section>
        )
}
"use client"
import React from 'react';
import { CloudinaryImage } from '../../components/cloudinary-image';
import { ImageGrid } from '@/components/image-grid';
import result from 'postcss/lib/result';
import { SearchResult } from './page';


export default function GalleryGrid({images}: {images:SearchResult[]}){

return (
          
        <ImageGrid 
            images={images}
            getImage={(imageData: SearchResult) => {
            return (
            <CloudinaryImage
            key = {imageData.public_id}
            ImageData = {imageData}
            width = "400"
            height = "300"
            alt = "Image"
                  />
                  )
                }}
                />
        )
}
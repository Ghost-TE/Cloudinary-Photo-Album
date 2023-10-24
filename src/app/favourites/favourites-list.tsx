"use client"
import React, { useEffect } from 'react';
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '../../components/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import { ImageGrid } from '@/components/image-grid';
import result from 'postcss/lib/result';


export default function FavouritesList({initialResources}:{initialResources: SearchResult[]}){

    const[resources, setResources] = React.useState(initialResources);

    useEffect(() => {
        setResources(initialResources); 
    }, [initialResources])

        return (
            <ImageGrid

             images={resources} 
             getImage={(imageData: SearchResult) => {
        return (
             <CloudinaryImage
                key = {imageData.public_id}
                ImageData = {imageData}
                width = "400"
                height = "300"
                alt = "Image"
                onUnHeart = {(unHeartedResources) => {
                    setResources(currentResources => 
                    currentResources.filter(resource => 
                     resource.public_id !== unHeartedResources.public_id
                    )
                )
                 }}
                />
                )
              }}
             />     
        )
}
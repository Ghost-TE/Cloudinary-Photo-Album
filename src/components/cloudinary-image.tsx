'use client'
import Heart from "@/components/Icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavourite } from "../app/gallery/actions";
import React, { useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/Icons/full-heart";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(props: {ImageData: SearchResult,  onUnHeart?: (unHeartedResources: SearchResult) => void} & Omit<CldImageProps, "src">){
    const {ImageData, onUnHeart} = props;
    const[Transition, startTransition] = useTransition();
    const[isFavourite, setIsFavourite] = React.useState(ImageData.tags.includes("favourite"))
   

    return(
        <div className="relative">
            <CldImage
            {...props}
            src={ImageData.public_id}
            />
          {
            isFavourite ?
            <FullHeart 
            onClick={() => {
                onUnHeart?.(ImageData)
                setIsFavourite(false);
                startTransition(() => {
                    setAsFavourite(ImageData.public_id, false)
                })
             
            }}
            className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
            />

            :
            <Heart 
            onClick={() => {
                setIsFavourite(true);
                startTransition(() => {
                    setAsFavourite(ImageData.public_id, true)
                })
             
            }}
            className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"/>
          }
        
        <ImageMenu image = {ImageData}/>
            
        </div>
    )
}

import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMN = 4;
  


export function ImageGrid({images, getImage}:{images:SearchResult[], getImage:(imageData: SearchResult) => ReactNode;}){
    function GetColumn(colIndex: number){
        return images.filter((resource, idx) => idx % MAX_COLUMN === colIndex)
      }
  
    return (
        <div className='grid grid-cols-4 gap-4'>
        {
          [
            GetColumn(0),
            GetColumn(1),
            GetColumn(2),
            GetColumn(3)
          ].map((column, idx) => <div key={idx} className='flex flex-col gap-4'>
         { column.map(getImage)}
        </div>)}
     </div>
    )
}
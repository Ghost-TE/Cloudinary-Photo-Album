"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function Edit({searchParams : {publicId}}:{
    searchParams: {
        publicId: string
    }
})
{
  const[transformation, setTransformation] = useState< undefined | "generative-fill" | "blur" | "gray-scale" | "zoom" | "remove-bg">();
  const [prompt, setPrompt] = useState('');
  const [pendingPrompt, setPendingPrompt] = useState('');
    return (
        <section className='flex flex-col gap-12'>
            
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
            </div>

           <div className="flex gap-4 w-full">
                <Button variant="ghost"  onClick={() => setTransformation(undefined)}>Clear All</Button>
              <div className="flex flex-col gap-4">
                 <Button variant="outline" className="bg-white text-black rounded-xl" onClick={() => {setTransformation("generative-fill"); setPrompt(pendingPrompt)}}>Generative Fill</Button>
                 <Label>Prompt</Label>
                 <Input value={pendingPrompt} onChange={e => setPendingPrompt(e.currentTarget.value)} className="rounded-xl"></Input>
              </div>
                <Button variant="outline" className="bg-white text-black rounded-xl w-36" onClick={() => setTransformation("blur")}>Apply Blur</Button>
                <Button variant="outline" className="bg-white text-black rounded-xl w-36" onClick={() => setTransformation("gray-scale")}>Apply Grayscale</Button>
                <Button variant="outline" className="bg-white text-black rounded-xl w-36" onClick={() => setTransformation("zoom")}>Apply Zoom</Button>
                <Button variant="outline" className="bg-white text-black rounded-xl w-40" onClick={() => setTransformation("remove-bg")}>RemoveBackground</Button>
           </div>

            <div className="grid grid-cols-2 gap-12 ">
                <CldImage 
                src={publicId}
                width={400}
                height={400}
                alt="some image"
                />

                {
                 transformation === "generative-fill" && (
                        <CldImage 
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        fillBackground = {
                            {
                                prompt
                            }
                        }
                        />
                )}

                {
                 transformation === "blur" && (
                        <CldImage 
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        blur = "800"
                        />
                )}

                {
                 transformation === "gray-scale" && (
                        <CldImage 
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        grayscale
                        />
                )}

                {
                 transformation === "zoom" && (
                        <CldImage 
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        zoompan="loop"
                        />
                )}

            {
                 transformation === "remove-bg" && (
                        <CldImage 
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        removeBackground
                        />
                )}

            </div>

        </section>
    )
}
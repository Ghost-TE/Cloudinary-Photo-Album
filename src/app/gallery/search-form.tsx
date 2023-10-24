"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm({initialSearch}:{initialSearch:string}){

    const [tagName,setTagName] = useState(initialSearch ?? "");
    const router = useRouter();

    useEffect(() => {
        setTagName(initialSearch);
    },[initialSearch])

    return(
        <form className="flex flex-col gap-3" onSubmit={(e) => {

             e.preventDefault();
             router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
             router.refresh();
             
        }}>
            <Label htmlFor="tag-name" className="w-full text-md">
              Search by Tag
            </Label>
           <div className="flex gap-3">
           <Input
              onChange={(e) => setTagName(e.target.value)}
              id="tag-name"
              value={tagName}
              defaultValue="EnterName"
              className="col-span-3 border-2 border-white rounded-xl"
            />
            <Button className="bg-white text-black rounded-xl" type="submit">Search</Button>
           </div>
        </form>
    )
}
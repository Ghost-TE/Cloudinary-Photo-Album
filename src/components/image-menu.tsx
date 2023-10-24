import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./Icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import Link from "next/link"
import { Pencil } from "lucide-react"
import { Button } from "./ui/button"

export function ImageMenu({image}:{image: SearchResult}){

    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black">
            <DropdownMenuItem asChild>
                <AddToAlbumDialog image = {image} onClose={() => setOpen(false)}/>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button asChild className="cursor-pointer flex justify-start pl-4">
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`} className="flex gap-5" >
                    <Pencil className="w-5 h-4"/>
                    Edit
                </Link>
              </Button>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}

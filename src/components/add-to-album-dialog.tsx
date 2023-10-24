import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "./Icons/folder-plus"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import { AddImageToAlbum} from "./actions"

export function AddToAlbumDialog({image, onClose}:{image: SearchResult, onClose: () => void}) {

    const [albumName,setAlbumName] = useState("");
    const [open,setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState)
      if(!newOpenState){
        onClose();
      }
   
    }}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex gap-4">
            <FolderPlus/> Add to Album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album name you want to move this image to
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-8">
            <Label htmlFor="name" className="text-right w-24">
              Album Name
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.target.value)}
              id="album-name"
              value={albumName}
              defaultValue="Enter Album Name"
              className="col-span-3 border-double border-4 border-zinc-500"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
          onClick={ async () => {
             onClose()
             setOpen(false)
             await AddImageToAlbum(image, albumName)
        }}
          type="submit" 
        
          className="bg-white text-black rounded-xl">
         Save changes
        </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

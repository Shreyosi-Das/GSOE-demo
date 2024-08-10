import React from 'react'
import { Button } from './components/ui/button'
import user from './assets/user.jpg'
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
"use client"
import { useToast } from "@/components/ui/use-toast"

const App = () => {
  const { toast } = useToast()
  return (
  <div className='outer-contaier w-full flex justify-center items-center h-screen'>
  
  
  {/* ekhane inner contaiber jeta w-fix hoye profile page hobe */}
  <div className="inner-container w-3/4 bg-[#F9F9F9] p-10 shadow-lg rounded-lg max-w-[1024px]">
    <div className="profile flex items-center gap-3">
      <img src={user} alt="" className="w-16 h-16 rounded-full object-cover" />
      <div className="edit-btn">
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="custom">Upload new picture</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </div>
    <div className="input-elements pt-5">
      <div className="input-section-1 grid sm:grid-cols-2 grid-cols-1 gap-4 pb-4">
      <div className="username ">
        <p className='text-[#1D4ED8] font-semibold'>First Name</p>
        <Input className="bg-[#E2E8F0]" />
      </div>
      <div className="username ">
        <p className='text-[#1D4ED8] font-semibold'>Last Name</p>
        <Input className="bg-[#E2E8F0]" />
      </div>
      <div className="username ">
        <p className='text-[#1D4ED8] font-semibold'>Email</p>
        <Input type='email' className="bg-[#E2E8F0]" />
      </div>
      <div className="username ">
        <p className='text-[#1D4ED8] font-semibold'>Mobile Number</p>
        <Input type="number" className="bg-[#E2E8F0]" />
      </div>
      </div>
      <div className="input-section w-full">
        <p className='text-[#1D4ED8] font-semibold'>Address</p>
        <Input className="bg-[#E2E8F0]" />
      </div>

    </div>
    <div className="side-buttons flex justify-end gap-4 w-full pt-4">
      <Button size='custom' variant='custom2'>cancel</Button>
      <Button
      variant="custom2"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
    </div>
    
  </div>
  
  </div>
  )
}

export default App
import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from './ui/badge'
import {  Contact, Mail, Pen } from "lucide-react";
import { Label } from "./ui/label";
import UpdateProfileDialog from "./UpdateProfileDialog"
import { useSelector } from "react-redux";
import AppliedJobTable from "./shared/AppliedJobTable";
import useGetAppliedJobs from "@/Customhooks/useGetAppliedJobs";


//const skills=["Html" , "CSS" , "JavaScript" , "Reactjs" , "C++" ]
const isResume = true; 

const Profile = () => {
    useGetAppliedJobs();
    //for the resume defined true or false
    const[open , setOpen] = useState(false); 
    const { user } = useSelector(store=>store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 cursor-pointer">
              <AvatarImage
                src="https://tse1.mm.bing.net/th?id=OIP.KBuZjyxYAuvYzhryALHh_AHaGw&pid=Api&P=0&h=180"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
        </div>
        <div className="flex items-center gap-3 my-3">
            <Mail/>
            <span className="text-md">{user?.email}</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
            <Contact/>
            <span className="text-md">{user?.phoneNumber}</span>
        </div>

        <div className="my-5">
            <h1 className="font-bold text-md">Skills</h1>
            <div className="flex items-center gap-1 mt-2">
              {
                user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item , index) => (
                    <Badge key="index">{item}</Badge>
                )):
                <span className="font-medium">Not Applicable</span>
              }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className='text-md font-bold'>Resume</Label>
            {
                isResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-700 cursor-pointer hover:underline w-full">{user?.profile?.resumeOriginalName}</a> :
                <span className="font-medium">Not Applicable</span> 
            }
        </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
  )
}     
    
export default Profile;

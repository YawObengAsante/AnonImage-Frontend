import Heading from "@/components/heading";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useState,useLayoutEffect } from "react";
import { copyLink } from "@/lib/utils";
import CopyLinkButton from "@/components/copy-link-button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import axiosInstance from "../axiosInstance";
import { Link } from "react-router-dom";
import {Button} from "@/components/ui/button"

///
// this dashboard should show a users link when  logged in or show a login link to users who have not signed in
/// so we will check local storage for access token it it exist it means the user has logged in


export default function DashboardPage() {
  const [link, setLink] = useState("http://localhost:5173/send-image/1/");
 // <p className="">{`https://anonymous-image-react.onrender.com/send-image/${parseInt(ids)}/`}</p>

 const [ids, setId] = useState("no")
    let locals = localStorage.getItem('access_token')
    const getId = ()=>{
        axiosInstance.get(`api/imaging/dashboard/`,{
            headers:{
        Authorization: 'JWT ' + localStorage.getItem('access_token')
    
    },
        }
        )
        .then((res) =>{
            setId(res.data.id)
        })
        .catch(e=>{
            console.log('login',e);
            console.log("something is wrong")
            
        })
    }

  const handleCopyToClipboard = async () => {
    const success = await copyLink(link);

    // Show toast after we know the copy status
    success
      ? toast("Link copied to clipboard")
      : toast("Copying link failed. Try again later");
  };

  useLayoutEffect(()=>{
    if (locals) {
        getId();
    }
    
    }, [])

  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        <Heading className="text-center mt-3.5 md:mt-6 gradient-text font-bold text-2xl sm:text-3xl md:text-4xl">
          Welcome to Anonymous Image Sharing
        </Heading>

        {
          ids !== "no" ? 
          <>
          <div className="mt-4 sm:mt-6 md:mt-8 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-blue-100 rounded-lg text-center mx-4 sm:mx-0">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-4 sm:mb-6">
            Copy and share the link below to friends to receive images
            anonymously
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 py-3 sm:py-4 bg-white rounded-md px-4 sm:px-6 w-full max-w-2xl mx-auto">
            <p className="text-gray-700 text-sm sm:text-base truncate w-full text-center sm:text-left">
              {link}
            </p>
            <div
              onClick={handleCopyToClipboard}
              className="flex items-center justify-center p-2 rounded-md hover:bg-blue-50 transition-colors"
              aria-label="Copy link"
            >
              <CopyLinkButton />
            </div>
          </div>
        </div>
        <Toaster />
        </>
        :
        <>
        <div className="mt-4 sm:mt-6 md:mt-8 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-blue-100 rounded-lg text-center mx-4 sm:mx-0">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-4 sm:mb-6">
            Sign in or Register to receive image anonymously from friends
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 py-3 sm:py-4 bg-white rounded-md px-4 sm:px-6 w-full max-w-2xl mx-auto">
              <Link to={'/log-in'}>
                 <Button className="bg-blue-100 text-blue-800 hover:bg-blue-200">Log in</Button>
              </Link>

          </div>
        </div>
        
        </>
        }

      </MaxWidthWrapper>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useNavigate,useParams } from "react-router-dom";
import Heading from "@/components/heading";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { copyLink } from "@/lib/utils";
import CopyLinkButton from "@/components/copy-link-button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";





const SendImage = ()=>{

    const [pic,setPic] = useState(null);
    const navigate = useNavigate();
    const {userid} = useParams()
    const subMit = (e)=>{
        e.preventDefault();
        let data = new FormData()
        data.append("image",pic.image[0]);
        axiosInstance.post(`api/imaging/${userid}`,data,{
            headers:{
        'Content-Type':'multipart/form-data',
    },
        })
        .then((res) =>{
        console.log(res);
            navigate('/')
        })
        .catch(e=>{
            console.log('login',e)
            navigate('/login')
        })
        
    }
    const handPic = (e)=>{
        setPic(
            {"image":e.target.files}
        )
    }
    
    return(
        
            
            <div className="min-h-screen">
                  <MaxWidthWrapper>
                    <Heading className="text-center mt-3.5 md:mt-6 gradient-text font-bold text-2xl sm:text-3xl md:text-4xl">
                      Welcome to Anonymous Image Sharing
                    </Heading>
            
                    <div className="mt-4 sm:mt-6 md:mt-8 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-blue-100 rounded-lg text-center mx-4 sm:mx-0">
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-4 sm:mb-6">
                        Send image anonymously without leaving any trace
                      </p>
            
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 py-3 sm:py-4 bg-white rounded-md px-4 sm:px-6 w-full max-w-2xl mx-auto">
                      <form
  onSubmit={subMit}
  className="flex flex-col items-start gap-5 p-6 bg-white shadow-md rounded-xl w-full max-w-sm border border-blue-100"
>
  <label className="w-full">
    <span className="block text-sm font-medium text-blue-700 mb-2">Upload an image</span>
    <input
      type="file"
      accept="image/*"
      required
      name="image"
      onChange={handPic}
      className="block w-full text-sm text-blue-700 border border-blue-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
      file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
    />
  </label>

  <button
    type="submit"
    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
  >
    Post
  </button>
</form>

                      </div>
                    </div>
                    
                  </MaxWidthWrapper>
                </div>
            
        

        

    )
}


export default SendImage;
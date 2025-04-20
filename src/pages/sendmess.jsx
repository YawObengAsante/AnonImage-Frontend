import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "@/components/heading";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

// const navigate = useNavigate();
// const { userid } = useParams();

const SendImage = () => {
  // contains the user id 
  const { userid } = useParams();

  // we will navigate to the landing page right after the image has been sent
 const navigate = useNavigate();

  // set state to handle multiple file uploads
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  // const [, setUploadProgressArray] = useState([]);
   const [totalUploadProgress, setTotalUploadProgress] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // handle single file upload
    if(!file) return

    setUploadStatus("uploading")
    setUploadProgress(0)

    const formdata = new FormData()
    formdata.append("image", file)

    try {
      await axiosInstance.post(`api/imaging/${userid}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
         const progress = progressEvent.total ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0
         setUploadProgress(progress)
        }
      })
      setUploadStatus("success")
      setUploadProgress(100)
      navigate('/')
    } catch (error) {
      setUploadStatus("error");
      setUploadProgress(0);
      console.error(error);
    }


    // below is the code to handle multiple file uploads
    // return out of function early if no file is selected
    // if (!files || files.length === 0) return;

    // setUploadStatus("uploading");
    // setUploadProgressArray(new Array(files.length).fill(0));

    // const promises = files.map((file, index) => {
    //   const formData = new FormData();
    //   formData.append("file", file);

    //   return axiosInstance.post(`api/imaging/${userid}`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       const progress = progressEvent.total
    //         ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         : 0;
    //       return setUploadProgressArray((prevProgress) => {
    //         const newProgress = [...prevProgress];
    //         newProgress[index] = progress;
    //         const totalProgress =
    //           newProgress.reduce((acc, curr) => acc + curr, 0) /
    //           newProgress.length;
    //         setTotalUploadProgress(totalProgress);
    //         return newProgress;
    //       });
    //     },
    //   });
    // });

    // try {
    //   await Promise.all(promises);
    //   setUploadStatus("success");
    //   toast("Files uploaded successfully!")
    // } catch (error) {
    //   setUploadStatus("error");
    //   toast("Files failed upload. Try again!")
    //   console.error(error);
    // }

  };
  const handleChangeEvent = (e) => {
    if (e.target.files) {
      // const filesArray = Array.from(e.target.files);
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        <Heading className="text-center mt-3.5 md:mt-6 gradient-text font-bold text-2xl sm:text-3xl md:text-4xl">
          Welcome to Anonymous Image Sharing
        </Heading>

        <div className="mt-4 sm:mt-6 md:mt-8 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-blue-100 rounded-lg text-center mx-4 sm:mx-0">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-4 sm:mb-6">
            Send image anonymously without leaving any trace
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 w-full max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-5 p-6 bg-white shadow-md rounded-xl w-full max-w-sm border border-blue-100"
            >
              <label className="w-full">
                <span className="block text-sm font-medium text-blue-700 mb-2">
                  Upload an image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  required
                  
                  onChange={handleChangeEvent}
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
          
          <div className="flex flex-col items-start">
          {file && (
              <div className="bg-white mt-5 p-4 rounded-lg text-gray-700 max-w-[400px]">
                <div className="flex justify-center gap-4">
                  <BsFileEarmarkCheck size={25} />
                  <span className="font-semibold">{file.name}</span>
                </div>
              </div>
            )}


        {uploadStatus === "uploading" && (
          <div className="space-y-2">
            <div className="w-full h-2.5 bg-gray-200 rounded-full">
              <div
                className="h-full w-full bg-blue-600 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {uploadProgress}% uploaded
            </p>
            
          </div>
        )}
          </div>
          
     
        </div>
        <Toaster />
      </MaxWidthWrapper>
    </div>
  );
};

export default SendImage;

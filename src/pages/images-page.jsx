import React, { useEffect, useState } from "react";
import ImageCard from "../components/image-card";
import axiosInstance from "../axiosInstance";
import { timeAgo } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

import { lineSpinner} from 'ldrs'

lineSpinner.register()

export default function ImagesPage() {

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);

  
  const deleteImage = (id) => {
    setPost((prevPost) => prevPost.filter((pos) => pos.id !== id));
    delPost(id);
};

const getPost = ()=>{
    axiosInstance.get(`api/imaging/view-image/`,{
        headers:{
    Authorization: 'JWT ' + localStorage.getItem('access_token')

},
    }
    )
    .then((res) =>{
        console.log("successful")
        console.log(res.data)
        setPost(res.data)
        setLoading(false);
    })
    .catch(e=>{
        console.log('login',e)
        //navigate('/login')
    })

}

const delPost = (id)=>{
    axiosInstance.get(`api/imaging/delete-image/${id}`,{
        headers:{
    Authorization: 'JWT ' + localStorage.getItem('access_token')

},
    }
    )
    .then((res) =>{
        console.log("deleted successfully")
        
    })
    .catch(e=>{
        console.log('login',e)
        //navigate('/login')
    })
}

useEffect(()=>{
    getPost();
}, [])


  return (
    <div className="p-10 flex gap-3 flex-wrap">
      {post.map((pos)=>{
                    return (
                    
                    <ImageCard key={pos.id} image={pos.image} time={pos.timestamp} delete={()=>deleteImage(pos.id)}/>
                    
                    )
      })
      }

      <l-linespinner/>
      
    </div>
  )
}

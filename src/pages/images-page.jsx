import React, { useEffect, useState } from "react";
import ImageCard from "../components/image-card";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../components/max-width-wrapper";
import ImagesPageLoader from "../components/images-page-lodaer";
import NoContentAvailable from "../components/no-content-available";


export default function ImagesPage() {

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()
  const user = localStorage.getItem('access_token')


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
      .catch((e) => {
        console.log("login", e);
        setLoading(false);
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


  if (loading) {
    return <ImagesPageLoader />;
  }

  return (
    <MaxWidthWrapper>
      {(post.length === 0 && user) ? (
        <NoContentAvailable
          title="No images to display"
          description="You currently do not have any anonymous images. Send the link on your dashboard to friends to get some pictures to view. :)"
          actionText="Go to dashboard"
          onAction={() => navigate("/dashboard")}
        />
      ) : (
        <div className="p-10 flex gap-3 flex-wrap">
          {post.map((pos) => {
            return (
              <ImageCard
                key={pos.id}
                image={pos.image}
                time={pos.timestamp}
                delete={() => deleteImage(pos.id)}
              />
            );
          })}
        </div>
      )}
      {!user && <NoContentAvailable 
        title="Ooops! Seems like you are not logged in :("
        description="Log in or Sing up to view images!"
        actionText="Log In"
        onAction={() => navigate("/log-in")}
      />}
    </MaxWidthWrapper>
  );
}

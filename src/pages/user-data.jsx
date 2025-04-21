// utils/getUser.js
export function getUser() {
    const raw = localStorage.getItem("userInfo");
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  
  export async function refreshUser() {
    try {
      const res = await axiosInstance.get(`/api/user-info`);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      console.error("Could not refresh user", err);
      return null;
    }
  }


  {/** the code below is how to use getUser on any page */}

  {/**


  import { getUser } from "../utils/getUser";

const user = getUser();

if (user) {
  const link = `https://yourapp.com/share/${user.username || user.id}`;
  // show link
} else {
  // maybe show "loading..." or redirect
}


 */}
// utils/getUser.js
export function getUser() {
    const raw = localStorage.getItem("userInfo");
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  
import axiosInstance from "../axiosInstance";

/**
 * Refreshes user data from the backend and updates localStorage.
 * Returns user data or null on failure.
 */
export const refreshUser = async () => {
  const token = localStorage.getItem("access_token");
  const user_id = localStorage.getItem("user_id");

  
  if (!token) {
    console.warn("No token found in localStorage");
    return;
  }
if(!user_id){
  try {
    const res = await axiosInstance.get("api/imaging/dashboard/", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    const { id, name } = res.data;
    localStorage.setItem("user_id", id);
    localStorage.setItem("user_name", name);

   // console.log("User refreshed:", res.data);

    //return { id, name };
  } catch (error) {
    console.error("Error refreshing user:", error);
    return null;
  }
}
};


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

 /*
npm install crypto-js



import CryptoJS from "crypto-js";

const secretKey = "your-super-secret-key"; // make this strong and unpredictable

// Encrypt function
export const encryptData = (data) => {
  const stringData = typeof data === "string" ? data : JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, secretKey).toString();
};

// Decrypt function
export const decryptData = (cipherText) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData); // or return decryptedData if it was a plain string
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};





// Store data securely
const user = { email: "user@example.com", token: "12345" };
const encrypted = encryptData(user);
localStorage.setItem("user_data", encrypted);

// Retrieve and decrypt data
const stored = localStorage.getItem("user_data");
if (stored) {
  const decrypted = decryptData(stored);
  console.log(decrypted); // { email: "user@example.com", token: "12345" }
}

 */
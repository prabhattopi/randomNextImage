"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
interface AppContextProps {
  closeModal: () => void;
  handleShare: () => void;
  showModal:boolean;
  imageUrl:string
}

export const AppContext = createContext<AppContextProps>({
  closeModal: () => {},
  handleShare: () => {},
  showModal:false,
  imageUrl:""
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl,setImageUrl]=useState("")
  useEffect(()=>{
     function getData() {
     
       fetch('https://picsum.photos/500/300').then(res=>{
           setImageUrl(res.url)
           const afterId = res.url.substring(res.url.indexOf("id/") + 3, res.url.indexOf(".jpg"));
           Cookies.set('image', afterId)
 
           
        
     })
        
      }
      getData()
  },[])
  
  const router=useRouter()
  const handleShare = () => {
    setShowModal(true);

   
  };

  const closeModal = () => {
    setShowModal(false);
  };
//   window.addEventListener("beforeunload",async(event) => {
//  
//     console.log("API call before page reload");
// });
// window.addEventListener("beforeunload", async(event) => {
//     await fetch("https://port-3000-nodejs-brown-mouse-webdevelopertheworldofweb112160.codeanyapp.com/api/image")
//     console.log("API call before page reload");
// });

  return (
    <AppContext.Provider value={{imageUrl, closeModal, handleShare,showModal }}>
      {children}
    </AppContext.Provider>
  );
};

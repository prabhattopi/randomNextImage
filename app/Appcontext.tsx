"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
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
       fetch('https://picsum.photos/500/300').then(res=>setImageUrl(res.url))
        
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

  return (
    <AppContext.Provider value={{imageUrl, closeModal, handleShare,showModal }}>
      {children}
    </AppContext.Provider>
  );
};

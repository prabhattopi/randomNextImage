"use client"
import { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  closeModal: () => void;
  handleShare: () => void;
  showModal:boolean
}

export const AppContext = createContext<AppContextProps>({
  closeModal: () => {},
  handleShare: () => {},
  showModal:false
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider value={{ closeModal, handleShare,showModal }}>
      {children}
    </AppContext.Provider>
  );
};

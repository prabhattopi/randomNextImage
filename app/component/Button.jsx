"use client"
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";
import {
  
    FacebookIcon,
  
    TwitterIcon,
  
    WhatsappIcon,
  
  } from "react-share";
  import { useEffect, useState } from 'react';
  import { usePathname, useRouter } from 'next/navigation';
  import { useContext } from 'react';
  import { AppContext } from '../Appcontext';
  
  export const Button = () => {
    const { showModal,closeModal } = useContext(AppContext);
    const pathname=usePathname()
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      const currentUrl = `${window.location.protocol}//${window.location.host}${pathname}`;
      setImageUrl(currentUrl);
    }, [pathname]);
  
    return (
      showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-100">
          <div className="bg-white rounded-lg p-4 max-w-sm">
            <h2 className="text-xl font-bold mb-4">Share Image</h2>
            <div className="flex flex-col space-y-4">
              <FacebookShareButton url={imageUrl} quote="Check out this random image!">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={imageUrl}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url={imageUrl} title="Check out this random image!">
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      ):<div></div>
    );
  };
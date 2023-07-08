
import { useEffect, useState } from "react";
import "./globals.css"
import { FiShare2 } from "react-icons/fi";
import { Button } from "../app/component/Button";
import { useRouter } from "next/router";

import Head from "next/head";

export default function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router=useRouter()
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    fetch("https://picsum.photos/500/300")
      .then((response) => response.url)
      .then((url) => {
        setImageUrl(url);
        
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
      });
  };

  
  const handleShare = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (imageUrl) {


    return (
      <>
        <Head>
          <title>Random Images</title>
          <meta name="description" content="Check out this random image!" />
          <meta property="og:title" content="Random Images" />
          <meta
            property="og:description"
            content="Check out this random image!"
          />
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content={imageUrl} />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Head>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full sm:max-w-md sm:w-auto">
            <h1 className="text-2xl font-bold mb-4">Random Image Display</h1>
            <img src={imageUrl} alt="Random" className="mb-4" />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleShare}
            >
              Share <FiShare2 className="inline-block ml-1" />
            </button>
          </div>
          {showModal && <Button imageUrl={`${window.location.protocol}//${window.location.host}${router.pathname}`} closeModal={closeModal} />}
        </div>
      </>
    );
  } else {
    return null;
  }
}

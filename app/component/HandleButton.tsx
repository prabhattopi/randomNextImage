
"use client"
import { useContext } from "react"
import { FiShare2 } from "react-icons/fi"
import { AppContext } from "../Appcontext"


export const HandleButton=()=>{
    const {handleShare}=useContext(AppContext)
    return (
      <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleShare}
            >
              Share <FiShare2 className="inline-block ml-1" />
            </button>
    )

}
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/server";
import { getData } from "./getData";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Expolorer | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
 const data=await getData()

  return new ImageResponse(
    (
        <div className="flex flex-col">
           
            <img  src={data.url} alt="random image"/>
          
          
             <div>Random Image</div>
        </div>
   
    ),
    size
  );
}
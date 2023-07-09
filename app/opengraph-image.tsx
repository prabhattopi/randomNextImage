
import { ImageResponse } from 'next/server'

import Image  from "next/image"
import Link from "next/link"

import { getSingleData } from './getData'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Font

// Image generation
export default async function CustomImage() {
 

 const data= await getSingleData();
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <Image  width={300}
      height={200} src={data.url} alt="random Image" />
        <Link href={data.url} passHref>
          <a target="_blank">Random Image</a>
        </Link>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

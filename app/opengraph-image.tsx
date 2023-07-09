import { ImageResponse } from 'next/server'

import Image  from "next/image"
import Link from "next/link"
import { cookies } from 'next/headers'
import { getSingleData } from './getData'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Font

// Image generation
export default async function CustomImage() {
    const cookieStore = cookies()
  // @ts-ignore: Unreachable code error
    const id:string=cookieStore.get('idimage')
    const data= await getSingleData(id);
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

import { ImageResponse } from 'next/server'
import { useContext } from 'react'
import { AppContext } from './Appcontext'
import { getData } from './getData'
 
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
export default async function Image() {
    const {imageUrl}=useContext(AppContext)
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
          flexDirection:"column",
          gap:"20px"
        }}
      >
          <img src={imageUrl} alt=""/>
        About Acme
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
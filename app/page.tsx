
import { HandleButton } from './component/HandleButton';
import { getSingleData } from './getData';
import {Button} from "./component/Button"
//@ts-ignore
export default async function App({ req, res }) {
   

//  await fetch("https://port-3000-nodejs-brown-mouse-webdevelopertheworldofweb112160.codeanyapp.com/api/image")
//   let resp=JSON.stringify(data1)
//   console.log(resp)

  
  let data=await getSingleData()
// let data={url:""}



  return (
    <>
      <main>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full sm:max-w-md sm:w-auto">
            <h1 className="text-2xl font-bold mb-4">Random Image Display</h1>
            <img src={data.url} alt="Random" className="mb-4" />
            <HandleButton />
          </div>
          <Button />
        </div>
      </main>
    </>
  );
}

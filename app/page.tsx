

import { Button } from "./component/Button";
import "./globals.css";
import {getData} from "./getData"
import { HandleButton } from "./component/HandleButton";
export default async function App() {

 const data=await getData()

    
 
    return (
<>
    
<main>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full sm:max-w-md sm:w-auto">
            <h1 className="text-2xl font-bold mb-4">Random Image Display</h1>
            <img src={data.url} alt="Random" className="mb-4" />
           <HandleButton/>
          </div>
         <Button/>
        </div>
        </main>
</>
    );
}

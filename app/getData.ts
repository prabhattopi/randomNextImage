
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';
// async function setCookies(afterId:string){
//     Cookies.set('idimage', afterId)
 
// }
// async function getCookies(){
//     let id=Cookies.get('idimage')
//     console.log(id)
//     return id
 
// }
export async function getData() {
    const res = await fetch('https://picsum.photos/500/300',{ cache: 'no-store' });
    const data = res
 

    return data;
  }

  export async function getSingleData() {
      //@ts-ignore
    let id:{name:string,value:string}=Cookies.get("image")
    const res = await fetch('https://picsum.photos/id/'+id.value, { cache: 'no-store' });
    const data = res
    console.log(data)
    return data;
  }
  
  
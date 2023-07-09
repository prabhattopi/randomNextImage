
import Cookies from 'universal-cookie';

const cookies = new Cookies();
async function setCookies(afterId:string){
    cookies.set('idimage', afterId)
 
}
async function getCookies(){
    let id=cookies.get('idimage')
    return id
 
}
export async function getData() {
    const res = await fetch('https://picsum.photos/500/300');
    const data = res
    const afterId = data.url.substring(data.url.indexOf("id/") + 3, data.url.indexOf(".jpg"));
    await setCookies(afterId)
    return data;
  }

  export async function getSingleData() {
 

    const id=await getCookies()
    const res = await fetch('https://picsum.photos/id/'+id, { cache: 'no-store' });
    const data = res
    return data;
  }
  
  
import { cookies } from 'next/headers'

export async function getData() {
    const res = await fetch('https://picsum.photos/500/300', { cache: 'no-store' });
    const data = res
  
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('id', data.url);
    // }
    const afterId = data.url.substring(data.url.indexOf("id/") + 3, data.url.indexOf(".jpg"));
    cookies().set('idimage', afterId)
    return data;
  }

  export async function getSingleData(id:string) {
    const res = await fetch('https://picsum.photos/id/'+id, { cache: 'no-store' });
    const data = res
  
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('id', data.url);
    // }
    // const afterId = data.url.substring(data.url.indexOf("id/") + 3, data.url.indexOf(".jpg"));
    // cookies().set('idimage', afterId)
    return data;
  }
  
  
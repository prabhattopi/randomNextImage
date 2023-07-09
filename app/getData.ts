export async function getData() {
    const res = await fetch('https://picsum.photos/500/300', { cache: 'no-store' });
    const data = res
  
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('id', data.url);
    // }
  
    return data;
  }
  
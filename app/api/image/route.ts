import { getData } from '@/app/getData';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { setCookie } from 'cookies-next';
import {serialize} from "cookie"
import { json } from 'stream/consumers';

// @ts-ignore
export async function GET(request:Request) {
    let data=await getData();
  
      // @ts-ignore
      const afterId = data.url.substring(data.url.indexOf("id/") + 3, data.url.indexOf(".jpg"));
      const serialized=serialize("image",afterId)

//       console.log(data);
//   setCookie('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 });
//   getCookie('key', { req, res });
//   getCookies({ req, res });
//   deleteCookie('key', { req, res });
const response={
    message:"OK",

}
return new Response(JSON.stringify(response),{
    status:200,
    headers:{"Set-Cookie":serialized}
})
}
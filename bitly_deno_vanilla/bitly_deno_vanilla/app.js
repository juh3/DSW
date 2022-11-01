import { serve } from "./deps.js";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as mainService from "./services/mainService.js"
import { open } from "https://deno.land/x/opener/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const redirectTo = async (string) => {
  const url = await mainService.getUrl(string);
  return url
};

const handleRequest = async (request) => {
  const url = new URL(request.url);
  const path = url.pathname
  const parts = path.split("/")
  console.log(parts)
  if(url.pathname === "/" && request.method ==="GET"){
    return new Response(await renderFile("main.eta"), responseDetails)
  }

  else if(url.pathname === "/" && request.method ==="POST"){
    const formData = await request.formData()
    const formUrl = formData.get("url")
    const data = await mainService.postFormData(formUrl)

   
    return new Response(await renderFile("main.eta", data), responseDetails)
  }

  else if(parts[1].length === 6 && request.method ==="GET"){
    console.log("im here")
    const newUrl = await redirectTo(parts[1])
    console.log(newUrl)
    return await open(newUrl)
  }
};

serve(handleRequest, { port: 7777 });

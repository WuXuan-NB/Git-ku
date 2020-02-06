function jsonp( url,data,callback){
   let script =document.createElement("script")

   url + '&wd'+ data;
   ur += '&cb='+ callback

   script.setAttribute('scr',url)
   document.querySelector('head').appendChild(script)
}
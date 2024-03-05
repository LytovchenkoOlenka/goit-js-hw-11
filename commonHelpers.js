import{i as l,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=";function y(n){const r="42691654-856ee9298c14d5c2eed97729f",t=" https://pixabay.com/api/",o=document.querySelector(".loader");return o.style.display="block",fetch(`${t}?key=${r}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(`Image error! ${e.statusText}`);return e.json()}).then(e=>(o.style.display="none",e.hits.length===0&&l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:i}),e)).catch(e=>{l.error({title:"",message:`Error${e}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:i}),o.style.display="none"})}function d(n){return n.hits.map(({largeImageURL:r,webformatURL:t,tags:o,likes:e,views:s,comments:a,downloads:u})=>`<li class="gallery-item" >
      <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${t}" alt="${o}"/>
      </a>
      <div class="gallery-info-container">
          <p class="gallery-info">
              <span class="gallery-info-span">Likes: <span class="numbers-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Views: <span class="numbers-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Comments: <span class="numbers-span">${a}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${u}</span>
              </span>    
          </p>
      </div>
  </li>`).join("")}const A={captionsData:"alt",captionDelay:250},f=new m(".gallery-item a",A);f.on("show.simplelightbox");const c=document.querySelector(".form"),p=document.querySelector(".gallery"),g=document.querySelector(".loader");g.style.display="none";c.addEventListener("submit",h);function h(n){n.preventDefault();const r=c.elements.query.value.trim();if(p.innerHTML="",g.style.display="block",r===""){alert("Please enter a keyword to search for an image");return}y(r).then(t=>{p.innerHTML=d(t),f.refresh(),c.reset()}).catch(t=>{l.error({title:"",message:`Error${t}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:i})})}
//# sourceMappingURL=commonHelpers.js.map

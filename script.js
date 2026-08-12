document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#menu").addEventListener("click",()=>document.querySelector("#nav").classList.toggle("open"));

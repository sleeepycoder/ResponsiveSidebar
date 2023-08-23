const dark =document.querySelector(".dark");
const night =document.querySelector(".night");
const light =document.querySelector(".light");

const sidebar =document.querySelector(".sidebar");
const activeListItems =document.querySelector(".list-items.active");

dark.addEventListener("click",()=>{
sidebar.className ="sidebar";
activeListItems ="list-items active"
})

night.addEventListener("click",()=>{
    sidebar.className ="sidebar night";
    activeListItems ="list-items active night"
    })

    light.addEventListener("click",()=>{
        sidebar.className ="sidebar light";
        activeListItems ="list-items active light"
        })
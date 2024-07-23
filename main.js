


let lis =document.querySelectorAll("ul li")
let div =document.querySelector(".experiment")




if (window.localStorage.getItem("color"))
    {

    div.style.backgroundColor=window.localStorage.getItem("color")
lis.forEach((li) => {

    li.classList.remove("active")
})
document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}else{
    console.log("no")
}



lis.forEach((li)=>{
    li.addEventListener('click', (e)=>{
lis.forEach((li) => {

        li.classList.remove("active")
})
e.currentTarget.classList.add("active")
window.localStorage.setItem("color",e.currentTarget.dataset.color)
div.style.backgroundColor=e.currentTarget.dataset.color

    })

})

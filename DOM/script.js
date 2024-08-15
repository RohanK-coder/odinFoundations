const container = document.querySelector("#container");
const content = document.createElement("div");
content.setAttribute("style","color:red;background:yellow");
content.setAttribute("id","domDIV");
content.classList.add("content")
content.textContent = "Hello World";
container.appendChild(content);


// Odin Exercise

const para = document.createElement("p");
para.textContent = "Hey I'm Red !!";
para.setAttribute("style","color:red");
para.classList.add("para");
container.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "I'm a blue H3";
heading.setAttribute("style","color:blue");
heading.classList.add("heading");
container.appendChild(heading);


const btn = document.querySelector("#call-back");
btn.addEventListener("onmouseover",function(e){
    console.log(e.target);
    console.log(event.type)
})
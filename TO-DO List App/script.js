
const headings = document.getElementById('heading');
const add = document.getElementById('add');
const del = document.getElementById('delete');
const list = [];
const elements = document.getElementById('list');

headings.addEventListener("mouseenter",() =>{
    headings.style.color = "red";
    headings.style.fontSize="x-large";
})
headings.addEventListener("mouseleave",() =>{
    headings.style.color = "white";
    headings.style.fontSize="large";
    
})

add.addEventListener("click",() => {
    let c = prompt("Enter the value to add into the list");
    
    list.push(c);

})
headings.addEventListener("click",() =>{
    elements.innerHTML = ' ';
   list.forEach(element => {
    const li =  document.createElement("li");
    li.textContent = element;
    
    elements.appendChild(li);
   });
})

del.addEventListener("click",() => {
    location.reload();
})
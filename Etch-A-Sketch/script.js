const container = document.querySelector("#container");
console.log(container.nodeType);

const eraseButton = document.querySelector("#erase");
console.log(eraseButton);
eraseButton.addEventListener("click",()=>{
    location.reload();
})

const drawButton = document.querySelector("#draw");
drawButton.addEventListener("click",()=>{
    for(let i=0;i<10000;i++){
        const dividends = document.createElement("div");
        dividends.setAttribute("style","width:10px;height:10px");
        dividends.setAttribute("id","dividends");
        dividends.classList.add("dividends");
        container.appendChild(dividends);
        dividends.addEventListener("mouseover",()=>{
            dividends.style.backgroundColor="black";
        })
    }
})
const user = {
    name: "rohan",
    age:21,
}
alert(`Name of the user is ${user.name}`)

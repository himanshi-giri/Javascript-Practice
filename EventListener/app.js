// let btn = document.createElement("button");
// let head = document.createElement("h2");
// let div = document.createElement("div");
// let p = document.createElement("p");

// p.innerText = "Color changes";
// div.append(p);
// btn.innerText = "change bg color";
// head.innerText = "Generate a random color";

// document.querySelector("body").append(head);
// document.querySelector("body").append(btn);
// document.querySelector("body").append(div);

// let btn = document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     let h3 = document.querySelector('h3');
//     let randClr = getRandomColor();
//     h3.innerText= randClr;
//     h3.style.color = randClr;
    
//     let div = document.querySelector('div');
//     div.style.backgroundColor = randClr;
//     console.log("Color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()*256);
//     let blue = Math.floor(Math.random()*256);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.createElement("button");
// btn.innerHTML="change color";
// document.querySelector("body").append(btn);

// btn.addEventListener("click", ()=>{
//     btn.style.backgroundColor = "green";
// });

let body = document.querySelector("body");
let input = document.createElement("input");
let head = document.querySelector("h2");

input.addEventListener("input", (e)=>{
    let text = input.value;
    let validStr = '';
    for(let i=0; i<text.length; i++){
        let chari = text.charAt(i);
        if((chari>="a" && chari<='z') || (chari>='A' && chari <='Z' ) || chari==' '){
            validStr+=chari;
        }
    }
    head.innerText=validStr;
})
input.setAttribute("placeholder", "enter your name");
body.append(input);
body.append(head);

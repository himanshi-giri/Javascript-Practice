let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

// input.addEventListener("change", ()=>{
//     let task = input.value;
//     console.log(task);
// })

btn.addEventListener("click", ()=>{
    
    let text = input.value;
    input.value='';
    if(text.trim()!=' '){
        let newLi = document.createElement("li");
    newLi.innerText = text;
    ul.append(newLi);
    
    }
})
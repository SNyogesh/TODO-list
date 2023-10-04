const input = document.getElementById("input-field");
const btn = document.getElementById("button");
const list = document.getElementById("list-container");



function addlist(){
    if(input.value === ''){
        alert("type something to add a list");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value.toUpperCase();
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
};

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


input.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addlist();
    }
});

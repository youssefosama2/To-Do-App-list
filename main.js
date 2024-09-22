const submit = document.querySelector("#submit")
const task = document.querySelector("#task")
const ul = document.querySelector("ul")
const form = document.querySelector("form")

document.addEventListener("DOMContentLoaded" , function() {
    submit.disabled = true ;
    task.onkeyup = function() {
        if(task.value.length > 5){
            submit.disabled = false ;
        }else{
            submit.disabled = true ;
        }
    }
    form.onsubmit = function(){
        const li = document.createElement("li");
        li.textContent = task.value ;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        task.value = ""
        submit.disabled = true ;
        return false
    }
})
ul.addEventListener("click" , function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove()
        
    }
})
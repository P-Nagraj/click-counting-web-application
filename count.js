let counterEle = document.getElementById("counterValue");
let rest = document.getElementById("restvalue");

let count = localStorage.getItem("clickCount");

if (count === null) {
    counterEle.textContent = 0;
} else {
    counterEle.textContent = count;
}


function onAddclick() {
    let previousCount = counterEle.textContent;
    let updatedCount = parseInt(previousCount) + 1;
    localStorage.setItem("clickCount", updatedCount);
    counterEle.textContent = updatedCount;
}

function onrest() {
    let count = 0;
    counterEle.textContent = count;
}

























/*let counting_element=document.getElementById("span_text");
let reset_element=document.getElementById("restValue");

let count=localStorage.getItem("clickCount");
if(count === null){
    counting_element.textContent=0;
}
else{
    counting_element.textContent=count;
}

function increase(){
    let previous_value=counting_element.value;
    let present_updated_value=parseInt(previous_value)+1;
    localStorage.setItem("clickCount",present_updated_value);
    counting_element.textContent=present_updated_value;
   

}*/

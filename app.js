
function getInputValue(){
    var inputElement=document.getElementById('input');
    var item=document.createElement('div');
    item.innerHTML=inputElement.value;
    document.getElementById('bottom').appendChild(item);
    inputElement.value='';
} 
function deleteElement(){
   
    
}


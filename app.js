
function getInputValue(){
    /** we get the elements */
    var inputElement=document.getElementById('input');
    var item=document.createElement('div');
     item.innerHTML=inputElement.value;
    var deleteB=document.createElement('button');
    deleteB.textContent='delete me';
    deleteB.className='delete';
    deleteB.onclick=function(){
        item.remove();
        deleteB.remove();
    }
    item.appendChild(deleteB);
    document.getElementById('bottom').appendChild(item);
    inputElement.value='';
} 



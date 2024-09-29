let inputfield=document.getElementById('inputfield');
let addtodo=document.getElementById('addtodo');
let ToDos=document.getElementById('ToDos');
let instruc=document.getElementById('instruc');

addtodo.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML=inputfield.value;
    ToDos.appendChild(paragraph);
   inputfield.value="";
   paragraph.addEventListener('click',function(){
     paragraph.style.textDecoration='line-through';
   })
   paragraph.addEventListener('dblclick',function(){
    if(confirm("Do yu really want to delete?"))
     ToDos.removeChild(paragraph);
   })

});

instruc.addEventListener('click',function(){
    document.getElementById('instruc').innerHTML="<b>(1)<b>.A single click crosses out (or marks as complete) a task.<br><b>(2)<b>.A double click removes the task from the list."

})

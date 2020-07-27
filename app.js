var list =document.getElementById("list")
function add(){
    var taskItem=document.getElementById("task")
   
    //#### create li tags#####//
    var task= document.createElement("li")
    var tasktext=document.createTextNode(taskItem.value)
    task.appendChild(tasktext)


    //#### create delete button tags#####//
    var del=document.createElement("button")
    var del_label=document.createTextNode("Delete")
    del.setAttribute("class","btn")
    del.setAttribute("onclick","delrow(this)")
    
    del.appendChild(del_label)

    //#### create all delete button tags#####//
    var fordelall =document.getElementById("li")
    
    //#### creating edit button tags#####//
    var edit=document.createElement("button")
    var editText=document.createTextNode("Edit")
    edit.setAttribute("onclick","edit(this)")    
    edit.appendChild(editText)
    
    task.appendChild(edit)
    
    list.appendChild(task)
    task.appendChild(del)
    taskItem.value=""
}

function delrow(e){
    e.parentNode.remove()
}
function delAll(){
   list.innerHTML=""
}
function edit(e){
    var val=prompt("Enter the value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
    // var val=e.parentNode.firstChild.nodeValue

    //  var editval =prompt("Enter the value",val)
    //  e.parentNode.firstChild.nodeValue=editval 
    // // val =e.parentNode.firstChild.nodeValue
}
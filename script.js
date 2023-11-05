function addTodo() {
    let input = document.getElementById("todoinput");
    let text = input.value;
    if(text === '') {
        alert('Please enter the task!');
    } else {
        let list = document.getElementById("todolist");
        let listItem = document.createElement("li");
        
        //creating a edit button
        let editIcon = document.createElement("button");
        editIcon.innerHTML = "Edit";
        editIcon.classList.add("edit");
        

        //creating a delete button
        let deleteIcon = document.createElement("button");
        deleteIcon.innerHTML = "Delete";
        deleteIcon.classList.add("delete");

        listItem.appendChild(document.createTextNode(text));
        listItem.appendChild(editIcon);
        listItem.appendChild(deleteIcon);
        list.appendChild(listItem);

        editIcon.addEventListener("click", function() {
            let editPrompt = window.prompt('Enter the edited task!', text);
            if(editPrompt !== null) {
                listItem.firstChild.nodeValue = editPrompt;
            }
        })

        deleteIcon.addEventListener("click", function(e) {
            // let listItem = e.target.parentNode;
            // listItem.parentNode.removeChild(listItem);
            e.target.closest('li').remove();
        })

        input.value = '';
        
    }
}

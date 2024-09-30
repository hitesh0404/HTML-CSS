document.getElementById('add_task').addEventListener('click',
    function(event){
        task = document.getElementById('task').value
        // console.log(task)
        const todo_list = document.getElementById('todo_list')
        check = document.createElement('input')
        check.type='checkBox'
        // check.disabled = true
        check.classList.add('task_list')
        li = document.createElement('li')
        task_text  =  document.createTextNode(task)
        li.appendChild(check)
        li.appendChild(task_text)
        todo_list.appendChild(li)
    }
)

document.getElementById('todo_list').addEventListener('click',
    function(event){
        event.target.classList.toggle('done')
        t  = event.target

        if (t.tagName.toLowerCase() === "input" )
            check_do(event)
        else{
            if (t.firstChild.checked)
                t.firstChild.checked=false;
            else
                t.firstChild.checked=true;        
        }


    }
)

function check_do(event){
    if (t.checked)
        event.target.parentElement.classList.add('done')
    else
        event.target.parentElement.classList.remove('done')

}
document.getElementById('todo_list').addEventListener('click',
    function(event){
        t  = event.target
        event.target.addEventListener('click',check_do(event) )  })
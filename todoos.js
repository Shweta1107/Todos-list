const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = [
    {
        text : 'ABC',
        completed : true
    },
    {
        text : 'DEF',
        completed : false
    },
    {
        text : 'GHI',
        completed : true
    },
    {
        text : 'ABC',
        completed : false
    }

]

if(todos){
    todos.forEach((todo =>{
        addTodo(todo); //addTodo(todo) is function (calling from here)
    }))

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    addTodo();
})

function addTodo(todo){

    let todoText = input.value;
    if(todo){
        todoText = todo.text;
    }


    if(todoText){
        const todoEl = document.createElement("li");

        if(todo && todo.completed){
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener("click",()=>{
            todoEl.classList.toggle("completed");

            updateLS();

        })

        todoEl.addEventListener("contextmanu",(e)=>{
            e.preventDefault();

            todoEl.remove();
            updateLS();
        })

        todosUL.appendChild(todoEl)
        input.value='';

        updateLS();
    }
}

function updateLS(){  //todoEl and todosEl are diffrent
    todoEl = document.querySelectorAll("li");

    const todos = [];

    todoEl.forEach(todoEl =>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos",JSON.stringify(todos));
}

import React from 'react'

export default function TodoList() {
   const todos = [
        { task: "mow the yard", id: 1 },
        { task: "Work on Odin Projects", id: 2 },
        { task: "feed the cat", id: 3 },
      ];
      
  return (
    
      <div>
        <ul>
        {todos.map((todo) => {
           return <li key={todo.id}>{todo.task}</li>
        })}
      </ul>
      </div>
    
  )
}

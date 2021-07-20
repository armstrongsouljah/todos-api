# Todos Api

- Create and manage your daily tasks with ease


Feautures
- Todos (CRUD)
  - fetch all todos `GET: /todos/`
  - fetch single todo `GET: /todos/:id` param `_id` on the todo.
  - update a todo
    `PUT: /todos/:id/update`
    - request body 
    ```
     {
      title: String,
      description: String
     }
     ```

   - delete a todo `DELETE: /todos/:id/delete` param `_id`
    

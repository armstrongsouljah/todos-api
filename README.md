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
    ? => optional.

     {
      title:? String,
      description:? String,
      isCompleted:? Boolean
     }
     ```

   - delete a todo `DELETE: /todos/:id/delete` param `_id`

   - create a todo `POST: /todos/add` 
    - request body
    ``` 
    {
     title: String,
     description: String
    }
    ```

- Authentication
- signup users `POST: /auth/register`
    

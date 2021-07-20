const Todo = require('../models/todo');

class TodoController {
     static  async addTodo(data) {
         let todo = new Todo({...data})
         return await todo.save();
    }
     static  async getTodo(id) {
        let todo = await Todo.findById(id);
        return todo;
    }

     static async fetchAllTodos () {
        return await Todo.find({});
    }

     static async updateTodo(id, data){
        let todo = await Todo.findByIdAndUpdate(id, {...data})
        return todo;
    }

     static async deleteTodo(id) {
        return await Todo.findByIdAndDelete(id);
    }
}

module.exports = TodoController;

const router = require('express').Router();
const TodoController = require('../controllers/todoController')
const checkToken = require('./routerGuard')


router.get('/', checkToken, async(req, res) => {

    let todos = await TodoController.fetchAllTodos();
    if(todos.length) {
        return res.status(200).json({
        todos
    })} else {
        return res.status(200).json({
            todos: [],
            message: 'No todos yet'
        });
    }
})

router.get('/:id', checkToken, async (req, res) => {
    const {id} = req.params
    let todo = await TodoController.getTodo(id);

    if(!id ) {
        return res.status(400).json({
            message: 'Id is required'
        })
    }

    if(todo) {
        console.log(todo)
        return res.status(200).json({
            ...todo._doc
        });
    } else {
        return res.status(404).json({
            message: 'Todo not found.'
        })
    }
})

router.put('/:id/update', checkToken, async (req, res) => {
    const {id} = req.params
    let data  = req.body;

    let updated = await TodoController.updateTodo(id, data);
    if(!id ) {
        return res.status(400).json({
            message: 'Id is required'
        })
    }
    if(updated){

        return res.status(202).json({
            message: 'Todo successfully updated'
        })
    } else {
        return res.status(400).json({
            message: 'Update failed'
        })
    }
})

router.delete('/:id/delete', checkToken, async (req, res) => {
    const {id} = req.params
    if(!id ) {
        return res.status(400).json({
            message: 'Id is required'
        })
    } 
    await TodoController.deleteTodo(id)
    return res.json({
        message: 'Item successfully deleted'
    })
})

router.post('/add', checkToken, async (req, res) => {
    const {title, description} = req.body
    if (title.trim() && description.trim()) {
        let todo =  await TodoController.addTodo({title, description});
        return res.status(201).json({
            data: todo
        });
    } else {
        return res.status(400).json(
            {
                message: "title and description required"
            }
        )
    }
});

module.exports = router;

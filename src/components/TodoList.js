import { useState } from 'react'
import { Button } from 'react-bootstrap'

const TodoList = props => {

const [listItems, setListItems] = useState([])

const handleForm = (e) => {
    e.preventDefault()

    if (e.target.todo_item.value.length < 1) {
        return 0
    }

    let payload = {
        newItem : e.target.todo_item.value,
        state : false
    }

    e.target.todo_item.value = ''

    setListItems([...listItems, payload])
}

const checkbox = (e, index) => {
    // don't mutate data directly
    let copyOfState = [...listItems]
    // copy specific object
    let copyOfObject = copyOfState[index]
    // change the state value of the copy.
    copyOfObject.state = e.target.checked
    // update this in the copy of the state.
    copyOfState[index] = copyOfObject

    // update the state!
    setListItems(copyOfState)
}

const remove = (e, index) => {
    // same as above, repeat.
    let copyOfState = [...listItems]
    copyOfState.splice(index, 1)

    // update state.
    setListItems(copyOfState)
}

return (
    <>
    <div className="container text-center">
        <form onSubmit={ handleForm }>
            <input type="text" name="todo_item" placeholder="New Item..." className="ms-3"/>
            <div className="buttonContainer">
            <Button variant="primary" type="submit" value="Add Task">
                Submit
            </Button>
            </div>
        </form>
        {
            listItems.map( (item, index) =>
            <div className='todoContainer' key={index} >
            {
                item.state ?
                    <p className='todoItem' style={{ textDecoration: 'line-through'}}>{ item.newItem }</p> :
                    <p className='todoItem'>{ item.newItem }</p>
            }
            <input className='todoCB' type="checkbox" value={ item.state } onChange={ (e) => checkbox(e, index) }/>
            <button onClick={ (e) => remove(e, index) }>Delete</button>
            </div>
        )
        }
    </div>
    </>
)
}

export default TodoList;
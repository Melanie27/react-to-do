import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  todos: [
		  	{description: 'Walk the cat', isCompleted: true },
		  	{description: 'Throw dishes away', isCompleted: true },
		  	{description: 'Buy new dishes', isCompleted: false }
		  ],
        newTodoDescription: ''
	  };
  }
  
  handleChange(e) {
	  this.setState({newTodoDescription: e.target.value});
  }
  
  handleSubmit(e) {
	  if (!this.state.newTodoDescription) { return }
	  	e.preventDefault();
	  	const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
	  	this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  
  toggleComplete(index) {
	  const todos = this.state.todos.slice(); //make copy of the array
	  const todo = todos[index];
	  todo.isCompleted = todo.isCompleted ? false : true;  
	  this.setState({todos: todos}); //update the component's state
	}
	
	deleteToDo(index) {
		const todos = this.state.todos;
		const todo = todos[index];
		const newTodos = todos.filter(e => e !== todo);
	  this.setState({todos: newTodos});
		
	}
  
  render() {
    return (
      <div className="App">
      	<ul>
      		{this.state.todos.map((todo, index) =>
      			
						<ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } 
						toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) }  />
						
      			
      		
      		)}
      	</ul>
      	 <form onSubmit = { (e) => this.handleSubmit(e)}>
	  	 	<input type="text" value={this.state.newTodoDescription} onChange={ (e) => this.handleChange(e) }/>
	  		<input type="submit" />
	  	</form>
	  	
      </div>
    );
  }
}

export default App;

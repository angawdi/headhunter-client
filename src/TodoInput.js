import React from 'react';
// import './todoInput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        title: '',
        content: '',
        date: ''
      }
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.addTodo = this.addTodo.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (todo) => {
    todo.preventDefault();
    console.log(todo);
    // Ensure a todo was actually entered before submitting
    this.props.addTodo(todo);
    this.setState({title: '',
      content: '',
      date: ''
    });
   // }
  }


  render() {
    return (

      <form className="TaskForm" onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/> 
        <input type="text" name="date" value={this.state.date} onChange={this.handleChange} /> <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
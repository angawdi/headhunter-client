import React from 'react';
import './todoInput.css';

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

  handleSubmit = (e) => {
    e.preventDefault();
    // Ensure a todo was actually entered before submitting
    this.props.addTodo(this.state);
    this.setState({title: '',
      content: '',
      date: ''
    });
   // }
  }


  render() {
    return (

      <form className="TaskForm" onSubmit={this.handleSubmit}>
        <label for="title">Title:</label> <br />
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /> <br /><br /><br />

        <label for="title">Content:</label> <br />
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/> <br /><br /><br />

        <label for="title">Title:</label> <br />
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} /> <br /><br /> <br />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}


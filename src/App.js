import React  from 'react';
import './App.css';

class ToDoList extends React.PureComponent {
  state = {
    input: '',
    itemList: [],
  };

  onInputChange = (e) => this.setState({input: e.target.value });

  renderItemList = (item) => {
    return this.state.itemList.map((item, index) => (
        <div className="itemList">
          <p>{item}</p>
          <button onClick={() => this.removeItem(index)}>Remove</button>
        </div>
    ));
  };

  removeItem = (item) => this.setState({itemList: this.state.itemList.filter((list, index) => item !== index)});

  addItem = (item) => this.setState({
    itemList: this.state.itemList.concat(item),
    input: '',
  });

  render() {
    return (
        <div className="App">
          <div className="container">
            <h2>To Do List</h2>
            <h3>Add New To-Do</h3>
            <input type="text" className="inputText" placeholder="Enter new task here" value={this.state.input} onChange={e => this.onInputChange(e)}/>
            <div>
              <button className="addButton" onClick={() => this.addItem(this.state.input)}>Add</button>
            </div>
            <div className="containerList">
              {this.state.itemList && this.renderItemList(this.state.itemList)}
            </div>
          </div>
        </div>
    );
  };
}

export default ToDoList;

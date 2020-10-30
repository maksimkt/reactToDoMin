import { render } from '@testing-library/react';
import React from 'react';
import '../todomin/toDoMin.css'

class ToDoMin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'enter task',
            list: ['morning exercise ' , 'shower' , 'drink tea or coffe']
        }
        this.handeChange = this.handeChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }
         
    handeChange(e) {

        this.setState({
            name: e.target.value
        })
    }

    listCreator() {
        return this.state.list.map(function(item) {
            return <li key={item}>{item}</li>;
          })
        
    }

    addItem() {
        this.setState(state => {
            const list = [...state.list, state.name];
       
            return {
              list,
              name: 'To Do List',
            };
          });
    }

    render() {
        return(
        
            <div className = 'toDoMin-container'>
               
           
                <input className = 'toDoMin-input'
                    type="text"
                    onChange = {this. handeChange}
                    placeholder={this.state.name}
                />
                
                <button className='toDoMin-btn' onClick ={this. addItem}>add</button>
                <ul className = 'ToDoMin-li'>
                    {this.listCreator()}
                </ul>
            </div>
        )
    }
}

export default ToDoMin;
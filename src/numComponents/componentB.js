import React from 'react';
import ComponentA from '../numComponents/componentA';

class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1000
        }

        this.
        multiplication = this.multiplication.bind(this)
    }

    
    multiplication(event) {
        this.setState({number:this.state.number * event})
    }

    render() {
        return (
            <div >
                <p>не дуже зрозумів суть  тому зробив так якщо неправильно sory((</p>
                <br/>
                <ComponentA name={this.multiplication}/>
                <h2>The number is: {this.state.number}</h2>
            </div>
        )
    }
}

export default ComponentB
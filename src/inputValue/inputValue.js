import { render } from '@testing-library/react';
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        this.handeChange = this.handeChange.bind(this)
    }
         
    handeChange(e) {

        this.setState({
            name: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    onChange = {this. handeChange}
                    value={this.state.name}
                
                />
                <br/>
               <h1>{this.state.name}</h1>
               
            </div>
        )
    }
}

export default Search;
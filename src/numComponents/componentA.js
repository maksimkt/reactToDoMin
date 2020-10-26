import React from 'react';

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let randomNum = (event) => {this.props.name(Math.random())};
        return(
            <div >
                <button onClick = {randomNum}>
                    Get random number
                </button>
            </div>
        )
    }

}

export default ComponentA;
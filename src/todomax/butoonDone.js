import React from 'react';

class ButtonDone extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this)
        
    }

    test () {
    
    }

    render() {
        
        return(
           
                <button onClick = {this.test} className = 'btn-max'>
                    ok
                </button>
           
        )
    }

}

export default ButtonDone;
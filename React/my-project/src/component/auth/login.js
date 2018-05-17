import React, { Component } from 'react';
import history from '../../history/history'


class LOGIN extends Component {
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <button onClick={()=>{history.push('/')}}>Back</button>
                
            </div>
        )
    }
}

export default LOGIN;
import React, { Component } from 'react';
import history from '../../history/history'

class HOME extends Component {
    render() {
        return (
            <div>
                <h2>React Router Dom</h2>
                <button onClick={()=>{history.push('/login')}}>Next</button>
            </div>
        )
    }
}

export default HOME;
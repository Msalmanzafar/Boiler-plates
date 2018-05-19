import React, { Component } from 'react';
import history from '../../history/history'
import './style.css'

class LOGIN extends Component {
    render() {
        return (
            <div className='login'>
                <span>Log In</span>
                <button className='button' onClick={()=>{history.push('/')}}>Back</button>
                
            </div>
        )
    }
}

export default LOGIN;
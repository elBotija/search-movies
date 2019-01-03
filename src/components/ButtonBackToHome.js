import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class ButtonBackToHome extends Component{
    render(){
        return(
            <Link to={`${process.env.PUBLIC_URL}/`} className='button is-info'>
                Back to home
            </Link>
        )
    }
}

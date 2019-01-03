import React, {Component} from 'react'

const API_KEY = '544a5c64'
export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }
    _handleMovie = (e) =>{
        this.setState({inputMovie: e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`https://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = 0 } = results
                console.log({Search,totalResults})
                this.props.onResults(Search)
            })
    }
    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                         className="input"
                         onChange={this._handleMovie}
                         type="text" placeholder="Search your movie" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

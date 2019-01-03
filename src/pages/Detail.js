import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '544a5c64'

export class Detail extends Component{
    static propTypes ={
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = {
        movie: {}
    }

    _fetchMovie({ id }){
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState( {movie} )
            })
    }

    componentDidMount(){
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div className='detail'>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}

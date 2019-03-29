import React from 'react';

class SearchBar extends React.Component {
    
    state = {term: ''}


    onInputChange = (event) => {
        this.setState({term : event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)

    }
    
    
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}> 
                <label>Image Search</label>
                <input 
                type="text" 
                className="form-control"
                value={this.state.term} 
                onChange={this.onInputChange}>
                </input>
            </form>
        )
    }
}

export default SearchBar;
import React from 'react';
import SearchBar from './SearchBar'
import Unsplash from '../api/Unsplash'
import ImageList from './ImageList'


class App extends React.Component {
    state = {pics : []}




    onFormSubmit = async (term) => {
        const response= await Unsplash.get('/search/photos',{
            params: {
                query: term
            },
        });
        this.setState({ pics : response.data.results})
        console.log(this.state.pics.length);
        }



    render(){
        return ( 
            <div className="container my-5">
                <SearchBar onSubmit={this.onFormSubmit}  />
                <ImageList images={this.state.pics} />
            </div>
        )
    }
}

export default App;
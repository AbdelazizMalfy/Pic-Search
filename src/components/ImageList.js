import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map( image => {
        return <ImageCard key={image.id} image ={image}/>
        })

        return (
            <div className="image-list my-3">
                {/* <div className="col-4">  */}
                    {images}
                {/* </div> */}
            </div>
            )
    }


export default ImageList;
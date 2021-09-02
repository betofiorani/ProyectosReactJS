import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-carousel-minimal';

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const ImagenGallery = ({imagenes}) => {
    return (
        <div>
            <Carousel
                data={imagenes}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            />
        </div>
    );
}

ImagenGallery.propTypes = {
imagenes: PropTypes.array.isRequired,
}

export default ImagenGallery
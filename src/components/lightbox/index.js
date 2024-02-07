// 'use client'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import ImageList from './image';



const GalleryLightBox = ({children, styles}) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={`${styles}`}
            >
               {children}
            </LightGallery>
    );
}

GalleryLightBox.ImageList = ImageList;

export default GalleryLightBox
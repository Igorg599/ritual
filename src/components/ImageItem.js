import React from 'react';

const ImageItem = ({organization, index, onDeleteImage}) => {

    let item;

    const deleteImage = () => {
        item = organization.photos[index].name;
        onDeleteImage(item, index);
    }

    return (
        <div className='organization__photo'>
            <img src={organization.photos[index].thumbpath} alt='kartinka'/>
            <p>{organization.photos[index].name}</p>
            <div className='organization__photo-delete' onClick={deleteImage}>
                <p>X</p>
            </div>
        </div>
    )
}

export default ImageItem;
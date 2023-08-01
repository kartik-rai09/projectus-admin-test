import React from 'react'
import Dropzone from 'react-dropzone'

const Dropzone = () => {
    return (
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>

        </Dropzone>
    );
}

export default Dropzone;
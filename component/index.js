import React, { useState } from 'react';
import {Container, Image,  Submit} from './styles';

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setimagePreviewUrl] = useState(null);

  function handleSubmit(e) {
    stopEvents(e);
    console.log('handleSubmit :: ', file);
  }

  function handleImageChange(e) {
    stopEvents(e);

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleFileSelect(e) {
    stopEvents(e);

    const reader = new FileReader();
    const file = e.dataTransfer.files[0]; // FileList object.

    reader.onloadend = () => {
      setFile(file);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleDragOver(e) {
    stopEvents(e);
    e.dataTransfer.dropEffect = 'copy';
  }

  function stopEvents(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function preview() {
    return imagePreviewUrl ? <Image src={imagePreviewUrl} alt="" /> : '';
  }

  return (
    <Container onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleFileSelect(e)}>
      <input type="file" onChange={e => handleImageChange(e)} />

      {preview()}

      {
        imagePreviewUrl ?
          <form onSubmit={e => handleSubmit(e)}>
            <Submit onClick={e => handleSubmit(e)}>Upload Image</Submit>
          </form>
          : ''
      }
    </Container>
  );
}

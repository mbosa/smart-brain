import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  let boxes = [];
  for (let i = 0; i < box.length; i++) {
    boxes.push(<div key={'key_' + i} className='bounding-box' style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>)
  }

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {boxes}
      </div>
    </div>
  );
}

export default FaceRecognition;

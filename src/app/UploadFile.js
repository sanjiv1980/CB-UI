import React, {useState} from 'react';
import DropFileInput from './shared/DrapDrop';

export default function UploadFile() {
  const [disbled, setdisbled] = useState(true);
const onFileChange = (files) => {
    console.log(files);
    if(files.length > 0){
      setdisbled(false)
    }else{
      setdisbled(true)
    }
    
}

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Upload File
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Upload</li>
          </ol>
        </nav>
      </div>
      <div className='card'>
        <div className='card-body'>
          <div className="box">
            <div>
           
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
            <button className='upload_file' disabled={disbled}><i className="mdi mdi-upload"></i> Upload</button>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

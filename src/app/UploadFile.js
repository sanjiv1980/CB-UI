import React, {useState} from 'react';
import DropFileInput from './shared/DrapDrop';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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

       <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Upload
          </Tooltip>
        )}
        placement="bottom"
      >
         <button className='upload_file' disabled={disbled}><i className="mdi mdi-upload"></i> Upload</button>
      </OverlayTrigger>
           
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

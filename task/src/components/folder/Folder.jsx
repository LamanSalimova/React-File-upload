import React, { useState } from "react";
import "./folder.scss";
import { BsCloudDownloadFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Folder({ name }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFilesChange = (e) => {
    const files = e.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDeleteFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="folder">
      <div className="folderName">{name}</div>
      <label className="fileInputLabel">
        <div className="uploadBtn">
          <div className="flex">
            <BsCloudDownloadFill className="uploadIcon" />
            <p>Upload file</p>
            <input type="file" multiple onChange={handleFilesChange} />
          </div>
        </div>
      </label>
      {uploadedFiles.length > 0 && (
        <div className="uploadedFiles">
          <h4>Uploaded Files:</h4>
          {uploadedFiles.map((file, i) => (
            <div key={i} className="uploadedFile">
              <p>{file.name}</p>
              <button
                className="deleteBtn"
                onClick={() => handleDeleteFile(file.name)}
              >
                Delete
                <MdDelete className="deleteIcon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

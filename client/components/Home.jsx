import React, { useState } from "react";
import Api from "../api/ApiConfig"

export const Home = (props) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    if (!file) {
      alert("Please select a file");
      return;
    }
    Api.post("api/urine/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("auth_token"),
      },
    }).then((res) => {
      setData(res.data.result);
      console.log(res.data.result);
    }).catch((err) => {
      console.log(err.message);
    });
  };



  // try {
  //   const response = await axios.post('YOUR_API_ENDPOINT', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   console.log('Upload successful:', response.data);
  // } catch (error) {
  //   console.error('Error uploading file:', error);
  // }

  return (
    <div className="auth-form-container">
      <h2>Urine Extractor</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="file">Upload Dip-test Sample</label>
        <input
          type="file"
          name="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
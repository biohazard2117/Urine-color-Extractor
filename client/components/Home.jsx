import React, { useState } from "react";
import Api from "../api/ApiConfig"
import ChemicalData from "./ChemicalData";

export const Home = (props) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();

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
      {data && (
        <div>
          <ChemicalData data={data} />
        </div>
      )}
    </div>
  );
};

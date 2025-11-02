import axios from "axios";
import React, { useState } from "react";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "react_uploads_preset"); // your preset name
      data.append("cloud_name", "dguxvwjkj");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dguxvwjkj/image/upload",
        data
      );
      console.log(res);
      console.log(res.data.secure_url);
      setImageUrl(res.data.secure_url);
      setLoading(false);

    } catch (e) {
      console.log("Error occured: ", e);
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Upload Image to Cloudinary (React)</h2>
      <input type="file" onChange={handleImageUpload} />
      {loading && <p>Uploading...</p>}
      {imageUrl && (
        <>
          <p>Image uploaded successfully 🎉</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "300px", marginTop: "10px", borderRadius: "10px" }}
          />
          <p>URL: {imageUrl}</p>
        </>
      )}
    </div>
  );
}

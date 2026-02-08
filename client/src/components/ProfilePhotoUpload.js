// client/src/components/ProfilePhotoUpload.js
import React, { useState } from "react";
import api from "../services/api";

function ProfilePhotoUpload({ userId, onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("profilePhoto", file);

      const res = await api.post(`/users/${userId}/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onUploadSuccess(res.data.user); // callback to update parent state
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="photo-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Photo"}
      </button>
    </div>
  );
}

export default ProfilePhotoUpload;

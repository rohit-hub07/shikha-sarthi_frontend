import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: ""
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const categories = [
    { value: "painting", label: "चित्रकला प्रतियोगिता (Painting)" },
    { value: "prayer", label: "प्रातःकालीन प्रार्थना (Prayer)" },
    { value: "piti", label: "प्रातःकालीन पी.टी. (Physical Training)" },
    { value: "games", label: "खेल गतिविधियाँ (Games)" },
    { value: "planting", label: "वृक्षारोपण (Tree Planting)" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataObj = new FormData();
    formDataObj.append("file", file);

    try {
      setUploading(true);
      const response = await fetch(`${backend_url}/api/media/upload`, {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setFormData(prev => ({ ...prev, imageUrl: data.mediaUrl }));
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.description || !formData.imageUrl || !formData.category) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setSaving(true);
      const response = await fetch(`${backend_url}/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Post created successfully!");
        // Reset form
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          category: ""
        });
        // Navigate to home after 1 second
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Failed to create post: " + data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">Create New Post</h2>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Category Selection */}
                <div className="mb-3">
                  <label htmlFor="category" className="form-label fw-bold">
                    Category <span className="text-danger">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-bold">
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Enter post title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-bold">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    rows="6"
                    placeholder="Enter post description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex flex-column gap-3">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="btn btn-outline-primary"
                    >
                      {uploading ? "Uploading..." : formData.imageUrl ? "Change Image" : "Upload Image"}
                    </button>

                    {formData.imageUrl && (
                      <div className="border rounded p-2">
                        <img
                          src={formData.imageUrl}
                          alt="Preview"
                          className="img-fluid rounded"
                          style={{ maxHeight: "300px", objectFit: "cover" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="d-flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={saving || uploading}
                  >
                    {saving ? "Creating..." : "Create Post"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                    disabled={saving || uploading}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

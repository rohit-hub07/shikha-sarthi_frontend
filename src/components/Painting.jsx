import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FaCalendar, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useAuth } from "../context/userContext";

// default data
const defaultData =
{
  title: "चित्रकला प्रतियोगिता", description: `विद्यालय में आयोजित चित्रकला प्रतियोगिता में बच्चों ने पूरे उत्साह के
          साथ भाग लिया। विद्यार्थियों ने अपनी कल्पनाशक्ति और रचनात्मकता को रंगों
          के माध्यम से प्रस्तुत किया। सभी बच्चे ध्यानपूर्वक चित्र बनाते हुए
          दिखाई दिए। यह प्रतियोगिता बच्चों की कला प्रतिभा को निखारने और उनमें
          आत्मविश्वास बढ़ाने के लिए आयोजित की गई।`, imageUrl: "drawing-competition-img.jpg", createdAt: `27 Dec, 10:00 AM, 2025`
}


const Painting = () => {
  const [posts, setPosts] = useState([])
  const [editingPostId, setEditingPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const backend_url = import.meta.env.VITE_BACKEND_URL

  const fileInputRef = useRef(null);

  const { user } = useAuth();

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${backend_url}/api/posts?category=painting`);
        const data = await response.json();

        if (data.success && data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [backend_url]);

  const startEdit = (post) => {
    setEditingPostId(post._id);
    setEditFormData({
      title: post.title,
      description: post.description,
      imageUrl: post.imageUrl
    });
  };

  const cancelEdit = () => {
    setEditingPostId(null);
    setEditFormData({});
  };

  const handleImageUpload = async (e, postId) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await fetch(`${backend_url}/api/media/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setEditFormData(prev => ({ ...prev, imageUrl: data.mediaUrl }));
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

  const handleSave = async (postId) => {
    try {
      setSaving(true);
      const response = await fetch(`${backend_url}/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...editFormData,
          category: 'painting',
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Post updated successfully!");
        setEditingPostId(null);
        setEditFormData({});
        // Refresh posts
        const fetchResponse = await fetch(`${backend_url}/api/posts?category=painting`);
        const fetchData = await fetchResponse.json();
        if (fetchData.success) {
          setPosts(fetchData.posts);
        }
      } else {
        toast.error("Failed to update post: " + data.message);
      }
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Error saving post. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-4">
      {/* Display all posts in zig-zag layout */}
      {posts.map((post, index) => {
        const isEditing = editingPostId === post._id;

        return (
          <div key={post._id} className={index > 0 ? "mt-5 pt-4 border-top" : ""}>
            {/* Edit button */}
            {user && !isEditing && (
              <button
                onClick={() => startEdit(post)}
                className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center mb-3"
              >
                Edit
              </button>
            )}

            {isEditing && (
              <div className="mb-3 d-flex gap-2">
                <button
                  onClick={() => handleSave(post._id)}
                  disabled={saving || uploading}
                  className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={cancelEdit}
                  disabled={saving || uploading}
                  className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center"
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="row g-3">
              {/* Image - alternates left/right */}
              <div className={`col-12 col-md-6 col-lg-5 ${index % 2 === 0 ? '' : 'order-md-2 order-1'}`}>
                <img
                  src={isEditing ? editFormData.imageUrl : post.imageUrl}
                  alt={post.title}
                  className="painting-img rounded img-fluid w-100"
                  style={{ height: "auto", maxHeight: "50vh", objectFit: "cover" }}
                />
                {isEditing && (
                  <div className="mt-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => handleImageUpload(e, post._id)}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center"
                    >
                      {uploading ? "Uploading..." : "Change Image"}
                    </button>
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className={`col-12 col-md-6 col-lg-7 ${index % 2 === 0 ? '' : 'order-md-1 order-2'}`}>
                {isEditing ? (
                  <input
                    type="text"
                    value={editFormData.title}
                    onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                    className="form-control mb-2"
                  />
                ) : (
                  <h2 className="h3 h-md-2">{post.title}</h2>
                )}

                {isEditing ? (
                  <textarea
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                    rows={6}
                    className="form-control mb-2"
                  />
                ) : (
                  <p className="text-justify">{post.description}</p>
                )}

                <div className="mt-3">
                  <p className="mb-2">
                    <FaCalendar />
                    &nbsp; {new Date(post.createdAt).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="d-flex gap-2 flex-wrap">
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaWhatsapp />
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Painting;
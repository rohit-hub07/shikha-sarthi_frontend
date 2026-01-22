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
  const [postDetail, setPostDetail] = useState(defaultData)
  const [isEditing, setIsEditing] = useState(false);
  // const [user, setUser] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const backend_url = import.meta.env.VITE_BACKEND_URL

  const fileInputRef = useRef(null);

  const { user, setUser } = useAuth();

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${backend_url}/api/posts?category=painting`);
        const data = await response.json();

        if (data.success && data.posts && data.posts.length > 0) {
          // Get the most recent post (first one since we sort by createdAt desc)
          const latestPost = data.posts[0];
          setPostDetail({
            title: latestPost.title,
            description: latestPost.description,
            imageUrl: latestPost.imageUrl,
            createdAt: new Date(latestPost.createdAt).toLocaleString('en-IN', {
              day: 'numeric',
              month: 'short',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              year: 'numeric'
            })
          });
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [backend_url]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log("file: ", file)
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
        setPostDetail({ ...postDetail, imageUrl: data.mediaUrl });
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

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await fetch(`${backend_url}/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postDetail.title,
          description: postDetail.description,
          imageUrl: postDetail.imageUrl,
          category: 'painting',
        }),
      });

      const data = await response.json();
      console.log("data: ", data);
      if (data.success) {
        // Update createdAt with the newly saved post's timestamp
        setPostDetail({
          ...postDetail,
          createdAt: new Date(data.post.createdAt).toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            year: 'numeric'
          })
        });
        toast.success("Post updated successfully!");
        setIsEditing(false);
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

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-4">
      {user && !isEditing && (
        <button onClick={() => setIsEditing(true)} className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center mb-3">Edit</button>
      )}

      {isEditing && (
        <div className="mb-3 d-flex gap-2">
          <button
            onClick={handleSave}
            disabled={saving || uploading}
            className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleCancel}
            disabled={saving || uploading}
            className="bg-blue-400 rounded-md h-5 w-20 p-px content-center text-center"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-5">
          <img
            src={postDetail.imageUrl}
            alt="Painting"
            className="painting-img rounded img-fluid w-100"
            style={{ height: "auto", maxHeight: "50vh", objectFit: "cover" }}
          />
          {isEditing && (
            <div className="mt-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
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

        <div className="col-12 col-md-6 col-lg-7">
          {isEditing ? (
            <input
              type="text"
              value={postDetail.title}
              onChange={(e) => setPostDetail({ ...postDetail, title: e.target.value })}
              className="form-control mb-2"
            />
          ) : (
            <h2 className="h3 h-md-2">{postDetail.title}</h2>
          )}

          {isEditing ? (
            <textarea
              value={postDetail.description}
              onChange={(e) => setPostDetail({ ...postDetail, description: e.target.value })}
              rows={6}
              className="form-control mb-2"
            />
          ) : (
            <p className="text-justify">{postDetail.description}</p>
          )}

          <div className="mt-3">
            <p className="mb-2">
              <FaCalendar />
              &nbsp; {postDetail.createdAt}
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
};

export default Painting;

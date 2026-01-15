import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ImagePlus, X, LoaderIcon } from 'lucide-react';
import toast from 'react-hot-toast'
import api from '../lib/axios.js'

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB');
      return;
    }

    setProfileFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setProfileFile(null);
    setProfilePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    } 

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      
      if (profileFile) {
        formData.append('profile', profileFile);
      }

      await api.post("/notes", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error(error.response?.data?.message || "Failed to create note");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>
                Create a New Note
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Profile Image Upload Section */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Profile Image (Optional)</span>
                  </label>
                  
                  <div className='flex items-center gap-4'>
                    {profilePreview ? (
                      <div className='relative'>
                        <img
                          src={profilePreview}
                          alt='Profile preview'
                          className='w-24 h-24 rounded-full object-cover border-2 border-base-300'
                        />
                        <button
                          type='button'
                          onClick={removeImage}
                          className='absolute -top-2 -right-2 btn btn-circle btn-xs btn-error'
                        >
                          <X className='size-3' />
                        </button>
                      </div>
                    ) : (
                      <div className='w-24 h-24 rounded-full bg-base-300 flex items-center justify-center'>
                        <ImagePlus className='size-8 opacity-50' />
                      </div>
                    )}

                    <div>
                      <input
                        type='file'
                        id='profile'
                        accept='image/jpeg,image/jpg,image/png,image/gif,image/webp'
                        onChange={handleImageChange}
                        className='file-input file-input-bordered file-input-sm w-full max-w-xs'
                      />
                      <p className='text-xs text-base-content/60 mt-1'>
                        Max size: 5MB. Formats: JPEG, PNG, GIF, WebP
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title Input */}
                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Title *</span>
                  </label>
                  <input 
                    type="text"
                    className='input input-bordered' 
                    placeholder='Enter the title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                {/* Content Textarea */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content *</span>
                  </label>
                  <textarea
                    className='textarea textarea-bordered h-32'
                    placeholder='Enter the content...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className='card-actions justify-end'>
                  <button 
                    className='btn btn-primary mt-4' 
                    disabled={loading} 
                    type='submit'
                  >
                    {loading ? (
                      <>
                        <LoaderIcon className='size-4 animate-spin' />
                        Creating...
                      </>
                    ) : (
                      "Create Note"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import { LoaderIcon, ArrowLeftIcon, Trash2Icon, ImagePlus, X } from 'lucide-react';
import api from '../lib/axios.js'

const NoteDetailPage = () => {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({ title: "", content: "", profile: null });
  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
        setProfilePreview(res.data.profile);
      } catch (error) {
        console.error("Error in detail page", error);
        toast.error("Failed to load note");
      } finally {
        setLoading(false)
      }
    } 
    fetchNote();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB');
      return;
    }

    setProfileFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setProfileFile(null);
    setProfilePreview(note.profile); 
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      navigate("/");
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("error on delete", error);
      toast.error("Failed to delete note");
    }
  }

  const handleSave = async () => {
    if (saving) return;
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add title and content");
      return;
    }

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('title', note.title);
      formData.append('content', note.content);
      
      if (profileFile) {
        formData.append('profile', profileFile);
      }

      await api.put(`/notes/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      navigate("/");
      toast.success("Note updated successfully");
    } catch (error) {
      toast.error("Failed to update note");
      console.error("Error in saving note", error);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'></LoaderIcon>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-300'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex justify-between items-center mb-6'>
            <Link to={"/"} className='btn btn-ghost'>
              <ArrowLeftIcon className='size-5' />
              Back to Notes
            </Link>
            <button className='btn btn-outline text-error' onClick={handleDelete}>
              <Trash2Icon className='size-5' />
            </button>
          </div>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>
                Edit Note
              </h2>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Profile Image</span>
                </label>
                
                <div className='flex items-center gap-4'>
                  {profilePreview ? (
                    <div className='relative'>
                      <img
                        src={profilePreview}
                        alt='Profile preview'
                        className='w-24 h-24 rounded-full object-cover border-2 border-base-300'
                        onError={(e) => {
                          e.target.src = "https://ui-avatars.com/api/?name=Note&background=0D8ABC&color=fff";
                        }}
                      />
                      {profileFile && (
                        <button
                          type='button'
                          onClick={removeImage}
                          className='absolute -top-2 -right-2 btn btn-circle btn-xs btn-error'
                        >
                          <X className='size-3' />
                        </button>
                      )}
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

              <div className='form-control mb-4'>
                <label className="label">
                  <span className='label-text'>Title</span>
                </label>
                <input 
                  type="text"
                  className='input input-bordered' 
                  placeholder='Enter the title...'
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea
                  className='textarea textarea-bordered h-32'
                  placeholder='Enter the content...'
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className='card-actions justify-end'>
                <button 
                  className='btn btn-primary mt-4' 
                  disabled={saving} 
                  onClick={handleSave}
                >
                  {saving ? (
                    <>
                      <LoaderIcon className='size-4 animate-spin' />
                      Saving...
                    </>
                  ) : (
                    "Save Note"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
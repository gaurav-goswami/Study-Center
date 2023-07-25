import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useUpdateProfilePictureMutation } from "../../../services/Settings";
import { updateProfilePicture } from "../../../lib/SettingsApi";

const ChangeProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const {userDetails} = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const fileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateAvatarFunc] = useUpdateProfilePictureMutation();

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(e.target.files);
    if (file) {
      setFile(file);
      setFilePreview(file);
    }
  };

  const handleClick = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  const handleUpdateProfilePicture = () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("avatar" , file);
      dispatch(updateProfilePicture(updateAvatarFunc, formData)).then(() => {
        setLoading(false);
      })

    } catch (error) {
      console.log("error while uploading")
      console.log(error);
    }
  }

  return (
    <div className="flex items-center rounded-md bg-blue-800 p-8 px-12 text-richblack-5 my-5">
      {/* profile picture */}
      <div className="flex items-center gap-x-4 bg-yellow-400 w-[70px] h-[70px] rounded-full overflow-hidden">
        <img
          src={filePreview || userDetails.profile}
          alt="This is profile"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-6 flex flex-col gap-2">
        <p>Change Profile Picture</p>

        <div className="flex gap-2">
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={(e) => handleFileChange(e)}
            className="hidden"
          />

          <button
            className="px-5 py-2 rounded-md outline-none font-semibold flex gap-2 items-center text-center bg-richblack-700 text-richblack-50"
            onClick={handleClick}
          >
            Select
          </button>
          <button className="px-5 py-2 rounded-md outline-none font-semibold flex gap-2 items-center text-center bg-yellow-100 text-black" onClick={handleUpdateProfilePicture} disabled={loading}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <span className="inline-flex items-center gap-2">
                Upload <FiUpload />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePicture;

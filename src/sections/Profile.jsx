import "./Profile.css";
import profileImage from "../assets/profile.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-glow">
        <img
          src={profileImage}
          alt="Victor Boiwo"
          className="profile-image"
        />
      </div>
    </div>
  );
}

export default Profile;


import profileImage from "../assets/profile.png";

function Profile() {
  return (
    <div className="profile">
      <img
        src={profileImage}
        alt="Victor Boiwo"
        className="profile-image"
      />
    </div>
  );
}

export default Profile;
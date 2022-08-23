import React from "react";
import Modal from "../common/modal";
import ProfileUpdateForm from "./profileUpdateForm";

const Profile = ({ user, onUpdate }) => {
  return (
    <div className="profile-jumbotron">
      <Modal id="exampleModal">
        <ProfileUpdateForm user={user} onUpdate={onUpdate} />
      </Modal>
      <div className="prl-img-container">
        <img
          className="profile-img"
          src={
            user.user.image
              ? process.env.REACT_APP_API_URL + user.user.image.image
              : process.env.PUBLIC_URL + "/profile_holder.png"
          }
          alt="profile"
        />
      </div>
      <div
        className="ri-pencil-fill ri-2x"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></div>
      <div className="row mt-5">
        <div className="col-0 col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="label">First Name</div>
          <div>{user.user.first_name}</div>
        </div>
        <div className="col-12 col-md-5">
          <div className="label">Last Name</div>
          <div>{user.user.last_name}</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-0 col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="label">Email</div>
          <div>{user.user.email}</div>
        </div>
        <div className="col-12 col-md-5">
          <div className="label">Contact Number</div>
          <div>{user.phone}</div>
        </div>
      </div>
      {user.user.is_staff && (
        <React.Fragment>
          <div className="row mt-5">
            <div className="col-0 col-md-1"></div>
            <div className="col-12 col-md-5">
              <div className="label">Description</div>
              <div style={{ textAlign: "justify" }}>{user.description}</div>
            </div>
            <div className="col-12 col-md-5">
              <div className="label">Religion</div>
              <div>{user.religion}</div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Profile;

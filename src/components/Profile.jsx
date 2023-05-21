import React from "react";
import profilesData from "../assets/data";
import vector1 from "../assets/buoi3/home/Vetor_2.png";
import vector2 from "../assets/buoi3/home/Vector_1.png";
import edit from "../assets/buoi9/edit.png";
import trash from "../assets/buoi9/delete.png";

import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <div className="images">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>
        <div className="p-5">
          <p>Posts</p>
          <p>Log out</p>
        </div>
      </div>

      <div className="right">
        <div className="content">
          <div className="navbar">
            <button>Add new</button>

            <div className="searchList">
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Tags" />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {profilesData.length > 0 &&
                profilesData.map((profile) => (
                  <tr>
                    <td>{profile.id}</td>
                    <td>{profile.title}</td>
                    <td>{profile.description}</td>
                    <td>{profile.tags}</td>
                    <td>
                      <img src={edit} alt="" />
                      <img src={trash} alt="" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <button className="footer">Phần phân trang</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

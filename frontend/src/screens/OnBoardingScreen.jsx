import React, { useState } from "react";
import axios from 'axios'
import { useCookies } from "react-cookie";

const OnBoarding = () => {

  const [cookies,setCookie,removeCookie] = useCookies(['user'])
  const user_id=cookies.userId
  const [formData, setFormData] = useState({
    user_id:user_id,
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    pref_gender: "Male",
    description: "",
    pictures: "",
    song: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const response = await axios.put('http://localhost:8000/users',{formData})
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
    

  };



  return (
    <div className="onboarding">
      <form className="onBoarding-form" onSubmit={handleSubmit}>
        <h2>SET UP YOUR PROFILE</h2>
        <div className="input-group">
          <div className="input-icon"></div>
          <span>First Name</span>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-group">
          <div className="input-icon"></div>
          <span>Last Name</span>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-group" required>
          <div className="input-icon"></div>
          <span>Gender</span>

          <input
            id="gender"
            name="gender"
            type="radio"
            value="Male"
            onChange={handleInput}

          />
          <span>Male</span>

          <input
            id="gender"
            name="gender"
            type="radio"
            value="Female"
            onChange={handleInput}
          />
          <span>Female</span>

          <input
            id="gender"
            name="gender"
            type="radio"
            value="Other"
            onChange={handleInput}
          />
          <span>Other</span>
        </div>

        <div className="input-group">
          <div className="input-icon"></div>
          <span>Date of Birth</span>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-group">
          <div className="input-icon"></div>
          <span>Preffered Gender</span>
          <select onChange={handleInput} id="pref_gender" name="pref_gender" required>
            <option value="Male">Male</option>

            <option value="Female" >Female</option>

            <option value="Others" >Others</option>
          </select>
        </div>

        <div className="input-group">
          <div className="input-icon"></div>
          <span>Description</span>
          <input
            id="description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleInput}
          />
        </div>
        <div className="input-group">
          <div className="input-icon"></div>
          <span>Pictures</span>
          <input
            id="pictures"
            name="pictures"
            type="url"
            // accept="image/*"
            value={formData.image}
            onChange={handleInput}
          />
        </div>

        <div className="input-group">
          <div className="input-icon"></div>
          <span>Song</span>
          <input
            id="song"
            name="song"
            type="url"
            value={formData.song}
            onChange={handleInput}
            required
          />
        </div>

        <button className="login-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OnBoarding;

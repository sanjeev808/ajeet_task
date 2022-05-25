import React, { useState } from "react";

import "./User.css";
function Email() {
  const inputData = { FirstName: "", LastName: "", Mobile: "" ,checkbox:"",radio:""};
  const [formData, setForm] = useState(inputData);
  const { FirstName, LastName, Mobile , checkbox, radio } = useState(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  console.log(formData);

  return (
    <div>
      <div id="bg"></div>

      <form>
        <div className="User-field">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="User-field">
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div onChange={handleChange}>
          <p className="d-flex">
          
            <input type="radio" value="MALE" name="gender" />{" "}
            <label> Male</label>{" "}
          </p>
          <p className="d-flex">
         
            <input type="radio" value="FEMALE" name="gender" />{" "}
            <label> Female</label>
          </p>
        </div>

        <div className="User-field">
          <input
            type="Number"
            name="Mobile"
            placeholder=" Mobile Number"
            value={Mobile}
            onChange={handleChange}
            required
          />
        </div>
        <fieldset onChange={handleChange}>
          <legend>Choose your Hobbies</legend>

          <div>
            <input type="checkbox" id="Reading" name="Reading" checked />
            <label for="Reading">Reading</label>
          </div>

          <div>
            <input type="checkbox" id="Traveling" name="Traveling" />
            <label for="Traveling">Traveling</label>
          </div>
          <div>
            <input type="checkbox" id="Gardening" name="Gardening" />
            <label for="Gardening">Gardening</label>
          </div>
          <div>
            <input type="checkbox" id="Reading" name="Reading" checked />
            <label for="Reading">Reading</label>
          </div>
        </fieldset>

        <div className="User-field">
          <button className="btn" type="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;

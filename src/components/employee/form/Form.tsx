import "./form.scss";
import Modal from "../../modal/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setToggleModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleModal(true);
  };

  return (
    <form className="form">
      <fieldset>
        <legend className="form_legend">Personal Information</legend>

        <div className="form_group">
          <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" />
          </div>
        </div>
        <div className="form_group">
          <div>
            <label htmlFor="dateBirth">Date of Birth</label>
            <input type="date" id="dateBirth" />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form_legend">Address</legend>

        <div className="form_group">
          <div>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
        </div>

        <div className="form_group">
          <div>
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>
          <div>
            <label htmlFor="zip">Zip code</label>
            <input type="text" id="zip" />
          </div>
        </div>
      </fieldset>

      <div className="form_group">
        <label htmlFor="department">Department</label>
        <select id="department">
          <option value="engineering">Engineering</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="hr">Human Resources</option>
        </select>
      </div>

      <button type="submit" className="form_btn" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faFloppyDisk} />
        <span>Save</span>
      </button>
      {toggleModal && <Modal closeModal={closeModal} />}
    </form>
  );
};

export default Form;

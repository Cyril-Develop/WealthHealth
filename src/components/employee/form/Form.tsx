import "./form.scss";
import Modal from "../../modal/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../../dropDown/DropDown";

const Form = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setToggleModal(false);
  };

  //****************Form Validation
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    department: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  //const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Définir un type pour les erreurs
  type FormErrors = {
    firstname?: string;
    lastname?: string;
    dateBirth?: string;
    startDate?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    department?: string;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {};

    // Validate first name
    if (!formData.firstname) {
      newErrors.firstname = "Firstname is required";
      isValid = false;
    }

    // Validate last name
    if (!formData.lastname) {
      newErrors.lastname = "Lastname is required";
      isValid = false;
    }

    // Validate date of birth
    if (!formData.dateBirth) {
      newErrors.dateBirth = "Date of Birth is required";
      isValid = false;
    }

    // Validate start date
    if (!formData.startDate) {
      newErrors.startDate = "Start Date is required";
      isValid = false;
    }

    // Validate street
    if (!formData.street) {
      newErrors.street = "Street is required";
      isValid = false;
    }

    // Validate city
    if (!formData.city) {
      newErrors.city = "City is required";
      isValid = false;
    }

    // Validate state
    if (!formData.state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    // Validate zip
    if (!formData.zip) {
      newErrors.zip = "Zip is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      //setSubmitted(true);
      setToggleModal(true);
    }
  };

  //const isFormValid = Object.keys(errors).length === 0;

  return (
    <form className="form">
      <fieldset>
        <legend className="form_legend">Personal Information</legend>

        <div className="form_group">
          <div>
            <label htmlFor="firstname">First name *</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={handleInputChange}
              value={formData.firstname}
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>
          <div>
            <label htmlFor="lastname">Last name *</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={handleInputChange}
              value={formData.lastname}
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </div>
        </div>
        <div className="form_group">
          <div>
            <label htmlFor="dateBirth">Date of Birth *</label>
            <input
              type="date"
              id="dateBirth"
              name="dateBirth"
              onChange={handleInputChange}
              value={formData.dateBirth}
            />
            {errors.dateBirth && <p className="error">{errors.dateBirth}</p>}
          </div>
          <div>
            <label htmlFor="startDate">Start Date *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              onChange={handleInputChange}
              value={formData.startDate}
            />
            {errors.startDate && <p className="error">{errors.startDate}</p>}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form_legend">Address</legend>

        <div className="form_group">
          <div>
            <label htmlFor="street">Street *</label>
            <input
              type="text"
              id="street"
              name="street"
              onChange={handleInputChange}
              value={formData.street}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div>
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
        </div>

        <div className="form_group">
          <div>
            <label htmlFor="state">State *</label>
            <input
              type="text"
              id="state"
              name="state"
              onChange={handleInputChange}
              value={formData.state}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>
          <div>
            <label htmlFor="zip">Zip code *</label>
            <input
              type="text"
              id="zip"
              name="zip"
              onChange={handleInputChange}
              value={formData.zip}
            />
            {errors.zip && <p className="error">{errors.zip}</p>}
          </div>
        </div>
      </fieldset>
      <DropDown />
      <button type="submit" className="form_btn" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faFloppyDisk} />
        <span>Save</span>
      </button>
      {toggleModal && <Modal closeModal={closeModal} />}
    </form>
  );
};

export default Form;

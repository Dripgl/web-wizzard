import React from "react";
import "../style/Contact.css"


function Contact() {

    return (
        <div className="container_form">
            <form className="was-validated">

                <div className="input-box">
                    <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="input-box">
                    <input type="text" name="surname" placeholder="Surname" required />
                </div>

                    <div className="input-box">
                        <label for="validationTel" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="validationTel" placeholder="Enter your phone number" required/>
                            <div className="invalid-feedback">
                                Please enter a valid phone number.
                            </div>
                    </div>

                    <div className="mb-3">
                        <select className="form-select" required aria-label="select example">
                            <option value="">Web App</option>
                            <option value="1">Web app</option>
                            <option value="2">Site</option>
                            <option value="3">E-commerce</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label for="validationTextarea" className="form-label">Textarea</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="My project is..." required></textarea>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                        <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                    </div>
                </form>
        </div>


    )
}

export default Contact;
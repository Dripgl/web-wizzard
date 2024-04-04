import React from "react";
import "../style/Contact.css"


function Contact() {

    return (
        <div className="container_form">
            <form className="wrapper">

                <div className="input-box">
                    <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="input-box">
                    <input type="text" name="surname" placeholder="Surname" required />
                </div>

                    <div className="input-box">
                        {/* <label for="validationTel" className="form-label">Phone Number</label> */}
                        <input type="tel"  id="validationTel" placeholder="Enter your phone number" required/>
                    
                    </div>

                    <div className="mb-3">
                    <label for="validationTextarea" className="form-label">Choose type</label>
                        <select className="form-select" required aria-label="select example">
                            <option value="">Web App</option>
                            <option value="1">Web app</option>
                            <option value="2">Site</option>
                            <option value="3">E-commerce</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label for="validationTextarea" className="form-label">Your message</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="My project is..." maxLength="5000" required></textarea>
                    </div>
                    <div className="checkbox_class">
                        <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                        <label className="form-check-label text_check" for="validationFormCheck1">I agree Privacy Policy</label>
                    </div>

                    <div className="btn_container">
                        <button className="btn_stile" type="submit" >Send</button>
                    </div>
                </form>
        </div>


    )
}

export default Contact;
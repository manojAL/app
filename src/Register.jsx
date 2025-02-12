import React, { useState } from "react";
import './Register.css';

function Register() {
    const [currState, setCurrState] = useState(1); // Fellowship section state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        phone: "",
    });
    const [showAlert, setShowAlert] = useState(false);

    const renderContent = () => {
        if (currState === 1) {
            return (
                <div>
                    <p>Let’s talk about what the fellowship entails!</p>
                    <p>Joining Volship means you're already one step closer to making a change. Design and implement an impactful project plan to tackle pressing social issues in your city, that you are passionate about. Dive into 12 action-packed weeks where you will mobilise 75 volunteers shaping real community impact with our continuous support and resources.</p>
                    <p>You are now part of an experience where you can network, have jamming sessions, attend masterclasses by experts, and polish your leadership skills.</p>
                </div>
            );
        } else if (currState === 2) {
            return (
                <div>
                    <ul>
                        <li>Anyone between the ages of 18-29</li>
                        <li>Available between May 4 - Jul 28, 2024</li>
                        <li>Can spend 8 hours/ week for the Fellowship</li>
                        <li>Can achieve a goal of 75 volunteers and 750 volunteering hours</li>
                        <li>Fluent in English and the regional language of your city of application</li>
                        <li>Physically available in the applied city for the entire Volship period</li>
                        <li>People who are looking for leadership development</li>
                    </ul>
                </div>
            );
        } else if (currState === 3) {
            return (
                <div>
                    <p>Do you check any of these boxes? If your answer is YES, you could be an ideal fit for the VOLSHIP Fellowship. *We are looking for individuals who tick many or most of these boxes</p>
                    <ul>
                        <li>Passionate about volunteering</li>
                        <li>Knowledgeable about the social issues they want to address</li>
                        <li>Experienced in leading volunteer projects</li>
                        <li>Confident in their leadership skills</li>
                        <li>Skilled at collaborating with others</li>
                    </ul>
                </div>
            );
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
        setShowAlert(!isFormValid);

        if (isFormValid) {
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                city: "",
                phone: "",
            });
        }
    };

    return (
        <div className="container">
            <div className="fellowship">
                <div className="heading"></div>
                <div className="ques">
                    <h1><span onClick={() => setCurrState(1)}>What will you do?</span></h1>
                    <h1><span onClick={() => setCurrState(2)}>Who can apply?</span></h1>
                    <h1><span onClick={() => setCurrState(3)}>What do we look for?</span></h1>
                </div>
                <div className="description">
                    {renderContent()}
                </div>
            </div>
            <div className="application">
                <div className="appheadingcont">
                    <h3>
                        <span>Phase 1 Application</span>
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {showAlert && !formData.name && <span className="alert">Please fill the name</span>}
                    </div>

                    <div className="input-group">
                        <input
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {showAlert && !formData.email && <span className="alert">Please fill the email</span>}
                    </div>

                    <div className="input-group">
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        >
                            <option value="">Select your city</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="others">Others</option>
                        </select>
                        {showAlert && !formData.city && <span className="alert">Please select a city</span>}
                    </div>

                    <div className="input-group">
                        <input
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {showAlert && !formData.phone && <span className="alert">Please fill the phone number</span>}
                    </div>

                    <button type="submit">Apply</button>
                </form>
                <div>
                    <p><a href="#">Join our Volship Whatsapp Group for regular updates</a></p>
                </div>
                <div>
                    <span></span>
                    <span>Download Fellowship Brochure</span>
                </div>
            </div>
        </div>
    );
}

export default Register;

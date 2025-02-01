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
                    <p>Plan and execute exciting technical events for your college community! As a club member, you'll be involved in every stage of event management, from brainstorming ideas and securing venues to coordinating logistics and promoting the events.</p>
                    <p>Gain hands-on experience in project management, marketing, teamwork, and leadership.  Collaborate with fellow students, network with industry professionals, and develop valuable skills that will set you apart in your future career.</p>
                    <p>From workshops and hackathons to coding competitions and tech talks, you'll have the opportunity to shape the technical landscape of your campus and inspire others to explore the world of technology.</p>
                </div>
            );
        } else if (currState === 2) {
            return (
                <div>
                    <ul>
                        <li>Students with excellent communication and interpersonal skills.</li>
                        <li>Proficiency in at least one programming language (e.g., Java, JavaScript, Python).</li>
                        <li>Familiarity with front-end web development technologies, particularly React.</li>
                        <li>Experience with back-end frameworks like Spring Boot is highly desirable.</li>
                        <li>Demonstrated leadership potential or experience.</li>
                        <li>A creative mindset and a passion for innovation.</li>
                        <li>A strong interest in building web applications and contributing to technical projects.</li>
                        <li>Students who are eager to learn and collaborate in a team environment.</li>
                    </ul>
                </div>
            );
        } else if (currState === 3) {
            return (
                <div>
                    <p>Do you check any of these qualities? If your answer is YES, you could be an ideal fit for the core member of Mozilla. *We are looking for individuals who tick many or most of these points</p>
                    <ul>
                    <li>A genuine passion for technology and a desire to stay at the forefront of innovation.</li>
                    <li>Solid technical skills in their chosen area (or a strong commitment to learning).</li>
                    <li>Demonstrated leadership potential, whether through formal roles or initiative.</li>
                    <li>Excellent communication and interpersonal skills, enabling effective collaboration.</li>
                    <li>A creative mindset and a knack for developing innovative solutions to challenges.</li>
                    <li>A commitment to contributing to the club's success and fostering a positive tech community.</li>
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
                            <option value="Media">Media</option>
                            <option value="Research">Research</option>
                            <option value="Technical">Technical</option>
                            <option value="PR outreach">PR outreach</option>
                            <option value="Contentcreation">Contentcreation</option>
                            <option value="Photography">Photography</option>
                            <option value="Organiser">Organiser</option>
                            <option value="Coordinator">Coordinator</option>
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
                    <p><a href="#">Join our Mozilla Whatsapp Group for regular updates</a></p>
                </div>
                <div>
                    <span></span>
                    <span>Download Selection instructipon </span>
                </div>
            </div>
        </div>
    );
}

export default Register;

import React,{ useState } from "react";
import './Register.css';
function Register(){
    const [currState,setCurrState]=useState(1);
    const renderContent=()=>{
        if(currState===1){
            return(
                <div>
                    <p>Let’s talk about what the fellowship entails!</p>
                    <p>Joining Volship means you're already one step closer to making a change. Design and implement an impactful project plan to tackle pressing social issues in your city, that you are passionate about. Dive into 12 action-packed weeks where you will mobilise 75 volunteers shaping real community impact with our continuous support and resources.</p>
                    <p>You are now part of an experience where you can network, have jamming sessions, attend masterclasses by experts, and polish your leadership skills.</p>
                </div>
            );
        }
        if(currState===2){
           return(
              <div>
                <ul>
                    <li>Anyone between the ages of 18-29</li>
                    <li>Available between May 4 - Jul 28, 2024</li>
                    <li>Can spend 8 hours/ week for the Fellowship</li>
                    <li>Can achieve a goal of 75 volunteer and 750 volunteering hours
                    </li>
                    <li>Fluent in English and the regional language of your city of application</li>
                    <li>Physically available in the applied city for the entire Volship period
                    </li>
                    <li>People who are looking for leadership Development
                    </li>
                </ul>
              </div>
           );
        }
        if(currState===3){
          return(
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
    }
    return (
        <div className="container">
            <div className="fellowship">
                <div className="heading"></div>
                <div className="ques">
                    <h1><span onClick={()=>{setCurrState(1)}}>What will you do?</span></h1>
                    <h1><span onClick={()=>{setCurrState(2)}}>Who can apply</span></h1>
                    <h1><span onClick={()=>{setCurrState(3)}}>What do we look for?</span></h1>
                </div>
                <div className="description">
                {renderContent(currState)}
                </div>
            </div>
            <div className="application">
                <div className="appheadingcont">
                    <h3>
                        <span>Phase 1 Application</span>
                    </h3>
                </div>
                <form>
                    <input className="name" placeholder="Your name"></input>
                    <input className="email" placeholder="Your email"></input>
                    <div className="selectField">
                        <select className="city">
                        <option className="selections">Bengaluru</option>
                        <option className="selections">Hyderabad</option>
                        <option className="selections">Pune</option>
                        <option className="selections">Mumbai</option>
                        <option className="selections">Chennai</option>
                        <option className="selections">Delhi</option>
                        <option className="selections">Kolkata</option>
                        <option className="selections">Ahmdabad</option>
                        <option className="selections">Jaipur</option>
                        <option className="selections">Lucknow</option>
                        <option className="selections">Bhopal</option>
                        <option className="selections">Chandigarh</option>
                        <option className="selections">Guwahati</option>
                        <option className="selections">Kochi</option>
                        <option className="selections">Coimbatore</option>
                        <option className="selections">Indore</option>
                        <option className="selections">Nagpur</option>
                        <option className="selections">Visakapatnam</option>
                        <option className="selections">Vadodora</option>
                        <option className="selections">Patna</option>
                        <option className="selections">others</option>
                        </select>
                    </div>
                    <input className="phonenumber" placeholder="Your phone number"></input>
                    <div>
                        <input type="checkbox"></input>
                        <span>Permission to receive Whatsapp messages on next steps and Instructions in the selection process</span>
                    </div>
                    <button>Apply</button>
                </form>
                <div>
                    <p><a>Join our Volship Whatsapp Group for regular updates</a></p>
                </div>
                <div>
                        <span></span>
                        <span>Download Fellowship Brochure</span>
                </div>
            </div>
        </div>
    )
}
export default Register;
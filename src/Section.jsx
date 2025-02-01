import './Section.css';
function Section(){
            
    return(
     <div className="section">
        <div className='content'>
         <div className='headline'>Join Mozilla Club</div>
         <h1>Innovate, Collaborate, and Grow with Us!</h1>
         <p>Mozilla Club is a vibrant community of tech enthusiasts, developers, and innovators dedicated to open-source learning. 
                    We organize hackathons, tech talks, and workshops to help students develop skills in web technologies, cybersecurity, and more. 
                    Be a part of an exciting journey where you can network, contribute, and make an impact in the tech world!</p>
         <div className='Enroll-div'>
         <a className='Enroll'>Become a Member</a>
         </div>

        </div>
        <div className='img-div'>  
         <img src="/images/mozilla.jpg"></img>
        </div>
     </div>
  )
}
export default Section 
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>
<br>
</br>
      <div className="row">
        <div className="col-md-6">
        <div className="about-us-page">
      <h3>Title:Surabhi Hotel</h3>
      <h3>Address:Kundapura,near Shastri Circle</h3>
      <h3>Location:Kundapura</h3>
      <h3>Contact : 9753836823</h3>
      <br>
      </br>
    </div>
          <p>
          The best food websites introduce not only your restaurant’s location and menu, 
          but the face behind the food, too – your story and staff, as well as your inspiration
           and influences. Good food websites invite your users to go beyond the cuisine and the 
           contact details, and showcase the culture behind the cooking.
           <br>
           </br>
          </p>
        </div>

        <div className="col-md-6">
          
        </div>
      </div>

      {/* <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
            Our commitment to excellence drives us to collaborate with top educators and industry experts,
            ensuring that our courses are relevant, up-to-date, and aligned with the needs of learners and 
            the demands of the job market. We believe in fostering a supportive and inclusive learning 
            community, where students can connect, collaborate, and grow together. Through cutting-edge 
            technology and innovative pedagogy, we aim to transform education and empower learners to 
            thrive in a rapidly changing world.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
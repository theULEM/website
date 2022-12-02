import React from "react";
import header from "../../img/BethIsrael1.jpg";
import footer from "../../img/BethIsrael2.jpg";

const VaccineUpdate = () => {
  return (
    <div>
      <h1 className="section-title" name="resources">
      Vaccine Update
      </h1>
      <br/>
      <div className="container">
        <img src={header} alt="header" className="img-fluid" />
        <br/>
        <p>
          The state of Massachusetts announced the start date for the first group of eligible 
          people in Phase 2 of its COVID-19 vaccine rollout plan. <b>Phase 2 will begin on Monday, 
          February 1, 2021. Only people age 75 and older will be eligible to receive the vaccine at
          that time.</b>
        </p>
        <br/>
        <p>
          As a reminder, all health care organizations, including Beth Israel Lahey Health, are 
          required to follow the state’s direction on who gets the vaccine first. 
        </p>
        <br/>
        <p>
          <b>What to expect if you are age 75 and older</b>
        </p>
        <br/>
        <p>
          <b>Later this week, we will begin to send invitations to patients who are age 75 and older.</b> 
          {" "}Please keep an eye out for these invitations, which will be sent to you by email, text or phone. 
          The invitations will provide details on how to schedule an appointment for the COVID-19 vaccination. Appointments will be available on or after February 1. 
        </p>
        <br/>
        <p>
          Here are a few important things to be aware of:
        </p>
        <br/>

        <ul>
          <li>
            <b>Due to limited vaccine availability, you may not receive an invitation right away.</b>
            {" "}We will keep you informed and send additional invitations as we receive additional 
            vaccine shipments from the state in the coming weeks. 
          </li>
          <li>
            Invitations are connected to the recipient’s medical record and are not transferrable. 
            Appointments are required and can be scheduled only for the person who receives the invitation.
          </li>
          <li>
            We will have several COVID-19 vaccine clinics throughout the region. Vaccines will not 
            be available at doctor’s offices or hospitals. 
          </li>
          <li>
            You will be able to select the location, day, and time that works best for you. 
          </li>
          <li>
            After scheduling, you will receive information about what to expect when it’s time to get vaccinated. 
          </li>
        </ul>
        <br/>
        <p>
          Remember, we encourage you to <b>get the vaccine as soon as possible</b>, whether that is 
          with Beth Israel Lahey Health or anywhere else the vaccine is available.
        </p>
        <br/>
        <p>
          <b>What to expect if you are younger than age 75</b>
        </p>
        <br/>
        <p>
          In priority order, the following people will become eligible to receive the vaccine <b>later in Phase 2:</b>
        </p>
        <br/>

        <ul>
          <li>
            People ages 65 and older, and people with two or more {" "}
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html" 
               target="_blank" rel="noopener noreferrer">underlying medical conditions</a>
            {" "}that put them at increased risk for severe illness;
          </li>
          <li>
            Early education and K-12 workers, transit, grocery, utility, food and agriculture, 
            sanitation, public works and public health workers;
          </li>
          <li>
            People with one underlying medical condition. 
          </li>
        </ul>
        <br/>
        <p>
          <b>We do not know when the state will allow us to begin offering the vaccine to these groups.</b> 
          {" "}For the latest information and expected launch dates, visit the {" "}
          <a href="https://www.mass.gov/info-details/when-can-i-get-the-covid-19-vaccine" 
               target="_blank" rel="noopener noreferrer">Department of Public Health’s website.</a>
        </p>
        <br/>
        <p>
          <b>Continue taking safety measures</b>
        </p>
        <br/>
        <p>
          While you wait for your COVID-19 vaccination – and even after you get your vaccine – 
          please continue to protect yourself and others with the safety measures you have been taking.
          Continue to wear a mask, stay at least six feet away from people outside your household, 
          and clean your hands often.
        </p>
        <br/>
        <p>
          Thank you for trusting Beth Israel Lahey Health with your care. 
          We look forward to providing more updates soon.
        </p>

        <img src={footer} alt="header" className="img-fluid" />
      </div>
    </div>
  );
};

export default VaccineUpdate;

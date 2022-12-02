import React from 'react';
import charity from '../../img/charity.jpg';
import ulem from '../../img/ULEM Logo.jpg';
export default function MarathonAbout() {
  return (
    <section id='about'>
      {/* <h1 className='font-red mt-4'>About Us</h1>
      <p>
        The 2020 Boston Marathon has been postponed until Monday, September 14,
        2020.
      </p> */}
      <img src={ulem} alt='ulem' className='img-fluid' />

      {/* <p className='mt-3'>
        <strong>We are no longer accepting applications for runners.</strong>{' '}
        Applicants that require a bib will be asked to raise a minimum of
        $10,000 for the foundation. Qualified runners that already have a bib
        are welcome to join our team and are asked to raise a minimum of $2,000.
      </p>
      <p>
        We appreciate all donations to our Marathon Team. Funds received support
        the services and programs provided by The Urban League of Eastern
        Massachusetts.
      </p> */}

      <section id='sponsors'>
        {/* <a
          href='https://charity.gofundme.com/o/en/campaign/urbanleague2020'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-block btn-dark btn-lg'
        >
          Donate Here
        </a> */}
        {/* <a
          href='https://charityteamsruns.wufoo.com/forms/mogpyrs02fwb2o/'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-block btn-dark btn-lg'
        >
          Fill out the application here
        </a> */}

        <h1 className='font-red mt-4'>Sponsors</h1>
        <img
          src={charity}
          alt='charity'
          className='img-fluid  mx-auto d-block'
        />
      </section>
      <section id='application'>
        <h1 className='font-red mt-4'>Become a Runner</h1>
        <p>Run for Team Urban League of Eastern Massachusetts in the 2022 126th Boston Marathon®</p>
        <p>Fundraising commitment $7,500</p>
        <br></br>
        <p>Registered qualified runners with their own bib are also encouraged to join
            our team. Fill out the application below.</p>
        {/* <ol>
          <li>
            Registered qualified runners with their own bib are also encouraged to join
            our team. Fill out the application below.
          </li>
          <li>
            Virtual event from Oct 8-10, 2021 - Fundraising commitment $500. All
            virtual runners must complete the virtual marathon within a 24-hour
            period. Read more {" "}
            <a href="https://www.baa.org/virtual-125th-boston-marathon-fact-sheet" target='_blank'
            rel='noopener noreferrer'>HERE</a>. 
            <br></br>
            A. Register through the Athlete’s Village on 
            the BAA website. 
            <br></br>
            B. Fill out our application for our team below.
          </li>
        </ol> */}
        <p>What you receive for running on our team and supporting our mission:</p>
        <ul className='list-no-style'>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Full and personalized 20-week training plan for every level of running with
            organized group runs throughout the season through{" "} 
            <a href="https://www.charityTeams.com" target='_blank'
              rel='noopener noreferrer'>CharityTeams.com</a>.
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />Runners will receive fundraising 
            support.
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Organized point to point long runs on the course with aid station support.
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Official Team running singlet to wear race day.
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />Race week festivities 
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Unsurpassed team spirit, team organization and runner support.
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            A positive life changing experience and memorable journey of running the
            2022 Boston Marathon with The Urban League of Eastern Massachusetts
          </li>
          {/* <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            CharityTeams weekly communications and monthly meetings with guest
            speakers
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Fundraising support
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            An opportunity to participate in the CharityTeams Superhero 17 and
            the CharityTeams Hop21 themed runs
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Access to incentive prizes for fundraising
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />
            Discounts on running gear
          </li>
          <li>
            <i className='fas fa-angle-right mr-2 font-red' />A private team bus
            to the starting line on Marathon Monday and much more!
          </li> */}
        </ul>
        {/* <a
          href='https://charity.gofundme.com/o/en/campaign/urbanleague2020'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-block btn-dark btn-lg'
        >
          Donate Here
        </a> */}
        <a
          href='https://charityteamsruns.wufoo.com/forms/mogpyrs02fwb2o/'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-block btn-dark btn-lg'
        >
          Fill out the application here
        </a>
        <br></br>
        {/* <p className='mt-3'><strong>BAA Covid Guidelines for the race continue to evolve. 
          Please stay up to date. Here is the latest as of March 29, 2021.</strong>
        </p> */}
        <ul>
          <li>
            Participants in the in-person 2022 Boston Marathon will have the opportunity to
            purchase registration insurance; additional details will be shared prior to
            registration in April.
          </li>
          <br></br>
          {/* <li>
            Registration insurance will not be offered for the VIRTUAL 125th Boston
            Marathon.
          </li>
          <br></br>
          <li>
            Participants in the in-person race may be expected to produce up to two
            negative COVID-19 tests prior to Monday, October 11, regardless of vaccination
            status. 
          </li>
          <br></br>
          <li>
            Official entrants will receive more information in the coming months on testing
            timelines and requirements.
          </li>
          <br></br>
          <li>
            All participants are expected to follow federal and state travel guidelines,
            including any and all pre-travel testing requirements and quarantine
            requirements that are in place at the time of the 125th Boston Marathon.
          </li>
          <br></br> */}
          <li>
            The B.A.A. will continue to update developments related to COVID-19 and will 
            modify the event plan, as necessary. All runners are required to be vaccinated or 
            have a medical exemption pre-approved by the B.A.A .to participate in the 2022 
            Boston Marathon.
          </li>
        </ul>
      </section>
    </section>
  );
}

import React from "react";

const ceosearch = () => {
  return (
    <section className="container">
      <section id='sponsors'>
        <h1 className='font-red mt-4'>CEO Vacancy Announcement</h1>
      </section>
      <br></br>
      <section id='application'>
        <p>Dear ULEM Friends and Partners,</p>
        <p>The National Urban League has initiated a search for President and CEO of the Urban League of Eastern Massachusetts. Click the below "Vacancy Announcement" button for details.</p>
        <p>For consideration, please submit a cover letter and your up-to-date resume to Joseph D. Feaster Jr., Esq. – Search Committee Ex-Officio (subject line: “ULEM New CEO Search”) on or before September 17th</p>
        <p>Joseph D. Feaster Jr., Esq. ULEM Board Chair <br></br>Dain, Torpy, Le Ray, Wiest & Garner, P.C. <br></br>175 Federal Street, Suite 1500 <br></br>Boston, MA 02110 <br></br>Or to <br></br>Email:{" "}<a href="mailto: ULEMCEOSearch@ulem.org">ULEMCEOSearch@ulem.org</a></p>
        <p>Feel free to share this information with individuals within your network.</p>

        <br></br>
        <p>Click here to view and download the application for more details</p>
        <div className="text-center">
            <a
            href='https://www.dropbox.com/scl/fi/smgcc71y7213b2n83q8xt/ULEM-Vacancy-Announcement-External-Local.docx?dl=0&rlkey=86iuqwwau2m3eohfjdvo6pkgy'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary btn-lg'
            >
            VACANCY ANNOUNCEMENT
            </a>
        </div>
        <p>For more information including the history of the National Urban League and the Urban League of Eastern Massachusetts click {" "}
        <a
            href='https://ulem.org/history'
            target='_blank'
            rel='noopener noreferrer'
            >
            here
            </a>
        </p>
        <br></br>
      </section>
    </section>
  );
};

export default ceosearch;
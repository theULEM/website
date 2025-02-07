import React from "react";

const scholarship = () => {
    const handleFormLink = (link) => {
        window.location.href = link
    }
    return (<section className="container">
        <section id='sponsors'>
            <h1 className='font-red mt-4'>ULEM Guild Scholarship</h1>
        </section>
        <br></br>
        <section id='application'>
            <p>The Urban League Guild of Eastern Massachusetts has begun accepting applications for its first
                edition scholarship award</p>
            <p>The administrators are the ULEM Guild Scholarship Committee, and it is funded by The Urban League
                Guild Scholarship Fund. Awards will be made annually, each June.</p>
            <p>For the <b>2023-2024</b> school year, we will select two graduating high school students
                who seek to further their education, advancing to an accredited college, university, or technical
                /trade school of their choice. The award per student is <b>$500</b>.
            </p>
            <p>As part of the process, the students are required to complete the ULEM Guild application and
                provide all relevant information requested on the form. Once the application has been
                submitted by the student, a brief interview of the applicant will be completed by the ULEM
                Guild Scholarship Committee.
            </p>
            <p>All awards will be sent directly to the students undergraduate institution bursar's office.
                Students will be informed once the award has been forwarded to their college, university, or
                technical/trade school by the scholarship committee.
            </p>
            <p>It is the hope of the ULEM Guild Scholarship Committee that the award will help students to further
                their education, that recipients will continue to attend classes, and maintain an high grade point
                average.</p>
            <p>If you have any questions please contact ULEM Guild:</p>

            <p><b>ULEM Guild Scholarship Committee <br></br>
                88 Warren Street,<br></br>
                Roxbury, MA 02119</b>
            </p>
            <p>Or</p>
            <p><a href="mailto: ULEMguildscholarship@ulem.org">ULEMguildscholarship@ulem.org</a></p>
            <br></br>
            <p>Click below to complete the ULEM Guild Scholarship Application 2024</p>
            <div className="text-center">
                <button className="btn-success btn-lg"
                        onClick={() => handleFormLink("https://forms.gle/XNvtSjcw9hLX33AF8")}
                >Complete your Application Now
                </button>
                <br/>
                OR <br/>

                <button className="btn-secondary"
                        onClick={() => handleFormLink("https://ulem-my.sharepoint.com/:w:/g/personal/domotosho_ulem_org/Ef9K0Sc4vZlClqkrf4urapEBJoKkLl5vFu7tXT6ZxXNgrQ?e=0Tb5Sz &download=1")}
                >Download and complete the application
                </button>

            </div>
            <br></br>
            <p>Completed applications can be mailed to: Chairperson, Urban
                League Guild of Eastern Massachusetts Scholarship Committee,
                88 Warren Street, Roxbury, MA 02119, OR submitted electronically to
                {" "}<a href="mailto: ULEMguildscholarship@ulem.org">ULEMguildscholarship@ulem.org</a>
                {" "}by <b>April 30th 2024</b>.
                Applications postmarked or received after that date will not be accepted.
            </p>
            <br></br>
            <br></br>
            <p><b>Donations to support the Guild Scholarship Fund can be sent to:</b></p>
            <p>ULEM Guild Scholarship Committee <br></br>
                88 Warren Street,<br></br>
                Roxbury, MA 02119
            </p>
        </section>
    </section>);
};

export default scholarship;
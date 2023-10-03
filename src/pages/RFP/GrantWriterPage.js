import React from "react";

const GrantWriterPage = () => {
    const listStyling = {listStyle: 'square', marginLeft: '25px'};
    return (<section className="container">
        <section id="sponsors">
            <h1 className="font-red mt-4">REQUEST FOR PROPOSAL: Grant Writing Services</h1>
        </section>
        <br></br>
        <section id="application">
            <p>The Urban League of Eastern Massachusetts (ULEM) seeks a skilled and experienced grant writer to
                drive the 2024 ULEM fundraising effort, which will be completed in two phases (details below).</p>
            <p>The 2024 fundraising objectives are i) to secure ~$1M in immediate funding and ii) to identify and
                apply
                for up to $5M in multi-year funding opportunities.
                ULEM will hire a grant writer to complete the first phase, with the option of offering a follow-up
                contract for the second phase. </p>

            <h4>I. BACKGROUND:</h4>
            <p>The Urban League of Eastern Massachusetts is a non-profit organization dedicated to enabling
                communities to overcome racial and social barriers that cause economic inequities and are
                exacerbated by sexual and domestic violence, by creating employment and economic development
                opportunities. For over 104 years, we have been committed to promoting social and economic
                development and racial justice through various programs and advocacy.</p>

            <h4>II. PROJECT OUTLINE & OBJECTIVES:</h4>
            <h5>Outline</h5>
            <p>The 2024 ULEM fundraising effort will be completed in two (2) phases: </p>

            <ul style={listStyling}>
                <li>Phase I (6 months): Identification of funding sources, grant planning, and initial applications to
                    immediately accessible funding opportunities
                </li>
                <li>Phase II (TBD): Assessment and further applications to additional funding opportunities.</li>
            </ul>
            <h5>Objectives</h5>
            <ol>
                <li>In 2024, secure ~$1M in funding through grant applications, donor proposals, and other fundraising
                    efforts.
                </li>
                <li>Identify, research, and apply for funding opportunities that total $5M in multi-year funding</li>
            </ol>

            <h4>III. QUALIFICATIONS:</h4>
            <p>We are seeking a grant writer with the following qualifications and expertise:
                Proven record of accomplishment of successfully securing grants for non-profit organizations,
                particularly in social justice, community development, education, and workforce development.</p>

            <ul>
                <li>Strong research skills to identify potential funding sources and partnerships.</li>
                <li>Ability to develop compelling grant proposals and donor solicitation materials.</li>
                <li>Experience in managing grant application processes, including deadlines and reporting
                    requirements.
                </li>
                <li>Knowledge of the grant landscape specific to Massachusetts is preferred but not required</li>
            </ul>
            <h4>IV. SUBMISSION REQUIREMENTS:</h4>
            <p>Interested grant writers are invited to submit the following documents:</p>
            <ol>
                <li>A cover letter detailing your experience and qualifications.</li>
                <li>A portfolio of successful grant applications and related materials</li>
                <li>References from previous clients or organizations you have worked with.</li>
                <li>A proposed plan and timeline for achieving the ~$1M fundraising goal within six months and for
                    identifying and applying for multi-year funding opportunities.
                </li>
                <li>A proposed fee structure or hourly rate for your services.
                    Please submit your proposal electronically to <a
                        href={'mailto:nhaywood@ulem.org'}> nhaywood@ulem.org</a> no later than November 10, 2023
                </li>
            </ol>

            <h4>V. SELECTION PROCESS:</h4>
            <p>Proposals will be evaluated on a rolling basis, with a cut-off date of Wednesday, Nov 10th, 2023, at
                4:00pm. If a successful candidate is identified before the cut-off date, ULEM will post the closure of
                the
                selection process. Candidates are encouraged to submit their proposals as early as possible.
                Proposals will be evaluated based on the qualifications of the grant writer, their record of
                accomplishment of success, and their proposed approach to achieving our fundraising objectives.
                Selected candidates may be invited for an interview.</p>

            <p>The Urban League of Eastern Massachusetts looks forward to partnering with a dedicated grant writer
                to help us achieve our mission of empowering underserved communities. If you have any questions or
                require additional information, please contact William Watkins at
                  <a href={"mailto:wwatkins@ulem.org"}> wwatkins@ulem.org</a> or (617) 442-
                4519.</p>

            <p>Thank you for considering our request. We anticipate your valuable contributions to our organization's
                success.</p>

        </section>
    </section>);
};

export default GrantWriterPage;

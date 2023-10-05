import React, { Component } from "react";
import banner from "../../img/staff-banner.png";
export default class Staff extends Component {
  render() {
    return (
      <div>
        <img src={banner} alt="banner" className="full-width" />
        <div className="container">
          <h1 className="ulem-text-primary my-4">Our Staff</h1>
          <section className="mb-4">
            <h5 className="ulem-text-primary">
              <strong>Executive Office</strong>
            </h5>
            <table id="table-1">
              <tbody>
                <tr>
                  <td>Rahsaan D. Hall, Esq.</td>
                  <td>President & CEO</td>
                </tr>
                <tr>
                  <td>Jacquie George</td>
                  <td>Vice President of Finance</td>pter
                </tr>
                <tr>
                  <td>William Watkins</td>
                  <td>Vice President of Digital Strategy and Partnerships</td>
                </tr>
                <tr>
                  <td>Natalie Haywood</td>
                  <td>Executive Assistant / Event Associate</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="mb-4">
            <h5 className="ulem-text-primary">
              <strong>Workforce Development Department</strong>
            </h5>
            <table>
              <tbody>
              <tr>
                <td>Stefanie Smith</td>
                <td>Program Coordinator, Next Level MBE Program</td>
              </tr>
              <tr>
                <td>Randy Muhammad</td>
                <td>Program Coordinator, Mandela Returning Citizens Project</td>
              </tr>
              <tr>
                <td>Larry Turner</td>
                <td>Program Coordinator, Mandela Returning Citizens Project</td>
              </tr>
              <tr>
                <td>Ekilisandro Teixeira</td>
                <td>Program Coordinator, Youth Opportunites Developing Achievers (YODA)</td>
              </tr>
                <tr>
                  <td>Betzaida Guzman</td>
                  <td>Workforce Development Coordinator/Data Specialist</td>
                </tr>
                <tr>
                  <td>Robert LaCourt</td>
                  <td>Workforce Development, Outreach Worker</td>
                </tr>
                <tr>
                  <td>Dele Omotosho</td>
                  <td>Workforce Development Instructor, MSIMBO</td>
                </tr>
                <tr>
                  <td>Othneil Uter</td>
                  <td>IT Manager</td>
                </tr>

                {/* <tr>
                  <td>Alvin Peters</td>
                  <td>Social Media Specialist</td>
                </tr> */}

              </tbody>
            </table>
          </section>
          <section className="staff-width mb-4">
            <h5 className="ulem-text-primary">
              <strong>
                Office of Violence Against Woman Domestic/Sexual Violence
                Program
              </strong>
            </h5>
            <table id="table-3">
              <tbody>
                <tr>
                  <td>Rev. Traci Jackson</td>
                  <td>
                    Executive Director, OVW Domestic/Sexual Violence Program
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

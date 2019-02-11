import React, { Component } from "react";
import Calendar from "react-calendar";

export default class Events extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-5">
            <Calendar
              className="fixed-pos"
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
          <div className="col-md-4" />
          <div className="col-md-4">
            <h1 className="font-red mt-4">Events</h1>
            <p>
              Annually, ULEM honors its mission by hosting 3 signature events,
              our Annual Meeting, Gala, and Jobs Rebuild Boston Community
              Conference and Career Fair.
            </p>
            <hr />
            <h4>Annual Meeting</h4>
            <p>
              ULEM hosts its annual meeting every December to share with the
              community the impact that has been made during the most recent
              fiscal year. During this time, ULEM also celebrates the holiday
              season with a reception post the meeting. If interested in
              receiving the most recent annual report, please send an email to
              development@ulem.org.
            </p>
            <hr />
            <h4>ULEM Gala</h4>
            <p>
              ULEM’s annual awards gala is, by far, one of the most important
              events that provides unrestricted, financial support for daily
              operations. Specifically, the proceeds from the gala supports our
              programs and overhead expenses, which can only be covered by
              unrestricted funding.
            </p>
            <p>
              The awards gala is held during the spring, typically in April. It
              is always attended by corporate partners, community leaders,
              elected officials, the community at-large, our auxiliary
              memberships, and staff.
            </p>
            <p>
              Past corporate funders include Eastern Bank, Harvard Pilgrim
              Health Care, State Street Corporation, UPS and several others.
            </p>
            <p>
              Past awardees have been corporate champions, community activists
              and leaders, professional athletes, small business owners, and
              ULEM board members.{" "}
            </p>
            <p>
              If interested in volunteering for or attending the gala, please
              send an email to{" "}
              <a href="mailto: development@ulem.org">development@ulem.org</a>.
            </p>
            <hr />
            <h4>
              Jobs Rebuild Boston Community Conference and Career Fair (JRBCCC)
            </h4>
            <p>
              Hosted annually in early June, the Jobs Rebuild Boston Community
              Conference and Career Fair is composed of not only the traditional
              job fair employers, but also career workshops. On-site interviews
              and resume review is also offered. It is held in Roxbury and
              accessible by public transportation, affording greater
              accessibility to everyone in the surrounding community.
            </p>
            <p>
              Past workshops include: Identifying Your Job Skills; Pathways to
              Apprenticeship in the Trade Unions; Social Media for the Job
              Seeker; Starting a Business Brand: a Primer Do and Don’t Workshop;
              and Your Money Matters! Making it Work for You! and several
              others.
            </p>
            <p>
              Past employers include government agencies, major corporations,
              nonprofit organizations, and small businesses. If interested in
              the next Jobs Rebuild Boston Community Conference and Career Fair,
              please send an email to{" "}
              <a href="mailto: development@ulem.org">development@ulem.org</a>{" "}
              and you will be added to our e-newsletter email list.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

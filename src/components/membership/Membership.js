import React, { Component } from "react";
import MembershipCard from "./MembershipCard";
import member from "../../img/member.png";

export default class Membership extends Component {
  render() {
    return (
      <div>
        <img src={member} alt="membership" className="full-width" />
        <div className="container">
          <h2 className="pt-3 ulem-text-primary">BECOME A MEMBER TODAY!</h2>
          <p>
            The Urban League of Eastern MA receives support from individuals and
            corporations in the community through our membership program. Our
            members are invited to events such as our Anual Equal Opportunity
            breakfast. Chairman's and President Club Members are listed on our website
            and acknowledged at ULEM events. All membership contributions are
            100% tax-deductible.
          </p>
          <p>
            You can become a member by making a secure online payment through
            Square.
          </p>

          <strong>EACH MEMBERSHIP LEVEL SUPPORTS THE BUILDING OF RESERVE FUNDS AND INFRASTRUCTURE OF THE URBAN LEAGUE AND ALL OF ITS PROGRAMS.</strong>
          <div className="text-center">
            <h3 className="ulem-text-primary pt-5">MEMBERSHIP LEVELS</h3>
            <p>
              <strong>
                EACH MEMBERSHIP LEVEL SUPPORTS THE BUILDING OF RESERVE FUNDS AND
                INFRASTRUCTURE OF THE URBAN LEAGUE AND ALL OF ITS PROGRAMS.
              </strong>
            </p>
          </div>
          <div className="row membership-1st-row">
            <div className="col-md-4">
              <MembershipCard
                  //header="Gold"
                  title="Corporate Membership"
                  price="500"
                  year="/YR"
                  li1="&bull; Listing on website"
                  li2="&bull; Certificate of Membership"
                  li3="&bull; Annual Meeting and event program listing"
                  li4="&bull; ULEM commemorative gift"
                  li5="&bull; NUL lapel pin"
                  li6="&bull; Event Discounts"
                  li7="&bull; Membership Card"
                  li8="&bull; Enterprise Rent-A-Car Discount"
                  // li5="&bull; Advance Event notices"
                  // li6="&bull; ULEM newsletter"
                  // li7="&bull; Membership Card"
                  purchase="https://theulem.square.site/product/gold-president-club/28?cs=true"
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                  //header="Silver"
                  title="Church & Small Business Membership"
                  price="350"
                  year="/YR"
                  li1="&bull; Name ULEM as a partner in bulletins and company publications"
                  li2="&bull; Event Discounts"
                  // li2="&bull; Advance Event notices"
                  li3="&bull; ULEM newsletter"
                  purchase="https://theulem.square.site/product/silver-church-small-business-membership/29?cs=true"
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                  //header="Bronze"
                  title="Heritage Club"
                  price="75"
                  year="/YR"
                  //li1="&bull; Certificate of Membership"
                  //li2="&bull; Member listing"
                  //li3="&bull; ULEM commemorative gift"
                  li1="&bull; Membership card"
                  li2="&bull; Member listing"
                  li3="&bull; UL ink pen and magnet"
                  li4="&bull; ULEM newsletter"
                  li5="&bull; Enterprise Rent-A-Car Discount"
                  purchase="https://theulem.square.site/membership"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

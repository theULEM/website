import React, {Component} from "react";
import MembershipCard from "./MembershipCard";
import member from "../../img/whitney-young.jpg";

export default class WhitneyYoungGivingCircle extends Component {
    render() {
        const handleFormAction = () => {
            return window.location.href = '#'
        };

        return (<div className={'text-center mt-6'}>
            <img src={member} alt="membership" className="img-thumbnail "/>
            <div className="container">
                <div className={'text-center'}>
                    <h2 className="pt-3 ulem-text-primary">Whitney M. Young Giving Circle</h2>
                    <img src="" alt=""/>
                    <p>
                        Whitney M. Young led the National Urban League at a time of national turmoil and change
                        (1961-1971). His leadership raised the national profile of the Urban League in its efforts
                        to
                        address racial discrimination and deep structural barriers to economic advancement in the
                        Black
                        community.</p>
                    <p>
                        This giving circle will focus on raising the necessary funds to continue the legacy of
                        Whitney
                        M. Young through leveraging philanthropic and individual donor dollars to amplify the
                        advocacy
                        of the Urban League of Eastern Massachusetts and the build out more robust programing that
                        furthers our mission of empowering communities and changing lives
                    </p>

                    <button className={'btn btn-success'} onClick={() => handleFormAction()}>Sign up to learn more
                        here
                    </button>
                </div>


            </div>
        </div>);
    }
}

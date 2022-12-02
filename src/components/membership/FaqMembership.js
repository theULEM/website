import React, { Component } from "react";

export default class FaqMembership extends Component {
  render() {
    return (
        <div className="container-fluid">
        <section className="container">
          <h1 className="ulem-text-primary mt-4">FAQs for Digital Membership Cards</h1>
          <br></br>
          <h5>What are digital membership cards?</h5>
          <p>The Urban League of Eastern MA (ULEM) now offers digital membership cards, 
             which can be downloaded and saved to your smartphone. Going digital means you 
             never have to worry about forgetting your membership card, in addition to being 
             more environmentally friendly and helping to reduce administrative costs. After 
             joining or renewing your ULEM membership, you will receive an email within a week 
             with a link to download your card. Please note, digital membership cards are 
             currently only available for new or renewing members.</p>
          <br></br>

          <h5>I am a current member; can I request a digital membership card?</h5>
          <p>We are in the process of rolling out this exciting new option. With that in mind,
             digital membership cards will be made available when you renew your current membership.</p>
          <br></br>

          <h5>How do I add the membership card to my iPhone?</h5>
          <p>Access the email from your smartphone and click the "Download" button, then click
             "Add to Wallet" and "Add." The card will automatically go to your iPhone’s Apple Wallet.
             It can be accessed in Apple Wallet at any time.</p>
          <br></br>

          <h5>How do I add the membership card to my Android phone?</h5>
          <p>Android users need to download Wallet Passes from Google Play. After you have the app,
             access the membership email from your smartphone and click “Download,” and the card will 
             automatically go to your Wallet Passes app, where it can be accessed at any time.</p>
          <br></br>

          <h5>I’d prefer not to use this digital membership card, what should I do?</h5>
          <p>Please contact Member Services at{" "}
            <a href="mailto: Membership@ULEM.org">Membership@ULEM.org</a>{" "}or 617.442.4519 to request 
             a physical card.</p>
          <br></br>

          <h5>I don’t have a mobile phone, what can I do?</h5>
          <p>Please contact Member Services at{" "}
            <a href="mailto: Membership@ULEM.org">Membership@ULEM.org</a>{" "}or 617.442.4519 to request 
             a physical card.</p>
          <br></br>

          <h5>My name is spelled wrong/membership level is incorrect.</h5>
          <p>Please contact Member Services at{" "}
            <a href="mailto: Membership@ULEM.org">Membership@ULEM.org</a>{" "}or 617.442.4519 and we
             would be happy to make the correction.</p>
          <br></br>

          <h5>There are two adult names on my membership, how can the second person receive the card?</h5>
          <p>Navigate to the “back of the card” by clicking the small icon on the bottom right of the card.
             Along with the specific membership benefits associated with your membership, you will also 
             find a “Share Pass” button to send the card to your secondary member. After selecting “Share 
             Pass” you will need to select the email or mail option to share your pass. iPhone users can 
             share the pass via text message if sending to another iPhone. As always, we will request a 
             corresponding photo ID upon entry to ensure that only named members are using your digital card.</p>
          <br></br>

          <h5>I have a Caregiver add-on on my membership. Can they get a digital card too?</h5>
          <p>Unfortunately, we cannot generate digital cards for add-on guests or caregivers at this 
             time. Simply have your named caregiver show a copy of your digital membership card by 
             navigating to the back of your digital membership card and use the “Share Pass” button 
             to send the card to your caregiver. After selecting “Share Pass” you will need to select 
             the email or mail option to share your pass. iPhone users can share the pass via text 
             message if sending to another iPhone. As always, we will request a corresponding photo 
             ID upon entry to ensure that only the named caregiver is using your digital card.</p>
          <br></br>

          <h5>I downloaded my card but I can’t find it</h5>
          <p>If you have an iPhone, the card will automatically download to Apple Wallet. Check 
             the app for your new card and scroll through any cards that are already downloaded. 
             If you have an Android, you’ll need to download {" "}
            <a 
             href="https://play.google.com/store/apps/details?id=io.walletpasses.android&hl=en" 
             target="_blank" rel="noopener noreferrer">
                 Wallet Passes from the Play Store</a>{" "} prior to downloading the card.
          </p>
          <br></br>

          <h5>Will I still need to show my Photo ID with my digital card?</h5>
          <p>Yes. The safety of our members is very important to us, and we want 
             to ensure that no one else is using your membership benefits.</p>
          <br></br>
        </section>
      </div>
    );
  }
}
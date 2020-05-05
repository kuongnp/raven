import React from 'react'

const ContactForm = () => (
  <React.Fragment>
    <h2 className="section-title"><span><i className="icon-paper-plane"></i>DROP ME A LINE</span></h2>
    <div className="contact-form">
          <form id="contact-form" action="send-mail.php" method="post">
            <input type="hidden" name="subject" id="subject" value="You have a new message from cvCard!"/>
            <p>
              <label for="name">NAME</label>
              <input type="text" name="name" id="name" className="required"/>
            </p>
            <p>
              <label for="email">EMAIL</label>
              <input type="text" name="email" id="email" className="required email"/>
            </p>
            <p>
              <label for="message">MESSAGE</label>
              <textarea name="message" id="message" className="required"></textarea>
            </p>
            <p>
              <input type="submit" className="submit button primary" value="SEND"/>
            </p>
          </form>
      </div>
  </React.Fragment>
)

export default ContactForm


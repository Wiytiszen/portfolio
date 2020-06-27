import React from 'react'

const ContactContainer = () => {
  return (
    <div class="container">
      <div class="form-section">
        <h3>Lets talk!</h3>
        <form>
          <label for="email">
            E-mail:
            <input type="text" name="email" id="email" placeholder="youremail@example.com"/>
          </label>
          <label for="subject">
            Subject:
            <input type="text" name="subject" id="subject" placeholder="Let's Work together! ;)"/>
          </label>
          <label for="msg">
            Tell me about it:
            <input type="textarea" name="msg" id="msg" placeholder="what's going on?..." />
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactContainer

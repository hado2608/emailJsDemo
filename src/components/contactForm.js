import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export default function ContactUs() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_29ptiml', 'template_46owg0w', form.current, 'Pp3k3kF_W7YvnRndS')
          .then((result) => {
              console.log(result.text);
              alert("SUCCESS")
          }, (error) => {
              console.log(error.text);
              alert("FAILED", error)
          });
    }

    return (
        <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Recipient" name="recipient"/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="to_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
            </form>
        </div>
    )
}
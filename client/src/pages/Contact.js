import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3mc6zp",
        "template_jk3xwyk",
        form.current,
        "_D9Hj93vy0QVwcair"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  window.addEventListener("DOMContentLoaded", () => {
    const input1 = document.querySelector('input[name="first_name"]');
    const input2 = document.querySelector('input[name="email"]');

    input1.addEventListener("invalid", function (event) {
      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity(
          "Please tell us how we should address you."
        );
      }
    });

    input1.addEventListener("change", function (event) {
      event.target.setCustomValidity("");
    });

    input2.addEventListener("invalid", function (event) {
      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity(
          "We need your email for us to send a reply."
        );
      }
    });

    input2.addEventListener("change", function (event) {
      event.target.setCustomValidity("");
    });
  });

  return (
    <div className="contact h-screen w-screen overflow-y-hidden md:bg-fixed" id="contact">
      <div className="contact_overlay bg-black/40 h-full w-full flex flex-col lg:flex-row">
        <div className="contact_left flex justify-center items-center lg:w-1/2">
          <h1 className="text-white text-3xl lg:text-5xl text-center font-medium lg:whitespace-nowrap px-5 md:px-20 lg:px-40 py-20 font-merriweather">
            Get In Touch With Us
          </h1>
        </div>
        <div className="contact_right w-full lg:h-full lg:w-1/2 flex items-center justify-end">
          <div className="contact_form bg-white/30 backdrop-blur-sm w-full px-5 md:px-12 py-20 rounded-xl">
            {/* CONTACT FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contactform_internal"
            >
              <h1 className="text-black text-xl">Name</h1>
              <div className="w-full flex flex-col lg:flex-row gap-5 mb-5">
                <input
                  className="p-3 w-full rounded"
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  required
                />
                <input
                  className="p-3 w-full rounded"
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                />
              </div>
              <h1 className="text-black text-xl">E-mail</h1>
              <input
                className="p-3 w-full rounded mb-5"
                type="email"
                placeholder="john@abc.com"
                name="email"
                required
              />
              <h1 className="text-black text-xl">
                Your Message
              </h1>
              <textarea
                className="w-full p-3 rounded resize-none mb-5"
                name="message"
                placeholder="Share your thoughts"
                required
              />
              <input
                type="submit"
                value="Send"
                className="submit_button bg-black hover:bg-gray-800 text-white px-8 py-4 rounded"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

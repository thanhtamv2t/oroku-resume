import React from "react";
import Swal from "sweetalert2";
import { sendContact } from "../../modules/contact";
import { isEmail } from "../../utils";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    validation: {
      name: {
        touched: false
      },
      email: {
        touched: false
      },
      message: {
        touched: false
      }
    }
  };

  onInputFocus = e => {
    const { name } = e.target;
    this.setState(prevState => {
      const { validation } = prevState;
      validation[name].touched = true;
      return { validation };
    });
  };
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      const { validation } = prevState;
      validation[name].touched = true;
      return { [name]: value || "", validation };
    });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = this.state;

    //Another Validation
    if (!name)
      return Swal.fire({
        icon: "error",
        title: "Oroku leave you an message:",
        text: "Please enter your name before submit!"
      });
    if (!email)
      return Swal.fire({
        icon: "error",
        title: "Oroku leave you an message:",
        text: "Please enter your email before submit!"
      });
    if (!isEmail(email))
      return Swal.fire({
        icon: "error",
        title: "Oroku leave you an message:",
        text: "Please enter correct email format!"
      });
    //

    const response = await sendContact(name, email, message);
    if (!response.status)
      return Swal.fire("Something wrong happend, please try again!");

    Swal.fire({
      icon: "success",
      title: "Thank you, Oroku has received your message!",
      text: "♥♥♥♥♥♥"
    });

    return this.setState({
      name: "",
      email: "",
      message: "",
      validation: {
        name: {
          touched: false
        },
        email: {
          touched: false
        },
        message: {
          touched: false
        }
      }
    });
  };

  render() {
    const { name, email, message, validation } = this.state;
    return (
      <section className="block section contact" id="contact">
        <h4 className="sub-title">Contact</h4>
        <h3 className="title" data-aos="fade-right">
          Get in touch
        </h3>
        <div className="flex contact-form" data-aos="fade-up">
          <div>
            <h4>Contact Information</h4>
            <p className="text-grey">
              If you have any offer, don't hesitate to leave me a message. Thank
              for getting into my world.
            </p>
            <ul className="list text-grey">
              <li>
                <b>Mail:</b> thanhtam.v2t@gmail.com
              </li>
              <li>
                <b>Phone:</b> +84 898-517-665
              </li>
            </ul>
            <img src="img/contact.svg" alt="" className="contact-svg" />
          </div>
          <div>
            <h4>Leave me a message</h4>
            <form
              action="#"
              className="form"
              id="contact-form"
              onSubmit={this.onFormSubmit}
            >
              <label
                className={
                  validation["name"].touched && !name ? "hasError" : ""
                }
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Tell me your name"
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  value={name}
                />
              </label>
              <label
                className={
                  validation["email"].touched && (!email || !isEmail(email))
                    ? "hasError"
                    : ""
                }
              >
                Email
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  value={email}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Leave me a message"
                  onChange={this.onInputChange}
                  value={message}
                ></textarea>
              </label>
              <div className="form-action">
                <button className="btn">Leave me a message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-info">
              <h4>I would love to help you! Get in touch</h4>
              <p>Always available for tutoring. Feel free to contact me.</p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">Chicago, IL.</span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">support@domain.com</span>
                </li>
                {/* <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+044 9696 9696 3636</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;


const Contact = () => {

  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch:</h3>
        </div>
        <div className="row">
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-info">
              <h4>I would love to help you! Get in touch.</h4>
              <p>Please contact me to check my availability.</p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">Chicago, IL</span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">
                    parksplacetutoring@gmail.com
                  </span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">&#40;312&#41; 330-4488</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

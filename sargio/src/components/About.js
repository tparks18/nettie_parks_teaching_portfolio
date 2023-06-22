const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img
                    src="static/img/student-glow-icon.png"
                    title=""
                    alt=""
                    style={{
                      width: "800px",
                      height: "800px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>{`I'm`} an educator with over 30 years of experience. </h3>
                <p>
                  I'm a passionate and dedicated educator with over 30 years of
                  experience, committed to shaping young minds and empowering
                  students to reach their full potential. Firm believer in the
                  power of a growth mindset, fostering resilience and embracing
                  challenges as opportunities for growth. Skilled in teaching
                  effective strategies for critical thinking, independent
                  learning, and subject mastery, while promoting confidence and
                  fluency in reading and writing. Committed to creating a
                  supportive and inclusive learning environment where students
                  thrive and exceed expectations.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">100s</span>
                      <div className="media-body">
                        Of students <br />
                        taught and tutored.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>1989-1993</span>
                <h6>Master of Education</h6>
                <p>Loyola University of Chicago</p>
              </li>
              <li>
                <span>1985-1989</span>
                <h6>BA English Literature and Classics</h6>
                <p>Williams College</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>WordPress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Magento</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/walt_disney_logo_square.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Third Grade Teacher</h6>
                  <label>
                    Walt Disney Magnet | Chicago, IL | Aug 1996 - Present
                  </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    • Aligned and delivered differentiated lessons in
                    Reading/English Language Arts, Math, Science, and Social
                    Studies, incorporating Illinois Standards/Common Core and
                    Harcourt materials to 30 students.
                  </p>
                  <p>
                    • Designed and implemented multi-level mini units across
                    subjects, fostering comprehensive learning experiences.
                  </p>
                  <p>
                    • Developed Interactive Bulletin Boards to promote student
                    engagement and enhance content comprehension.
                  </p>
                  <p>
                    • Cultivated an inclusive and technology-integrated
                    classroom environment, catering to diverse learner needs.
                  </p>
                  <p>
                    • Prepared students for benchmark NWEA/MAP Spring
                    assessment, achieving exceptional growth and exceeding
                    projected goals by 30-40%.
                  </p>
                  <p>
                    • Successfully transitioned to remote learning from March
                    2020 to the present, effectively delivering lessons and
                    providing support via Google Meets, Google Classroom, and
                    online platforms.
                  </p>
                  <p>
                    • Utilized various communication channels, including the
                    classroom website, Classroom DOJO, and regular
                    parent-teacher conferences, to ensure collaborative success
                    and engagement with parents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/ourladyofpeacelogo.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    • Aligned and delivered differentiated lessons in
                    Reading/English Language Arts, Math, Science, and Social
                    Studies, incorporating Illinois Standards/Common Core and
                    Harcourt materials to 30 students.
                  </p>
                  <ul>
                    • Designed and implemented multi-level mini units across
                    subjects, fostering comprehensive learning experiences.
                  </ul>
                  <ul>
                    • Developed Interactive Bulletin Boards to promote student
                    engagement and enhance content comprehension.
                  </ul>
                  <ul>
                    • Cultivated an inclusive and technology-integrated
                    classroom environment, catering to diverse learner needs.
                  </ul>
                  <ul>
                    • Prepared students for benchmark NWEA/MAP Spring
                    assessment, achieving exceptional growth and exceeding
                    projected goals by 30-40%.
                  </ul>
                  <ul>
                    • Successfully transitioned to remote learning from March
                    2020 to the present, effectively delivering lessons and
                    providing support via Google Meets, Google Classroom, and
                    online platforms.
                  </ul>
                  <ul>
                    • Utilized various communication channels, including the
                    classroom website, Classroom DOJO, and regular
                    parent-teacher conferences, to ensure collaborative success
                    and engagement with parents.
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

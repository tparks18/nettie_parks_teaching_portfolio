import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Subjects I Can Assist With</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-stats-up" />
              <div className="feature-content media-body">
                <h5>Math</h5>
                <p>
                  Common Core Math, Number Sense, Problem Solving, Interpreting Data, Fractions and Decimals, Geomtry
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-flag" />
              <div className="feature-content media-body">
                <h5>Regular Test Preparation</h5>
                <p>
                  Study skills, strategies to prepare for reading and math tests
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-write" />
              <div className="feature-content media-body">
                <h5>Writing</h5>
                <p>
                  I can assist students with writing complete sentences and using correct mechanics such as capitalization, puncation, spelling, and grammar. Additionally, I can help them with structuring essays in paragraphs and teaching narrative, expository, and persuasive writing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-book" />
              <div className="feature-content media-body">
                <h5>English</h5>
                <p>
                  Literature, Informational Text, Grammar, Foundational Skills, Reading-Fluency and Comprehension, Writing
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-rocket" />
              <div className="feature-content media-body">
                <h5>Science</h5>
                <p>
                  Forces, Life Science, Environments and Survival, Weather and Climate
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg ti-world" />
              <div className="feature-content media-body">
                <h5>Social Studies</h5>
                <p>
                  Evaluating Sources and Using Evidence, Civic and Political Institutions, Geography
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
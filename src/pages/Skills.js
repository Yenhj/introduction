import React from "react";

const Skills = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>SKILLS</h2>
        <div className="contents">
          <div className="flex justify-center mr-20">
            <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
                Frontend
              </div>
              <div className="p-6 skills-list">
                <li>
                  HTML
                  <img
                    src={`${path}/images/skill-html.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                  />
                </li>
                <li>
                  CSS
                  <img
                    src={`${path}/images/skill-css.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="400"
                  />
                </li>
                <li>
                  JavaScript
                  <img
                    src={`${path}/images/skill-js.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="500"
                  />
                </li>
                <li>
                  REACT
                  <img
                    src={`${path}/images/skill-react.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="600"
                  />
                </li>
                <li>
                  REDUX
                  <img
                    src={`${path}/images/redux.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="700"
                  />
                </li>
                <li>
                  TypeScript
                  <img
                    src={`${path}/images/skill-type.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="800"
                  />
                </li>
                <li>
                  SASS
                  <img
                    src={`${path}/images/skill-sass.png`}
                    alt="skill"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="900"
                  />
                </li>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-28 mt-24">
              <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
                  Coummunication
                </div>
                <div className="p-6 skills-list">
                  <li>
                    <img
                      src={`${path}/images/figma.png`}
                      alt="skill"
                      data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="900"
                    />
                  </li>
                  <li>
                    <img
                      src={`${path}/images/slack.png`}
                      alt="skill"
                      data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="1000"
                    />
                  </li>
                  <li>
                    <img
                      src={`${path}/images/notion.png`}
                      alt="skill"
                      data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="1100"
                    />
                  </li>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
                  Version Control
                </div>
                <div className="p-6 skills-list">
                  <li>
                    <img
                      src={`${path}/images/git.png`}
                      alt="skill"
                      data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="1100"
                    />
                  </li>
                  <li>
                    <img
                      src={`${path}/images/github.png`}
                      alt="skill"
                      data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="1200"
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

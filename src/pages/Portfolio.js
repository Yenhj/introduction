import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Portfolio = () => {
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 게발담당자 : 팀프로젝트,,개인 작업(5개 목표 (퍼블리싱 > 프론트) */}
        <h2 data-aos="fade-up">Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <h3>Team Project</h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="/images/sample.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="/images/sample.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="/images/sample.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="/images/sample.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* 스와이퍼 배치 */}
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <a
                      href="https://yenhj.github.io/hansalim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      <img src="/images/sample.png" alt="portfolio" />
                    </a>
                  </li>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

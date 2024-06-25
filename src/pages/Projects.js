import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import React, { useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import News_letter_img_one from "../assets/images/pexels-goumbik-653429.jpg";
import News_letter_img_two from "../assets/images/undefined - Imgur.png";
import News_letter_img_three from "../assets/images/img-002.png";
import slider_image_two from "../assets/images/slider image 2.png";
import Rectangle3_image from "../assets/images/Rectangle3.png";
import quote_image from "../assets/images/quote.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import webflow_Project_image_02 from '../assets/images/webflow-2.png'
import landing_page_01 from '../assets/images/landing-page-01.png'
import Noipunno_app_design from '../assets/images/noipunno.png'
import ecommerce_template from '../assets/images/e-commerce.png'
import template from '../assets/images/template.png'
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import Project_image from "../assets/images/project-image.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <section class="breadcrumb w-100">
        <div class="container">
          <div class="row">
            <h2 class="title">My Projects </h2>
            <div class="pt-3">
              <h4 class="btn py-3 px-5">
                <a class="" href="/">
                  Home
                </a>{" "}
                <span>
                  <i class="fa-solid fa-angles-right pe-1"></i>
                  My Projects
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="sticky-top" style={{ paddingTop: "10rem" }}>
                <h2>
                  My <br />
                  Projects
                </h2>
                <p className="py-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eveniet earum debitis ad cum atque architecto nulla
                  accusamus soluta tenetur at, perspiciatis, quia eius minima
                  omnis asperiores possimus officiis voluptate.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Webflow Project</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://restaurant-979076.webflow.io/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={webflow_Project_image_02} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Webflow Project</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://my-five-star-site-7568bb.webflow.io/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={landing_page_01} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Landing Page</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ekshop-new-design.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={Noipunno_app_design} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Noipunno App Design</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://project-ca-html.vercel.app/deshboard.html"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={ecommerce_template} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">E-commerce Template</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ozuna-next-js-tailwind-css-animation-framer-motion.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <Link
                              to="https://github.com/showkatbinidris70/ozuna-next-js-tailwind-css-animation-framer-motion-2"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div className="window position-relative">
                    <img src={template} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Tempalte Design</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ministry-of-education-html.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <Link
                              to="https://github.com/showkatbinidris70/ministry-of-education-html.git"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-card" style={{ marginBottom: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="card border-0 card-shadow py-5 px-0 px-md-3 px-lg-5 text-center">
              <div className="asterisk">
                <FaStarOfLife className="text-center asterisk-icon" />
              </div>
              <h2 className="pt-3 px-0 px-md-3 px-lg-5">
                Let's create something amazing together
              </h2>
              <div className="cta-btn">
                <a className="btn py-3 mt-4">
                  showkatbinidris70@gmail.com <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

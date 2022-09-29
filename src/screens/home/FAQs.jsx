import React from "react";
import { Accordion, AccordionButton } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const FAQs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="frequently-asked-title">
              Frequently asked questions
            </h1>
            <div className="about-accoudian">
              <Accordion defaultActiveKey={"0"}>
                <Accordion.Item eventKey="0">
                  <AccordionButton id="headingOne">
                    What exactly is thunderboltJS{" "}
                  </AccordionButton>

                  <AccordionBody>
                    <p>
                      ThunderboltJS is a framework, a compiler that improves
                      your core web vitals which results in your site loading
                      superfast. A new way of rendering websites basically.
                    </p>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <AccordionButton id="headingTwo">
                    What are core web vitals?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      Core web vitals are the 4 parameters namely accessibility,
                      performance, SEO & best practices,(mobile first etc) by
                      which your site is ranked by google & other search
                      engines. You can check your core web vitals here
                    </p>
                  </AccordionBody>
                </Accordion.Item>
                <AccordionItem eventKey="2">
                  <AccordionButton id="headingThree">
                    I already have a website, what can I do?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      If you are fine with your design, simply dump your HTML
                      via a zip file or add us to your GitLab/GitHub for us to
                      convert it to a lightning fast dot com
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                  <AccordionButton id="headingfour">
                    What about my CMS?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      We work with industry-leading CMSes like wordpress,
                      Strapi, sanity & many others to stitch your design to your
                      existing CMS or if we build it, we will use Strapi as our
                      preferred CMS.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="4">
                  <AccordionButton id="headingfive">
                    What about hosting & deployment?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      We use a combination of services like thunderboltJS,AWS,
                      gatsby cloud, fastly to host & deploy your CMS & static
                      frontend.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="5">
                  <AccordionButton id="headingSix">
                    Can I use my hosting?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      No, you can't use your own hosting provider, you will need
                      to use thunderboltJS as your hosting provider.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="6">
                  <AccordionButton id="headingSeven">
                    Ok, I have my test link, how should we take the website
                    LIVE?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      Once your site is ready, our team will send you domains to
                      be pointed out in simple, easy to understand & secure
                      steps. Don't worry, our customer success team will be with
                      you every step of the way.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="7">
                  <AccordionButton id="headingEight">
                    How much time does all this take?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      Sites with no cms & 10-15 pages take less than 3 days or
                      even before. Sites with CMS & 10-15 pages take
                      approximately 10 days including testing & deployment.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="8">
                  <AccordionButton id="headingNine">
                    Can I cancel anytime?
                  </AccordionButton>

                  <AccordionBody>
                    <p>Yes, you can cancel anytime</p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="10">
                  <AccordionButton id="headingTen">
                    I want to change my provider, do I have access to my source
                    code?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      Yes, after a period of 12 months, you will have access to
                      everything deployed with us including all updates
                      delivered via gitlab/github.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="11">
                  <AccordionButton id="headingEleven">
                    Do i really need thunderboltJS?
                  </AccordionButton>
                  <AccordionBody>
                    <p>
                      If you engage in digital marketing or work towards getting
                      discovered on google via seo, YES a 50Euro/month will be a
                      small charge compared to the results you will be getting.
                      You will thank us later.
                    </p>
                  </AccordionBody>
                </AccordionItem>{" "}
              </Accordion>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

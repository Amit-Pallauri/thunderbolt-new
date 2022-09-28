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
                    Leadership Is A Behavior, Not A Position
                  </AccordionButton>

                  <AccordionBody>
                    <p>
                      Leaders are the ones who take responsibility for making
                      decisions and bringing change. Leaders are the ones who
                      empower people to discover and use their greatest
                      potential. The position on someone’s business card won’t
                      do all of these. People are the ones to choose their
                      leader. And how will they do that? They will judge by
                      behavior, attitude and actions. If you want to be a
                      leader, then act like a leader and shape a better reality.
                    </p>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <AccordionButton id="headingTwo">
                    The Best Way of Influence Is By Setting An Example
                  </AccordionButton>

                  <AccordionBody>
                    <p>
                      Each leader wants to get the best out of their team.
                      Excellence orientation is great, as there is always need
                      for development. But here is the simple truth. Instead of
                      telling your team members what to do, lead by example.
                      They are following your each and every moment. Practice
                      what you preach, and the results will astonish you.
                      Especially during challenging times, don’t give in, you
                      should be the one who faces obstacles with confidence and
                      strives for success.
                    </p>
                  </AccordionBody>
                </Accordion.Item>
                <AccordionItem eventKey="2">
                  <AccordionButton id="headingThree">
                    Leading Means Making An Impact
                  </AccordionButton>

                  <AccordionBody>
                    <p>
                      Think about the greatest leaders in history. What was the
                      one thing they had in common? Yes , they all made an
                      impact. Leadership is not just setting goals and
                      effectively achieving them with your team. Leadership is
                      not just brilliant public speaking and great communication
                      skills. If you want to be a true leader, you should work
                      towards contributing to create a better society. You
                      should make a positive change.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                  <AccordionButton id="headingfour">
                    Leadership is Chasing Vision
                  </AccordionButton>

                  <AccordionBody>
                    <p>
                      Without a vision, your actions won’t make a lasting
                      impact. The key is devoting your efforts and time towards
                      achieving your vision. Vision is what inspires people to
                      take action and go forward. Identify your goal and
                      coordinate all your activities towards reaching it. Let
                      your vision and your ambition inspire your team.
                    </p>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

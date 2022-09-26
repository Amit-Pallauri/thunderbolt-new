import React from "react";
import Layout from "../components/Layout";
import TheyTrustUs from "../components/TheyTrustUs";
import { Accordion, AccordionButton } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import PlansCard from "../components/PlansCard";

const Home = () => {
  return (
    <Layout>
      <section className="plans-section">
        <div className="container">
          <div className="row">
            <h1 className="plans-title">
              Plans for delivering super fast websites
            </h1>
            <p>
              Simple pricing no hidden costs - we maintain, host and provide
              technical support
            </p>
          </div>
          <div className="row">
            {Array()
              .fill(4)
              .map(() => {
                return <PlansCard />;
              })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="commontitle text-center">
                Frequently asked questions
              </h1>
              <div className="about-accoudian">
                <Accordion defaultActiveKey={"0"}>
                  <Accordion.Item eventKey="0">
                    <AccordionButton
                      id="headingOne"
                      className="accordin-header"
                    >
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
                        leader, then act like a leader and shape a better
                        reality.
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
                        for development. But here is the simple truth. Instead
                        of telling your team members what to do, lead by
                        example. They are following your each and every moment.
                        Practice what you preach, and the results will astonish
                        you. Especially during challenging times, don’t give in,
                        you should be the one who faces obstacles with
                        confidence and strives for success.
                      </p>
                    </AccordionBody>
                  </Accordion.Item>
                  <AccordionItem eventKey="2">
                    <AccordionButton id="headingThree">
                      Leading Means Making An Impact
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        Think about the greatest leaders in history. What was
                        the one thing they had in common? Yes , they all made an
                        impact. Leadership is not just setting goals and
                        effectively achieving them with your team. Leadership is
                        not just brilliant public speaking and great
                        communication skills. If you want to be a true leader,
                        you should work towards contributing to create a better
                        society. You should make a positive change.
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
                        impact. The key is devoting your efforts and time
                        towards achieving your vision. Vision is what inspires
                        people to take action and go forward. Identify your goal
                        and coordinate all your activities towards reaching it.
                        Let your vision and your ambition inspire your team.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="4">
                    <AccordionButton id="headingfive">
                      Actions Speak Louder Than Words
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        It’s no secret that actions speak louder than words and
                        influence effectiveness. What people see affects them
                        many times greater than what they hear. So, choose
                        actions. Don’t waste time on endless conversations about
                        your plans, show results. Make sure your behavior
                        coincides with your promises.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="5">
                    <AccordionButton id="headingsix">
                      Flexibility May Refer To Behavior, Not Values
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        Depending on circumstances your leadership style may
                        vary. Flexibility is a truly effective trait if it
                        doesn’t affect your values. Each and every decision you
                        take, no matter the situation, must be based on your
                        values. As long as your actions are value-driven, you
                        will have the trust and respect of people around you.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="6">
                    <AccordionButton id="headingseven">
                      Leadership Is All About People
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        Could you be a leader in an empty room by having
                        profound goals and skills? Leading means communicating,
                        influencing and engaging people. Communication skills
                        are the foundation of effective leadership. Work on
                        constantly improving your relationship with people.
                        Amazing results will soon follow.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="7">
                    <AccordionButton id="headingeight">
                      It Is Fine To Admit Mistakes
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        If everything we do is perfect, we would have somehow
                        lost the ability to analyze and improve. Mistakes are
                        proof that you are trying. You won’t be a bad leader if
                        you admit your mistakes. By doing that, you demonstrate
                        that you are wise enough to learn from your experiences.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="8">
                    <AccordionButton id="headingnine">
                      Unity Is Strength
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        A well-balanced team is the most important asset for a
                        leader. Embrace your team and devote your energy to
                        ensure unity is maintained each and every day. As long
                        as your team is strong, nothing can stand in your way
                        towards success. Make sure that your team members
                        consider themselves as members of a strong, unified
                        family.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="9">
                    <AccordionButton id="headingten">
                      There Is Always Room for Growth
                    </AccordionButton>

                    <AccordionBody>
                      <p>
                        Remember, satisfaction should be a short-term feeling.
                        Life will be mundane without ongoing improvement. This
                        doesn’t mean that you shouldn’t appreciate what you
                        have. This means that you should be thankful for
                        everything you have achieved, but still try to do a
                        little more each and every time.
                      </p>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TheyTrustUs /> */}
    </Layout>
  );
};

export default Home;

import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import Aos from "aos";
import Stars from "../Stars/Stars";
const TimelineComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  const customTheme = {
    lineColor: "#ffff",
    fontFamily: "Oxygen",
  };

  // const gradient = "#1a1617";
  const gradient="transparent"
  const border = "none";

  return (
    <div className="timeline" id="timeline">
      <Stars/>
      <div className="timeline__container">
        <h2 className="section__title">Timeline</h2>

        <div className="timeline__section" data-aos="zoom-in">
          <VerticalTimeline theme={customTheme} lineColor="#21b8cb">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                color: "#ffff",
               background: "transparent",
                border: border,
              }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>
                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>

                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>
                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>

                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>
                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>

                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>
                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>

                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Registation starts{" "}
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient }}
              contentArrowStyle={{ display: "none" }}
            >
              <div className="timeline__element_txt">
                <h3 className="vertical-timeline-element-title">24 Nov 2023</h3>

                <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                  Hack Ends.{" "}
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;

import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './layout.scss';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

  return (
      <>
        <VerticalTimeline lineColor = {themeObj.dark.palette.accent.main}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.secondary.secondary, boxShadow: "none", outline:"2px solid"}}
                //   textAlign: "right"
            contentArrowStyle={{ borderRight: '8px solid', color: themeObj.dark.palette.secondary.secondary }}
            date="2011 - present"
            iconStyle={{ background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.accent.main, boxShadow:"none", border: "4px solid"}}
            dateClassName="test"
            textClassName="t2"
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
        </VerticalTimeline>
    </>
  );
};

export default Timeline;

import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './layout.scss';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface EventInfo {
    name: string;
    description: string;
    time: string;
}

interface Props {
  eventInfo: EventInfo[];
}

const Timeline = ({eventInfo}: Props) => {

  return (
      <>
          <VerticalTimeline lineColor={themeObj.dark.palette.accent.main}>
            {eventInfo.map((event,index)=>{
                return (     
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.secondary.secondary, boxShadow: "none", outline:"2px solid"}}
                        contentArrowStyle={{ borderRight: '8px solid', color: themeObj.dark.palette.secondary.secondary }}
                        date={event.time}
                        iconStyle={{ background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.accent.main, boxShadow:"none", border: "4px solid"}}
                        dateClassName="test"
                        textClassName="t2"
                    >
                        <h1 className="vertical-timeline-element-title" style={{color: themeObj.dark.palette.secondary.main, fontSize: "24px"}}>{event.name}</h1>
                        <h2 className="vertical-timeline-element-subtitle" style={{color: themeObj.dark.palette.secondary.main, fontSize: "18px"}}>{event.description}</h2>
                </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
    </>
  );
};

export default Timeline;

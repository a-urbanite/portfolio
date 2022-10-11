import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import TimeCard from "../TimeCard/TimeCard";
// import items from "./items";
import styles from './TimeLine.module.scss'
// import './TimeLine.css'

const TimeLine = ({timelineEntries}) => {

  const sortedTimelineEntries = timelineEntries.sort((a,b) => a.fields.orderNum - b.fields.orderNum)

  console.log(sortedTimelineEntries)

  const [screenWideEnough, setscreenWideEnough] = useState(false)
  const checkSize = () =>  setscreenWideEnough(window.innerWidth < 700 ? false : true);

  useEffect(() => {
        checkSize()
        window?.addEventListener('resize', checkSize);
        return () => {
            window?.removeEventListener('resize', checkSize);
        };
    }, []);

  return (
    <div className={styles.container}>
    <Chrono
      items={sortedTimelineEntries.map((el) => el.fields)}
      mode={screenWideEnough ? "HORIZONTAL" : "VERTICAL"}
      // slideShow={true}
      // slideItemDuration={500}
      // itemWidth={"150"}
      // cardLess={true}
      lineWidth={5}
      hideControls={true}
      // cardHeight={100}
      borderLessCards={true}
      // disableAutoScrollOnClick={true}
      // focusActiveItemOnLoad={false}
      showAllCardsHorizontal={true}
      // cardWidth={300}
      cardHeight={150}
      theme={{
        primary: "rgb(226, 92, 197)",  //color of line and points, outline frame of timecard, color of card subtitle
        secondary: "black",   //background of timeItem and timepoint while focussed
        cardBgColor: "",  //timecard background color
        cardForeColor: "pink", //color of card title
        titleColor: "white", //color of timepoint titles
        titleColorActive: 'rgb(226, 92, 197)',
      }}
      fontSizes={{
        // cardSubtitle: '0.85rem',
        // cardText: '0.8rem',
        // cardTitle: '1rem',
        title: '1.4rem',
      }}
      classNames={{
        card: 'timeCard'
      }}
    >
        {sortedTimelineEntries.map((timeLineEntry, index) => {
          return <TimeCard timeLineEntry={timeLineEntry} key={index}/>
        })}
    </Chrono>
  </div>
  )
}

export default TimeLine

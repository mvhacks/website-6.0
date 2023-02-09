import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

interface Person {
  name: string;
  title: string;
  email: string;
  imgSrc: string;
  website: string;
  isDirector: boolean;
  team: string;
}

interface Props {
  people: Person[];
  team: String;
}

const TeamCards = ({ people, team }: Props) => {

  return (
    <>
      <h1 style={{color:themeObj.dark.palette.secondary.main, fontSize: "40px", display: "flex", alignSelf: "flex-start", justifyContent: "flex-start", paddingRight:"7vh", paddingTop:"4vh", paddingLeft:"2vh"}}>{team}</h1>
      <div className="inner">
        {people ? (
          people.map((person, index) => (
            <div
              key={`person-${index}`}
              className="box"
              style={{
                backgroundColor: themeObj.dark.palette.secondary.main,
                color: themeObj.dark.palette.primary.main,
                outlineColor: person.isDirector
                  ? themeObj.dark.palette.secondary.main
                  : themeObj.dark.palette.primary.main,
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <div className="img-wrapper">
                <img
                  src={person.imgSrc === "" ? "/images/profiles/anonymousIcon.jpeg" : person.imgSrc}
                  style={{  objectFit: "cover", width: "200px", height: "200px"}}
                  alt="profile"
                  className="image"
                />
                <div className="middle">{person.title}</div>
              </div>
              <h2 className="name-text">{person.name}</h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: "1vh" }}>
                {person.website !== "" ? (
                  <a href={person.website} target="_blank">
                    <img src={"/icons/websiteIcon.png"} alt="website icon" style={{height:"30px"}}/>
                  </a>
                ) : null}
                <a href={"mailto:" + person.email} target="_blank">
                  <img src={"/icons/emailIcon.png"} alt="website icon" style={{height:"30px"}}/>
                </a>
              </div>
            </div>
          ))
        ) : (
          <span>No Images</span>
        )}
      </div>
    </>
  );
};

export default TeamCards;

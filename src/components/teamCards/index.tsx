import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

interface Person {
    name: string,
    title: string,
    email: string,
    imgSrc: string,
    website: string,
    insta: string,
    linkedInUrl: string
    isDirector: boolean,
    team: string,
}

interface Props {
    people: Person[];
    team: String;
}

// people = {[efief: je, iefeoif:efew, etc]}
const TeamCards = ({ people, team }: Props) => {

    return (
    <>
    <h1  style={{
                textAlign: "left",
                color: themeObj.dark.palette.secondary.main,
                marginTop: "10vh",
                marginBottom: "5vh",
                marginLeft: "3vh",
                fontSize: "56px",
                fontWeight: "300",
            }}
            >{team}</h1>
    <div className="inner">
      {people &&
        people.map((person, index) => (
          <div
            key={`person-${index}`}
            className="box"
            style={{
                backgroundColor: themeObj.dark.palette.secondary.main,
                color: themeObj.dark.palette.accent.main,
                outlineColor: person.isDirector ? themeObj.dark.palette.secondary.secondary: themeObj.dark.palette.primary.main,
                // E2FCEF
                outlineWidth: "5px",
                outlineStyle: "double"
            }}
          >
            <img
              src={person.imgSrc}
              style={{ aspectRatio: '1/1', height: '30vh' }}
              alt="profile"
                />
                <br />
            <h3>{person.name}</h3>
          </div>
        ))}
    </div>
    </>
  );
};

export default TeamCards;

import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

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

const TeamCards = ({ people, team }: Props) => {
    return (
      <>
      <AccordionItem marginBottom="10vh" borderStyle="none">
        <h2 style={{color: themeObj.dark.palette.secondary.main}}>
          <AccordionButton style={{width: "30%", marginBottom: "10vh", outline: "4px inset", outlineColor: themeObj.dark.palette.secondary.main}}  _disabled={{background: themeObj.dark.palette.secondary.main, color: themeObj.dark.palette.primary.main}} _expanded={{ bg: themeObj.dark.palette.secondary.main, color: themeObj.dark.palette.primary.main }}>
              <Box style={{    
              textAlign: "left",
              fontSize: "3.5vw",
              fontWeight: "300",
              marginRight: "5vh",
              outlineColor: themeObj.dark.palette.secondary.main,
            }}>
            {team}
            </Box>
            <AccordionIcon style={{scale: "150%"}}/>
          </AccordionButton>
        </h2>
        <AccordionPanel>
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
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default TeamCards;

import React from 'react';
import { useState } from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

interface Person {
  name: string;
  title: string;
  email: string;
  imgSrc: string;
  website: string;
  insta: string;
  linkedInUrl: string;
  isDirector: boolean;
  team: string;
}

interface Props {
  people: Person[];
  team: String;
}

const TeamCards = ({ people, team }: Props) => {
  const [open, setOpen] = useState(false);
  const marginAmount = 50;

  return (
    <>
      <AccordionItem
        borderStyle="none"
        className="accordion-item"
      >
        <h2 style={{ color: themeObj.dark.palette.secondary.main }}>
          <AccordionButton
            onClick={() => setOpen((prev) => !prev)}
            className="team-card-button"
            style={{
              border: `2px solid ${themeObj.dark.palette.secondary.main}`,
              transition: '0.15s',
              marginBottom: `${open ? marginAmount : 0}px`
            }}
            _disabled={{
              background: themeObj.dark.palette.secondary.main,
              color: themeObj.dark.palette.primary.main
            }}
            _expanded={{
              bg: themeObj.dark.palette.secondary.main,
              color: themeObj.dark.palette.primary.main,
              outlineColor: themeObj.dark.palette.primary.main
            }}
          >
            <Box
              style={{
                textAlign: 'left',
                fontSize: '3vw',
                fontWeight: '300',
                marginRight: '5vh',
                outlineColor: themeObj.dark.palette.secondary.main
              }}
            >
              {team}
            </Box>
            <AccordionIcon style={{ scale: '150%' }}></AccordionIcon>
          </AccordionButton>
        </h2>
        <AccordionPanel>
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
                      src={person.imgSrc}
                      style={{ aspectRatio: '1/1', height: '200px' }}
                      alt="profile"
                      className="image"
                    />
                    <div className="middle">{person.title}</div>
                  </div>
                  <h2 className="name-text">{person.name}</h2>
                </div>
              ))
            ) : (
              <span>No Images</span>
            )}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default TeamCards;

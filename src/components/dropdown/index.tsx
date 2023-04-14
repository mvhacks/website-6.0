import { Collapse, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const Dropdown = ({ title, content }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = (): void => {
    setOpen((prev: boolean): boolean => !prev);
  };

  return (
    <div className="dropdown">
      <Button
        className="dropdown-header"
        onClick={toggleOpen}
        style={{
          zIndex: 10,
          color: themeObj.dark.palette.primary.main,
          background: themeObj.dark.palette.secondary.secondary,
          padding: '5vh',
          fontWeight: 400
        }}
      >
        {title}
      </Button>
      <Collapse
        in={open}
        style={{
          background: themeObj.dark.palette.secondary.secondary,
          color: themeObj.dark.palette.primary.main,
          borderRadius: '4px',
          transform: 'translateY(-8px)'
        }}
      >
        <div
          className='contentBox'
        >
          {content}
        </div>
      </Collapse>
    </div>
  );
};

export default Dropdown;

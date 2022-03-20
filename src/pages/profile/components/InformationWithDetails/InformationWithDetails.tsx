import React, { useState } from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import { Column, Subtitle } from "../../styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "../Education/Education";
import HardSkills from "../HardSkills/Hardskills";
import { deleteValueFromArray } from "../../../../utils/common";
import SoftSkills from "../SoftSkills/SoftSkills";

const infoBlocks = [
  {
    title: "Work Experience",
    Component: <WorkExperience />,
    key: "workExperience",
  },
  {
    title: "Education",
    Component: <Education />,
    key: "education",
  },
  {
    title: "Hard Skills",
    Component: <HardSkills />,
    key: "hardSkills",
  },
  {
    title: "Soft skills",
    Component: <SoftSkills />,
    key: "softSkills",
  },
];

const InformationWithDetails = () => {
  const [activeAccordions, setActiveAccordions] = useState<string[]>([
    "workExperience",
  ]);

  const handleChangeActiveAccordion =
    (key: string) => (_: unknown, isExpanded: boolean) => {
      setActiveAccordions((prevState) => {
        const newState = [...prevState];

        if (isExpanded) {
          newState.push(key);
        } else {
          deleteValueFromArray(newState, key);
        }

        return newState;
      });
    };

  return (
    <Column>
      {infoBlocks.map((item) => {
        const { key, title, Component } = item;

        return (
          <Accordion
            key={key}
            expanded={activeAccordions.includes(key)}
            onChange={handleChangeActiveAccordion(key)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${key}-content`}
              id={`${key}-header`}
            >
              <Subtitle>{title}</Subtitle>
            </AccordionSummary>
            <AccordionDetails>{Component}</AccordionDetails>
          </Accordion>
        );
      })}
    </Column>
  );
};

export default InformationWithDetails;

import React, { useState, Suspense } from "react";
import { Column, Subtitle } from "../../styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteValueFromArray } from "../../../../utils/common";
import WorkExperience from "../WorkExperience/WorkExperience";

const Education = React.lazy(() => import("../Education/Education"));
const HardSkills = React.lazy(() => import("../HardSkills/HardSkills"));
const SoftSkills = React.lazy(() => import("../SoftSkills/SoftSkills"));

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
            TransitionProps={{ mountOnEnter: true, unmountOnExit: true }}
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
            <AccordionDetails>
              <Suspense fallback={<span>Loading...</span>}>
                {Component}
              </Suspense>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Column>
  );
};

export default InformationWithDetails;

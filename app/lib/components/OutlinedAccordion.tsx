import { ChevronRight } from "@opengov/react-capital-assets";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import type { ReactElement } from "react";

interface OutlinedAccordionProps {
  title: ReactElement;
  content: ReactElement;
}

export function OutlinedAccordion({ title, content }: OutlinedAccordionProps) {
  return (
    <Accordion variant="outlined">
      <AccordionSummary expandIcon={<ChevronRight />}>{title}</AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}

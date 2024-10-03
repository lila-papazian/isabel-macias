import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CustomAccordionProps {
  summary: any;
  content: any;
}
const CustomAccordion = ({ summary, content }: CustomAccordionProps) => {
  return (
    <Accordion square style={{ color: "#37310D" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${summary}-content`}
        id={`${summary}-header`}
      >
        <h3>{summary}</h3>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;

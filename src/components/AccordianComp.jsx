import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianComp = ({ type, Info }) => {
  let accordTitle = type;
  let accordCont = null;

  const accordFunc = (type) => {
    switch (type) {
      case "LOCATION":
        accordCont = Info.location;
        break;

      case "LANGUAGES":
        accordCont = Info.languages.join(" - ");
        break;

      case "TECHNOLOGIES":
        accordCont = Info.technologies.join(" - ");
        break;

      case "OTHER":
        accordCont = Info.other.join(" - ");

      case "PAST EMPLOYMENT":
        break;

      case "EDUCATION":
        break;

      case "HISTORY":
        accordCont = Info.history;
        break;

      default:
        console.log("AccordionComp - accordFunc - default");
    }
  };
  accordFunc(type);

  return (
    <div>
      <Accordion
        sx={{
          maxWidth: "60vw",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <AccordionSummary
          sx={{ justifyContent: "center" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {accordTitle}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{accordCont}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordianComp;

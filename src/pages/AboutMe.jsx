import AccordianComp from "../components/AccordianComp";

const AboutMe = ({ Info }) => {
  return (
    <Paper>
      <h1>About Me</h1>
      <Divider />
      <AccordianComp type={"LOCATION"} Info={Info} />
      <AccordianComp type={"LANGUAGES"} Info={Info} />
      <AccordianComp type={"TECHNOLOGIES"} Info={Info} />
      <AccordianComp type={"OTHER"} Info={Info} />
      <AccordianComp type={"HISTORY"} Info={Info} />
    </Paper>
  );
};

export default AboutMe;

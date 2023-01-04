import Paper from "@mui/material/Paper";

const Contact = () => {
  return (
    <Paper
      sx={{
        width: "50vw",
        position: "absolute",
        left: "25%",
      }}
    >
      <h1>Contact Info</h1>
      <h2>Email: chaz.curlee@gmail.com</h2>
      <h2>
        <a href="https://www.linkedin.com/in/chaz-curlee/">LinkedIn</a>
      </h2>
    </Paper>
  );
};

export default Contact;

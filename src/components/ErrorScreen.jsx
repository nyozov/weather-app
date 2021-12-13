import ErrorIcon from "@mui/icons-material/Error";

export default function ErrorMessage() {
  return (
    <div className="error-screen">
      <section className="error-message">
        <ErrorIcon style={{ fill: "darkred" }} />

        <p className="text--light">Please enter a valid city</p>
      </section>
    </div>
  );
}

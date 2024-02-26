import "./db";
import "./models/video";
import app from "./server";

const PORT = 4001;

const handleListening = () =>
  console.log(`server lisstening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

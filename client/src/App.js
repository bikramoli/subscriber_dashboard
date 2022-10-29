import { BrowserRouter } from "react-router-dom";
import PageRoute from "./routes/PageRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PageRoute />
      </BrowserRouter>
    </>
  );
};

export default App;

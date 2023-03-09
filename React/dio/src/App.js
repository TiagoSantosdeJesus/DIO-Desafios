import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Home } from ".pages/home";
import { Loguin } from ".pages/loguin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/loguin" element= {<Loguin />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* Інші маршрути */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import GamePage from "./pages/game.page";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/:size?" children={<GamePage />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

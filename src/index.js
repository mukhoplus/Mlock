import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./Clock";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "./fonts/Font.css";

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<Clock />);

reportWebVitals();

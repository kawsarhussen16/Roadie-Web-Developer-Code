import React from "react";
import NavBar from "./components/navBar/NavBar.js";
import CustomerReviews from "./components/Customer-reviews/CustomerReviews.js";

import "./App.css";

function App() {
    return (
        <div className="App-container">
            <NavBar />
            <CustomerReviews />
        </div>
    );
}

export default App;

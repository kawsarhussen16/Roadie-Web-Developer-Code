import React from "react";
import NavBar from "./components/nav-bar/NavBar.js";
import CustomerReviews from "./components/customer-reviews/CustomerReviews.js";

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

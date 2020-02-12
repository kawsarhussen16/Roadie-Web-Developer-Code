import React from "react";
import NavBar from "./components/navBar/NavBar";
import CustomerReviews from "./components/Customer-reviews/CustomerReviews";

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

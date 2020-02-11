import React from "react";
import Item from "./components/Item/Item";
import NavBar from "./components/navBar/NavBar";
import CustomerReviews from "./components/Customer-reviews/CustomerReviews";

import "./App.css";

function App() {
    return (
        <div className="App-container">
            <NavBar />
            <Item />
            <CustomerReviews />
        </div>
    );
}

export default App;

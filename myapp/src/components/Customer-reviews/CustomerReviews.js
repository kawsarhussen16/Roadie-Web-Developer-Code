import React from "react";
import "./CustomerReviews.style.scss";
import RatingStar from "../RatingStar/RatingStar";
import data from "../data/Data";
import FilteredRating from "../Filtered-rating/FilteredRating";

class CustomerReviews extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: data,
            filtered: ""
        };
    }
    filterByRating = (number) => {
        let reviews = this.state.reviews;
        let filtered = reviews.filter((reviews) => reviews.rating === number);
        this.setState({
            filtered: filtered
        });
    };

    render() {
        const reviews = this.state.reviews;
        const value = reviews
            .map((review) => review.rating)
            .reduce((acc, cur) => acc + cur);
        const averageRating = Math.floor(value / reviews.length);
        return (
            <div className="customer-review-container">
                <h6>CUSTOMER REVIEWS</h6>
                <RatingStar value={averageRating} />
                <p>{reviews.length} reviews</p>
                <FilteredRating
                    filterByRating={this.filterByRating}
                    data={this.state.reviews}
                />
            </div>
        );
    }
}

export default CustomerReviews;

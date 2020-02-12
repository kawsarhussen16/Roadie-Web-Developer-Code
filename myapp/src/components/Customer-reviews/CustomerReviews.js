import React from "react";
import "./CustomerReviews.style.scss";
import RatingStar from "../RatingStar/RatingStar";
import data from "../data/Data";
import FilteredRating from "../Filtered-rating/FilteredRating";
import ReviewDetail from "../Review-detail/ReviewDetail";
import Item from "../Item/Item";

class CustomerReviews extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: data,
            filtered: "",
            rating: ""
        };
    }
    filterByRating = (number) => {
        let reviews = this.state.reviews;
        let filtered = reviews.filter((reviews) => reviews.rating === number);
        this.setState({
            filtered: filtered
        });
    };
    addReview = async (review) => {
        await this.setState({
            reviews: [review, ...this.state.reviews]
        });
        this.countingRating();
    };
    componentDidMount() {
        this.countingRating();
    }
    countingRating = async () => {
        let rating = {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        };
        let reviews = this.state.reviews;
        reviews.map((reviews) =>
            Object.values(reviews).map((i) =>
                rating[i] !== undefined ? (rating[i] += 1) : null
            )
        );
        this.setState({
            rating: rating
        });
    };

    render() {
        const { reviews, filtered, rating } = this.state;
        const data = filtered.length > 0 ? filtered : reviews;
        const value = reviews
            .map((review) => review.rating)
            .reduce((acc, cur) => acc + cur);
        const averageRating = Math.floor(value / reviews.length);
        return (
            <div>
                <Item addReview={this.addReview} />
                <div className="customer-review-container">
                    <div className="filtered-buttons">
                        <h6>CUSTOMER REVIEWS</h6>
                        <RatingStar value={averageRating} showOutOf />
                        <p>{reviews.length} reviews</p>
                        <FilteredRating
                            filterByRating={this.filterByRating}
                            data={rating}
                        />
                    </div>
                    <div className="review-detail-container">
                        {data.map((review) => (
                            <ReviewDetail key={review.username} data={review} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerReviews;

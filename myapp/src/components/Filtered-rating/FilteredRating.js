import React from "react";
import RatingBar from "../RatingBar/RatingBar";
import "./FilteredRating.style.scss";

const findPercentage = (data, rating) => {
    const total = Object.values(data).reduce((acc, cur) => acc + cur, 0);
    return (data[rating] / total) * 100;
};

const FilteredRating = ({ filterByRating, data }) => {
    return (
        <div className="star-rating-container">
            <div className="star-rating">
                {" "}
                <p onClick={findPercentage(data, 5) > 0 ? () => filterByRating(5) : null}>
                    5 star
                </p>{" "}
                <RatingBar
                    className="rating-bar"
                    variant="determinate"
                    value={findPercentage(data, 5)}
                />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={findPercentage(data, 4) > 0 ? () => filterByRating(4) : null}>
                    4 star
                </p>{" "}
                <RatingBar
                    className="rating-bar"
                    variant="determinate"
                    value={findPercentage(data, 4)}
                />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={findPercentage(data, 3) > 0 ? () => filterByRating(3) : null}>
                    3 star
                </p>{" "}
                <RatingBar
                    className="rating-bar"
                    variant="determinate"
                    value={findPercentage(data, 3)}
                />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={findPercentage(data, 2) > 0 ? () => filterByRating(2) : null}>
                    2 star
                </p>{" "}
                <RatingBar
                    className="rating-bar"
                    variant="determinate"
                    value={findPercentage(data, 2)}
                />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={findPercentage(data, 1) > 0 ? () => filterByRating(1) : null}>
                    1 star
                </p>{" "}
                <RatingBar
                    className="rating-bar"
                    variant="determinate"
                    value={findPercentage(data, 1)}
                />
            </div>
        </div>
    );
};

export default FilteredRating;

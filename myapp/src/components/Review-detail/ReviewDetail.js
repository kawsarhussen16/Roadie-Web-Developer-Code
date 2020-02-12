import React from "react";
import "./ReviewDetail.style.scss";
import RatingStar from "../RatingStar/RatingStar";

const ReviewDetail = ({ data }) => {
    const { headline, username, date, comment, rating } = data;
    return (
        <div className="review-detail">
            <p>
                {" "}
                <strong>{headline} </strong>
            </p>
            <div className="rating-star">
                {" "}
                <RatingStar value={rating} />
            </div>
            <p className="user-tag">
                by {username} on {date.toLocaleDateString()}
            </p>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewDetail;

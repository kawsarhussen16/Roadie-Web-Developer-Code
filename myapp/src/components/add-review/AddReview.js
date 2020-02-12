import React from "react";
import "./AddReview.style.scss";
const initialState = {
    rating: 1,
    username: "",
    headline: "",
    comment: "",
    date: new Date()
};
class AddReview extends React.Component {
    state = { ...initialState };
    clearState = () => {
        this.setState({ ...initialState });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let newReview = {
            username: this.state.username,
            headline: this.state.headline,
            date: this.state.date,
            comment: this.state.comment,
            rating: parseInt(this.state.rating)
        };
        this.props.addReview(newReview);
        this.props.handleClose();
    };
    validateForm = () => {
        const { username, headline, rating, comment } = this.state;
        const isInvalid = !username || !headline || !rating || !comment;
        return isInvalid;
    };
    render() {
        const { rating, username, headline, comment } = this.state;
        return (
            <div className="form-container">
                <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Rating
                        <select value={rating} name="rating" onChange={this.handleChange}>
                            <option value="1" defaultValue>
                                One star
                            </option>
                            <option value="2">Two star</option>
                            <option value="3">Three star</option>
                            <option value="4">Four star</option>
                            <option value="5">Five star</option>
                        </select>
                    </label>
                    <label>
                        Your name
                        <input
                            type="text"
                            value={username}
                            name="username"
                            placeholder="Enter text here.."
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Review title
                        <input
                            type="text"
                            value={headline}
                            name="headline"
                            placeholder="Enter text here.."
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Write your review below
                        <textarea
                            value={comment}
                            name="comment"
                            placeholder="Enter text here.."
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
                <div className="dialog-buttons">
                    <button
                        className="btn"
                        onClick={this.props.handleClose}
                        color="primary">
                        CANCEL
                    </button>
                    <button
                        type="submit"
                        className="button-primary btn"
                        disabled={this.validateForm()}
                        onClick={(e) => this.handleSubmit(e)}
                        color="primary">
                        SUBMIT
                    </button>
                </div>
            </div>
        );
    }
}

export default AddReview;

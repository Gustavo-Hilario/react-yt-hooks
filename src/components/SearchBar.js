import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
        // Call callback function from parent component -- API
    };

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit}>
                <div className="">
                    <label htmlFor="search-input" className="display-5">
                        Search:
                    </label>
                    <input
                        type="text"
                        id="search-input"
                        className="form-control form-control-lg"
                        placeholder="Enter your search term"
                        // Creating a controled input – storting data on component
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

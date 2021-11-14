import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, setSearchTerm } from "../../redux/slices/jobSlice";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const Find = () => {
    console.log(inputRef.current.value);
    dispatch(setSearchTerm(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div className="searchBar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="searchBar__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        ref={inputRef}
        className="searchBar__input"
        type="text"
        placeholder="Enter your preferred programming language..."
      />
      <button onClick={Find} className="searchBar_btn">
        Find job
      </button>
    </div>
  );
};

export default SearchBar;

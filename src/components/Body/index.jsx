import React, { useEffect, useState } from "react";
import "./Body.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/slices/jobSlice";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Body = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const jobs = useSelector((state) => state.job.jobs);
  const searchTerm = useSelector((state) => state.job.searchTerm);
  const total_count = useSelector((state) => state.job.total_count);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getAllJobs({ page: currentPage, searchTerm }));
  }, [currentPage, searchTerm, dispatch]);

  return (
    <>
      <Modal show={show} setShow={setShow} />
      <div className="body">
        <div className="bodyHeader">
          <h2>
            Showing {jobs?.length}/{total_count} Jobs
          </h2>
          <div className="bodyHeader__sortby">
            <p>Sort by:</p>
            <select>
              <option value="">Relevance</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
              <option value="">Most Recent</option>
            </select>
          </div>
        </div>
        <div className="body__grid">
          {jobs.map((job, i) => (
            <div key={i} className="bodyGrid__card">
              {/* img */}
              <img src={job.logo.__cdata} alt="" />
              <h2>{job.title.__cdata}</h2>
              <p>💵 {job.salary.__cdata} </p>
              <p>📍 {job.location.__cdata}</p>
              {/* badges */}
              <div className="bodyCard__badge">{job.jobtype.__cdata}</div>
              <div className="girdCard__btns">
                <button
                  onClick={() => setShow(true)}
                  className="cardBtn__primary"
                >
                  Apply Now
                </button>
                <Link to={`/detail/${job.id.__cdata}`}>
                  <button className="cardBtn__secondary">More...</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={total_count}
          pageSize={12}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Body;

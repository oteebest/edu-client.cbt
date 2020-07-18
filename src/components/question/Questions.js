import React, { useEffect } from "react";
import PageHeader from "../../PageHeader";
import SecureLayout from "../../SecureLayout";
import {
  LoadQuestions,
  DeleteQuestion,
  ManageQuestion,
} from "../../redux/actions/questionActions";
import { LoadPredefinedData } from "../../redux/actions/predefinedDataActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Questions = ({
  LoadQuestions,
  DeleteQuestion,
  ManageQuestion,
  questions,
  LoadPredefinedData,
}) => {
  useEffect(() => {
    function Load() {
      LoadQuestions(2, 1);
    }

    Load();
  }, [LoadQuestions]);

  useEffect(() => {
    LoadPredefinedData();
  }, [LoadPredefinedData]);

  function renderPaging() {
    const totalSize = questions.totalSize;
    const currentPageNumber = questions.pageNumber;
    const pageSize = questions.pageSize;
    const numberOfPages =
      Math.floor(totalSize / pageSize) + (totalSize % pageSize);

    const maxNumberOfPagesToDisplay = 5;

    const numberOfPager =
      numberOfPages > maxNumberOfPagesToDisplay
        ? maxNumberOfPagesToDisplay
        : numberOfPages;

    let startIndex = 0;
    let endIndex = numberOfPager;

    if (currentPageNumber > maxNumberOfPagesToDisplay) {
      const remainingPages = numberOfPages - currentPageNumber;

      if (remainingPages >= maxNumberOfPagesToDisplay) {
        startIndex = currentPageNumber;
      } else {
        startIndex = numberOfPages - maxNumberOfPagesToDisplay;
        endIndex = startIndex + numberOfPager;
      }
    }

    const enableNext = endIndex < numberOfPages;
    const enablePrevious = startIndex > 0;

    let pager = [];

    for (let i = startIndex; i < endIndex; i++) {
      const pageNumber = i + 1;
      const isActive = pageNumber === currentPageNumber ? true : false;

      pager.push(
        <li className={isActive ? "page-item active" : "page-item"}>
          {isActive ? (
            <Link href="#" className="page-link">
              {pageNumber}
            </Link>
          ) : (
            <Link
              href="#"
              onClick={() => LoadQuestions(2, pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </Link>
          )}
        </li>
      );
    }

    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li className={!enablePrevious ? "page-item disabled" : "page-item"}>
            <Link
              href="#"
              onClick={() => LoadQuestions(2, currentPageNumber - 1)}
              className="page-link"
            >
              Previous
            </Link>
          </li>
          {pager}

          <li className={!enableNext ? "page-item disabled" : "page-item"}>
            <Link
              href="#"
              onClick={() => LoadQuestions(2, currentPageNumber + 1)}
              className="page-link"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  function renderQuestions() {
    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="accrodion-regular">
            <table className="table">
              {questions.items ? (
                questions.items.map((u, i) => {
                  return (
                    <tr>
                      <td>
                        <div id="accordion">
                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Question {i + 1}
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                <p className="lead">{u.text}</p>

                                <p>
                                  {u.options.map((a) => {
                                    return (
                                      <div className="form-check">
                                        {u.questionType === "SingleChoice" ? (
                                          <label class="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              name="radio-stacked"
                                              disabled
                                              checked={a.isAnswer}
                                              class="custom-control-input"
                                            />
                                            <span class="custom-control-label">
                                              {a.text}
                                            </span>
                                          </label>
                                        ) : (
                                          <label className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              disabled
                                              checked={a.isAnswer}
                                              className="custom-control-input"
                                            />
                                            <span className="custom-control-label">
                                              {a.text}
                                            </span>
                                          </label>
                                        )}
                                      </div>
                                    );
                                  })}
                                </p>
                                <Link
                                  to={`/questions/${u.id}`}
                                  text="Edit"
                                  className="btn btn-secondary"
                                >
                                  Edit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </table>
            {renderPaging()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <SecureLayout>
      <div className="container-fluid dashboard-content">
        <PageHeader HeaderText="Questions" />
        {renderQuestions()}
      </div>
    </SecureLayout>
  );
};

Questions.propTypes = {
  questions: PropTypes.object.isRequired,
  LoadQuestions: PropTypes.func.isRequired,
  DeleteAssessment: PropTypes.func.isRequired,
  ManageAssessment: PropTypes.func.isRequired,
  LoadPredefinedData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  LoadQuestions,
  ManageQuestion,
  DeleteQuestion,
  LoadPredefinedData,
};

const mapStateToProps = (state) => {
  console.log(state);
  const newQuestion = {
    id: null,
    name: "",
    instructions: "",
    duration: null,
  };
  const question = newQuestion;
  return {
    question,
    questions: state.questions,
    predefinedData: state.predefinedData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

import React, { useEffect, useState } from "react";
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
import QuestionManager from "./QuestionManager";

const Questions = ({
  LoadQuestions,
  DeleteQuestion,
  ManageQuestion,
  questions,
  LoadPredefinedData,
  predefinedData,
}) => {
  const [searchParameter, setSearchParameter] = useState({
    subjectId: "",
    difficultyLevelId: "",
  });

  useEffect(() => {
    function Load() {
      LoadQuestions(
        searchParameter.subjectId,
        searchParameter.difficultyLevelId,
        2,
        1
      );
    }

    Load();
  }, [
    LoadQuestions,
    searchParameter.difficultyLevelId,
    searchParameter.subjectId,
  ]);

  useEffect(() => {
    LoadPredefinedData();
  }, [LoadPredefinedData]);

  function renderPaging(subjectId, difficultyLevelId) {
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
              onClick={() =>
                LoadQuestions(subjectId, difficultyLevelId, 2, pageNumber)
              }
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
        <ul className="pagination justify-content-center">
          <li className={!enablePrevious ? "page-item disabled" : "page-item"}>
            <Link
              href="#"
              onClick={() =>
                LoadQuestions(
                  subjectId,
                  difficultyLevelId,
                  2,
                  currentPageNumber - 1
                )
              }
              className="page-link"
            >
              Previous
            </Link>
          </li>
          {pager}

          <li className={!enableNext ? "page-item disabled" : "page-item"}>
            <Link
              href="#"
              onClick={() =>
                LoadQuestions(
                  subjectId,
                  difficultyLevelId,
                  2,
                  currentPageNumber + 1
                )
              }
              className="page-link"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  function updateSearch() {
    setSearchParameter({
      subjectId: document.querySelector("#subjectDDList").value,
      difficultyLevelId: document.querySelector("#difficultyDDList").value,
    });
  }

  function renderQuestions() {
    return (
      <>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="accrodion-regular">
              <table className="table">
                <tr>
                  <td>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col form-group">
                            <select
                              id="difficultyDDList"
                              className="form-control form-control-sm"
                            >
                              <option value="">Select Difficulty</option>
                              {predefinedData.data ? (
                                predefinedData.data.difficultyLevels.map(
                                  (u) => <option value={u.id}>{u.name}</option>
                                )
                              ) : (
                                <></>
                              )}
                            </select>
                          </div>
                          <div className="col form-group">
                            <select
                              id="subjectDDList"
                              className="form-control form-control-sm"
                            >
                              <option value="">Select Subject</option>
                              {predefinedData.data ? (
                                predefinedData.data.subjects.map((u) => (
                                  <option value={u.id}>{u.name}</option>
                                ))
                              ) : (
                                <></>
                              )}
                            </select>
                          </div>
                          <div className="col form-group">
                            <button
                              style={{ width: 120 }}
                              onClick={() => updateSearch()}
                              className="btn btn-primary btn-sm float-right"
                              id="btnCreate"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-16 col-md-12 col-sm-12 col-12">
                            <div class="card">
                              <div class="card-header pills-regular">
                                <ul
                                  class="nav nav-pills card-header-pills"
                                  id="myTab2"
                                  role="tablist"
                                >
                                  <li class="nav-item">
                                    <a
                                      class="nav-link active"
                                      id="card-pills-1"
                                      data-toggle="tab"
                                      href="#card-pill-1"
                                      role="tab"
                                      aria-controls="card-1"
                                      aria-selected="true"
                                    >
                                      Single Choice Question
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a
                                      class="nav-link"
                                      id="card-pills-2"
                                      data-toggle="tab"
                                      href="#card-pill-2"
                                      role="tab"
                                      aria-controls="card-2"
                                      aria-selected="false"
                                    >
                                      Multiple Choice Question
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                class="card-body"
                                style={{ backgroundColor: "#efeff6" }}
                              >
                                <div class="tab-content" id="myTabContent2">
                                  <div
                                    class="tab-pane fade show active"
                                    id="card-pill-1"
                                    role="tabpanel"
                                    aria-labelledby="card-tab-1"
                                  >
                                    <QuestionManager
                                      PredefinedData={predefinedData}
                                      QuestionType="SingleChoice"
                                    ></QuestionManager>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="card-pill-2"
                                    role="tabpanel"
                                    aria-labelledby="card-tab-2"
                                  >
                                    <QuestionManager
                                      PredefinedData={predefinedData}
                                      QuestionType="MultipleChoice"
                                    ></QuestionManager>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
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
                                            <label className="custom-control custom-radio">
                                              <input
                                                type="radio"
                                                name="radio-stacked"
                                                disabled
                                                checked={a.isAnswer}
                                                className="custom-control-input"
                                              />
                                              <span className="custom-control-label">
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
              {renderPaging(
                searchParameter.subjectId,
                searchParameter.difficultyLevelId
              )}
            </div>
          </div>
        </div>
      </>
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

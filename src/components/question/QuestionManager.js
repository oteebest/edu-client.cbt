import React, { useState } from "react";
import PropTypes from "prop-types";

const QuestionManager = ({ QuestionType, PredefinedData }) => {
  const [question, setQuestion] = useState({
    text: "",
    options: [
      { text: "", optionId: 1, hasCustomText: false },
      { text: "", optionId: 2, hasCustomText: false },
      { text: "", optionId: 3, hasCustomText: false },
    ],
    questionType: QuestionType,
    mode: "Question",
    scoreValue: 0,
    shuffleOptions: false,
    difficultyLevelId: "",
    subjectId: "",
    difficultyLevel: "",
    subject: "",
    score: 0,
  });

  function SwitchMode(mode) {
    const switchedQuestion = { ...question, mode };
    setQuestion(switchedQuestion);
    console.log(question);
  }

  function handleChange(event) {
    const target = event.currentTarget;

    const { name, value } = target;

    if (target.type === "select-one") {
      const text = target.options[target.selectedIndex].text;

      if (name === "difficultyLevelId") {
        setQuestion((prevQuestion) => ({
          ...prevQuestion,
          [name]: value,
          difficultyLevel: text,
        }));
      } else if (name === "subjectId") {
        setQuestion((prevQuestion) => ({
          ...prevQuestion,
          [name]: value,
          subject: text,
        }));
      }
    } else {
      setQuestion((prevQuestion) => ({ ...prevQuestion, [name]: value }));
    }

    console.log(question);
  }

  function UpdateOptionText(event) {
    const { id, textContent } = event.currentTarget;

    const optionId = parseInt(id);

    const newOptions = question.options.map((u) =>
      u.optionId === optionId
        ? { ...u, hasCustomText: true, text: textContent }
        : u
    );

    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: newOptions,
    }));

    // setOptions({ ...question, options: newOptions });
  }

  function LoadOptions() {
    const mode = question.mode;

    const optionJSX = question.options.map((u, i) => {
      return (
        <>
          <tr style={{ borderStyle: "dotted" }}>
            <td>
              <label
                className={
                  question.questionType === "SingleChoice"
                    ? "custom-control custom-radio"
                    : "custom-control custom-checkbox"
                }
              >
                {question.questionType === "SingleChoice" ? (
                  mode !== "Response" ? (
                    <input
                      disabled
                      type="radio"
                      name="radio-stacked"
                      className="custom-control-input"
                    />
                  ) : (
                    <input
                      type="radio"
                      name="radio-stacked"
                      className="custom-control-input"
                    />
                  )
                ) : mode !== "Response" ? (
                  <input
                    type="checkbox"
                    disabled
                    class="custom-control-input"
                  />
                ) : (
                  <input type="checkbox" class="custom-control-input" />
                )}

                {mode === "Question" ? (
                  <span
                    onBlur={UpdateOptionText}
                    contenteditable="true"
                    className="custom-control-label"
                    id={u.optionId}
                  >
                    {u.text === "" ? `chioce #${i + 1}` : u.text}
                  </span>
                ) : (
                  <span className="custom-control-label" id={u.optionId}>
                    {u.text === "" ? `chioce #${i + 1}` : u.text}
                  </span>
                )}
              </label>
            </td>

            <td style={{ width: "20px" }}>
              {mode === "Question" ? (
                <i
                  class="fas fa-trash-alt"
                  onClick={() => RemoveOption(u.optionId)}
                ></i>
              ) : (
                <></>
              )}
            </td>
          </tr>
        </>
      );
    });

    return optionJSX;
  }

  function AddOption() {
    const count = question.options.length + 1;

    const newOptions = question.options;

    newOptions.push({
      text: ``,
      optionId: count,
      hasCustomText: false,
    });

    setQuestion({ ...question, options: newOptions });

    console.log(newOptions);
  }

  function RemoveOption(optionId) {
    const filteredOptions = question.options.filter(
      (u) => u.optionId !== optionId
    );

    const newOptions = filteredOptions.map((u, i) => {
      if (!u.hasCustomText) {
        return { ...u, text: `choice #${i + 1}`, optionId: i + 1 };
      } else {
        return u;
      }
    });

    console.log(newOptions);
    setQuestion({ ...question, options: newOptions });
  }

  return (
    <div className="card">
      <div className="card-header">
        Choice Interaction
        <div>
          <>
            <button
              onClick={() => SwitchMode("Question")}
              className={
                question.mode === "Question"
                  ? "btn btn-rounded btn-info"
                  : "btn btn-rounded btn-light"
              }
            >
              Question
            </button>
            <button
              onClick={() => SwitchMode("Response")}
              className={
                question.mode === "Response"
                  ? "btn btn-rounded btn-info"
                  : "btn btn-rounded btn-light"
              }
            >
              Response
            </button>
          </>
        </div>
      </div>

      <div className="card-body">
        <div className="col form-group">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70%" }}>
                <div>
                  {question.mode === "Question" ? (
                    <input
                      onChange={handleChange}
                      style={{ marginBottom: "10px" }}
                      className="form-control form-control-sm"
                      type="textbox"
                      name="text"
                      value={question.text}
                    />
                  ) : (
                    <>
                      <span>
                        <strong>{question.text}</strong>
                      </span>
                      {question.mode === "Response" ? (
                        <div class="alert alert-primary" role="alert">
                          {question.questionType === "SingleChoice"
                            ? "Choose correct option"
                            : "Choose correct options"}
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  )}

                  <table style={{ width: "100%" }}>
                    <tbody style={{ width: "100%" }}>{LoadOptions()}</tbody>
                  </table>
                </div>
                {question.mode === "Question" ? (
                  <div onClick={() => AddOption()} style={{ paddingTop: 5 }}>
                    <i class="fas fa-plus-circle"></i> Add option
                  </div>
                ) : (
                  <></>
                )}
              </td>

              <td style={{ width: "30%" }}>
                <div>
                  <table>
                    <tr>
                      <td>Difficulty Level</td>
                      <td>
                        {question.mode !== "Done" ? (
                          <select
                            id="difficultyLevelId"
                            name="difficultyLevelId"
                            onChange={handleChange}
                            className="form-control form-control-sm"
                          >
                            <option value="">Select Difficulty</option>
                            {PredefinedData.data ? (
                              PredefinedData.data.difficultyLevels.map((u) =>
                                u.id === question.difficultyLevelId ? (
                                  <option selected value={u.id}>
                                    {u.name}
                                  </option>
                                ) : (
                                  <option value={u.id}>{u.name}</option>
                                )
                              )
                            ) : (
                              <></>
                            )}
                          </select>
                        ) : (
                          <span>{question.difficultyLevel}</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Subject</td>
                      <td>
                        {question.mode !== "Done" ? (
                          <select
                            id="subjectId"
                            name="subjectId"
                            onChange={handleChange}
                            className="form-control form-control-sm"
                          >
                            <option value={question.subjectId}>
                              Select Subject
                            </option>
                            {PredefinedData.data ? (
                              PredefinedData.data.subjects.map((u) =>
                                u.id === question.subjectId ? (
                                  <option selected value={u.id}>
                                    {u.name}
                                  </option>
                                ) : (
                                  <option value={u.id}>{u.name}</option>
                                )
                              )
                            ) : (
                              <></>
                            )}
                          </select>
                        ) : (
                          <span>{question.subject}</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Score</td>
                      <td>
                        {question.mode !== "Done" ? (
                          <input
                            onChange={handleChange}
                            style={{ marginBottom: "10px" }}
                            className="form-control form-control-sm"
                            type="number"
                            name="score"
                            value={question.score}
                          />
                        ) : (
                          <span>{question.score}</span>
                        )}
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>

              <td>
                {question.mode === "Done" ? (
                  <button
                    style={{ width: 120 }}
                    className="btn btn-rounded btn-primary float-right"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => SwitchMode("Done")}
                    style={{ width: 120 }}
                    className="btn btn-rounded btn-primary float-right"
                  >
                    Done
                  </button>
                )}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

QuestionManager.propTypes = {
  QuestionType: PropTypes.string.isRequired,
  PredefinedData: PropTypes.object.isRequired,
};

export default QuestionManager;

import React, { useEffect, useState, useMemo } from "react";
import PageHeader from "../../PageHeader";
import SecureLayout from "../../SecureLayout";
import {
  LoadAssessment,
  DeleteAssessment,
  ManageAssessment,
} from "../../redux/actions/assessmentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormModal from "../common/FormModal";
import { Form } from "react-bootstrap";
import Table from "../common/Table";
import { FormatDate } from "../../util";

const Assessments = ({
  LoadAssessment,
  DeleteAssessment,
  ManageAssessment,
  assessments,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);
  const [headerText, setModalHeaderText] = useState("");
  const [validated, setValidated] = useState(false);
  const [assessment, setAssessment] = useState({ ...props.assessment });



  useEffect(() => {
    function Load() {
      LoadAssessment();
    }

    Load();
  }, [LoadAssessment]);

  useEffect(() => {});

  function handleOpen(e) {
    e.preventDefault();
    setShowModal(true);
    setModalHeaderText("New Assessment");
    setAssessment({
      id: null,
      name: "",
      instructions: "",
      duration: null,
    });
  }

  function handleOpenUpdate(id) {
    setShowModal(true);
    setModalHeaderText("Update Assessment");

    setAssessment(assessments[id]);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setAssessment((prevCourse) => ({
      ...prevCourse,
      [name]: name === "duration" ? parseInt(value) : value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    ManageAssessment(assessment);

    setAssessment({});

    setShowModal(false);
  };

  function handleDelete(id) {
    DeleteAssessment(id);
  }

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Duration",
        accessor: "duration",
      },
      {
        Header: "Created",
        accessor: "createdOn",
      },
    ],
    []
  );

  function renderAssessmentList(columns, assessments) {
    const assessmentCopy = Object.values(assessments);

    const data = assessmentCopy.map((u) => ({
      ...u,
      ...{ createdOn: FormatDate(u.createdOn) },
    }));

    //   const data = assessments;
    return (
      <>
        <Table
          columns={columns}
          data={data}
          handleOpenUpdate={handleOpenUpdate}
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          createButtonText="Create Asssessment"
        />
      </>
    );
  }

  function renderAssesments() {
    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          {renderAssessmentList(columns, assessments)}
        </div>
      </div>
    );
  }

  return (
    <SecureLayout>
      <div className="container-fluid dashboard-content">
        <PageHeader HeaderText="Assessment" />
        {renderAssesments()}
        <FormModal
          validated={validated}
          handleClose={closeModal}
          title={headerText}
          visible={showModal}
          btnCloseText="Close"
          btnSubmiText="Sumbit"
          handleSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Name </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter assessment name"
              name="name"
              value={assessment.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration(mins) </Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              type="number"
              name="duration"
              value={assessment.duration}
              placeholder="Enter duration in mins"
            />
            <Form.Control.Feedback type="invalid">
              Enter duration in mins
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Instruction</Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              as="textarea"
              rows="3"
              name="instructions"
              value={assessment.instructions}
              placeholder="Enter instruction"
            />
            <Form.Control.Feedback type="invalid">
              Enter instructions
            </Form.Control.Feedback>
          </Form.Group>
        </FormModal>
      </div>
    </SecureLayout>
  );
};

Assessments.propTypes = {
  assessments: PropTypes.object.isRequired,
  LoadAssessment: PropTypes.func.isRequired,
  DeleteAssessment: PropTypes.func.isRequired,
  ManageAssessment: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  LoadAssessment,
  ManageAssessment,
  DeleteAssessment,
};

const mapStateToProps = (state) => {
  const newAssessment = {
    id: null,
    name: "",
    instructions: "",
    duration: null,
  };
  const assessment = newAssessment;
  return {
    assessment,
    assessments: state.assessments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assessments);

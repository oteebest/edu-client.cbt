import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormModal = ({
  handleClose,
  children,
  title,
  handleSubmit,
  btnSubmiText,
  btnCloseText,
  visible,
  validated,
}) => {
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {btnCloseText}
          </Button>
          <Button variant="primary" type="Submit">
            {btnSubmiText}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  btnSubmiText: PropTypes.string.isRequired,
  btnCloseText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default FormModal;

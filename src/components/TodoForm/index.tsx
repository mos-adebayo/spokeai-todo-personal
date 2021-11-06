import React from "react";
import { Offcanvas } from "react-bootstrap";
import { AddButtonWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";
import { createTaskStarted } from "../../redux/actions/taskActions";
import TaskForm from "./Form";

const CreateToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { isCreating } = useSelector((state: RootState) => state.task);

  const handleStartCreation = (status: boolean) => {
    dispatch(createTaskStarted(status));
  };

  const handleClose = () => {
    dispatch(createTaskStarted(false));
  };

  return (
    <React.Fragment>
      <Offcanvas show={isCreating} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Todo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TaskForm />
        </Offcanvas.Body>
      </Offcanvas>

      <AddButtonWrapper onClick={() => handleStartCreation(true)}>
        +
      </AddButtonWrapper>
    </React.Fragment>
  );
};

export default CreateToDo;

import React, { useState, useEffect } from "react";
import { Alert, Toast, ToastContainer } from "react-bootstrap";
import { Text } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";

const ErrorMessage: React.FC = () => {
  const [visibleToast, setVisibleToast] = useState(false);
  const { error, task } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (task.isCreating) {
      setVisibleToast(false);
    } else {
      setVisibleToast(true);
    }
  }, [error, task]);

  if (!error.message) return <React.Fragment />;

  return (
    <React.Fragment>
      {task.isCreating ? (
        <Alert variant="danger">
          <Text>{error.message}</Text>
        </Alert>
      ) : (
        <ToastContainer className="p-3" position="top-end">
          <Toast
            show={visibleToast}
            onClose={() => setVisibleToast(false)}
            bg="danger"
          >
            <Toast.Header closeButton>
              <strong className="me-auto">Error!</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{error.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;

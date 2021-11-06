import React, { useState, useEffect } from "react";
import { Alert, Toast, ToastContainer } from "react-bootstrap";
import { Text } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";

const ErrorMessage: React.FC = () => {
  const [visibleToast, setVisibleToast] = useState(false);
  const { error, isCreating } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (error && !isCreating) {
      setVisibleToast(true);
    } else {
      setVisibleToast(false);
    }
  }, [error, isCreating]);

  if (!error) return <React.Fragment />;

  return (
    <React.Fragment>
      {!isCreating ? (
          <ToastContainer className="p-3" position="top-end">
            <Toast show={visibleToast} onClose={() => setVisibleToast(false)} bg="danger">
              <Toast.Header closeButton>
                <strong className="me-auto">Error!</strong>
              </Toast.Header>
              <Toast.Body className="text-white">{error}</Toast.Body>
            </Toast>
          </ToastContainer>

      ) : (
        <Alert variant="danger">
          <Text>{error}</Text>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;

import React, { useState, useEffect } from "react";
import { Alert, Toast, ToastContainer } from "react-bootstrap";
import { Text } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";

const ErrorMessage: React.FC = () => {
  const [visibleToast, setVisibleToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const { error: createError } = useSelector((state: RootState) => state.task);
  const { error: fetchError } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if(fetchError) {
      setVisibleToast(true);
    } else {
      setVisibleToast(false);
    }

    setErrorMessage(createError || fetchError);
  }, [fetchError, createError]);

  if (!errorMessage) return <React.Fragment />;

  return (
    <React.Fragment>
      {fetchError ? (
        <ToastContainer className="p-3" position="top-end">
          <Toast
            show={visibleToast}
            onClose={() => setVisibleToast(false)}
            bg="danger"
          >
            <Toast.Header closeButton>
              <strong className="me-auto">Error!</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{errorMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      ) : (
        <Alert variant="danger">
          <Text>{errorMessage}</Text>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;

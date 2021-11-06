import { AxiosError } from "axios";

export const getProgressStatus = (value: number): string => {
  let status;
  if (value <= 30) {
    status = "danger";
  } else if (value < 50) {
    status = "warning";
  } else if (value <= 99) {
    status = "info";
  } else {
    status = "success";
  }

  return status;
};

export const interpretHTTPError = (error: AxiosError): string => {
  let errorMessage;

  if (error.response) {
    errorMessage = error.response.data;
    if (error.response.status === 500) {
      errorMessage = "Oops, something went wrong";
    } else if (error.response.status === 404) {
      errorMessage = "Resource not found";
    }
  } else {
    errorMessage =
      "Unable to communicate with server, ensure to start JSON server";
  }

  return errorMessage;
};

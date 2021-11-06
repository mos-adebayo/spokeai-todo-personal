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

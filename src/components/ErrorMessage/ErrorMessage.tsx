import React from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="error-message">
    <p>{message}</p>
  </div>
);

export default ErrorMessage;

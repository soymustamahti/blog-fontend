import React from 'react';

const Alert = ({ text }: any) => {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Ups! </strong>
        {text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;

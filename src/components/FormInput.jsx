import React from "react";

const FormInput = ({ label, type, name, size }) => {
  return (
    <label className="form-control w-full mb-3">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder="Type here"
        className={`input input-bordered w-full ${size}`}
        required
      />
    </label>
  );
};
export default FormInput;

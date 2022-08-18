import React, { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import { handleChange } from "./OnChangeHandler";
import Button from "./Button";
import Input from "./Input";

const NamesForm = () => {
  const {
    submitNamesDivision,
    state: { nameDivision },
    setCurrentPage,
  } = useFormContext();

  const [nameFormDetails, setNameFormDetails] = useState({
    fullName: nameDivision.fullName || "",
    displayName: nameDivision.displayName || "",
  });
  const nameFormHandler = (e) => {
    e.preventDefault();
    submitNamesDivision(nameFormDetails);
    setCurrentPage("workspaceDivision");
  };

  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        Welcome! First things first...
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        You can always change them later.
      </p>
      <form
        onSubmit={nameFormHandler}
        className="mt-14 flex flex-col gap-10 justify-center items-center w-full"
      >
        <Input
          name="fullName"
          label={"Full Name"}
          value={nameFormDetails.fullName}
          required
          onChange={(e) => handleChange(e, setNameFormDetails)}
          placeholder="Steve Jobs"
        />
        <Input
          value={nameFormDetails.displayName}
          onChange={(e) => handleChange(e, setNameFormDetails)}
          required
          name="displayName"
          label={"Display Name"}
          placeholder="Steve"
        />
        <Button/>
      </form>
    </div>
  );


};

export default NamesForm;

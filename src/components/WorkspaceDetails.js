import React,{useState} from 'react';
import { handleChange } from './OnChangeHandler';
import Button from './Button';
import { useFormContext } from '../contexts/FormContext';
import Input from './Input';
const WorkspaceDetails = () => {
  const {
    setCurrentPage,
    submitWorkspaceDivision,
    state: { workspaceDivision },
  } = useFormContext();
  const [workspaceDetails, setWorkSpaceDetails] = useState({
    name: workspaceDivision.name || "",
    url: workspaceDivision.url || "",
  });
  const workspaceFormHandler = (e) => {
    e.preventDefault();
    submitWorkspaceDivision(workspaceDetails);
    setCurrentPage("streamlineDivision");
  };
  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        Let's setup a home for all your work
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        You can always create another workspace later.
      </p>
      <form
        onSubmit={workspaceFormHandler}
        className="mt-14 flex flex-col gap-10 justify-center items-center w-full max-w-xs md:max-w-md"
      >
        <Input
          name="name"
          label={"Workspace Name"}
          value={workspaceDetails.name}
          required={true}
          onChange={(e) => handleChange(e, setWorkSpaceDetails)}
          placeholder="Eden"
        />
        <Input
          value={workspaceDetails.url}
          onChange={(e) => handleChange(e, setWorkSpaceDetails)}
          required={false}
          name="url"
          prefix="www.eden.com/"
          label={"Workspace URL"}
          placeholder="Example"
        />
        <Button />
      </form>
    </div>
  );
}

export default WorkspaceDetails

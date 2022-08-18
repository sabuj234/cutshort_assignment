
import './App.css';
import { NamesForm,WorkspaceDetails,StreamLine,Success,Progress } from './components';
import { useFormContext } from './contexts/FormContext';

function App() {

  const {currentPage} = useFormContext();

  const currentSection =(page)=>{
    switch(page){
      case "nameDivision":
        return <NamesForm/>
      case "workspaceDivision":
        return <WorkspaceDetails/>

      case "streamlineDivision":
        return <StreamLine/>
      case "success":
        return <Success/>
      default:
        return;
    }
  }
  return (
    <div className="font-inter h-[calc(100vh-10rem)] flex justify-start pt-16 gap-14 items-center flex-col px-4 ">
      <div className="flex justify-center items-center gap-3">
      <img src="/logo.jpg" alt="logo" className="w-6 h-6 mb-1 object-cover" />
      <span className="text-2xl font-bold">Eden</span>
    </div>
      <Progress />
      {currentSection(currentPage)}
    </div>
  );
}

export default App;

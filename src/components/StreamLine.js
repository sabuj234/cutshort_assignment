import React from 'react'
import { useFormContext } from '../contexts/FormContext'
import StreamlineCard from './StreamlineCard';
import Button from './Button';
import Myself from './Self';
import Team from './Team';

const StreamLine = () => {

  const{planningDetails,
    submitStreamlineDivision,
    setCurrentPage,
    state: {
      streamlineDivision: { team, self },
    },
  }=useFormContext();

  const handleStreamLine = ()=>{
    submitStreamlineDivision();
    setCurrentPage("success");
  }

  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        How are you planning to use Eden?
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
        <StreamlineCard
          onClick={() => planningDetails("self")}
          selected={self}
          cardText={"Write better. Think more clearly. Stay organized"}
          cardHeader={"For myself"}
          icon={<Myself fill={self} />}
        />
        <StreamlineCard
          onClick={() => planningDetails("team")}
          cardText={"Wikis, docs, tasks & projects, all in one place."}
          cardHeader={"With my team"}
          icon={<Team fill={team} />}
          selected={team}
        />
      </div>
      <div className="mt-5 text-center">
        <Button onClickHandler={handleStreamLine} />
      </div>
    </div>
  )
}

export default StreamLine

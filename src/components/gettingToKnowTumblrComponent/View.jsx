import React, { useState } from "react";
import "../../styles/styles.css";
import AboutContainer from "./containers/AboutContainer";
import SmallCategory from "./containers/SmallCategory";
import TopContainer from "./containers/TopContainer";

export default function Interests() {
  const [interests, setInterests] = useState([]);

  const handleRemoveInterest = (obj) => {
    setInterests(interests.filter((i) => i !== obj));
  };

  return (
    <>
    <div className="onboarding-manager">
    <TopContainer interests={interests} setInterests={setInterests} handleRemoveInterest={handleRemoveInterest}/>
        <div className="tile_manager">
            <AboutContainer />

            <SmallCategory name="Television"/>
            <SmallCategory name="Television"/>
            <SmallCategory name="Television"/>
            <SmallCategory name="Television"/>
            <SmallCategory name="Television"/>
            <SmallCategory name="Television"/>

        </div>
        
    </div>
    </>
  );
}
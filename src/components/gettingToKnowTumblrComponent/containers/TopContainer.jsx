import React from "react";
import "../../../styles/styles.css";
import Chip from "./Chip";

export default function TopContainer(props){
    const {interests,setInterests,handleRemoveInterest}=props;

    return <>
    <div className="top">
        <div className="chipsDiv">
            <div className="chipsSubDiv">
                <Chip/>
                <Chip/>
                <Chip/>
                <Chip/>
                <Chip/>
            </div>
        </div>
        <div className="spaceTopDiv"></div>
        <div className="chipsButtonsDiv">
            <button className="chipsButtonStyle" style={{ backgroundColor:'transparent' }}>
                <div className="skip">
                    <span>Skip</span>
                </div>
            </button>
            <button className="chipsButtonStyle" disabled={true}>
                <div className="progressMarker"></div>
                <div className="progressText">
                    <span>Select {5-interests.length}</span>
                </div>
            </button>
        </div>
    </div>
    </>
}
import React from "react";

import "../chat.css";

import NoDp from "../chat_list/noDp.png";
import Collapse from "./collapse.png"

export function InfoWindow({ info, onHide=()=>{} }) {
    return (
        <div className="infoWindow">
            <div className="infoHeader"><img src={Collapse} alt={"*"} className="hideInfo" onClick={onHide} width={"10px"} height={"10px"} />{info.IsGroup ? "Group Details": "Contact Details"}</div>
            <div className="personalInfo">
                <div className="chatDp profileDp"><img src={info.DP || NoDp} alt={"*"} width="200px" height="200px" /></div>
                <b>{info.Name}</b>
                <div>{info.Number}</div>
            </div>
            <div><b>{info.Description}</b></div>
            {
                (info.IsGroup || info.AvailableGroups) &&
                <div>
                    {
                        info.IsGroup &&
                        <>
                            <h4>Members:</h4>
                            {info.Members.map(member => <p key={member}>{member}</p>)}
                        </>
                    }
                    {
                        info.AvailableGroups &&
                        <>
                            <span>Participated groups:</span>
                            {info.AvailableGroups.map(grp => <p key={grp}><b>{grp}</b></p>)}
                        </>
                    }
                </div>
            }
        </div>
    )
}
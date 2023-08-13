import "./leader.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Leader() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://acs-coc-api--wachawich.repl.co/api")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <div className="container">
            <div className="col">
                {data.map((val, idx) => (
                    <div key={idx} className="leader_board">
                        <div className="header_leader">
                            <h1 id="mode_section">{val.mode}</h1>
                            <h3 id="date_section">{val.match}</h3>
                        </div>
                        <div className="photo_show_case">
                            {val.rank.map((vas, index) => {
                                return (
                                    <div className="showcase_card">
                                        <h5>{vas.ranks}</h5>
                                        <img src={vas.imgs} alt="" id={vas.id}/>
                                        <h2>{vas.name}</h2>
                                        <h3>{vas.score}</h3>
                                        <h4 className={vas.id}>{vas.time} <span>วินาที</span></h4>
                                    </div>
                                )
                            })}
                        </div>
                        <ul className="header_ul">
                            <li id="li_header">
                                <h4 id='Rank'>RANK</h4>
                                <h4 id="name_f">PLAYER</h4>
                                <h4 id="score_f">SCORE</h4>
                                <h4 id="time_f">TIME</h4>
                            </li>
                        </ul>
                        <ul id="li_ul">
                            {val.player.map((vas, index) => {
                                return (
                                    <li id={vas.id}>
                                        <h4>{index + 1}</h4>
                                        <h4 id="name_b"> <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" /> {vas.codingamerNickname}</h4>
                                        <h4 id="score_b">{vas.score}</h4>
                                        <h4 id="time_b">{Math.floor((vas.duration / 1000) / 1)} วินาที</h4>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="history_leader_goto">
                            <Link to="/history_leader" target="_parent" rel="noopener noreferrer">
                                <button id='leader_boradBtn'>HISTORY LEADER BOARD</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leader;
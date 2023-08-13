import React from 'react'
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

// call api

function App() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://acs-coc-api--wachawich.repl.co/api/homepageapi")
            .then((response) => {
                setData(response.data);
        });
    }, []);

    return(
        <div className="container">
           <header className="Center_logo">
                <h1>ACS COMPETITION</h1>
           </header>
           <section className="Best_ranking">
                    {data.map((vals, idx) =>(
                        <div key={idx} className="best_player"> 
                            {vals.topply.map((vas) => {
                            return (
                                <div className="name_ply">
                                    <h1><span>TOP1</span><br/>{vas.mode}</h1>
                                    <div className="img">
                                        <img src={vas.photo} alt="" />
                                    </div>
                                    <div className="name_of_box">
                                        <h2>{vas.ply_name}</h2>
                                        <h4>{vas.score}</h4>
                                        {/* <h3>{vas.std_id}</h3> */}
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    ))}
           </section>
           <section className="btnBox">
                <div className="gtm_btnBox"> 
                    {data.map((valx, idx) =>(
                        <a href={valx.gotomatch} key={idx} className='gtmBtn' target="_blank"  rel="noreferrer">
                            <button> เข้าห้องแข่งขัน </button>
                        </a>
                    ))}
                </div>
                <Link to="/leader_board" target="_parent" rel="noopener noreferrer">
                    <button id='leader_boradBtn'>LEADER BOARD</button>
                </Link>
                <div className="hisroty_Btnbox">
                    <button id='historyBtn'>HISTORY</button> 
                    <button id='htu_boradBtn'>HOW TO USE</button>
                </div>
                
           </section>
        </div>
    )
}

export default App;

// leader_board , ranking , how to use , 
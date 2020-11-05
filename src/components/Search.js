import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import './Search.css';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

function Search({hideButton=false}){

    const[{}, dispatch]=useStateValue();
    const [input, setInput]=useState("");
    const history=useHistory();
    const search=(e)=>{
        e.preventDefault();

        console.log("you hit search button");

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push("/search");
    }

    return(
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_icon"/>
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <MicIcon className="mic_icon"/>
            </div>

            {!hideButton ?(
                 <div className="search_button">
                    <Button type="submit" onClick={search} variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                 </div>
            ): (
                <div className="search_button">
                    <Button type="submit" onClick={search} className="hiddenButton" variant="outlined">
                        Google Search
                    </Button>
                    <Button className="hiddenButton" variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                 </div>
            )}
        </form>
    );
}
export default Search;
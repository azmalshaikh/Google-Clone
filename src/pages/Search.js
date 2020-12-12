import React, { useState }from 'react'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    // Use State Keep track of input text
    // here input is whatever you type you also using this in input value tag 
    // Here setInput is full text 
    const [input, setInput] = useState("");
    const history = useHistory();

    // Take from hook StateProvider.js
    const [{}, dispatch] = useStateValue();

    // Search Method 
    const search = (e) => {
        // Prevent refresh when serch button is clicked
        e.preventDefault();

        // dispatch the search term
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        
        // to open currentUrl/search
        history.push('./search');
    };



    return (
        // The whole thing is form now
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" placeholder="Search Google or type a url" value={input} 
                        onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                <div className="search__button">
                    {/* Type is submit because when we 
                    hit enter google serach will be clicked*/}
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__button">
                    {/* Type is submit because when we 
                    hit enter google serach will be clicked*/}
                    <Button className="search__buttonHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search

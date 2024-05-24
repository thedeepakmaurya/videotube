import React, { useEffect, useState } from "react";
import logo from "../assets/youtube-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch();

    console.log(searchQuery)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults(
            {
                [searchQuery]: json[1],
            }
        ));
    }


    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col h-16 p-1 m-1 shadow-md items-center">
            <div className="flex col-span-1">
                <div className="cursor-pointer" onClick={() => toggleMenuHandler()}>
                    <span className="material-symbols-outlined">menu</span>
                </div>
                <a href="/">
                    <img className="h-6" src={logo} alt="youtube-logo" />
                </a>
            </div>
            <div className="col-span-10 px-10 ">
                <div>
                    <input
                        className="w-1/2 px-5 border align-middle border-gray-400 h-8 outline-none rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-l-0 h-8 bg-gray-100 border-gray-400 rounded-r-full pl-3 pr-3">
                        <span className="material-symbols-outlined align-middle">search</span>
                    </button>
                </div>
                {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[34rem] border border-gray-200 mt-1 shadow-lg rounded-lg">
                    <ul>
                        {
                            suggestions.map((suggestion, index) => {
                                return <li key={index} className="py-2 px-3  shadow-sm cursor-pointer hover:bg-gray-100 hover:rounded-full"><span className="material-symbols-outlined align-middle pr-1">search</span>{suggestion}</li>

                            })
                        }
                    </ul>
                </div>)}

            </div>
            <div className="flex col-span-1 justify-end">
                <span className="material-symbols-outlined">account_circle</span>
            </div>
        </div>
    );
};

export default Head;

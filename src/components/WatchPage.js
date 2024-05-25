import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closedMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closedMenu());
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="px-5 flex">
                <div >
                    <iframe
                        width="1000"
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    <LiveChat/>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default WatchPage;

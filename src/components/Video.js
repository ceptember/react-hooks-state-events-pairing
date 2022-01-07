import React from "react"; 

function Video ({videoInfo, onToggle, showComments, onLike, onDislike, upvotes, downvotes}){
    return (
        <div> 
            <h1>This header wasn't in the mockup</h1>
            <h3>...but I felt like the page needed something at the top.</h3>
            <iframe
                width="919"
                height="525"
                src={videoInfo.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{videoInfo.title}</h1>

            <div>
                {videoInfo.views} Views | Uploaded {videoInfo.createdAt}
            </div>
            <br />
            <div>
                <button onClick={onLike}>{upvotes}👍</button>
                <button onClick={onDislike}>{downvotes}👎</button>
            </div>
            <br />
            <button onClick = {onToggle}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr/>


        </div>
    )
}

export default Video; 
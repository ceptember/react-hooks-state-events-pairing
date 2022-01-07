import React from "react"; 

function CommentList ({videoInfo}){
    return(
        <div>
            <h2> {videoInfo.comments.length} Comments</h2>
            <div>
            {videoInfo.comments.map( (c) => {
                    return (
                        <div>
                            <h3>{c.user}</h3>
                            <p>{c.comment}</p>
                        </div>)            
                })
            }
            </div>

        </div>
    )
}

export default CommentList; 


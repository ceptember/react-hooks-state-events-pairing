import React, {useState} from "react"; 
import video from "../data/video.js";
import CommentList from "./CommentList.js";
import Video from "./Video.js"

function App() {

  const [showComments, setShowComments] = useState(true); 
  const [upvotes, setUpvotes] = useState(video.upvotes); 
  const [downvotes, setDownvotes] = useState(video.downvotes); 

  function toggleComments (){
    setShowComments( () => !showComments)
  }

  function like (){
    setUpvotes( () => upvotes + 1)
  }

  function dislike (){
    setDownvotes( () => downvotes + 1)
  }

  return (
    <div className="App">

      <Video videoInfo = {video} 
        onToggle = {toggleComments} 
        showComments = {showComments}
        onLike = {like}
        onDislike = {dislike} 
        upvotes = {upvotes}
        downvotes = {downvotes}
        />
      { showComments ? <CommentList videoInfo = {video} /> : "" }
      
    </div>
  );
}

export default App;

/*

*** My Outline ***

App
  |-- Video (with details and buttons)
  |-- Comments (toggled by button in sibling; state is in parent)
    

*/
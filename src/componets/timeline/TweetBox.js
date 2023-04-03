import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [TweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebase
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
        username: "nonaoto",
        verified: true,
        text: tweetMessage,
        avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
        image: TweetImage,
        timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            <Avatar />
            <input 
              value={tweetMessage}
              placeholder="いまどうしてる？" 
              type="text"
              onChange={(e) => setTweetMessage(e.target.value)}
            ></input>
        </div>
        <input 
          value={TweetImage}
          className='tweetBox--imageInput' 
          placeholder='画像のURLを入力してください' type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className='tweetBox--tweetButton' type='submit'
          onClick={sendTweet}>
            ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox

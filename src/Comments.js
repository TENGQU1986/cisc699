import React, { useState, useEffect } from "react";
import { db } from "./firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Comment from "./Comment";

const Comments = ({ user }) => {
  const demoComments = [
    {
      comment: "test2",
      email: "test2@example.com",
      timestamp: new Date(),
    },
    {
      comment: "test1",
      email: "test1@example.com",
      timestamp: new Date(),
    },
  ];
  const [dbComments] = useCollection(db.collection("comments"));
  const [comments, setComments] = useState(demoComments);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onCommentSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("value to submit", inputValue);
    const commentToAdd = {
        timestamp: new Date(),
        comment: inputValue,
        email: user.email,
      }
    try {
      const response = await db.collection("comments").add(commentToAdd);
        console.log('response',response)
      if(response) {
        setComments([...demoComments, commentToAdd])
        setInputValue('')
      }
    } catch (error) {
      console.log("error when inserting new comment", error.message);
    }
  };

  useEffect(() => {
    console.log("comments start");
    console.log("fectched", dbComments);
    // setComments();
    // db.collection("comments").add({
    //     comment: 'test2',
    //     email: 'test2@example.com',
    //     timestamp: new Date(),
    // })
    // const getComments = async () => {
    //     const response = await db.collection("comments").get();
    //     const data = await response.data()

    //     console.log(data)
    // }
    // getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <span>Comments: {comments.length} </span>
      <div className="input_area">
        <form onSubmit={onCommentSubmit}>
          <input type="text" onChange={handleInputChange} value={inputValue} />
          <button type="submit">Post your Comment</button>
        </form>
      </div>
      {comments.map((comment) => (
        <div key={comment.comment}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;

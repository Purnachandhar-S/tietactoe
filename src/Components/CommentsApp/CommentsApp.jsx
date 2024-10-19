// 2;44 is fine to take N hours of time to solve this problem
// now the time is 2;44
// But i have to be fastly solve the like less than 30min
// But i now its the practice to make my muscles to run faster by constistantly run (at a slow pace)
// to habituate & to face the situations where you push myself and keep moving forward

// Now the task is to make a Comments App

// app contain two input element one to write name and another to write comment
// when ever user click comment button this details added to comment section
// user can give a like and delete the comment

import { Component } from "react";

const initialCommentsList = [
  { id: 1, name: "purnachandhar", comment: "good", like: true },
  { id: 2, name: "purnachandhar", comment: "good", like: false },
  { id: 3, name: "purnachandhar", comment: "good", like: false },
  { id: 4, name: "purnachandhar", comment: "good", like: false },
];

function CommentItem(props) {
  const { commentDetails, onChangeLike, onDeleteComment } = props;
  const { id, name, comment, like } = commentDetails;

  const toggleLike = () => {
    onChangeLike(id);
    console.log(id, like);
  };

  const onDelete = () => {
    onDeleteComment(id);
  };
  const imgUrl = like ? "/" : "/";
  return (
    <li>
      <p>{name}</p>
      <p>{comment}</p>
      <button onClick={toggleLike}>
        <img src={imgUrl} alt="liked button" />
      </button>
      <button onClick={onDelete}>delete</button>
    </li>
  );
}

class CommentsApp extends Component {
  state = {
    commentsList: initialCommentsList,
    name: "",
    comment: "",
    like: false,
  };
  onChangeLike = (id) => {
    this.setState((prevState) => ({
      commentsList: prevState.commentsList.map((eachComment) => {
        if (id === eachComment.id) {
          return { ...eachComment, like: !eachComment.like };
        }
        return eachComment;
      }),
    }));
  };
  onDeleteComment = (id) => {
    this.setState((prevState) => ({
      commentsList: prevState.commentsList.filter(
        (eachComment) => id !== eachComment.id
      ),
    }));
  };
  onAddComment = (event) => {
    event.preventDefault();

    const { name, comment } = this.state;

    const newComment = {
      name,
      comment,
      like: false,
    };

    this.setState((prevState) => ({
      commentsList: [...prevState.commentsList, newComment],
      name: "",
      comment: "",
    }));
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { name, comment, commentsList } = this.state;
    return (
      <div>
        <h1>Comments</h1>
        <p>say something about the 4.0 Technologies</p>
        <form
          onSubmit={this.onAddComment}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "space-around ",
          }}
        >
          <input
            value={name}
            onChange={this.onChangeName}
            type="text"
            placeholder="Your name"
          />
          <textarea
            value={comment}
            onChange={this.onChangeComment}
            type="text"
            placeholder="Your Comment"
            rows="10"
            cols="50"
            id="content"
            name="content"
          ></textarea>

          {/* <input
            value={comment}
            onChange={this.onChangeComment}
            type="text"
            placeholder="Your Comment"
          /> */}
          <button type="submit">Add Comment</button>
        </form>

        <hr />
        <p>{commentsList.length} comments</p>
        <ul style={{ listStyle: "none" }}>
          {commentsList.map((eachComment) => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              onChangeLike={this.onChangeLike}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentsApp;

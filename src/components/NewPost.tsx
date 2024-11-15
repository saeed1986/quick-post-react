import React from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  body: string;
  author: string;
  onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
  onCancel: () => void;
}

const NewPost: React.FC<NewPostProps> = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={props.body}
          onChange={props.onBodyChange}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={props.author}
          onChange={props.onAuthorChange}
        />
      </p>
      <p className={classes.actions}>
        {" "}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;

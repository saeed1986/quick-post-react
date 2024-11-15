import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import classes from "./PostsLists.module.css";

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

const PostLists: React.FC<PostsListProps> = ({ isPosting, onStopPosting }) => {
  const [postInput, setPostInput] = useState({ body: "", author: "" });
  const [posts, setPosts] = useState<{ body: string; author: string }[]>([]); // Array to hold posts

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setPostInput((prevInput) => ({ ...prevInput, body: event.target.value }));
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPostInput((prevInput) => ({ ...prevInput, author: event.target.value }));
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    // Add the new post to the array of posts
    setPosts((prevPosts) => [...prevPosts, postInput]);
    // Clear the input fields after adding the post
    setPostInput({ body: "", author: "" });
    // Close the modal after submission
    onStopPosting();
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            body={postInput.body}
            author={postInput.author}
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onSubmit={submitHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {/* Map over the posts array and render a Post component for each post */}
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
};

export default PostLists;

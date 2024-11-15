import classes from "./Post.module.css";

// Define the props for Post component
interface PostProps {
  author: string;
  body: string;
}

// Define the Post component
const Post: React.FC<PostProps> = (props) => {
  return (
    <ul className={classes.post}>
      <li className={classes.author}>{props.author}</li>
      <li className={classes.body}>{props.body}</li>
    </ul>
  );
};

export default Post;

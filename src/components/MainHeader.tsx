import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

interface MainHeaderProps {
  createPost: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ createPost }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={createPost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;

import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostLists from "./components/PostsList";

const App: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader createPost={showModalHandler} />
      <main>
        <PostLists
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
};

export default App;

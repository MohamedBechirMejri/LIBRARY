import { useState, useEffect } from "react";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";
import Books from "./Components/Books";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const App = (props) => {
  const auth = getAuth();
  const db = getFirestore();
  const logOut = () => {
    auth.signOut();
  };
  const signIn = () => {
    setIsLoading(true);
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const [isAddingBook, setIsAddingBook] = useState(false);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      id: 2,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      id: 3,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      id: 4,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      id: 5,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4442000);
  }, []);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    console.log(user);
  });
  return isLoading ? (
    <h1 className=" font-extrabold uppercase animate-bouncee text-[3em] text-[#00d1b2] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h1>
  ) : (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      onClick={() => console.log(auth)}
    >
      {user && (
        <Header
          isAddingBook={isAddingBook}
          setIsAddingBook={setIsAddingBook}
          logOut={logOut}
        />
      )}
      {user ? (
        isAddingBook ? (
          <AddBook
            books={books}
            setBooks={setBooks}
            setIsAddingBook={setIsAddingBook}
          />
        ) : (
          <Books books={books} setBooks={setBooks} />
        )
      ) : (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-4   text-[#00d1b2]">
          <h1 className="text-4xl font-extrabold uppercase">
            Welcome to your personal Library
          </h1>
          <button
            className="border-[#00d1b2] rounded border-2 text-[#00d1b2] hover:bg-[#00d1b2] hover:text-white duration-500 px-6 py-1 active:scale-95  font-extrabold w-[12em] h-[4em] "
            onClick={signIn}
          >
            Sign In!
          </button>
        </div>
      )}
    </div>
  );
};
export default App;

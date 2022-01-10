import { useState, useEffect } from "react";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";
import Books from "./Components/Books";
import {
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const data = {
  books: [
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      pages: 224,
      image: "https://picsum.photos/200/300",
      isFinished: false,
    },
  ],
};

const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);

  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const logOut = () => {
    auth.signOut();
  };
  const signIn = () => {
    setIsLoading(true);
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  useEffect(() => {
    if (user) {
      setIsLoading(false);
      const unsubscribe = onSnapshot(doc(db, "books", user.uid), (Doc) => {
        if (!Doc.data()) {
          setDoc(doc(db, "books", user.uid), data);
        }

        setBooks(Doc.data().books);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [db, user]);

  const addBook = (b) => {
    updateDoc(doc(db, "books", user.uid), {
      books: [
        ...books,
        {
          ...b,
        },
      ],
    });
  };
  const deleteBook = (b) => {
    updateDoc(doc(db, "books", user.uid), {
      books: books.filter((book) => book !== b),
    });
  };
  const toggleBook = (b) => {
    updateDoc(doc(db, "books", user.uid), {
      books: books.map((book) => {
        if (book === b) book.isFinished = !book.isFinished;
        return book;
      }),
    });
  };

  return isLoading ? (
    <h1 className=" font-extrabold uppercase animate-bouncee text-[3em] text-[#00d1b2] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h1>
  ) : (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      onClick={() => {}}
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
            setIsAddingBook={setIsAddingBook}
            addBook={addBook}
          />
        ) : (
          <Books
            books={books}
            toggleBook={toggleBook}
            deleteBook={deleteBook}
          />
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

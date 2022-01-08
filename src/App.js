import { useState } from "react";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";
import Books from "./Components/Books";

const App = () => {
  const [isAddingBook, setIsAddingBook] = useState(false);
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

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Header isAddingBook={isAddingBook} setIsAddingBook={setIsAddingBook} />
      {isAddingBook && <AddBook />}
      {!isAddingBook && <Books books={books} setBooks={setBooks} />}
    </div>
  );
};
export default App;

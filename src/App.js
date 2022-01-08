import { useState } from "react";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";

const App = () => {
  const [isAddingBook, setIsAddingBook] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Header isAddingBook={isAddingBook} setIsAddingBook={setIsAddingBook} />
      {isAddingBook && <AddBook />}
    </div>
  );
};
export default App;

import { useState } from "react";
import Header from "./Components/Header";

const App = () => {
  const [isAddingBook, setIsAddingBook] = useState(false);

  return (
    <div className="">
      <Header isAddingBook={isAddingBook} setIsAddingBook={setIsAddingBook} />
    </div>
  );
};
export default App;

import uniqid from "uniqid";

const Books = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6 animate-reveal">
      <h1 className="text-4xl font-extrabold">Books</h1>
      <div className="flex flex-wrap items-center justify-center w-screen gap-6">
        {props.books.map((book) => (
          <div
            key={uniqid()}
            className="flex flex-col items-center justify-center gap-3 p-4 text-center duration-300 rounded-lg shadow-lg sm:w-[15%] hover:scale-105"
          >
            <img src={book.image} alt={book.title} className="" />
            <h2 className="font-bold">{book.title}</h2>
            <p>by {book.author}</p>
            <p>{book.pages} pages</p>
            <p>{book.isFinished ? "Read" : "Not Read"}</p>
            <div className="flex gap-2">
              <button
                className="px-6 py-1 text-blue-500 duration-500 border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-white active:scale-95"
                onClick={() => {
                  props.toggleBook(book);
                }}
              >
                {book.isFinished ? "Unread" : "Read"}
              </button>
              <button
                className="px-6 py-1 text-red-500 duration-500 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white active:scale-95"
                onClick={() => {
                  props.deleteBook(book);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

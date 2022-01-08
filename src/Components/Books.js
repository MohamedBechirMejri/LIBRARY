const Books = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6 animate-reveal">
      <h1 className="text-4xl font-extrabold">Books</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {props.books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center justify-center gap-3 p-4 duration-300 rounded-lg shadow-lg hover:scale-105 "
          >
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <p>{book.pages} pages</p>
            <p>{book.isFinished ? "Read" : "Not Read"}</p>
            <div className="flex gap-2">
              <button className="px-6 py-1 text-blue-500 duration-500 border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-white active:scale-95">
                Read
              </button>
              <button className="px-6 py-1 text-red-500 duration-500 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white active:scale-95">
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

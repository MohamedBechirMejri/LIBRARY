const AddBook = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-reveal text-[1.5em] mt-8">
      <h1 className="text-4xl font-extrabold">Add Book</h1>
      <form className="flex flex-col items-center justify-center gap-4">
        <label htmlFor="bookImageLink">Book Image Link</label>
        <input
          type="text"
          className=""
          id="bookImageLink"
          placeholder="Book Image Link"
        />
        <label htmlFor="bookTitle">Book Title</label>
        <input
          type="text"
          className=""
          id="bookTitle"
          placeholder="Book Title"
          required
        />
        <label htmlFor="bookAuthor">Book Author</label>
        <input
          type="text"
          className=""
          id="bookAuthor"
          placeholder="Book Author"
          required
        />
        <label htmlFor="pages">Number Of Pages</label>
        <input
          type="number"
          className=""
          id="pages"
          placeholder="Number Of Pages"
        />
        <label
          htmlFor="isFinished"
          className="flex items-center justify-center gap-4 "
        >
          <p>Have you finished it?</p>
          <input
            type="checkbox"
            className="w-6 h-6 p-0 bg-slate-500 checked:bg-red-500"
            id="isFinished"
            required
          />
        </label>

        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;

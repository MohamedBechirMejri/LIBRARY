const AddBook = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-reveal text-[1.5em] fixed inset-0  ">
      <h1 className="text-4xl font-extrabold uppercase">Add Book</h1>
      <form className="flex flex-col items-center justify-center gap-4" autoComplete="off">
        <label htmlFor="bookImageLink">Image Link</label>
        <input
          type="text"
          className=""
          id="bookImageLink"
          placeholder="https://picsum.photos/200/300"
        />
        <label htmlFor="bookTitle">Book Title</label>
        <input
          type="text"
          className=""
          id="bookTitle"
          placeholder="The Subtle Art of Not Giving a F*ck"
          required
        />
        <label htmlFor="bookAuthor">Book Author</label>
        <input
          type="text"
          className=""
          id="bookAuthor"
          placeholder="Mark Manson"
          required
        />
        <label htmlFor="pages">Number Of Pages</label>
        <input type="number" className="" id="pages" placeholder="224" />
        <label
          htmlFor="isFinished"
          className="flex items-center justify-center gap-4 "
        >
          Have you finished it?
          <input
            type="checkbox"
            className="w-6 h-6 p-0 rounded bg-slate-300 checked:bg-[#00d1b2]  active:rounded-lg duration-500 active:scale-95 focus:rounded "
            id="isFinished"
          />
        </label>

        <button
          type="submit"
          className="border-[#00d1b2] rounded border-2 text-[#00d1b2] hover:bg-[#00d1b2] hover:text-white duration-500 px-6 py-1 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;

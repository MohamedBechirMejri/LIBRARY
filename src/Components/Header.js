const Header = (props) => {
  return (
    <>
      <header className=" w-screen h-[5em] text-white bg-[#00d1b2] uppercase font-extrabold font-serif flex gap-[3em] items-center justify-center z-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className={`" ${
            props.isAddingBook && "rotate-[405deg]"
          } transition-all duration-500 scale-[2.75] active:scale-[2.5] hover:stroke-white stroke-transparent "`}
          viewBox="0 0 16 16"
          onClick={() => props.setIsAddingBook(!props.isAddingBook)}
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
        <h1 className="m-0 text-[2em]">Library</h1>{" "}
        <div
          className="px-4 py-2 font-bold  border border-white rounded text-white hover:text-[#00d1b2] hover:bg-white transition-all duration-500"
          onClick={() => props.logOut()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </div>
      </header>
    </>
  );
};

export default Header;

const Header = (props) => {
  return (
    <>
      <header className=" w-screen h-[5em] text-white bg-[#00d1b2] uppercase font-extrabold font-serif flex gap-[3em] items-center justify-center z-10 ">
        {" "}
        <div
          className="w-[2em] bg-[#00d1b2] h-[2em]"
          onClick={() => props.setIsAddingBook(!props.isAddingBook)}
        >
          <svg
            className={`" w-full h-full ${
              props.isAddingBook && "rotate-[-45deg]"
            } transition-all duration-500 scale-150 "`}
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="m-0 text-4xl">Library</h1>{" "}
        <div className="w-[2em] bg-transparent h-[2em]">
          <button
            className="w-[2em] bg-white h-[2em]"
            onClick={() => props.setIsAddingBook(!props.isAddingBook)}
          ></button>
        </div>
      </header>
    </>
  );
};

export default Header;

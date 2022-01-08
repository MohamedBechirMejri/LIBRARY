const Header = (props) => {
  return (
    <header
      className={`" fixed  w-screen ${
        props.isAddingBook ? "h-screen" : "h-[5em] "
      }  text-white bg-black  uppercase font-extrabold font-serif  transition-all duration-500 ease-in-out flex flex-col items-center  justify-center "`}
    >
      <div className="flex items-center justify-center  gap-[4em]">
        <div className="w-[2em] bg-transparent h-[2em]" />
        <h1 className="m-0 text-xl">Library</h1>
        <div
          className="w-[2em] bg-white h-[2em]"
          onClick={() => props.setIsAddingBook(!props.isAddingBook)}
        />
      </div>
    </header>
  );
};

export default Header;

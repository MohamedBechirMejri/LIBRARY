const Header = (props) => {
  return (
    <>
      <header className=" w-screen h-[5em] text-white bg-[#00d1b2] uppercase font-extrabold font-serif flex gap-[3em] items-center justify-center z-10 ">
        <div className="w-[2em] bg-transparent h-[2em]" />
        <h1 className="m-0 text-4xl">Library</h1>
        <div
          className="w-[2em] bg-white h-[2em]"
          onClick={() => props.setIsAddingBook(!props.isAddingBook)}
        />
      </header>
    </>
  );
};

export default Header;

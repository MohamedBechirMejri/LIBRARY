const Header = (props) => {
  return (
    <header className="fixed flex justify-center w-screen h-[5em] text-white bg-black items-center uppercase font-extrabold font-serif gap-[3em]">
      <div className="w-[2em] bg-white h-[2em]" />
      <h1 className="m-0 text-xl">Library</h1>
      <div
        className="w-[2em] bg-white h-[2em]"
        onClick={() => props.setIsAddingBook(!props.isAddingBook)}
      />
    </header>
  );
};

export default Header;

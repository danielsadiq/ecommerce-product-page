function NavButtons() {
  return (
    <div className="absolute bottom-0 left-2 right-2 top-0 flex items-center justify-between lg:hidden">
      <img
        src="../images/icon-previous.svg"
        className="cursor-pointer rounded-[50%] bg-white p-2"
      />
      <img
        src="../images/icon-next.svg"
        className="cursor-pointer rounded-[50%] bg-white p-2"
      />
    </div>
  );
}

export default NavButtons;

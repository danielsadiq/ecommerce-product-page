// eslint-disable-next-line react/prop-types
function PrimaryButton({children}) {
  return (
    <button className="flex w-full flex-1 items-center justify-center gap-2 rounded-lg bg-orange-500 p-4 font-bold hover:bg-orange-500/50">
      {children}
    </button>
  );
}

export default PrimaryButton;

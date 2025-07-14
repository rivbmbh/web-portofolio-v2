const ButtonResume = ({ name }) => {
  return (
    <div>
      <button
        className={`px-5 py-1 rounded-sm text-white active:bg-amber-500 hover:bg-amber-500 bg-amber-400 w-max active:scale-95`}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonResume;

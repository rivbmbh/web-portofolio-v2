const ButtonResume = ({ name, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-5 py-1 rounded-xs text-white active:bg-goldhover hover:bg-goldhover bg-gold w-max active:scale-95`}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonResume;

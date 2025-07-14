const ButtonResume = ({ name }) => {
  return (
    <div>
      <button
        className={`px-5 py-1 rounded-sm text-white active:bg-goldhover hover:bg-goldhover bg-gold w-max active:scale-95`}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonResume;

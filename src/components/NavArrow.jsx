const NavigationArrow = ({ direction, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative flex items-center justify-center
        w-10 h-10 md:w-12 md:h-12 rounded-full
        transition-all duration-300 ease-out
        ${disabled
          ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
          : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95"}
      `}
    >
      <img
        src="/images/arroww1.svg"
        alt="arrow"
        className={`
          w-4 h-4 md:w-5 md:h-5 transition-transform duration-300
          ${direction === "left" ? "rotate-180" : ""}
          ${!disabled ? "group-hover:translate-x-0.5" : ""}
        `}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />

      {!disabled && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
      )}
    </button>
  );
};

export default NavigationArrow;

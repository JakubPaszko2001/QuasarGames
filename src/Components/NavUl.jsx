const NavUl = ({ menuOpen, handleClose }) => {
  const liMenu = [
    { name: "Game Elements", span: true, ref: "game-elements" },
    { name: "Trailer", span: true, ref: "trailer" },
    { name: "How to play", span: true, ref: "how-to-play" },
    { name: "Gallery", span: false, ref: "gallery" },
  ];

  return (
    <>
      <ul className="w-full h-full flex flex-col xl:flex-row justify-center items-center gap-8 text-3xl md:text-4xl xl:text-lg text-white">
        {liMenu.map((item) => (
          <li key={item.name}>
            <a
              tabIndex={menuOpen === true ? 0 : -1}
              href={`#${item.ref}`}
              rel="noreferrer"
              onClick={handleClose}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavUl;
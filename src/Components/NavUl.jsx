const NavUl = ({ menuOpen }) => {
  const liMenu = [
    { name: "Game Elements", span: true },
    { name: "Trailer", span: true },
    { name: "How to play", span: true },
    { name: "Gallery", span: false },
  ];

  return (
    <>
      <ul className="w-full h-full flex flex-col xl:flex-row justify-center items-center gap-8 text-3xl md:text-4xl xl:text-lg text-white">
        {liMenu.map((item) => (
          <li key={item.name}>
            <a
              tabIndex={menuOpen === true ? 0 : -1}
              href={`#${item.name}`}
              rel="noreferrer"
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
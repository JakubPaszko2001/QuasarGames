const NavUl = ({ menuOpen }) => {
  const liMenu = [
    { name: "About", span: true },
    { name: "Abyss World", span: true },
    { name: "Galery", span: true },
    { name: "Contact", span: false },
  ];

  return (
    <>
      <ul className="w-full h-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-8 md:gap-2 text-3xl text-white">
        {liMenu.map((item) => (
          <li key={item.name}>
            <a
              tabIndex={menuOpen === true ? 0 : -1}
              href={`#${item.name}`}
              rel="noreferrer"
              className="underlineText flex"
            >
              {item.name}
              {item.span && <span className="hidden md:block ml-2">|</span>}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavUl;

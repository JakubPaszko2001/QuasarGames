const NavUl = ({ menuOpen }) => {
  const liMenu = [
    { name: "About", span: true },
    { name: "Abyss World", span: true },
    { name: "Galery", span: true },
    { name: "Contact", span: false },
  ];

  return (
    <>
      <ul className="w-full h-full flex flex-col xl:flex-row justify-center xl:justify-end items-center gap-8 text-3xl md:text-4xl text-white">
        {liMenu.map((item) => (
          <li key={item.name}>
            <a
              tabIndex={menuOpen === true ? 0 : -1}
              href={`#${item.name}`}
              rel="noreferrer"
              className="underlineText flex"
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

const NavBar = ({ showHideSideNav, setShowHideSideNav }) => {
  return (
    <nav className="navbar bg-slate-800 text-cyan-50 w-full h-[10vh] p-2 flex justify-between">
      <div className="logo">Task-X</div>
      <div
        className="open-menu md:hidden"
        onClick={() => setShowHideSideNav(!showHideSideNav)}
      >
        Open Menu
      </div>
    </nav>
  );
};

export default NavBar;

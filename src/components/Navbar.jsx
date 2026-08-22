function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">my portfolio website  :</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
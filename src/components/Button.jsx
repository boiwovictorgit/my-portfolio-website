function Button({ children, href, variant = "primary" }) {
  return (
    <a
      href={href}
      className={`btn ${variant}-btn`}
    >
      {children}
    </a>
  );
}

export default Button;
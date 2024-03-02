import "./Footer.scss";

const Footer = () => {
  return (
    <footer
      className="footer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    ></footer>
  );
};

export default Footer;

function Footer() {
  return (
    <div>
      <footer className="footer stiky bottom-0 justify-center text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/AaronNadelman" target="_blank">
              <img
                className="max-w-12 mx-5"
                src="./Socials/github.png"
                alt="Git Hub logo"
              />
            </a>
            <a href="nadelman94@gmail.com" target="_blank">
              <img
                className="max-w-12 mx-5"
                src="./Socials/gmail.png"
                alt="Gmail logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-dario-nadelman"
              target="_blank"
            >
              <img
                className="max-w-12 mx-5"
                src="./Socials/linkedin.png"
                alt="Linkedin logo"
              />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;

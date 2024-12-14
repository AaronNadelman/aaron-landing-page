function Footer() {
  return (
    <div>
      <footer className="footer justify-center text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img
                className="max-w-12 mx-5"
                src="./Socials/github.png"
                alt=""
              />
            </a>
            <a>
              <img className="max-w-12 mx-5" src="./Socials/gmail.png" alt="" />
            </a>
            <a>
              <img
                className="max-w-12 mx-5"
                src="./Socials/linkedin.png"
                alt=""
              />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;

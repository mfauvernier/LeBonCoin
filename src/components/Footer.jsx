import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-footer mt-10 h-20">
      <Container>
        <div className="flex h-20 items-center justify-between px-12 text-white">
          <p>leboncoin</p>
          <p>
            Made by <a href="https://github.com/mfauvernier">Mederic</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

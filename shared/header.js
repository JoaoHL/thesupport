import Link from 'next/link';

const linkStyle = {
  textDecoration: "none",
  color: "inherit"
};

const headerStyle = {
	width: "100%",
	display: "flex",
	justifyContent: "space-around",
	fontSize: "16px"
};

const messageIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>Página inicial</a>
    </Link>
    <Link href="/[messageId]" as={`/${messageIds[Math.ceil(Math.random() * 10)] || messageIds[5]}`}>
      <a style={linkStyle}>Anima aí! :)</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Sobre esse site</a>
    </Link>
  </div>
);

export default Header;
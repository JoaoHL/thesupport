import Header from './header';

const layoutStyle = {
  padding: 20,
  width: "95vw",
  height: "80vh",
  fontFamily: "'Comfortaa', cursive",
  fontFamily: "'Open Sans', sans-serif",
  color: "#990070"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
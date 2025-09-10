const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        &copy; 2025 ShoppyGlobe. All rights reserved.
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#2563eb', // Tailwind's blue-600
  color: 'white',
  textAlign: 'center',
  padding: '16px 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: '40px',
};

const textStyle = {
  margin: 0,
  fontSize: '14px',
};

export default Footer;

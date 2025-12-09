export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgba(116, 121, 111, 1)",
        padding: "40px 20px",
        marginTop: "50px",
        color: "white",
      }}
    >
      <div className="container">

        {/* Top Section */}
        <div className="row">

          {/* Brand */}
          <div className="col-md-8">
            <h3 style={{ fontWeight: "700", fontSize: "28px" }}>N's N</h3>
            <p style={{ lineHeight: "1.6", maxWidth: "280px" }}>
              Your modern football store for players and fans.  
              Quality gear, clean design, and a passion for the game.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="col-md-4 mb-4">
            <h5 style={{ fontWeight: "600", marginBottom: "15px" }}>Quick Links</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "1.8" }}>
              <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
              <li><a href="/products" style={{ color: "white", textDecoration: "none" }}>Products</a></li>
              <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
              <li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="col-md-4">
            <h5 style={{ fontWeight: "600", marginBottom: "15px" }}>Contact</h5>
            <p style={{ margin: 0 }}>📍 India</p>
            <p style={{ margin: 0 }}>📧 support@nsnfootball.com</p>
            <p style={{ margin: 0 }}>📞 +91 90000 12345</p>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: "rgba(255,255,255,0.4)" }} />

        {/* Bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "14px",
            opacity: 0.9,
          }}
        >
          © {new Date().getFullYear()} N's N — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

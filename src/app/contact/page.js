export default function contact() {
  return (
    <div
      style={{
        backgroundColor: "rgb(249, 245, 239)",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
          borderTop: "8px solid rgb(172, 191, 150)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "rgb(172, 191, 150)",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#444",
            textAlign: "center",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Have questions or need help? We're here for you!  
          Reach out anytime and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
                resize: "none",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "rgb(172, 191, 150)",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#555" }}>
            📍 Location: India  
          </p>
          <p style={{ fontSize: "16px", color: "#555" }}>
            📧 Email: support@nsnfootball.com
          </p>
        </div>
      </div>
    </div>
  );
}

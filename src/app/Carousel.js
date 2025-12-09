import Image from "next/image";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "rgb(249, 245, 239)" }}>
      
    
<section
  style={{
    position: "relative",
    width: "100%",
    height: "450px",
    backgroundImage: "url('/carousel/mainBanner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.25)",
      zIndex: 1,
    }}
  ></div>

  {/* Text & Button */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <h1
      style={{
        fontSize: "48px",
        fontWeight: "700",
        marginBottom: "20px",
        color: "rgb(249, 245, 239)",
      }}
    >
      Welcome to N's N
    </h1>

    <p
      style={{
        fontSize: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.6",
        color: "rgb(249, 245, 239)",
      }}
    >
      Your modern football store for players, supporters, and the entire football community.
    </p>

    <a
      href="/products"
      style={{
        marginTop: "30px",
        display: "inline-block",
        backgroundColor: "rgb(172, 191, 150)",
        color: "white",
        padding: "14px 32px",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "600",
        textDecoration: "none",
      }}
    >
      Shop Now
    </a>
  </div>
</section>


      {/* Featured Products */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: "700",
            color: "rgb(172, 191, 150)",
          }}
        >
          Featured Products
        </h2>

        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {/* Product Cards */}
          {[
            { id: 1, img: "/images/NB3.jpg", name: "Football Boot", price: "₹ 2999" },
            { id: 2, img: "/images/NJ1.jpg", name: "Football Costumizable Jersey", price: "₹ 3499" },
            { id: 3, img: "/images/NB6.jpg", name: "Classic Boot", price: "₹ 1599" },
            { id: 4, img: "/images/NJ5.jpg", name: "Comfort and Stylish model Jersey", price: "₹ 999" },
          ].map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "rgb(249, 245, 239)",
                padding: "20px",
                borderRadius: "14px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {/* Product Image */}
              <Image
                src={item.img}
                width={300}
                height={200}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h4 style={{ marginTop: "15px", fontWeight: "600" }}>
                {item.name}
              </h4>
              <p style={{ margin: 0, color: "#666" }}>{item.price}</p>

              <a
                href="/products"
                style={{
                  marginTop: "15px",
                  display: "inline-block",
                  backgroundColor: "rgb(172, 191, 150)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Strip */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "rgb(249, 245, 239)",
        }}
      >
        <h2
          style={{
            color: "rgb(172, 191, 150)",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Why Choose N's N?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          We combine quality, style, and a love for football to give every fan and player
          the best shopping experience. Trusted gear, premium service, and a clean shopping
          design — just for you.
        </p>
      </section>
    </div>
  );
}

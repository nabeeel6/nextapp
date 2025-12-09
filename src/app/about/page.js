import React from 'react'

export default function page() {
  return (
    <div>   <div style={{ 
      backgroundColor: "rgb(249, 245, 239)", 
      minHeight: "100vh", 
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "800px",
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderTop: "8px solid rgb(172, 191, 150)"
      }}>
        
        <h1 style={{ 
          fontSize: "32px",
          marginBottom: "20px",
          color: "rgb(172, 191, 150)",
          fontWeight: "700"
        }}>
          About N's N
        </h1>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          marginBottom: "20px",
          color: "#333"
        }}>
          Welcome to <strong>N's N</strong> — a simple, friendly, and elegant football store created for 
          players and fans who truly love the game.
        </p>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          marginBottom: "20px",
          color: "#333"
        }}>
          Our goal is to build a clean and easy-to-use platform where anyone can explore quality 
          football products, stay inspired, and enjoy everything related to the beautiful game.
        </p>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#333"
        }}>
          Whether you're a passionate player, a loyal supporter, or someone stepping into the sport 
          for the first time — <strong>N's N</strong> is here to bring football closer to you.
        </p>

      </div>
    </div></div>
  )
}

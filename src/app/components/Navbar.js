'use client';
import Link from 'next/link';
import { useCart } from '../context/cartContext';
import Image from 'next/image';

export default function Navbar() {
  const { state } = useCart();
  const count = state.items.reduce((s, i) => s + i.qty, 0);

  return (
    <nav 
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor:"rgb(172, 191, 150)", padding: "12px 0" }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image 
            src="/images/logo.png"
            alt="logo"
            width={180} 
            height={180}
            className="rounded-3 navbar-logo"
            style={{ height:"auto" }}
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse justify-content-end" id="navmenu">

          <ul className="navbar-nav align-items-center gap-4">

            <li className="nav-item">
              <Link className="nav-link" href="/" style={{color:"rgb(249, 245, 239)"}}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/products" style={{color:"rgb(249, 245, 239)"}}>Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about" style={{color:"rgb(249, 245, 239)"}}>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact" style={{color:"rgb(249, 245, 239)"}}>Contact</Link>
            </li>

            {/* CART ICON */}
            <li className="nav-item">
              <Link className="nav-link position-relative" href="/cart" style={{ color:"rgb(249, 245, 239)" }}>
                
                {/* Cart SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                  className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 
                           2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 
                           0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 
                           0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 
                           3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 
                           0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
                </svg>

                {/* Cart Badge */}
                <span
                  className="badge bg-success rounded-circle position-absolute"
                  style={{
                    top: "-4px",
                    right: "-10px",
                    fontSize: "10px",
                    padding: "4px 6px"
                  }}
                >
                  {count}
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        .navbar-logo {
          width: 170px;
        }

        @media (max-width: 992px) {
          .navbar-logo {
            width: 150px;
          }
        }

        @media (max-width: 768px) {
          .navbar-logo {
            width: 130px;
          }
        }

        @media (max-width: 480px) {
          .navbar-logo {
            width: 110px;
          }
        }
      `}</style>
    </nav>
  );
}

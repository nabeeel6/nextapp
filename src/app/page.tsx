
import Link from "next/link";
import Carousel from "./Carousel"

import Footer from "./Footer";

export default function Home() {
  return (
   
    <main className="container-fluid ">
       <Carousel/>
   
      

      <div className="container py-5">
        {/* QUICK FEATURES */}
        <div className="row text-center mb-5 gx-4">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Free Returns</h5>
              <p className="text-muted small mb-0">30-day easy returns.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Secure Payments</h5>
              <p className="text-muted small mb-0">All major cards & wallets.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Support</h5>
              <p className="text-muted small mb-0">Chat & email support.</p>
            </div>
          </div>
        </div>


        <section className="mb-5">
          <h4 className="mb-3">Customer Reviews</h4>
          <div className="row gx-3">
            <div className="col-md-4 mb-3">
              <div className="p-3 border rounded"style={{color:"#8B0A1A"}}>
                <p className="mb-1 fst-italic">"Amazing quality and quick delivery."</p>
                <small className="text-muted">— Anu</small>
              </div>
            </div>
            <div className="col-md-4 mb-3"style={{color:"#8B0A1A"}}>
              <div className="p-3 border rounded">
                <p className="mb-1 fst-italic">"Great customer service."</p>
                <small className="text-muted">— Ramesh</small>
              </div>
            </div>
            <div className="col-md-4 mb-3"style={{color:"#8B0A1A"}}>
              <div className="p-3 border rounded">
                <p className="mb-1 fst-italic">"Exactly as shown — happy purchase."</p>
                <small className="text-muted">— Meera</small>
              </div>
            </div>
          </div>
        </section>
         
  
      </div>


    </main>
  );
}
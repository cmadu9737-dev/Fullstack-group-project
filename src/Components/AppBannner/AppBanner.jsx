import { Smartphone } from "lucide-react";
import "./AppBanner.css";
import logo from '../../assets/apple.png'
import toni from '../../assets/google.png'
import stella from '../../assets/qrcodes.png'

export default function Appbanner() {
  return (
    <section className="app-bar">
      <div className="app-bar__info">
        <span className="app-bar__icon">
          <Smartphone size={20} />
        </span>
        <div>
          <h3>Get the ServeHub App</h3>
          <p>Book services, chat with providers and track jobs on the go.</p>
        </div>
      </div>

      <div className="app-bar__actions">
        <a href="https://play.google.com/store" aria-label="Get it on Google Play">
          <img src={toni} alt="google"></img> </a>
        <a href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
          <img src={logo} alt="apple"></img>
        </a>
        <img
          className="app-bar__qr"
          src={stella} 
          alt="QR code to download the ServeHub app"
        />
      </div>
    </section>
  );
}
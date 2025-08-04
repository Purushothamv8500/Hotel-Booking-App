import './Home.css';
import backgroundImage from '../assets/hero-bg.jpg';
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const featuredData = [
  {
    title: "Urbanza Suites",
    image: "/images/myhotel1.jpg",
    price: "$399",
    rating: "4.5",
    bestSeller: true,
  },
  {
    title: "Oceanview Palace",
    image: "/images/myhotel2.jpg",
    price: "$299",
    rating: "4.2",
    bestSeller: true,
  },
  {
    title: "Skyline Towers",
    image: "/images/myhotel3.jpg",
    price: "$249",
    rating: "4.2",
    bestSeller: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <nav className="navbar">
          <div className="logo">QuickStay</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><a href="#experience">Experience</a></li>
            <li><Link to="/about">About</Link></li> {/* ✅ Fixed navigation link */}
          </ul>
          <button className="login-btn">Login</button>
        </nav>

        <div className="hero">
          <p className="tagline">The Ultimate Hotel Experience</p>
          <h1>Discover Your Perfect <br /> Getaway Destination</h1>
          <p className="subheading">
            Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Destination" />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder="Guests" />
            <button className="search-btn">🔍 Search</button>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="featured">
        <h2 className="featured-title">Featured Destinations</h2>
        <p className="featured-subtitle">
          Discover our handpicked selection of exceptional properties around the world,
          offering unparalleled luxury and unforgettable experiences.
        </p>

        <div className="featured-cards">
          {featuredData.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={item.image} alt={item.title} />
                {item.bestSeller && <span className="badge">Best Seller</span>}
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p><FaMapMarkerAlt /> Central Street, New York City</p>
                <div className="card-footer">
                  <span className="price">{item.price}<span>/night</span></span>
                  <span className="rating"><FaStar color="orange" /> {item.rating}</span>
                </div>
                <Link to="/hotels">
                  <button className="book-btn">Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>QuickStay</h3>
            <p>Your gateway to premium hotels & experiences around the world.</p>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/help">Help Center</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest deals.</p>
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 QuickStay. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

import './About.css';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1>About Us</h1>
        <p className="subtitle">Discover who we are and what we do</p>

        <section>
          <h2>Our Mission</h2>
          <p>
            We are dedicated to helping travelers find the perfect hotel for their stay. Our platform is
            designed to simplify booking, provide real-time availability, and give you peace of mind with
            secure payment and excellent support.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of hotels worldwide</li>
            <li>Easy and secure booking process</li>
            <li>24/7 customer support</li>
            <li>Verified guest reviews</li>
          </ul>
        </section>

        <section>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our platform started with a simple idea: to make hotel booking fast, affordable,
            and reliable. Since then, we’ve grown into a trusted name in travel services.
          </p>
        </section>
      </div>
    </div>
  );
}

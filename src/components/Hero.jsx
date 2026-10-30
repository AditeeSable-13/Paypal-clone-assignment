import AccountToggle from './AccountToggle';

function Hero() {
  return (
    <main className="hero">
      <AccountToggle />
      <h1 className="hero-title">PayPal Open</h1>
      <h2 className="hero-subtitle">One platform for your business needs</h2>
      <p className="hero-description">
        PayPal Open unifies your PayPal business solutions to help you get paid,
        get growing, and get ahead.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-signup" type="button">Sign Up</button>
        <button className="btn btn-contact" type="button">Contact Sales</button>
      </div>
    </main>
  );
}

export default Hero;

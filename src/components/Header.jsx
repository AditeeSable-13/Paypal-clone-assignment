const PayPalLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 32"
    className="paypal-logo"
    aria-label="PayPal"
    role="img"
  >
    {/* Back P (dark blue) */}
    <path
      d="M20.924 7.157C20.924 12.38 17.058 16.4 10.792 16.4H8.203a1.13 1.13 0 0 0-1.116.955L5.87 25.09a.677.677 0 0 0 .669.786h4.005a.99.99 0 0 0 .978-.838l.04-.21.776-4.916.05-.27a.99.99 0 0 1 .978-.838h.617c3.996 0 7.122-1.623 8.035-6.32.382-1.963.184-3.602-.826-4.753a3.95 3.95 0 0 0-1.133-.862l.864.288z"
      fill="#179BD7"
    />
    <path
      d="M19.694 6.746a8.452 8.452 0 0 0-1.04-.23 13.234 13.234 0 0 0-2.1-.155H10.11a.96.96 0 0 0-.948.81L7.87 15.583l-.03.183a1.13 1.13 0 0 1 1.116-.955h2.589c6.266 0 10.132-4.02 10.132-9.243a6.98 6.98 0 0 0-.118-.94 5.213 5.213 0 0 0-.83-.326l-.036.444z"
      fill="#222D65"
    />
    <path
      d="M10.11 7.17a.96.96 0 0 1 .948-.81h6.444c.764 0 1.477.05 2.1.155.356.06.697.143 1.02.25a5.213 5.213 0 0 1 .83.326 4.634 4.634 0 0 0-.796-3.777C19.487 1.854 17.182.96 14.263.96H5.397a1.13 1.13 0 0 0-1.118.955L1.049 21.63a.677.677 0 0 0 .67.787H6.55l1.292-8.414L10.11 7.17z"
      fill="#253B80"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="chevron-icon"
    aria-hidden="true"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Header() {
  const navItems = ['Personal', 'Business', 'Partners', 'Useful Info'];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="logo-button" type="button" aria-label="PayPal home">
            <PayPalLogo />
          </button>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item} className="nav-item" type="button">
                <span>{item}</span>
                <ChevronDown />
              </button>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <button className="btn btn-login" type="button">Log In</button>
          <button className="btn btn-signup-header" type="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

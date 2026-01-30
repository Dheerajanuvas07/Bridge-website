function Privacy() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#/" className="logo">Bridge.</a>
          <div className="nav-buttons">
            <a href="#/" className="btn btn-secondary">Back to Home</a>
          </div>
        </div>
      </nav>

      <main className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: January 2025</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, phone number, and address</li>
            <li>Information about the senior needing assistance</li>
            <li>Background check information for helpers</li>
            <li>Payment information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Match families with appropriate helpers</li>
            <li>Process payments</li>
            <li>Communicate with you about your account and services</li>
            <li>Ensure safety and security through background checks</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li>Helpers matched with your family (limited information)</li>
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request corrections to your information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@bridge-lincoln.com">hello@bridge-lincoln.com</a>.</p>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 2025 Bridge Lincoln. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Privacy

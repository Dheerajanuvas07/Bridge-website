function Terms() {
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
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: January 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using Bridge, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2>2. Description of Services</h2>
          <p>Bridge is a marketplace connecting seniors and their families with local helpers for non-medical support tasks including:</p>
          <ul>
            <li>Grocery and pharmacy runs</li>
            <li>Transportation to medical appointments</li>
            <li>Companionship and light housework</li>
          </ul>

          <h2>3. Important Limitations</h2>
          <p><strong>Bridge is NOT a medical service.</strong> Our helpers are not medical professionals and cannot:</p>
          <ul>
            <li>Administer medication</li>
            <li>Provide medical care or treatment</li>
            <li>Lift or transfer patients</li>
            <li>Assist with bathing or personal hygiene</li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>Families agree to:</p>
          <ul>
            <li>Provide accurate information about needs and conditions</li>
            <li>Communicate any special requirements in advance</li>
            <li>Pay for services as agreed</li>
            <li>Treat helpers with respect</li>
          </ul>

          <p>Helpers agree to:</p>
          <ul>
            <li>Pass all background and verification checks</li>
            <li>Arrive on time and complete tasks professionally</li>
            <li>Maintain confidentiality</li>
            <li>Immediately report any incidents or concerns</li>
          </ul>

          <h2>5. Payments</h2>
          <p>Families pay flat rates as displayed on our website. Helpers receive payment as specified in their agreement. All payments are processed through Stripe.</p>

          <h2>6. Cancellations</h2>
          <p>Cancellations must be made at least 24 hours in advance for a full refund. Late cancellations may be subject to a fee.</p>

          <h2>7. Limitation of Liability</h2>
          <p>Bridge is a connection platform. While we vet helpers, we are not liable for the actions of individual helpers. Users assume responsibility for their interactions.</p>

          <h2>8. Contact</h2>
          <p>For questions about these Terms, contact <a href="mailto:hello@bridge-lincoln.com">hello@bridge-lincoln.com</a>.</p>
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

export default Terms

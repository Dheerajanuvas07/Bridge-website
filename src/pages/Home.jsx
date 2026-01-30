function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">Bridge.</a>
          <div className="nav-buttons">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrinG4311vilsTXBIMChGaFupwU0xXgdbzDQsk6LvLbIA6g/viewform"
              className="btn btn-secondary btn-glow">Join Early Waitlist</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform"
              className="btn btn-primary btn-glow">Apply to Be a Helper</a>
          </div>
        </div>
      </nav>

      {/* Sticky CTA (mobile) */}
      <div className="sticky-cta">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrinG4311vilsTXBIMChGaFupwU0xXgdbzDQsk6LvLbIA6g/viewform"
          className="btn btn-secondary">Families: Join</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform"
          className="btn btn-primary">Helpers: Apply</a>
      </div>

      {/* Hero Section */}
      <header className="hero fade-in-up">
        <div className="container hero-content">
          <span className="badge">Launching in Lincoln, NE</span>
          <h1>Lincoln&apos;s marketplace for reliable senior support.</h1>
          <p className="hero-sub">
            Bridge connects Lincoln seniors with trusted local helpers for grocery and pharmacy runs, doctor and
            hospital appointments, and companionship—all at simple, flat rates.
          </p>
          <div className="hero-buttons">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrinG4311vilsTXBIMChGaFupwU0xXgdbzDQsk6LvLbIA6g/viewform"
              className="btn btn-lg btn-secondary">Join Early Access (Families)</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform"
              className="btn btn-lg btn-primary">Apply to Be a Helper</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <div className="about-box fade-in-up">
            <h2>What is Bridge?</h2>
            <p className="lead">
              Bridge is a hyper-local senior support marketplace launching first in Lincoln, Nebraska.
              We help overwhelmed adult children get reliable support for their parents through vetted local
              helpers. Starting as a concierge MVP in December 2025 and expanding to a full app in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section bg-light">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Simple, flat-rate pricing. No hidden fees. Non-medical support only.</p>

          <div className="grid-3">
            <div className="card service-card fade-in-up">
              <div className="card-header">
                <h3>Grocery or Pharmacy Run</h3>
                <div className="price">$39 <span className="period">flat</span></div>
              </div>
              <div className="card-body">
                <ul className="check-list">
                  <li>Pickups from Hy-Vee, Walmart, Costco</li>
                  <li>Walgreens, CVS, Russ&apos;s Market</li>
                  <li>Door-to-door service</li>
                  <li>Contactless drop-off available</li>
                </ul>
              </div>
            </div>

            <div className="card service-card featured fade-in-up">
              <div className="card-header">
                <h3>Doctor / Hospital Round-Trip</h3>
                <div className="price">$59 <span className="period">flat</span></div>
              </div>
              <div className="card-body">
                <ul className="check-list">
                  <li>Includes drive + wait + return</li>
                  <li>Bryan East, CHI St. Elizabeth</li>
                  <li>Nebraska Heart, Madonna Rehab</li>
                  <li>Peace of mind for families</li>
                </ul>
              </div>
            </div>

            <div className="card service-card fade-in-up">
              <div className="card-header">
                <h3>Companionship & Light Housework</h3>
                <div className="price">$29 <span className="period">/hr</span></div>
              </div>
              <div className="card-body">
                <ul className="check-list">
                  <li>Walks & conversation</li>
                  <li>Mail sorting & dishes</li>
                  <li>Light cleaning</li>
                  <li><strong>No medical care. No lifting.</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step fade-in-up">
              <div className="step-number">1</div>
              <h3>Request Help</h3>
              <p>Families fill out a simple form to request a specific task.</p>
            </div>

            <div className="step fade-in-up">
              <div className="step-number">2</div>
              <h3>We Match You</h3>
              <p>Bridge manually matches you with a vetted helper in your neighborhood.</p>
            </div>

            <div className="step fade-in-up">
              <div className="step-number">3</div>
              <h3>Task Complete</h3>
              <p>The helper completes the task and sends you an update.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpers Section */}
      <section id="helpers" className="helpers section">
        <div className="container">
          <div className="split-layout">
            <div className="helper-info">
              <h2>Who Are The Helpers?</h2>
              <p className="lead">Real Lincoln neighbors you can trust.</p>
              <ul className="bullet-list-lg">
                <li>Retired nurses & teachers</li>
                <li>Empty-nesters & long-time residents</li>
                <li>Ages 48–70</li>
                <li>Own car + Clean driving record</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform"
                className="btn btn-primary mt-4">Apply to Be a Helper</a>
            </div>

            <div className="helper-pay">
              <h3>Helper Pay Rates</h3>
              <div className="pay-grid">
                <div className="pay-item">
                  <span className="pay-amount">$30</span>
                  <span className="pay-desc">per grocery run</span>
                </div>
                <div className="pay-item">
                  <span className="pay-amount">$45</span>
                  <span className="pay-desc">per doctor visit</span>
                </div>
                <div className="pay-item">
                  <span className="pay-amount">$22</span>
                  <span className="pay-desc">/hr companionship</span>
                </div>
              </div>
              <p className="pay-note">Same-day payouts via Stripe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="trust section">
        <div className="container">
          <h2 className="section-title">Trust & Safety First</h2>
          <div className="trust-grid">
            <div className="trust-item fade-in-up">
              <h3>Background Checks</h3>
              <p>Every helper passes a comprehensive check.</p>
            </div>

            <div className="trust-item fade-in-up">
              <h3>Identity Verification</h3>
              <p>We verify the identity of every person on our platform.</p>
            </div>

            <div className="trust-item fade-in-up">
              <h3>Clean Driving Record</h3>
              <p>Safe drivers for your peace of mind.</p>
            </div>

            <div className="trust-item fade-in-up">
              <h3>Non-Medical Only</h3>
              <p>No medical procedures. Strictly support tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location section bg-light text-center">
        <div className="container">
          <h2 className="section-title">Serving Lincoln, Nebraska</h2>
          <p className="lead mb-4">Our Concierge MVP is available exclusively in these areas:</p>

          <div className="zip-codes">
            <span className="zip">68516</span>
            <span className="zip">68512</span>
            <span className="zip">68526</span>
            <span className="zip">68506</span>
            <span className="zip">68522</span>
            <span className="zip">68521</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section bg-white" id="faq">
        <div className="container">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">Answers families and helpers ask most.</p>

          <div className="faq-grid">
            <details className="fade-in-up" open>
              <summary>Is Bridge a medical service?</summary>
              <p>No. Bridge is non-medical support only. We don&apos;t handle lifting, bathing, or medication
                administration.</p>
            </details>
            <details className="fade-in-up">
              <summary>How do I request help for my parent?</summary>
              <p>Use the early access form with the task, timing, and address. We confirm quickly and share helper
                details.</p>
            </details>
            <details className="fade-in-up">
              <summary>Who are the helpers?</summary>
              <p>Trusted retired nurses, teachers, and empty-nesters in Lincoln who pass background and ID checks.</p>
            </details>
            <details className="fade-in-up">
              <summary>How do I pay?</summary>
              <p>Simple flat-rate pricing per task. We&apos;ll share secure payment instructions during onboarding.</p>
            </details>
            <details className="fade-in-up">
              <summary>Can I schedule recurring visits?</summary>
              <p>Yes. We can set up repeating grocery runs, rides, or companionship blocks.</p>
            </details>
            <details className="fade-in-up">
              <summary>What areas of Lincoln do you cover?</summary>
              <p>Launching in 68516, 68512, 68526, 68506, 68522, and 68521, focused on south and east Lincoln.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>Bridge.</h2>
              <p>Bridge the gap. One task at a time.</p>
            </div>

            <div className="footer-links">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrinG4311vilsTXBIMChGaFupwU0xXgdbzDQsk6LvLbIA6g/viewform">Join Early Access</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform">Become a Helper</a>
              <a href="mailto:hello@bridge-lincoln.com">Contact Us</a>
              <a href="#/privacy">Privacy Policy</a>
              <a href="#/terms">Terms of Service</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Bridge Lincoln. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home

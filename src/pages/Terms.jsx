import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <div className="page legal-page">
            {/* NAV */}
            <motion.nav
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="container nav-container">
                    <Link to="/" className="logo" aria-label="Bridge home">
                        Bridge<span className="logo-dot">.</span>
                    </Link>
                    <div className="nav-buttons">
                        <Link to="/" className="btn btn-secondary">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* HEADER */}
            <header className="page-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="gradient-text">Terms of Service</h1>
                        <p className="section-subtitle">Last updated: December 2025</p>
                    </motion.div>
                </div>
            </header>

            {/* CONTENT */}
            <main className="container legal-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="legal-note">
                        <FileText size={20} style={{ marginBottom: "0.5rem", opacity: 0.7 }} />
                        <p>
                            Bridge is a non-medical support marketplace. We facilitate connections between users and independent
                            helpers. Please read these Terms carefully before using the platform.
                        </p>
                    </div>

                    <section>
                        <h2>1. What Bridge Is</h2>
                        <p>
                            Bridge is a community platform that helps connect individuals and families with local helpers for
                            everyday, non-medical assistance such as errands, transportation to appointments, and companionship.
                        </p>

                        <h2>2. What Bridge Is Not</h2>
                        <p>
                            <strong>Bridge is not a healthcare provider.</strong> Bridge does not provide:
                        </p>
                        <ul>
                            <li>Medical care or clinical services</li>
                            <li>Nursing or home health services</li>
                            <li>Medication handling or administration</li>
                            <li>Physical lifting, bathing, or personal care</li>
                            <li>Emergency or urgent services</li>
                        </ul>

                        <h2>3. Platform Role Only</h2>
                        <p>
                            Bridge&apos;s role is limited to facilitating introductions, communication, and scheduling between users
                            and helpers. Bridge does not supervise, direct, or control how services are performed.
                        </p>

                        <h2>4. Independent Helper Relationship</h2>
                        <p>
                            Helpers are independent individuals and are not employees, agents, or representatives of Bridge.
                            Helpers set their own availability and accept or decline tasks at their discretion.
                        </p>

                        <h2>5. User Responsibilities</h2>
                        <p>By using Bridge, you agree to:</p>
                        <ul>
                            <li>Provide accurate and truthful information</li>
                            <li>Assess whether a service is appropriate for your situation</li>
                            <li>Communicate expectations clearly with helpers</li>
                            <li>Comply with applicable laws and local regulations</li>
                        </ul>

                        <h2>6. Assumption of Risk</h2>
                        <p>
                            You acknowledge that engaging helpers involves inherent risks, including allowing individuals into
                            your home or riding in private vehicles. You voluntarily assume all such risks.
                        </p>

                        <h2>7. No Warranties</h2>
                        <p>
                            Bridge provides the platform on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties or
                            guarantees regarding availability, quality of services, or outcomes.
                        </p>

                        <h2>8. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by Nebraska law, Bridge shall not be liable for any injuries,
                            losses, damages, or disputes arising from:
                        </p>
                        <ul>
                            <li>Interactions between users and helpers</li>
                            <li>Services performed by helpers</li>
                            <li>Transportation incidents or delays</li>
                            <li>Use or inability to use the platform</li>
                        </ul>

                        <p>
                            If liability is found despite these limitations, Bridge&apos;s total liability shall be limited to the
                            maximum extent allowed by law.
                        </p>

                        <h2>9. Market Research & Early Stage Use</h2>
                        <p>
                            Bridge may operate in market research or pilot mode. Services, pricing, availability, and features
                            may change or be discontinued at any time without notice.
                        </p>

                        <h2>10. Changes to These Terms</h2>
                        <p>
                            Bridge may update these Terms from time to time. Continued use of the platform after updates
                            constitutes acceptance of the revised Terms.
                        </p>

                        <h2>11. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the State of Nebraska, without regard to conflict-of-law rules.
                        </p>

                        <h2>12. Contact</h2>
                        <p>If you have questions about these Terms, please contact:</p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:hello@bridge-lincoln.com">hello@bridge-lincoln.com</a>
                        </p>
                    </section>
                </motion.div>
            </main>

            {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="text-center">
                        <h2>Bridge.</h2>
                        <p style={{ maxWidth: 520, margin: "1rem auto" }}>
                            Door-through-door appointment support for seniors in Lincoln, Nebraska.
                        </p>
                        <div className="footer-links">
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <a href="mailto:hello@bridge-lincoln.com">Contact Us</a>
                        </div>
                    </div>
                    <div className="footer-bottom">&copy; 2026 Bridge Lincoln. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
}

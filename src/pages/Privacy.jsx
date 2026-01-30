import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                        <h1 className="gradient-text">Privacy Policy</h1>
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
                        <Lock size={20} style={{ marginBottom: "0.5rem", opacity: 0.7 }} />
                        <p>
                            Bridge is a non-medical support platform. We collect only the minimum information required to connect
                            families and helpers and operate our early-stage service responsibly.
                        </p>
                    </div>

                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>
                            Bridge collects limited personal information when you voluntarily submit it through our website,
                            forms, or communications.
                        </p>
                        <ul>
                            <li>Name, phone number, and email address</li>
                            <li>Service address or general location</li>
                            <li>Task details and scheduling preferences</li>
                            <li>Helper application details (if applying to be a helper)</li>
                            <li>Communications, feedback, or support messages</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information only to:</p>
                        <ul>
                            <li>Respond to inquiries and requests</li>
                            <li>Facilitate introductions between users and helpers</li>
                            <li>Coordinate and confirm requested services</li>
                            <li>Conduct internal market research and improve Bridge</li>
                            <li>Comply with applicable legal requirements</li>
                        </ul>

                        <h2>3. What We Do Not Do</h2>
                        <p>
                            Bridge does <strong>not</strong>:
                        </p>
                        <ul>
                            <li>Sell or rent personal information</li>
                            <li>Use data for advertising or profiling</li>
                            <li>Collect medical or health records</li>
                            <li>Track users across unrelated websites</li>
                        </ul>

                        <h2>4. Information Sharing</h2>
                        <p>
                            We share personal information only when reasonably necessary, such as:
                        </p>
                        <ul>
                            <li>Sharing task details or location with a matched helper</li>
                            <li>Using trusted third-party tools to operate the service</li>
                            <li>Responding to lawful requests or legal obligations</li>
                        </ul>

                        <p>
                            All helpers are independent individuals and receive only the information required to perform a
                            requested task.
                        </p>

                        <h2>5. Data Storage & Security</h2>
                        <p>
                            Bridge uses widely trusted third-party tools such as Google Forms, secure cloud-based spreadsheets,
                            email services, and scheduling tools.
                        </p>
                        <p>
                            We take reasonable steps to protect information from unauthorized access, loss, or misuse.
                            However, no system is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2>6. Cookies & Analytics</h2>
                        <p>
                            Bridge may use basic cookies or analytics tools to understand general website usage.
                            These tools do not collect sensitive personal or medical information.
                        </p>

                        <h2>7. Children&apos;s Privacy</h2>
                        <p>
                            Bridge is not directed to children under the age of 18.
                            We do not knowingly collect information from minors.
                        </p>

                        <h2>8. Your Choices</h2>
                        <p>You may request to:</p>
                        <ul>
                            <li>Access or correct your information</li>
                            <li>Request deletion of your information</li>
                            <li>Ask questions about how your data is used</li>
                        </ul>

                        <p>Requests can be made by contacting us using the information below.</p>

                        <h2>9. Changes to This Policy</h2>
                        <p>
                            Bridge may update this Privacy Policy from time to time as the platform evolves.
                            Updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
                        </p>

                        <h2>10. Contact Us</h2>
                        <p>
                            If you have questions or concerns about this Privacy Policy, contact us at:
                        </p>
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

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
    Shield,
    UserCheck,
    Heart,
    CheckCircle2,
    ArrowRight,
    Mail,
    FileText,
    Lock,
    MapPin,
    Phone,
    Clock,
    Car,
    Home,
    Calendar
} from "lucide-react";
import "./styles.css";

const LINKS = {
    applyHelper:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2IKU_4VIw8ksgualSVow9toeDBLZBNKTRZAsDCeFfnghqAA/viewform",
    bookSupport:
        "https://docs.google.com/forms/d/e/1FAIpQLSdxrinG4311vilsTXBIMChGaFupwU0xXgdbzDQsk6LvLbIA6g/viewform",
    email: "mailto:hello@bridge-lincoln.com",
    terms: "/terms",
    privacy: "/privacy",
};

function ScrollReveal({ children, delay = 0, direction = "up" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : 0,
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
}

function FloatingShape({ delay, duration, className }) {
    return (
        <motion.div
            className={`floating-shape ${className}`}
            animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
}

export default function BridgeLanding() {
    return (
        <div className="page">
            {/* NAV */}
            <motion.nav
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="container nav-container">
                    <a href="#top" className="logo" aria-label="Bridge home">
                        Bridge<span className="logo-dot">.</span>
                    </a>

                    <div className="nav-buttons">
                        <a href={LINKS.applyHelper} className="btn btn-secondary">
                            Apply to Be a Helper
                        </a>
                        <a href={LINKS.bookSupport} className="btn btn-primary">
                            Request Appointment
                        </a>
                    </div>
                </div>
            </motion.nav>

            {/* HERO */}
            <header id="top" className="hero hero-premium">
                <FloatingShape delay={0} duration={8} className="shape-1" />
                <FloatingShape delay={2} duration={10} className="shape-2" />

                <div className="container hero-content">
                    <motion.span
                        className="badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <MapPin size={14} /> Lincoln, Nebraska
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        We take your parent to the doctor and bring them home safe.
                    </motion.h1>

                    <motion.p
                        className="hero-sub"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <strong>Not a ride. Not home care.</strong> Bridge is door-through-door appointment support
                        for seniors in Lincoln. We walk in with them, wait through the visit, and text you when
                        they're back home.
                    </motion.p>

                    {/* Price Tag - Prominent */}
                    <motion.div
                        className="hero-price"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <span className="price-amount">$69</span>
                        <span className="price-label">flat rate per appointment</span>
                        <span className="price-note">No subscription. No minimum hours.</span>
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <a href={LINKS.bookSupport} className="btn btn-lg btn-primary">
                            Request Appointment Support
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>

                    {/* Simple 3-step preview */}
                    <motion.div
                        className="hero-steps-preview"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="step-mini">
                            <div className="step-icon"><Calendar size={18} /></div>
                            <span>You book online</span>
                        </div>
                        <div className="step-arrow">→</div>
                        <div className="step-mini">
                            <div className="step-icon"><Car size={18} /></div>
                            <span>We handle everything</span>
                        </div>
                        <div className="step-arrow">→</div>
                        <div className="step-mini">
                            <div className="step-icon"><Home size={18} /></div>
                            <span>They're home safe</span>
                        </div>
                    </motion.div>

                    <motion.p
                        className="hero-fineprint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        <Shield size={14} /> Background-checked helpers • Non-medical only • Lincoln, NE
                    </motion.p>
                </div>
            </header>

            {/* THE PROBLEM - WHY BRIDGE EXISTS */}
            <section className="section bg-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="problem-section">
                            <h2 className="section-title text-center">Appointments fail when no one can go.</h2>
                            <p className="text-center section-subtitle" style={{ maxWidth: 700, margin: "0 auto 3rem" }}>
                                You're at work. Or living out of state. Your parent needs to see the doctor,
                                but Uber won't walk them in, and home care agencies want 4-hour minimums.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="table-wrapper">
                            <table className="comparison-table" aria-label="Bridge comparison table">
                                <thead>
                                    <tr>
                                        <th>The Problem</th>
                                        <th>Uber / Lyft</th>
                                        <th>Home Care Agency</th>
                                        <th className="highlight">Bridge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Drop-off</strong></td>
                                        <td>Curb only</td>
                                        <td>Sometimes</td>
                                        <td className="highlight">Walk inside + check-in</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Waiting</strong></td>
                                        <td>Second ride required</td>
                                        <td>Yes, billed hourly</td>
                                        <td className="highlight">We stay (included)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Return home</strong></td>
                                        <td>They find their own ride</td>
                                        <td>Shift may end early</td>
                                        <td className="highlight">Door-to-door confirmed</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cost</strong></td>
                                        <td>$30-50 + stress</td>
                                        <td>$35/hr, 4hr minimum</td>
                                        <td className="highlight">$69 flat</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CORE SERVICE - CLEAR OFFERING */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-center section-title">What You Get</h2>
                        <p className="text-center section-subtitle" style={{ maxWidth: 600, margin: "0 auto 3rem" }}>
                            One flat fee. One trusted helper. Full peace of mind.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="card primary-service">
                            <div className="card-content">
                                <div className="pill">
                                    <Heart size={14} /> Our Service
                                </div>

                                <h3 className="card-title">Doctor & Hospital Appointment Support</h3>
                                <p>
                                    Built for Bryan Medical Center, Nebraska Heart Institute, and all Lincoln clinics.
                                    Perfect when you can't take the day off, but your parent shouldn't go alone.
                                </p>

                                <ul className="service-list">
                                    <li>
                                        <strong>Pickup at home:</strong> Helper knocks, greets, helps them to the vehicle.
                                    </li>
                                    <li>
                                        <strong>Walk-in support:</strong> Escort inside, help with check-in, find the right office.
                                    </li>
                                    <li>
                                        <strong>The wait:</strong> Helper stays the entire appointment. No curb drop.
                                    </li>
                                    <li>
                                        <strong>Safe return:</strong> Drive home, walk them inside, confirm they're settled.
                                    </li>
                                    <li>
                                        <strong>Family update:</strong> Text confirmations at pickup, check-in, and home arrival.
                                    </li>
                                </ul>

                                <div className="service-boundary">
                                    <Shield size={16} />
                                    <span>Non-medical support only. No medication administration. No clinical decisions.</span>
                                </div>

                                <a href={LINKS.bookSupport} className="btn btn-primary mt-4">
                                    Request This Service
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="card-price">
                                <div className="price-tag">$69</div>
                                <div className="price-period">Flat Rate</div>
                                <div className="price-detail">
                                    Includes up to 2 hours at clinic
                                    <br />
                                    +$20/hr if appointment runs long
                                </div>
                                <div className="price-includes">
                                    <div className="include-item"><CheckCircle2 size={14} /> Transportation</div>
                                    <div className="include-item"><CheckCircle2 size={14} /> Waiting time</div>
                                    <div className="include-item"><CheckCircle2 size={14} /> Family updates</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Secondary services - clearly marked as add-ons */}
                    <ScrollReveal delay={0.2}>
                        <div className="secondary-header">
                            <h3 className="secondary-title">Also Available</h3>
                            <p className="secondary-sub">
                                For existing clients — add these to your appointment or book separately.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="secondary-services">
                        <ScrollReveal delay={0.3}>
                            <div className="card text-center secondary-card">
                                <div className="pill pill-secondary">Add-on</div>
                                <h3>Grocery & Pharmacy Run</h3>
                                <div className="price-tag" style={{ fontSize: "2rem" }}>
                                    $39 <span className="price-period">flat</span>
                                </div>
                                <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
                                    Hy-Vee, CVS, Walgreens. Door-to-door with help carrying items inside.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="card text-center secondary-card">
                                <div className="pill pill-secondary">Add-on</div>
                                <h3>Companionship Visit</h3>
                                <div className="price-tag" style={{ fontSize: "2rem" }}>
                                    $29 <span className="price-period">/hr</span>
                                </div>
                                <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
                                    Friendly visit, light help around the house, or a short walk. 1-hour minimum.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS - 3 SIMPLE STEPS */}
            <section className="section bg-light">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-center section-title">How to Book</h2>
                        <p className="text-center section-subtitle">Three steps. Five minutes. Done.</p>
                    </ScrollReveal>

                    <div className="steps-simple">
                        <ScrollReveal delay={0.1}>
                            <div className="step-simple-card">
                                <div className="step-number">1</div>
                                <h3>Request Online</h3>
                                <p>Fill out the form with appointment details, pickup address, and your contact info. Takes 3 minutes.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="step-simple-card">
                                <div className="step-number">2</div>
                                <h3>We Match a Helper</h3>
                                <p>Within 24 hours, we'll confirm your helper and share their name, photo, and background.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="step-simple-card">
                                <div className="step-number">3</div>
                                <h3>We Handle the Rest</h3>
                                <p>Helper arrives on time, stays through the appointment, and texts you when your parent is home safe.</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.4}>
                        <div className="text-center" style={{ marginTop: "3rem" }}>
                            <a href={LINKS.bookSupport} className="btn btn-primary btn-lg">
                                Start Your Request
                                <ArrowRight size={18} />
                            </a>
                            <p className="micro-note" style={{ marginTop: "1rem" }}>
                                Currently serving Lincoln zip codes: 68516, 68512, 68526, 68506
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FOR ADULT CHILDREN - EMOTIONAL CONNECTION */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="for-families text-center">
                            <h2 className="section-title">You can't be there. We can.</h2>
                            <p style={{ maxWidth: 700, margin: "0 auto 2rem" }}>
                                You're working full-time. Or you live two states away. Your parent is independent
                                but shouldn't navigate clinics alone. Bridge exists for exactly this gap —
                                <strong> the space between "they'll be fine" and "I need to hire full-time care."</strong>
                            </p>

                            <div className="reassurance-points">
                                <div className="reassurance-item">
                                    <CheckCircle2 size={20} />
                                    <span>Same helper every time (when possible)</span>
                                </div>
                                <div className="reassurance-item">
                                    <CheckCircle2 size={20} />
                                    <span>Text updates at every step</span>
                                </div>
                                <div className="reassurance-item">
                                    <CheckCircle2 size={20} />
                                    <span>No long-term contracts</span>
                                </div>
                                <div className="reassurance-item">
                                    <CheckCircle2 size={20} />
                                    <span>Local Lincoln neighbors, not gig workers</span>
                                </div>
                            </div>

                            <div className="cta-row cta-row-center" style={{ marginTop: "2.5rem" }}>
                                <a href={LINKS.bookSupport} className="btn btn-primary">
                                    Request Appointment
                                    <ArrowRight size={18} />
                                </a>
                                <a href={LINKS.applyHelper} className="btn btn-secondary">
                                    Apply to Be a Helper
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* TRUST - WHO ARE THE HELPERS */}
            <section className="section bg-light text-center">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">Who Are the Helpers?</h2>
                        <p className="section-subtitle" style={{ maxWidth: 600, margin: "0 auto 3rem" }}>
                            We're picky. Our helpers are retired nurses, teachers, and care professionals
                            who live in your neighborhood and understand senior dignity.
                        </p>
                    </ScrollReveal>

                    <div className="trust-badges">
                        <ScrollReveal delay={0.1}>
                            <div className="trust-item">
                                <span className="trust-icon" aria-hidden="true">
                                    <Shield size={40} strokeWidth={1.5} />
                                </span>
                                <h3>Background Checked</h3>
                                <p>Criminal record and driving history verified. Every single helper.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="trust-item">
                                <span className="trust-icon" aria-hidden="true">
                                    <UserCheck size={40} strokeWidth={1.5} />
                                </span>
                                <h3>Personally Interviewed</h3>
                                <p>We meet every helper face-to-face before they meet your parent.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="trust-item">
                                <span className="trust-icon" aria-hidden="true">
                                    <Heart size={40} strokeWidth={1.5} />
                                </span>
                                <h3>Trained & Insured</h3>
                                <p>Trained on clinic navigation, senior mobility, and emergency protocols.</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.4}>
                        <div className="helper-profile">
                            <p className="helper-quote">
                                "Most of our helpers are retired Nurses, Social workers, teachers,
                                people who understand that dignity matters as much as safety."
                            </p>
                            <span className="helper-attribution">— Bridge Helper Team, Lincoln NE</span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* BOUNDARIES - CLEAR EXPECTATIONS */}
            <section className="section boundaries-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="boundaries-card">
                            <h3>What We Don't Do (And Why)</h3>
                            <p style={{ marginBottom: "2rem" }}>
                                To keep everyone safe and expectations clear:
                            </p>
                            <div className="boundaries-grid">
                                <div className="boundary-item">
                                    <span className="boundary-x">✕</span>
                                    <div>
                                        <strong>No medical tasks</strong>
                                        <p>We don't administer medication, check vitals, or provide clinical care.</p>
                                    </div>
                                </div>
                                <div className="boundary-item">
                                    <span className="boundary-x">✕</span>
                                    <div>
                                        <strong>No mobility lifts</strong>
                                        <p>Your parent must be able to transfer with minimal assistance.</p>
                                    </div>
                                </div>
                                <div className="boundary-item">
                                    <span className="boundary-x">✕</span>
                                    <div>
                                        <strong>No dementia/Alzheimer's care</strong>
                                        <p>We support independent seniors who can direct their own care.</p>
                                    </div>
                                </div>
                                <div className="boundary-item">
                                    <span className="boundary-x">✕</span>
                                    <div>
                                        <strong>No insurance billing</strong>
                                        <p>Private pay only.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="text-center">
                        <h2>Bridge.</h2>
                        <p style={{ maxWidth: 520, margin: "1rem auto" }}>
                            Door-through-door appointment support for seniors in Lincoln, Nebraska.<br />
                            <span style={{ opacity: 0.8 }}>Non-medical. Locally owned. Here to help.</span>
                        </p>

                        <div className="footer-links">
                            <a href={LINKS.bookSupport}>
                                <Calendar size={16} /> Request Appointment
                            </a>
                            <a href={LINKS.applyHelper}>
                                <UserCheck size={16} /> Apply to Be a Helper
                            </a>
                            <a href={LINKS.email}>
                                <Mail size={16} /> Contact Us
                            </a>
                            <a href={LINKS.terms}>
                                <FileText size={16} /> Terms
                            </a>
                            <a href={LINKS.privacy}>
                                <Lock size={16} /> Privacy
                            </a>
                        </div>
                    </div>

                    <div className="footer-bottom">&copy; 2026 Bridge Lincoln. All rights reserved.</div>
                </div>
            </footer>

            {/* Floating CTA - Mobile Only */}
            <a href={LINKS.bookSupport} className="floating-cta">
                Request Appointment
            </a>
        </div>
    );
}
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Lightbox } from '../components/Lightbox'
import { cafeDetails } from '../data/cafeDetails'

const packages = [
    {
        name: 'The Basic',
        price: 'PHP 7,200',
        guests: '50',
        popular: false,
        features: [
            'Unlimited beverages on chosen coffee & non-coffee drinks',
            '3 hours of service',
            '1 Barista and 1 assistant',
        ],
    },
    {
        name: 'The Plus',
        price: 'PHP 9,200',
        guests: '100',
        popular: true,
        features: [
            'Unlimited beverages on chosen coffee & non-coffee drinks',
            '3 hours of service',
            '1 Barista and 1 assistant',
        ],
    },
    {
        name: "Rocky's Perk",
        price: 'PHP 15,000',
        guests: '300',
        popular: false,
        features: [
            'Unlimited beverages on chosen coffee & non-coffee drinks',
            '3 hours of service',
            '1 Barista and 1 assistant',
        ],
    },
]

const packageSheets = [
    { file: 'rent/2.jpg', label: 'The Basic & The Plus' },
    { file: 'rent/3.jpg', label: "Rocky's Perk" },
]

export function RentPage() {
    const cardRefs = useRef<(HTMLElement | null)[]>([])
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
    const [bookModal, setBookModal] = useState<string | null>(null)

    useEffect(() => {
        if (!bookModal) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setBookModal(null) }
        const prev = document.body.style.overflow
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [bookModal])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rent-card-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
        )
        cardRefs.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* ── Hero ── */}
            <section className="rent-hero fade-in">
                <div className="rent-hero-copy">
                    <p className="hero-eyebrow">Coffee Cart Rental</p>
                    <h1 className="hero-title">
                        Bring Rocky&apos;s Cafe<br />to Your Event.
                    </h1>
                    <p className="hero-subtitle">
                        A mobile coffee cart setup for birthdays, weddings, corporate gatherings, and more.
                        We come to you — beans, barista, and all.
                    </p>
                    <div className="hero-actions">
                        <a
                            href={`mailto:${cafeDetails.email}?subject=Coffee Cart Rental Inquiry`}
                            className="btn btn-primary"
                        >
                            Book Now — Email Us
                        </a>
                        <a href={cafeDetails.phoneLink} className="btn btn-ghost">
                            Call {cafeDetails.phoneDisplay}
                        </a>
                    </div>
                    <ul className="hero-points">
                        <li>Available for all event types and sizes</li>
                        <li>10% off for all bookings — limited slots only</li>
                    </ul>
                </div>
                <figure className="rent-hero-photo">
                    <img
                        src={import.meta.env.BASE_URL + 'rent/1.jpg'}
                        alt="Rocky's Cafe coffee cart rental"
                    />
                    <figcaption>Rocky&apos;s Cafe mobile coffee cart</figcaption>
                </figure>
            </section>

            {/* ── Promo Banner ── */}
            <div className="rent-promo-banner reveal-up">
                <span className="rent-promo-badge">Limited Offer</span>
                <p>
                    <strong>10% OFF</strong> for all bookings — email us at{' '}
                    <strong>{cafeDetails.email}</strong> to reserve your event date.
                </p>
                <button
                    className="btn rent-promo-btn"
                    onClick={() => setBookModal('General Inquiry')}
                >
                    Reserve a Date
                </button>
            </div>

            {/* ── Packages ── */}
            <section className="rent-packages reveal-up delay-1">
                <div className="rent-packages-head">
                    <p className="hero-eyebrow">Our Packages</p>
                    <h2 className="rent-packages-title">Choose Your Setup</h2>
                    <p className="rent-packages-sub">
                        All packages include unlimited beverages, a dedicated barista team, and 3 hours of
                        event service.
                    </p>
                </div>
                <div className="rent-packages-grid">
                    {packages.map((pkg, i) => (
                        <article
                            key={pkg.name}
                            className={`rent-package-card${pkg.popular ? ' rent-package-popular' : ''}`}
                            ref={(el) => {
                                cardRefs.current[i] = el
                            }}
                            style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}
                        >
                            {pkg.popular && (
                                <div className="rent-popular-badge">Most Popular</div>
                            )}
                            <div className="rent-package-header">
                                <p className="rent-package-guests">Up to {pkg.guests} guests</p>
                                <h3 className="rent-package-name">{pkg.name}</h3>
                                <p className="rent-package-price">{pkg.price}</p>
                            </div>
                            <ul className="rent-features">
                                {pkg.features.map((f) => (
                                    <li key={f}>
                                        <span className="rent-check" aria-hidden="true">✦</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-ghost'} rent-pkg-btn`}
                                onClick={() => setBookModal(pkg.name)}
                            >
                                Book This Package
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── Package Sheet Gallery ── */}
            <section className="rent-sheets reveal-up delay-2">
                <div className="rent-sheets-head">
                    <p className="hero-eyebrow">Package Details</p>
                    <h2>See the Full Breakdown</h2>
                    <p>Tap any image to view the full package sheet.</p>
                </div>
                <div className="rent-sheets-grid">
                    {packageSheets.map((sheet, i) => (
                        <figure
                            key={sheet.file}
                            className="rent-sheet-card lightbox-trigger"
                            ref={(el) => {
                                cardRefs.current[packages.length + i] = el
                            }}
                            style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}
                            onClick={() =>
                                setLightbox({
                                    src: import.meta.env.BASE_URL + sheet.file,
                                    alt: sheet.label,
                                })
                            }
                        >
                            <img
                                src={import.meta.env.BASE_URL + sheet.file}
                                alt={sheet.label}
                                loading="lazy"
                            />
                            <figcaption>{sheet.label}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="rent-cta reveal-up">
                <p className="hero-eyebrow">Ready to book?</p>
                <h2 className="rent-cta-title">Let&apos;s make your event unforgettable.</h2>
                <p className="rent-cta-sub">
                    Send us a message and we&apos;ll get back to you with availability and details.
                </p>
                <div className="hero-actions rent-cta-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => setBookModal('General Inquiry')}
                    >
                        Contact Us to Book
                    </button>
                    <a href={cafeDetails.phoneLink} className="btn btn-ghost">
                        Call {cafeDetails.phoneDisplay}
                    </a>
                </div>
            </section>

            {lightbox && (
                <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
            )}

            {bookModal && createPortal(
                <div className="book-modal-backdrop" onClick={() => setBookModal(null)}>
                    <div className="book-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Book ${bookModal}`}>
                        <button className="book-modal-close" onClick={() => setBookModal(null)} aria-label="Close">✕</button>
                        <p className="hero-eyebrow">
                            {bookModal === 'General Inquiry' ? 'Get in touch' : 'You selected'}
                        </p>
                        <h2 className="book-modal-title">{bookModal}</h2>
                        <p className="book-modal-sub">
                            {bookModal === 'General Inquiry'
                                ? "Reach out through any channel below and we'll get back to you with availability and details."
                                : "Reach out to us through any of the channels below and mention your chosen package. We'll get back to you with availability and details."}
                        </p>
                        <div className="book-modal-contacts">
                            <a
                                href={`mailto:${cafeDetails.email}?subject=Coffee Cart Booking – ${bookModal}`}
                                className="book-contact-row"
                            >
                                <span className="book-contact-icon" aria-hidden="true">✉</span>
                                <span>
                                    <strong>Email</strong>
                                    <em>{cafeDetails.email}</em>
                                </span>
                            </a>
                            <a href={cafeDetails.phoneLink} className="book-contact-row">
                                <span className="book-contact-icon" aria-hidden="true">📞</span>
                                <span>
                                    <strong>Call / Text</strong>
                                    <em>{cafeDetails.phoneDisplay}</em>
                                </span>
                            </a>
                            <a href={cafeDetails.instagramUrl} target="_blank" rel="noreferrer" className="book-contact-row">
                                <span className="book-contact-icon" aria-hidden="true">📷</span>
                                <span>
                                    <strong>Instagram</strong>
                                    <em>{cafeDetails.instagramHandle}</em>
                                </span>
                            </a>
                            <a href={cafeDetails.facebookUrl} target="_blank" rel="noreferrer" className="book-contact-row">
                                <span className="book-contact-icon" aria-hidden="true">💬</span>
                                <span>
                                    <strong>Facebook</strong>
                                    <em>rockyscafe9</em>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cafeDetails, promotionalGallery } from '../data/cafeDetails'

export function HomePage() {
    const heroPhoto = promotionalGallery[0]

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>('.gallery-card')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                    }
                })
            },
            {
                threshold: 0.22,
                rootMargin: '0px 0px -8% 0px',
            },
        )

        cards.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section className="landing-hero fade-in">
                <div className="landing-hero-copy">
                    <p className="hero-eyebrow">rockyscafe9</p>
                    <h1 className="hero-title">A warm neighborhood cafe with bold flavors.</h1>
                    <p className="hero-subtitle">{cafeDetails.tagline}</p>
                    <div className="hero-actions">
                        <Link to="/menu" className="btn btn-primary">
                            View Online Menu
                        </Link>
                        <a href={cafeDetails.phoneLink} className="btn btn-ghost">
                            Call {cafeDetails.phoneDisplay}
                        </a>
                    </div>
                    <ul className="hero-points">
                        <li>Open daily for dine-in, pick-up, and delivery</li>
                        <li>Event catering and mobile coffee setup available</li>
                    </ul>
                </div>

                {heroPhoto ? (
                    <figure className="landing-hero-photo">
                        <img src={import.meta.env.BASE_URL + heroPhoto.src} alt={heroPhoto.alt} />
                        <figcaption>Rocky&apos;s Cafe storefront setup</figcaption>
                    </figure>
                ) : null}
            </section>

            <section className="landing-highlights reveal-up">
                <article className="highlight-pill">
                    <span>Location</span>
                    <p>San Pedro, Laguna</p>
                </article>
                <article className="highlight-pill">
                    <span>Services</span>
                    <p>{cafeDetails.services.length}+ options</p>
                </article>
                <article className="highlight-pill">
                    <span>Contact</span>
                    <p>{cafeDetails.phoneDisplay}</p>
                </article>
            </section>

            <section className="details-grid reveal-up">
                <article className="card card-highlight">
                    <h2>Visit Rocky&apos;s Cafe</h2>
                    <p>{cafeDetails.address}</p>
                    <p className="muted">{cafeDetails.status}</p>
                </article>

                <article className="card">
                    <h2>Contact</h2>
                    <ul className="meta-list">
                        <li>
                            <strong>Phone:</strong> {cafeDetails.phoneDisplay}
                        </li>
                        <li>
                            <strong>Email:</strong> {cafeDetails.email}
                        </li>
                        <li>
                            <strong>Instagram:</strong> {cafeDetails.instagramHandle}
                        </li>
                    </ul>
                </article>
            </section>

            <section className="services reveal-up delay-1">
                <h2>Specialties & Services</h2>
                <div className="chip-wrap">
                    {cafeDetails.services.map((service) => (
                        <span key={service} className="chip">
                            {service}
                        </span>
                    ))}
                </div>
            </section>

            <section className="gallery reveal-up delay-2">
                <div className="gallery-head">
                    <h2>Storefront Gallery</h2>
                    <p>Scenes from Rocky&apos;s Cafe and event setup moments.</p>
                </div>
                <div className="gallery-grid">
                    {promotionalGallery.map((image, index) => (
                        <figure
                            key={image.src}
                            className={`gallery-card ${
                                index % 2 === 0 ? 'tilt-left' : 'tilt-right'
                            }`}
                        >
                            <img src={import.meta.env.BASE_URL + image.src} alt={image.alt} loading="lazy" />
                        </figure>
                    ))}
                </div>
            </section>

            <section className="social-strip reveal-up">
                <a href={cafeDetails.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                </a>
                <a href={cafeDetails.facebookUrl} target="_blank" rel="noreferrer">
                    Facebook
                </a>
                <a href={cafeDetails.phoneLink}>Call Now</a>
            </section>
        </>
    )
}

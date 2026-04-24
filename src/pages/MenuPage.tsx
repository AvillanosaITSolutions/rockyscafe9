import { useEffect, useRef, useState } from 'react'
import { Lightbox } from '../components/Lightbox'

const mainMenuImages = [
    { file: 'menu/1.jpg', label: 'Coffee' },
    { file: 'menu/2.jpg', label: 'Non-Coffee · Frappe · Tea · Fruit Soda' },
    { file: 'menu/4.jpg', label: 'Korean Plates' },
    { file: 'menu/5.jpg', label: 'Rice Meals' },
    { file: 'menu/6.jpg', label: 'Snacks & Pasta' },
]

export function MenuPage() {
    const cardRefs = useRef<(HTMLElement | null)[]>([])
    const spreadRef = useRef<HTMLDivElement | null>(null)
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('menu-img-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        )
        cardRefs.current.forEach((el) => el && observer.observe(el))
        if (spreadRef.current) observer.observe(spreadRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section className="menu-page">

                {/* ── Matcha Magazine Spread ── */}
                <div className="matcha-spread" ref={spreadRef}>
                    <div className="matcha-spread-cover">
                        <div className="matcha-spread-badge">Featured Series</div>
                        <h2 className="matcha-spread-title">Matcha<br />by Rocky</h2>
                        <p className="matcha-spread-tagline">Crafted with ceremony.<br />Served with love.</p>
                        <img
                            className="matcha-spread-logo"
                            src={import.meta.env.BASE_URL + 'menu/Matcha.jpg'}
                            alt="Matcha by Rocky"
                        />
                    </div>
                    <div className="matcha-spread-spine" aria-hidden="true" />
                    <div className="matcha-spread-pages">
                        <figure
                            className="matcha-spread-page matcha-page-drinks lightbox-trigger"
                            onClick={() => setLightbox({ src: import.meta.env.BASE_URL + 'menu/Green Modern Matcha Drinks Instagram Post (1).jpg', alt: 'Strawberry Matcha & Matcha Soy Latte' })}
                        >
                            <img
                                src={import.meta.env.BASE_URL + 'menu/Green Modern Matcha Drinks Instagram Post (1).jpg'}
                                alt="Strawberry Matcha & Matcha Soy Latte"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="matcha-spread-page matcha-page-menu lightbox-trigger"
                            onClick={() => setLightbox({ src: import.meta.env.BASE_URL + 'menu/3.jpg', alt: 'Matcha Series menu' })}
                        >
                            <img
                                src={import.meta.env.BASE_URL + 'menu/3.jpg'}
                                alt="Matcha Series menu"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                </div>

                {/* ── Main Menu ── */}
                <div className="menu-section-header">
                    <p className="hero-eyebrow">Our Menu</p>
                    <h1 className="menu-page-title">Rocky&apos;s Cafe</h1>
                    <p className="menu-page-sub">Coffee · Meals · Snacks</p>
                    <div className="menu-page-divider">
                        <span />
                        <span className="menu-page-leaf">✦</span>
                        <span />
                    </div>
                </div>

                <div className="menu-img-stack">
                    {mainMenuImages.map((img, i) => (
                        <figure
                            key={img.file}
                            className="menu-img-card lightbox-trigger"
                            ref={(el) => { cardRefs.current[i] = el }}
                            style={{ '--delay': `${i * 60}ms` } as React.CSSProperties}
                            onClick={() => setLightbox({ src: import.meta.env.BASE_URL + img.file, alt: img.label })}
                        >
                            <img
                                src={import.meta.env.BASE_URL + img.file}
                                alt={img.label}
                                loading="lazy"
                            />
                            <figcaption>{img.label}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
        </>
    )
}


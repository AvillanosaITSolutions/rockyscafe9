import { menuSections } from '../data/cafeDetails'

export function MenuPage() {
    return (
        <section className="menu-page fade-in">
            <div className="menu-header">
                <p className="hero-eyebrow">Online Menu</p>
                <h1 className="hero-title">Crafted for your cafe moments.</h1>
                <p className="hero-subtitle">
                    A curated list of crowd favorites from Rocky&apos;s Cafe.
                </p>
            </div>

            <div className="menu-grid">
                {menuSections.map((section) => (
                    <article key={section.title} className="menu-card reveal-up">
                        <h2>{section.title}</h2>
                        <ul>
                            {section.items.map((item) => (
                                <li key={item.name}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <span>{item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

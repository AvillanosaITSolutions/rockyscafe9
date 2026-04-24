import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface LightboxProps {
    src: string
    alt: string
    onClose: () => void
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        const previousOverflow = document.body.style.overflow
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = previousOverflow
        }
    }, [onClose])

    return createPortal(
        <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
            <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt={alt} className="lightbox-img" />
            </div>
        </div>,
        document.body
    )
}

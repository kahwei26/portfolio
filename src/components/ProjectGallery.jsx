import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ProjectGallery.css'

// Eagerly import all media in the projects folder so Vite builds them automatically
const mediaGlob = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,gif,webp,mp4}', {
    eager: true,
    query: '?url',
    import: 'default'
})

// Helper to extract filename from Vite output path, e.g., /assets/projects/folder/image-hash.jpg -> image.jpg
const extractFilename = (url) => {
    const rawFilename = url.split('/').pop().split('?')[0];
    // Remove the file extension
    let nameWithoutExt = rawFilename.replace(/\.[^/.]+$/, "");
    // Decode URL entities like %20 to spaces
    nameWithoutExt = decodeURIComponent(nameWithoutExt);
    // Remove leading numbers and separators (e.g., "01_", "2 - ", "3 ")
    nameWithoutExt = nameWithoutExt.replace(/^[\d\s\-_]+/, "");
    // Optional: convert remaining underscores to spaces for cleaner reading
    nameWithoutExt = nameWithoutExt.replace(/_/g, " ");
    return nameWithoutExt;
}

export default function ProjectGallery({ folder, objectFit = 'contain' }) {
    const scrollContainerRef = useRef(null)

    // Filter the globbed media to only include files in this specific folder
    const mediaFiles = Object.keys(mediaGlob)
        .filter(path => path.includes(`/assets/projects/${folder}/`))
        .sort() // Sort alphabetically
        .map(path => ({ path, url: mediaGlob[path] }))

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth + 16; // Scroll exactly one full image width + CSS gap
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    if (mediaFiles.length === 0) {
        // return null;

        return (
            <div className="exp-project-media-wrapper">
                <div className="exp-project-media--placeholder" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', height: '100%', padding: '2rem', border: '1px dashed var(--surface-border)', borderRadius: 'var(--radius-md)' }}>
                    <span className="placeholder-text text-amber">Media Placeholder</span>
                    <span className="placeholder-sub" style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.8rem' }}>
                        Drop media in <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>src/assets/projects/{folder}/</code>
                    </span>
                </div>
            </div>
        )

    }

    const hasMultiple = mediaFiles.length > 1;

    return (
        <div className="project-gallery-container">
            {hasMultiple && (
                <button
                    className="gallery-nav-btn nav-left"
                    onClick={() => scroll('left')}
                    aria-label="Previous Image"
                >
                    <FaChevronLeft />
                </button>
            )}

            <div
                className={`exp-project-gallery ${!hasMultiple ? 'single-item' : ''}`}
                ref={scrollContainerRef}
            >
                {mediaFiles.map((mediaObj, i) => {
                    const { url } = mediaObj;
                    const isVideo = url.endsWith('.mp4') || url.includes('.mp4?');
                    const filename = extractFilename(url);

                    return (
                        <div key={i} className="exp-project-gallery-item">
                            {isVideo ? (
                                <video
                                    src={url}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="exp-project-media-content"
                                    style={{ objectFit }}
                                    title={filename}
                                />
                            ) : (
                                <img
                                    src={url}
                                    alt={filename}
                                    title={filename}
                                    className="exp-project-media-content"
                                    style={{ objectFit }}
                                    loading="lazy"
                                />
                            )}
                        </div>
                    )
                })}
            </div>

            {hasMultiple && (
                <button
                    className="gallery-nav-btn nav-right"
                    onClick={() => scroll('right')}
                    aria-label="Next Image"
                >
                    <FaChevronRight />
                </button>
            )}
        </div>
    )
}

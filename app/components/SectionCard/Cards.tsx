"use client"

import { useEffect, useRef, useState, type FC } from "react"
import { gsap } from "gsap"

// Card component with only an image
interface CardProps {
  imageUrl: string
  alt?: string
}

const Card: FC<CardProps> = ({ imageUrl, alt = "Card image" }) => {
  return (
    <div className="card overflow-hidden rounded-lg shadow-md w-full mx-auto max-w-[280px] h-[200px] transition-all duration-300 ease-in-out">
      <img src={imageUrl || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isInView, setIsInView] = useState(false) // To track visibility

  const cardData = [
    {
      id: 1,
      imageUrl: "https://placehold.co/600x400/EEE/31343C",
      alt: "Card image 1",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      alt: "Card image 2",
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/600x400/EEE/31343C",
      alt: "Card image 3",
    },
    {
      id: 4,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      alt: "Card image 4",
    },
    {
      id: 5,
      imageUrl: "https://placehold.co/600x400/EEE/31343C",
      alt: "Card image 5",
    },
    {
      id: 6,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      alt: "Card image 6",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting) // Track if the component is in the viewport
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView || !containerRef.current || !cardsRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>(".card")
    const container = containerRef.current

    // Clear any existing animations
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create a new timeline
    const tl = gsap.timeline()
    timelineRef.current = tl

    // Set initial state - cards hidden and in 3D space
    gsap.set(cards, {
      opacity: 0,
      rotateY: 0,
      x: (i) => (i % 2 === 0 ? -100 : 100), // Alternate left/right starting positions
    })

    gsap.set(container, {
      perspective: 1000,
    })

    gsap.set(cardsRef.current, {
      transformStyle: "preserve-3d",
    })

    // Initial fan-like arrangement
    const radius = 400
    const angleStep = (Math.PI * 2) / cards.length

    // Entrance animation
    tl.to(cards, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    })

      // Position cards in 3D fan arrangement
      .to(cards, {
        duration: 1.2,
        rotateY: (i) => i * (360 / cards.length),
        z: (i) => -Math.cos(i * angleStep) * radius,
        x: (i) => Math.sin(i * angleStep) * radius,
        transformOrigin: "center center -400px",
        stagger: 0.1,
        ease: "power2.inOut",
      })

      // Rotate each card 360 degrees
      .to(cards, {
        rotateY: "+=360",
        duration: 2,
        stagger: 0.1,
        ease: "power1.inOut",
      })

      // Transition to flat layout
      .to(cards, {
        rotateY: 0,
        rotateX: 0,
        rotateZ: 0,
        x: 0,
        y: 0,
        z: 0,
        transformOrigin: "center center",
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      })

      // Apply grid layout classes
      .to(cardsRef.current, {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4",
        duration: 0.1,
      })

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isInView]) // Re-run when the visibility changes

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 ">
      <div
        ref={containerRef}
        className="w-full relative overflow-hidden min-h-[500px] flex items-center justify-center"
      >
        <div ref={cardsRef} className="relative flex items-center justify-center">
          {cardData.map((card) => (
            <Card key={card.id} imageUrl={card.imageUrl} alt={card.alt} />
          ))}
        </div>
      </div>
    </main>
  )
}

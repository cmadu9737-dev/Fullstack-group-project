import React, { useState } from "react";
import "./FeaturedServices.css";

const services = [
  {
    id: 1,
    title: "Professional Photography",
    provider: "Creative Lens Studio",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 128,
    price: "₦50,000",
    location: "Lagos, Nigeria",
    phone: "2348012345678",
  },
  {
    id: 2,
    title: "Event Planning & Decoration",
    provider: "Elegant Events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: 96,
    price: "₦150,000",
    location: "Ikeja, Lagos",
    phone: "2348104072213",
  },
  {
    id: 3,
    title: "Catering Services",
    provider: "Delight Catering",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 114,
    price: "₦75,000",
    location: "Lekki, Lagos",
    phone: "2348104072213",
  },
   {
    id: 3,
    title: "Catering Services",
    provider: "Delight Catering",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 114,
    price: "₦75,000",
    location: "Lekki, Lagos",
    phone: "2348104072213",
  },
  {
    id: 2,
    title: "Event Planning & Decoration",
    provider: "Elegant Events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: 96,
    price: "₦150,000",
    location: "Ikeja, Lagos",
    phone: "2348104072213",
  },
  {
    id: 1,
    title: "Professional Photography",
    provider: "Creative Lens Studio",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 128,
    price: "₦50,000",
    location: "Lagos, Nigeria",
    phone: "2348012345678",
  },
];

function FeaturedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h18" />
      <path d="M5 7v13h14V7" />
      <path d="M8 7V4h8v3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function ServiceCard({ service }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleContact = () => {
    const message = `Hello, I am interested in ${service.title} offered by ${service.provider}. Please provide more information.`;

    if (!service.phone) {
      alert("Please provide the service provider's phone number..");
      return;
    }

    const whatsappURL =
      `https://wa.me/${service.phone}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="service-card">
      <div className="service-image-wrapper">
        <img
          className="service-image"
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <button
          className={`favorite-btn ${
            isFavorite ? "is-favorite" : ""
          }`}
          type="button"
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon />
        </button>
      </div>

      <div className="service-details">
        <h3>{service.title}</h3>

        <p className="service-provider">
          {service.provider}
        </p>

        <div className="service-rating-price">
          <div className="service-rating">
            <span className="star" aria-hidden="true">
              ★
            </span>

            <span>{service.rating}</span>

            <span className="review-count">
              ({service.reviews} reviews)
            </span>
          </div>

          <span className="service-price">
            {service.price}
          </span>
        </div>

        <div className="service-footer">
          <div className="service-location">
            <LocationIcon />
            <span>{service.location}</span>
          </div>

          <button
            className="contact-btn"
            type="button"
            onClick={handleContact}
          >
            <MessageIcon />
            Contact
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedServices() {
  return (
    <section
      className="featured-services"
      id="featured-services"
    >
      <div className="featured-header">
        <div className="featured-heading">
          <div className="featured-icon">
            <FeaturedIcon />
          </div>

          <div>
            <h2>Featured Services</h2>
            <p>
              Discover trusted professionals for your needs
            </p>
          </div>
        </div>

        <a href="#all-services" className="view-all">
          View All <span>→</span>
        </a>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

      <div id="all-services" />
    </section>
  );
}


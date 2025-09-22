// src/components/Services/Services.jsx

import React, { useState } from "react";
import servicesData from "./servicesData"; // Array of service objects
import "./Services.css";

const categories = [...new Set(servicesData.map(service => service.category))];
const locations = [...new Set(servicesData.map(service => service.location))];

export default function Services() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  
  const filteredServices = servicesData.filter(service =>
    (filterCategory ? service.category === filterCategory : true) &&
    (filterLocation ? service.location === filterLocation : true) &&
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="services-section">
      <h2 className="services-title">Browse Food Delivery Services</h2>
      <div className="services-filters">
        <input
          className="services-search"
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="services-select"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={filterLocation}
          onChange={e => setFilterLocation(e.target.value)}
          className="services-select"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="services-grid">
        {filteredServices.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} className="service-card-img" />
            <h3 className="service-card-title">{service.name}</h3>
            <p className="service-card-desc">{service.description}</p>
            <div className="service-card-meta">
              <span className="service-card-category">{service.category}</span>
              <span className="service-card-location">{service.location}</span>
              <span className={`service-card-status ${service.available ? "available" : "unavailable"}`}>
                {service.available ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

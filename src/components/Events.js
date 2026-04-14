import React from "react";
import "./Events.css";

const pastEvents = [
  {
    title: "Annual Company Retreat",
    date: "February 10, 2026",
    location: "Mountain Resort",
    attendees: "95 attended"
  },
  {
    title: "Developer Conference 2025",
    date: "January 15, 2026",
    location: "Convention Center",
    attendees: "2000 attended"
  }
];

const upcomingEvents = [
  {
    title: "Product Launch Event",
    desc: "Join us for an exciting product launch featuring our latest innovation.",
    date: "March 15, 2026",
    location: "San Francisco, CA",
    attendees: "250 attending",
    highlight: true
  },
  {
    title: "Design Workshop",
    desc: "Interactive workshop on UI/UX design principles.",
    date: "March 8, 2026",
    location: "Virtual",
    attendees: "120 attending"
  },
   {
    title: "Design Workshop",
    desc: "Interactive workshop on UI/UX design principles.",
    date: "March 8, 2026",
    location: "Virtual",
    attendees: "120 attending"
  }
];

function Events() {
  return (
    <section className="events-section" id="events">
      {/* UPCOMING EVENTS */}
      <h2 className="section-title upcoming">Upcoming Events</h2>

      <div className="timeline">
        {upcomingEvents.map((e, i) => (
          <div className={`timeline-item ${e.highlight ? "highlight" : ""}`} key={i}>
            
            <div className="dot"></div>

            <div className="event-card">
              <h3>{e.title}</h3>
              <p>{e.desc}</p>

              <div className="event-meta">
                <span>{e.date}</span>
                <span>{e.location}</span>
                <span>{e.attendees}</span>
              </div>

              <button style={{fontFamily : "do"}}>Register →</button>
            </div>

          </div>
        ))}
      </div>

      
      {/* PAST EVENTS */}
      <h2 className="section-title">Past Events</h2>
      <div className="past-events">
        {pastEvents.map((e, i) => (
          <div className="past-card" key={i}>
            <div>
              <h3>{e.title}</h3>
              <p>{e.date} • {e.location} • {e.attendees}</p>
            </div>
            <span className="link">View Details</span>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Events;
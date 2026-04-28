// import React from "react";
// import "./Events.css";

// const pastEvents = [
//   {
//     title: "Annual Company Retreat",
//     date: "February 10, 2026",
//     location: "Mountain Resort",
//     attendees: "95 attended",
//     images: ["/event1-3.jpg", "/event1-4.jpg", "/event1-5.jpg"]
//   },
//   {
//     title: "Developer Conference 2025",
//     date: "January 15, 2026",
//     location: "Convention Center",
//     attendees: "2000 attended"
//   }
// ];

// const upcomingEvents = [
//   {
//     title: "Product Launch Event",
//     desc: "Join us for an exciting product launch featuring our latest innovation.",
//     date: "March 15, 2026",
//     location: "San Francisco, CA",
//     attendees: "250 attending",
//     highlight: true
//   },
//   {
//     title: "Design Workshop",
//     desc: "Interactive workshop on UI/UX design principles.",
//     date: "March 8, 2026",
//     location: "Virtual",
//     attendees: "120 attending"
//   },
//    {
//     title: "Design Workshop",
//     desc: "Interactive workshop on UI/UX design principles.",
//     date: "March 8, 2026",
//     location: "Virtual",
//     attendees: "120 attending"
//   }
// ];

// function Events() {
//   return (
//     <section className="events-section" id="events">
//       {/* UPCOMING EVENTS */}
//       <h2 className="section-title upcoming">Upcoming Events</h2>

//       <div className="timeline">
//         {upcomingEvents.map((e, i) => (
//           <div className={`timeline-item ${e.highlight ? "highlight" : ""}`} key={i}>
            
//             <div className="dot"></div>

//             <div className="event-card">
//               <h3>{e.title}</h3>
//               <p>{e.desc}</p>

//               <div className="event-meta">
//                 <span>{e.date}</span>
//                 <span>{e.location}</span>
//                 <span>{e.attendees}</span>
//               </div>

//               <button style={{fontFamily : "Doto"}}>Register →</button>
//             </div>

//           </div>
//         ))}
//       </div>

      
//       {/* PAST EVENTS */}
//       <h2 className="section-title">Past Events</h2>
//       <div className="past-events">
//         {pastEvents.map((e, i) => (
//           <div className="past-card" key={i}>
//             <div>
//               <h3>{e.title}</h3>
//               <p>{e.date} • {e.location} • {e.attendees}</p>
//             </div>
//             <span className="link">View Details</span>
//           </div>
//         ))}
//       </div>


//     </section>
//   );
// }

// export default Events;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./Events.css";
import "swiper/css";
import "swiper/css/pagination";

/* ---------------- DATA ---------------- */

const pastEvents = [
  {
    title: "Annual Company Retreat",
    date: "February 10, 2026",
    location: "Mountain Resort",
    attendees: "95 attended",
    images: ["/images/event1-3.jpg", "/images/event1-4.jpg", "/images/event1-5.jpg"]
  },
  {
    title: "Developer Conference 2025",
    date: "January 15, 2026",
    location: "Convention Center",
    attendees: "2000 attended",
    images: [
      "https://picsum.photos/500/300?4",
      "https://picsum.photos/500/300?5"
    ]
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
  }
];

/* ---------------- COMPONENT ---------------- */

function Events() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState({}); // separate state per event

  /* ---------- HANDLERS ---------- */

  const toggleDetails = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));

    // initialize slide index if not present
    setSlideIndex((prev) => ({
      ...prev,
      [index]: prev[index] || 0
    }));
  };

  const nextSlide = (index, images) => {
    setSlideIndex((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % images.length
    }));
  };

  const prevSlide = (index, images) => {
    setSlideIndex((prev) => ({
      ...prev,
      [index]:
        prev[index] === 0
          ? images.length - 1
          : prev[index] - 1
    }));
  };

  /* ---------------- UI ---------------- */

  return (
    <section className="events-section" id="events">

      {/* ---------- UPCOMING ---------- */}
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

              <button style={{ fontFamily: "Doto" }}>
                Register →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- PAST EVENTS ---------- */}
      <h2 className="section-title">Past Events</h2>

      <div className="past-events">
  {pastEvents.map((e, i) => (
    <div className="past-card-wrapper" key={i}>

      {/* CARD */}
      <div className="past-card">
        <div>
          <h3>{e.title}</h3>
          <p>{e.date} • {e.location} • {e.attendees}</p>
        </div>

        <span
          className="link"
          onClick={() =>
            setActiveIndex(activeIndex === i ? null : i)
          }
        >
          {activeIndex === i ? "Hide Details" : "View Details"}
        </span>
      </div>

      {/* SWIPER CAROUSEL */}
      {activeIndex === i && (
        <div className="swiper-container-custom">

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
          >
            {e.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt="event" />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      )}

    </div>
  ))}
</div>

    </section>
  );
}

export default Events;
import React, { useState } from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const team = [
    {
        name: "Om Vyas",
        role: "TechnoLab Lead",
        img: "/images/t1.jpg",
        hoverImg: "/images/t1h.jpg",
        type: "shape1",
        linkedin: "https://www.linkedin.com/in/om-vyas-9547552a2/",
        x: "https://x.com/er_vyas_om"
    },
    {
        name: "Hemanshu Sojitra",
        role: "TechnoLab Co-Lead",
        img: "/images/t4.jpg",
        hoverImg: "/images/t4h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/hemanshu-sojitra/",
        x: "https://x.com/Hemanshu_85"
    },
    {
        name: "Ilesha Srivastava",
        role: "Designing Manager",
        img: "/images/t5.jpg",
        hoverImg: "/images/t5h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/ilesha-srivastava/",
        x: "https://x.com/ile_srivastava"
    },
    {
        name: "Aaliya Padaria",
        role: "Marketing Manager",
        img: "/images/t6.jpg",
        hoverImg: "/images/t6h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/aaliya-padaria-ba8959329/",
        x: "https://x.com/AaliyaPadaria"
    },
    {
        name: "Jeetsingh Bhadauria",
        role: "Out-Reach Manager",
        img: "/images/t3.jpg",
        hoverImg: "/images/t3h.jpg",
        type: "shape3",
        linkedin: "https://www.linkedin.com/in/jeet0814/",
        x: "https://x.com/JeetsinghBhada1"
    },
    {
        name: "Moin Khokhar",
        role: "Technical manager",
        img: "/images/t2.jpg",
        hoverImg: "/images/t2h.jpg",
        type: "shape2",
        linkedin: "https://www.linkedin.com/in/moinkhokhar/",
        x: "https://x.com/MoinKhokhar09"
    }


];

function Team() {
    const [showAll, setShowAll] = useState(false);

    const visibleTeam = showAll ? team : team.slice(0, 2);

    return (
        <section className="team-section" id="team">

            <h1 className="team-title">
                Meet the creative minds <br />
                <span>behind our success</span>
            </h1>

            <div className="team-container">
                {visibleTeam.map((member, index) => (
                    <div
                        className="team-card animate"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                        key={index}
                    >

                        <div className={`img-box ${member.type}`}>
                            <img src={member.img} alt="" className="main-img" />
                            <img src={member.hoverImg} alt="" className="hover-img" />
                        </div>

                        <h3>{member.name}</h3>
                        <p>{member.role}</p><br />

                        <div className="social-links">
                            <a href={member.x} target="_blank">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a href={member.linkedin} target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>

                    </div>
                ))}
            </div>

            {/* 🔥 BUTTON */}
            <button
                className="view-btn"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "View Less" : "View All"}
            </button>

        </section>
    );
}

export default Team;
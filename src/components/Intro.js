import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const team = [
    {
        name: "Om Vyas",
        role: "GDGoC Organizer",
        img: "/images/t1.jpg",
        hoverImg: "/images/t1h.jpg",
        type: "shape1",
        linkedin: "https://www.linkedin.com/in/om-vyas-9547552a2/",
        x : "https://x.com/er_vyas_om"
    },
    {
        name: "Hemanshu Sojitra",
        role: "Event Manager",
        img: "/images/t4.jpg",
        hoverImg: "/images/t4h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/hemanshu-sojitra/",
        x : "https://x.com/Hemanshu_85"
    },
    {
        name: "Ilesha Srivastava",
        role: "Designing Manager",
        img: "/images/t5.jpg",
        hoverImg: "/images/t5h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/om-vyas-9547552a2/",
        x : "https://x.com/er_vyas_om"
    },
    {
        name: "Aaliya Padaria",
        role: "Marketing Manager",
        img: "/images/t6.jpg",
        hoverImg: "/images/t6h.jpg",
        type: "shape4",
        linkedin: "https://www.linkedin.com/in/",
        x : "https://x.com/"
    },
    {
        name: "Jeetsingh Bhadauria",    
        role: "Out-Reach Manager",
        img: "/images/t3.jpg",
        hoverImg: "/images/t3h.jpg",
        type: "shape3",
        linkedin: "https://www.linkedin.com/in/",
        x : "https://x.com/"
    },
    {
        name: "Moin Khokhar",
        role: "Technical manager",
        img: "/images/t2.jpg",
        hoverImg: "/images/t2h.jpg",
        type: "shape2",
        linkedin: "https://www.linkedin.com/in/",
        x : "https://x.com/"
    }


];

function Team() {
    return (
        <section className="team-section" id="team">

            <h1 className="team-title">
                Meet the creative minds <br />
                <span>behind our success</span>
            </h1>

            <div className="team-container">
                {team.map((member, index) => (
                    <div className="team-card" key={index}>

                        <div className={`img-box ${member.type}`}>
                            <img src={member.img} alt="" className="main-img" />
                            <img src={member.hoverImg} alt="" className="hover-img" />
                        </div>

                        <h3>{member.name}</h3>
                        <p>{member.role}</p><br></br>
                        <div className="social-links">
                        <a href={member.x} style={{padding:""}} target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href={member.linkedin} style={{padding:""}} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Team;
import React from "react";
import { ReactTyped } from "react-typed";
import ColorBends from './ColorBends';
import "./Home.css";
import "./global.css";

function Home() {

  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <div className="global-bg">
        <ColorBends
          colors={["#2563eb", "#2268ff", "#55555591"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color="#2563eb"
        />
      </div>
      <section className="home-section" id="home">
        <div className="home-container">
          {/* LEFT CONTENT */}
          <div className="home-left">
            <div>
              <h1>
                <ReactTyped
                  strings={["For the ones who’d rather build than just attend."]}
                  typeSpeed={40}
                  backSpeed={0}
                  showCursor={true}
                />
              </h1>
            </div>

            <h1>About Us</h1>

            <p>
              TechloLab Club Powered By TECHEZZZZ isn’t your typical college club with boring sessions and forced enthusiasm,
              This is a community where everyone grows together - not just in skills, but in mindset.
            </p>

            <p>
              Here, seniors guide, juniors contribute, and everyone builds something that actually matters.
              Projects, ideas, late-night discussions, and a team that’s got your back - it’s all part of the vibe.
            </p>

            <p>
              Because here, we don’t just attend.
              We create, collaborate, and level up - together.
            </p>


          </div>

          {/* RIGHT IMAGES */}
          <div className="home-right">

            <img src="/images/img5.jpg" className="img img1" />
            <img src="/images/img2.jpg" className="img img2" />
            <img src="/images/img1.jpg" className="img img3" />
            <img src="/images/img4.jpg" className="img img4" />
            <img src="/images/img5.jpg" className="img img5" />
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
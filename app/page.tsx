"use client";

import { useEffect, useRef, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HomePage() {
  const [clock, setClock] = useState("--:--:--");
  const [day, setDay] = useState(217);
  const [stake0, setStake0] = useState(847);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const clockId = setInterval(tick, 1000);
    const dayId = setInterval(() => {
      if (Math.random() < 0.3) setDay((v) => v + 1);
    }, 4000);
    const stakeId = setInterval(() => setStake0((v) => v + 1), 3500);
    const marqueeId = setInterval(() => {
      if (Math.random() < 0.4 && marqueeRef.current) {
        const el = marqueeRef.current;
        el.classList.add("flash");
        setTimeout(() => el.classList.remove("flash"), 300);
      }
    }, 5000);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      clearInterval(clockId);
      clearInterval(dayId);
      clearInterval(stakeId);
      clearInterval(marqueeId);
      io.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="top-bar">
        <span>
          <span className="pulse-dot" />
          EMERGENCY BROADCAST &middot; DAY {day} OF THE STANDOFF &middot; RESPONSE RECEIVED: &ldquo;NUH UH&rdquo;
        </span>
        <span>
          FILE No.&nbsp;BLK-2026-001 &middot; ESCALATION LEVEL: ELEVATED &middot; {clock}
        </span>
      </div>

      <div className="breaking-banner">
        <span className="tag">⚡ Breaking Development</span>
        <span className="text">
          Subject has officially responded to the campaign &middot; Full transcript entered into evidence below &middot; Coalition convening emergency session
        </span>
        <span className="time-stamp">7:14 PM &middot; Today</span>
      </div>

      <nav className="nav">
        <div className="logo">
          <span className="seal">B</span>
          <span>Mu Eta Chapter of Phi Mu Alpha</span>
        </div>
        <ul>
          <li><a href="#stakes" onClick={(e) => { e.preventDefault(); scrollTo("stakes")(); }}>The Stakes</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo("testimonials")(); }}>Witnesses</a></li>
          <li><a href="#plan" onClick={(e) => { e.preventDefault(); scrollTo("plan")(); }}>The Plan</a></li>
          <li><a href="#consequences" onClick={(e) => { e.preventDefault(); scrollTo("consequences")(); }}>Or Else</a></li>
        </ul>
        <button className="cta" onClick={scrollTo("final")}>Schedule Blake</button>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="star">✦</span> MU ETA CHAPTER &middot; PHI MU ALPHA &middot; OFFICIAL COMMUNIQUE
            </span>
            <h1 className="hero-title">
              Blake,<br />
              <span className="italic">it&apos;s time to</span><br />
              make the <span className="red wobble">appointment.</span>
            </h1>
            <p className="hero-sub">
              It has been an <em>unreasonable</em> amount of time. We&apos;ve asked nicely. We&apos;ve asked sweetly. We&apos;ve left voicemails. We&apos;ve @&apos;d you in the chapter Discord. We pinged you. You saw the ping. We know you saw the ping. We built a website. Blake has now seen the website. Blake&apos;s official response to the website was <em>&ldquo;Nuh uh.&rdquo;</em> We have entered the next phase. This is the brothers of Mu Eta Chapter of Phi Mu Alpha, your chapter, the one you are president of, united in a single, simple demand. <strong>Book the visit.</strong>
            </p>
            <div className="cta-row">
              <button className="btn-primary" onClick={scrollTo("final")}>
                I&apos;ll Book It Now
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
              </button>
              <button className="btn-ghost" onClick={scrollTo("stakes")}>See The Stakes</button>
            </div>
          </div>

          <div className="blake-card">
            <div className="photo">
              <img
                src="/blake.png"
                alt="Blake, subject of the campaign"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="meta">
              <span>SUBJECT &middot; BLAKE</span>
              <span className="red">STATUS: UNSEEN BY DOCTOR</span>
            </div>
            <div className="stamp">Must<br />See<br />Doctor</div>
          </div>
        </div>
      </section>

      <div className="exhibit-section">
        <div className="exhibit-inner">
          <div className="exhibit-copy">
            <div className="exhibit-label">
              <span className="num">!</span> New Evidence &middot; Entered Into Record &middot; 7:14 PM Today
            </div>
            <h2>He said <span className="red italic">&ldquo;Nuh uh.&rdquo;</span></h2>
            <p>
              We want to be very clear about what has just occurred. The coalition deployed a full public information campaign. The brothers assembled. Jay&apos;s mom weighed in. A <em>website was built.</em> And Blake&apos;s official, on-record, timestamped response was: &ldquo;Nuh uh.&rdquo;
            </p>
            <p style={{ marginTop: 16 }}>
              This message has been preserved, screenshotted, forwarded to the Discord, and is now formally entered as <strong>Exhibit A</strong> in the ongoing proceedings. The coalition notes that &ldquo;Nuh uh&rdquo; is not a medical diagnosis. &ldquo;Nuh uh&rdquo; does not constitute a scheduled appointment. &ldquo;Nuh uh&rdquo; has, if anything, <em>strengthened our resolve.</em>
            </p>
          </div>
          <div className="discord-wrap reveal">
            <div className="exhibit-stamp">Exhibit A</div>
            <div className="discord-card">
              <div className="discord-header"># mu-eta-general &nbsp;&middot;&nbsp; Phi Mu Alpha Sinfonia</div>
              <div className="discord-msg">
                <div className="discord-avatar"><div className="avatar-ph">🎺</div></div>
                <div className="discord-body">
                  <div className="discord-name-row">
                    <span className="discord-name">Blake Barnes</span>
                    <span className="discord-ts">Today at 7:14 PM</span>
                  </div>
                  <span className="discord-text"><span className="discord-highlight">Nuh uh</span></span>
                </div>
              </div>
              <div className="discord-footnote">
                <span>Source: #mu-eta-general &nbsp;&middot;&nbsp; seen by all 23 members</span>
                <span className="admitted">Admitted: this session</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-track">
          <span>
            OR ELSE <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> <span className="ghost">OR ELSE</span> <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> <span className="ghost">OR ELSE</span> <span className="dot">✦</span>
          </span>
          <span>
            OR ELSE <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> <span className="ghost">OR ELSE</span> <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> OR ELSE <span className="dot">✦</span> <span className="ghost">OR ELSE</span> <span className="dot">✦</span>
          </span>
        </div>
      </div>

      <section id="stakes" className="stakes-section">
        <div className="container">
          <div className="section-label">
            <span className="num">01</span> The Stakes <span className="line" /> What Has Already Happened
          </div>
          <h2 className="section-title reveal">Every day Blake waits, <span className="italic">things get weirder.</span></h2>
          <p className="hero-sub reveal" style={{ color: "rgba(242,233,213,0.75)", maxWidth: "60ch" }}>
            Independently verified by a panel of three friends and a group chat called &ldquo;Blake&apos;s Knee Situation 2026&rdquo;. The numbers do not lie. The numbers are, in fact, lying flat on the couch right now.
          </p>

          <div className="stakes-grid">
            <div className="stake-card reveal">
              <div className="stake-num">{stake0}</div>
              <div className="stake-title">Days Since<br />&ldquo;I&apos;ll Call Tomorrow&rdquo;</div>
              <div className="stake-body">
                Most recently uttered while eating a cold slice of pizza standing up over the sink. Tomorrow has not come. Tomorrow is, statistically, beginning to suspect it was lied to.
              </div>
              <div className="counter"><span className="live-dot" />Live count &middot; auto-incrementing</div>
            </div>
            <div className="stake-card reveal">
              <div className="stake-num">∞</div>
              <div className="stake-title">Friends Worrying<br />In Silence</div>
              <div className="stake-body">
                A non-trivial fraction now begin every brunch with &ldquo;so, has Blake&hellip;?&rdquo; before trailing off and ordering a second coffee. We are tired. The brunches are tired. The coffee is tired.
              </div>
              <div className="counter"><span className="live-dot" />Statistically significant</div>
            </div>
            <div className="stake-card reveal">
              <div className="stake-num">1</div>
              <div className="stake-title">Mysterious<br />&ldquo;Thing&rdquo;</div>
              <div className="stake-body">
                Blake has referenced &ldquo;the thing on my [REDACTED]&rdquo; exactly seven times this quarter and refuses to clarify. We are reasonably sure it is nothing. We are unreasonably sure it is something.
              </div>
              <div className="counter"><span className="live-dot" />Specialist required</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="section-label">
            <span className="num">02</span> The Witnesses <span className="line" /> Endorsed by Concerned Parties
          </div>
          <h2 className="section-title reveal">Even <span className="italic">Jay&apos;s mom</span> is on the record.</h2>
          <p className="hero-sub reveal" style={{ maxWidth: "62ch" }}>
            A panel of medical professionals, the brothers of Mu Eta, and one very real mom have weighed in. All quotes lightly paraphrased. All concern: 100% authentic.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">I have not personally examined Blake, but I am willing to, in this hypothetical scenario, say Blake should go see a doctor soon.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Dr. James Kos, MD</div>
                  <div className="title">Greek Doctor</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-r reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">I did not raise Blake, but I have heard about Blake, and I am telling you right now, as a mother, go to the doctor. I will not elaborate further. Go.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Jay&apos;s Mom</div>
                  <div className="title">Concerned by Proxy &middot; Very Serious</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★☆</div>
              <div className="quote">Four stars because the clinic gives you a sticker. The fifth star is contingent on Blake actually arriving at the clinic to receive said sticker.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">A Brother of Mu Eta</div>
                  <div className="title">Chapter Brother</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-r reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">Please, I am not Blake, please stop asking me to go to the doctor. I am, however, Blake&apos;s friend, and I am begging you, for the love of all that is good and decent, make the appointment.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Joe P.</div>
                  <div className="title">Rush Aficionado</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">Blake, if you make a doctor appointment, you might actually win poker night. Like me. The correlation between your medical neglect and your inability to read a flop is, at this point, statistically undeniable.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">John</div>
                  <div className="title">The Goose</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-r reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">From a purely clinical standpoint, I have no jurisdiction here. From a brotherly standpoint, however, I am prepared to drive Blake to the appointment, sit in the waiting room, and kiss his cheek.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Alex</div>
                  <div className="title">Designated Driver &middot; Volunteer &middot; unc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="plan-section">
        <div className="container">
          <div className="section-label">
            <span className="num">03</span> The Plan <span className="line" /> So Easy It&apos;s Almost Insulting
          </div>
          <h2 className="section-title reveal">Five steps. <span className="italic">No catch.</span></h2>
          <p className="hero-sub reveal" style={{ maxWidth: "62ch" }}>
            We&apos;ve broken it down for you, Blake. Each step takes less time than that TikTok loop you watched eleven times last night. We checked. We were on the couch next to you.
          </p>

          <div className="plan-steps">
            <PlanStep num="01" title="Locate Your Phone" difficulty={1}>
              It&apos;s right there. <em>Right there.</em> You are reading this on it. Excellent. Step one: complete. Look at you go.
            </PlanStep>
            <PlanStep num="02" title="Open The Contacts App" difficulty={1}>
              Or use your insurance website. Or that little card in your wallet. Or just type &ldquo;doctor near me&rdquo;. The internet has been preparing for this exact moment for years.
            </PlanStep>
            <PlanStep num="03" title="Make The Call. Or Click. Or Tap." difficulty={2}>
              Pick whichever interaction modality terrifies you least. We accept all of them. <em>The doctor will accept all of them.</em> Communication has come a long way and so have you.
            </PlanStep>
            <PlanStep num="04" title="Show Up. With Your Body. Inside The Building." difficulty={4}>
              We acknowledge this is the hard one. Pack a snack. Wear the pants with the deep pockets. Bring headphones. <em>Crucially:</em> arrive in person, in physical 3D space, as a complete unit.
            </PlanStep>
            <PlanStep num="05" title="Tell Us You Did It" difficulty={1}>
              Text the chapter Discord. Send a single thumbs-up. We will throw, and this is a promise, a respectful, low-key, but genuinely heartfelt little party. There will be a cake. We have already picked out the cake.
            </PlanStep>
          </div>
        </div>
      </section>

      <section id="consequences" className="consequences-section">
        <div className="container">
          <div className="section-label">
            <span className="num">04</span> Or Else <span className="line" /> Consequences (Vague)
          </div>
          <div className="classified-stamp">⚠ Classified Briefing</div>
          <h2 className="section-title reveal">If Blake does not comply, <span className="italic">the following will occur:</span></h2>
          <p className="hero-sub reveal" style={{ color: "rgba(242,233,213,0.78)", maxWidth: "60ch" }}>
            We are legally and emotionally unable to disclose the specifics. But trust us, and we cannot stress this part enough, it is something. The brothers have convened. The brothers have voted. The motion passed.
          </p>

          <div className="redacted-doc reveal">
            <div className="header">
              <span>MEMORANDUM &middot; INTERNAL USE ONLY</span>
              <span>CLEARANCE: DISCORD</span>
            </div>
            <p>
              RE: Plan of Action Pursuant to Blake&apos;s Continued <span className="black">aggressive procrastination regarding</span> medical neglect. <strong>ADDENDUM:</strong> Subject has since responded to official coalition communications with the phrase <span className="black">&ldquo;Nuh uh&rdquo;</span>, which has been admitted as Exhibit A and has elevated this matter to Priority Status.
            </p>
            <p>
              Should the Subject (&ldquo;Blake&rdquo;) fail to attend an appointment by the designated deadline, the Coalition is authorized to initiate <span className="black">a slow-burn, deeply uncomfortable</span> response, which may include but is not limited to: <span className="black">an intervention involving baked goods</span>, <span className="black">passive-aggressive Spotify playlist</span>, and, in worst-case scenarios, <span className="black">the silent treatment from the houseplant</span>.
            </p>
            <p>
              Further escalation may involve <span className="black">a heartfelt letter read aloud at brunch</span>, the public deployment of <span className="black">embarrassing childhood photos</span>, the controlled release of <span className="black">certain </span>photographs <span className="black">obtained during the trip to that one </span>island,<span className="black"> the name of which we are </span><span className="black"> contractually unable to print here</span>, and ultimately <span className="black">[redacted, Appendix C, page 47]</span>.
            </p>
            <p>The Coalition wishes to be clear: this is not a threat. <em>It is a promise.</em> A very loving, deeply concerned, slightly unhinged promise.</p>
            <div className="footer">
              <span>SIGNED &middot; MU ETA CHAPTER, PHI MU ALPHA</span>
              <span>FILE BLK-2026-001 &middot; PG 1 OF ∞</span>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-label">
            <span className="num">05</span> The Aftermath <span className="line" /> A Day In The Life, Post-Appointment
          </div>
          <h2 className="section-title reveal">Imagine, <span className="italic">if you will,</span> a Blake who has been to the doctor.</h2>

          <div className="timeline">
            <div className="tl-step active reveal">
              <div className="time">T + 0 MIN</div>
              <div className="marker" />
              <div className="label">The Sticker</div>
              <div className="desc">A small adhesive triumph is applied to Blake&apos;s shirt. Blake is now legally a hero. Photo evidence required.</div>
            </div>
            <div className="tl-step reveal">
              <div className="time">T + 2 HRS</div>
              <div className="marker" />
              <div className="label">The Smug</div>
              <div className="desc">An unmistakable aura of accomplishment radiates from Blake at approximately 47 lumens. Strangers nod respectfully on the street.</div>
            </div>
            <div className="tl-step reveal">
              <div className="time">T + 1 DAY</div>
              <div className="marker" />
              <div className="label">The Discord</div>
              <div className="desc">A wave of 🎉 emojis. Three people cry. One person sends a screenshot to their own Discord. The cycle of healing continues.</div>
            </div>
            <div className="tl-step reveal">
              <div className="time">T + 1 WEEK</div>
              <div className="marker" />
              <div className="label">The Vibes</div>
              <div className="desc">Improved. Measurably. We don&apos;t make the rules. Blake is now thriving and we are normal about it. Mostly.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="final" className="final-cta-section">
        <div style={{ position: "relative" }}>
          <h2>
            <span className="glitch" data-text="CALL.">CALL.</span>{" "}
            <span className="glitch" data-text="THE.">THE.</span>{" "}
            <span className="glitch" data-text="DOCTOR.">DOCTOR.</span>
          </h2>
          <div style={{ position: "relative", fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic", fontSize: 28, opacity: 0.9, marginBottom: 12 }}>
            There is, genuinely, no remaining reason not to.
          </div>
          <button className="phone-num" onClick={() => alert("You did it. You actually clicked it. Now do the real thing. Love you.")}>
            📞 1-800-BLAKE-GO
          </button>
          <div className="micro">By scheduling, you agree to receive one (1) celebratory cake.</div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div>
            <h4>The Coalition</h4>
            <p>Mu Eta Chapter</p>
            <p>Phi Mu Alpha Sinfonia</p>
            <p>The Brothers (All of Them)</p>
            <p>Jay&apos;s Mom</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Insurance Card &middot; TBD</p>
            <p>Doctor&apos;s Number &middot; TBD</p>
            <p>Excuses &middot; None Left</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>blake@please.health</p>
            <p>1-800-BLAKE-GO</p>
            <p>Or just respond to the ping</p>
            <p>We know you saw it</p>
          </div>
          <div>
            <h4>Coalition Hours</h4>
            <p>24 / 7 / 365</p>
            <p>Especially 3am</p>
            <p>We Will Find You</p>
          </div>
          <div className="disclaimer">
            This is a satirical campaign created with love by the brothers of Mu Eta Chapter of Phi Mu Alpha, of which Blake is chapter president and has been repeatedly @&apos;d on Discord. No actual Blakes were threatened in the making of this site. All testimonials are paraphrased. All statistics are vibes-based. All concern is, however, completely sincere. If you, or a Blake you love, have been putting off a routine appointment, this is your sign. 2026 Mu Eta Chapter, Phi Mu Alpha.
          </div>
        </div>
      </footer>
    </>
  );
}

function PlanStep({
  num,
  title,
  difficulty,
  children,
}: {
  num: string;
  title: string;
  difficulty: number;
  children: React.ReactNode;
}) {
  return (
    <div className="plan-step reveal">
      <div className="num">{num}</div>
      <div className="body">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      <div className="difficulty">
        DIFFICULTY
        <div className="bars">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={i < difficulty ? "bar on" : "bar"} />
          ))}
        </div>
      </div>
    </div>
  );
}

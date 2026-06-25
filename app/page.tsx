"use client";

import { useEffect, useRef, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HomePage() {
  const [clock, setClock] = useState("--:--:--");
  const [day, setDay] = useState(1);
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
          VICTORY BULLETIN &middot; HE BOOKED IT &middot; HE WENT &middot; DAY {day} OF BLAKE BEING A HERO
        </span>
        <span>
          FILE No.&nbsp;BLK-2026-001 &middot; STATUS: CLOSED (TRIUMPHANT) &middot; {clock}
        </span>
      </div>

      <div className="breaking-banner">
        <span className="tag">🎉 Breaking Development</span>
        <span className="text">
          Subject has ATTENDED THE DOCTOR &middot; He went &middot; in person &middot; with his body &middot; The coalition has, against all odds, <em>achieved its purpose</em>
        </span>
        <span className="time-stamp">Confirmed &middot; Today</span>
      </div>

      <nav className="nav">
        <div className="logo">
          <span className="seal">B</span>
          <span>Mu Eta Chapter of Phi Mu Alpha</span>
        </div>
        <ul>
          <li><a href="#stakes" onClick={(e) => { e.preventDefault(); scrollTo("stakes")(); }}>The Scoreboard</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo("testimonials")(); }}>Witnesses</a></li>
          <li><a href="#plan" onClick={(e) => { e.preventDefault(); scrollTo("plan")(); }}>Case Closed</a></li>
          <li><a href="#consequences" onClick={(e) => { e.preventDefault(); scrollTo("consequences")(); }}>The Cake</a></li>
        </ul>
        <button className="cta" onClick={scrollTo("final")}>Celebrate Blake</button>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="star">✦</span> MU ETA CHAPTER &middot; PHI MU ALPHA &middot; MISSION ACCOMPLISHED
            </span>
            <h1 className="hero-title">
              Blake,<br />
              <span className="italic">you actually</span><br />
              went to the <span className="red wobble">doctor.</span>
            </h1>
            <p className="hero-sub">
              It had been an <em>unreasonable</em> amount of time. We asked nicely. We asked sweetly. We built a website. Your official, on-record response was <em>&ldquo;Nuh uh.&rdquo;</em> And then &mdash; against all odds, all precedent, and his own stated position &mdash; Blake <strong>booked the appointment.</strong> And then he did the thing we genuinely did not believe he would do: he couldn&apos;t hear out of his right ear, so he <strong>actually went.</strong> In person. With his body. The brothers of Mu Eta Chapter of Phi Mu Alpha are, at this time, <em>weeping openly.</em>
            </p>
            <div className="cta-row">
              <button className="btn-primary" onClick={scrollTo("final")}>
                See How It Ended
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
              </button>
              <button className="btn-ghost" onClick={scrollTo("stakes")}>He Really Did It</button>
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
              <span className="good">SEEN BY DOCTOR ✓</span>
            </div>
            <div className="stamp">He<br />Went</div>
          </div>
        </div>
      </section>

      <div className="exhibit-section">
        <div className="exhibit-inner">
          <div className="exhibit-copy">
            <div className="exhibit-label">
              <span className="num">✓</span> Final Evidence &middot; Case Closed &middot; Today
            </div>
            <h2>He said <span className="red italic">&ldquo;Nuh uh.&rdquo;</span> Then he booked it. <span className="italic">Then he went.</span></h2>
            <p>
              For the record, we must acknowledge the dark days. The coalition deployed a full public information campaign. A <em>website was built.</em> And Blake&apos;s official, on-record, timestamped response was: &ldquo;Nuh uh.&rdquo; That message remains entered as <strong>Exhibit A.</strong> Then, at 1:59 PM, the Subject posted four words that reduced multiple brothers to tears &mdash; <em>&ldquo;Made a doctors appointment&rdquo;</em> &mdash; admitted as <strong>Exhibit B.</strong>
            </p>
            <p style={{ marginTop: 16 }}>
              And then came the moment no one in the chapter dared predict. The Subject reported that he <em>couldn&apos;t hear out of his right ear</em> &mdash; and rather than ignore it for nine months, as is tradition, he posted three of the most beautiful words ever entered into this record: <strong>&ldquo;Went to the doctor.&rdquo;</strong> Admitted as <strong>Exhibit C.</strong> The matter is hereby <em>closed, in triumph.</em>
            </p>
          </div>
          <div className="exhibit-cards">
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
                  <span>Source: #mu-eta-general &nbsp;&middot;&nbsp; the dark days</span>
                  <span className="admitted">Admitted: this session</span>
                </div>
              </div>
            </div>
            <div className="discord-wrap reveal">
              <div className="exhibit-stamp b">Exhibit B</div>
              <div className="discord-card">
                <div className="discord-header"># mu-eta-general &nbsp;&middot;&nbsp; Phi Mu Alpha Sinfonia</div>
                <div className="discord-msg">
                  <div className="discord-avatar"><div className="avatar-ph">🎺</div></div>
                  <div className="discord-body">
                    <div className="discord-name-row">
                      <span className="discord-name">Blake Barnes</span>
                      <span className="discord-ts">Today at 1:59 PM</span>
                    </div>
                    <span className="discord-text"><span className="discord-highlight good">Made a doctors appointment</span></span>
                  </div>
                </div>
                <div className="discord-reactions">
                  <span className="reaction-pill">😄 <span className="count">7</span></span>
                  <span className="reaction-pill">🎉 <span className="count">5</span></span>
                </div>
                <div className="discord-footnote">
                  <span>Source: #mu-eta-general &nbsp;&middot;&nbsp; Phase 1 complete</span>
                  <span className="admitted good">Admitted: this session</span>
                </div>
              </div>
            </div>
            <div className="discord-wrap reveal">
              <div className="exhibit-stamp b">Exhibit C</div>
              <div className="discord-card">
                <div className="discord-header"># mu-eta-general &nbsp;&middot;&nbsp; Phi Mu Alpha Sinfonia</div>
                <div className="discord-msg">
                  <div className="discord-avatar"><div className="avatar-ph">🎺</div></div>
                  <div className="discord-body">
                    <div className="discord-name-row">
                      <span className="discord-name">Blake Barnes</span>
                      <span className="discord-ts">Today</span>
                    </div>
                    <span className="discord-text"><span className="discord-highlight good">Couldn&apos;t hear out of my right ear today</span></span>
                    <br />
                    <span className="discord-text"><span className="discord-highlight good">Went to the doctor</span></span>
                  </div>
                </div>
                <div className="discord-footnote">
                  <span>Source: #mu-eta-general &nbsp;&middot;&nbsp; Phase 2 complete</span>
                  <span className="admitted good">He actually went</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-track">
          <span>
            HE WENT <span className="dot">✦</span> MISSION COMPLETE <span className="dot">✦</span> <span className="ghost">HE WENT</span> <span className="dot">✦</span> WE ARE SO BACK <span className="dot">✦</span> HE WENT <span className="dot">✦</span> <span className="ghost">MISSION COMPLETE</span> <span className="dot">✦</span>
          </span>
          <span>
            HE WENT <span className="dot">✦</span> MISSION COMPLETE <span className="dot">✦</span> <span className="ghost">HE WENT</span> <span className="dot">✦</span> WE ARE SO BACK <span className="dot">✦</span> HE WENT <span className="dot">✦</span> <span className="ghost">MISSION COMPLETE</span> <span className="dot">✦</span>
          </span>
        </div>
      </div>

      <section id="stakes" className="stakes-section">
        <div className="container">
          <div className="section-label">
            <span className="num">01</span> The Scoreboard <span className="line" /> What Has Already Happened
          </div>
          <h2 className="section-title reveal">Every metric just flipped, <span className="italic">in his favor.</span></h2>
          <p className="hero-sub reveal" style={{ color: "rgba(242,233,213,0.75)", maxWidth: "60ch" }}>
            Independently verified by a panel of three friends and a group chat formerly called &ldquo;Blake&apos;s Cough Situation 2026&rdquo;, recently renamed &ldquo;WE ARE SO BACK&rdquo;. The numbers do not lie. The numbers are, for once, deeply optimistic.
          </p>

          <div className="stakes-grid">
            <div className="stake-card reveal">
              <div className="stake-num">{stake0}</div>
              <div className="stake-title">Seconds Of<br />Collective Pride</div>
              <div className="stake-body">
                Accumulating in real time since the words &ldquo;Went to the doctor&rdquo; hit the channel. Every tick is another brother quietly tearing up. The number only goes up. So does the pride.
              </div>
              <div className="counter"><span className="live-dot" />Live count &middot; auto-incrementing</div>
            </div>
            <div className="stake-card reveal">
              <div className="stake-num">∞</div>
              <div className="stake-title">Friends Quietly<br />Proud</div>
              <div className="stake-body">
                A non-trivial fraction now begin every brunch with &ldquo;did you hear Blake&hellip;?&rdquo; before beaming and ordering a celebratory second coffee. We are relieved. The brunches are relieved. The coffee tastes better.
              </div>
              <div className="counter"><span className="live-dot" />Statistically significant</div>
            </div>
            <div className="stake-card reveal">
              <div className="stake-num">1</div>
              <div className="stake-title">Appointment<br />Attended</div>
              <div className="stake-body">
                Booked. Confirmed. And &mdash; crucially &mdash; attended. Blake walked in, in person, as a complete unit, because his right ear staged a quiet rebellion. The asterisk has been removed. There is no asterisk. <em>He went.</em>
              </div>
              <div className="counter"><span className="live-dot" />Mission complete</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="section-label">
            <span className="num">02</span> The Witnesses <span className="line" /> Endorsed by Concerned Parties
          </div>
          <h2 className="section-title reveal">Even <span className="italic">Jay&apos;s mom</span> is celebrating.</h2>
          <p className="hero-sub reveal" style={{ maxWidth: "62ch" }}>
            A panel of medical professionals, the brothers of Mu Eta, and one very real mom have weighed in on the news. All quotes lightly paraphrased. All pride: 100% authentic. All of them no longer nagging, because he actually went.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">I have not personally examined Blake, but I am told he booked an appointment AND attended it after losing hearing in his right ear. Clinically speaking, that is flawless execution. I could not have done it better myself.</div>
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
              <div className="quote">I did not raise Blake, but I have heard about Blake, and I am telling you right now, as a mother: he booked it, and then he went. He attended. I am vindicated. I am proud. I will not elaborate further. He went.</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Jay&apos;s Mom</div>
                  <div className="title">Concerned by Proxy &middot; Very Serious</div>
                </div>
              </div>
            </div>
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">I previously withheld the fifth star pending Blake&apos;s actual arrival at the clinic. He arrived. The fifth star is hereby awarded. The sticker was, by all accounts, received. The system works.</div>
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
              <div className="quote">Please, I am not Blake, please stop congratulating me on the appointment. I am, however, Blake&apos;s friend, and I am relieved to report that he has walked into the building. I am no longer begging. I am simply, finally, at peace.</div>
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
              <div className="quote">Blake went to the doctor and I am almost certain he will now win poker night. The correlation between his medical neglect and his inability to read a flop was statistically undeniable. He fixed the ear. He fixes the flop. Simple.</div>
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
              <div className="quote">Guys. I&apos;m genuinely overwhelmed. The campaign, the testimonials, a literal website, I had no idea you all cared this much about me booking my appointment. Truly, thank you, it means everything&hellip; wait. It&apos;s Blake&apos;s appointment? This is about Blake? Right. Yes. The Alex Kos Fallacy&hellip;</div>
              <div className="credit">
                <div className="avatar">PHOTO</div>
                <div>
                  <div className="name">Alex Kos</div>
                  <div className="title">Designated Driver &middot; Believed This Was About Him</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="plan-section">
        <div className="container">
          <div className="section-label">
            <span className="num">03</span> Case Closed <span className="line" /> All Five Steps, Done
          </div>
          <h2 className="section-title reveal">Every single step. <span className="italic">Complete.</span></h2>
          <p className="hero-sub reveal" style={{ maxWidth: "62ch" }}>
            Here&apos;s the beautiful part, Blake: you did all of it. The phone was located. The doctor was found. The call was made. The appointment was attended. And you even told us. There is nothing left on this list. We are framing the list.
          </p>

          <div className="plan-steps">
            <PlanStep num="01" title="Locate Your Phone" done>
              Done. You found it. You are, in fact, still holding it. A foundational triumph and the bedrock of everything that followed.
            </PlanStep>
            <PlanStep num="02" title="Find A Doctor" done>
              Done. A real clinic. A real number. Pulled from the insurance website, the little card, or simply &ldquo;doctor near me&rdquo;. The internet did its part. So did you.
            </PlanStep>
            <PlanStep num="03" title="Make The Call. Book The Visit." done>
              <em>Done.</em> The single most surprising development of the calendar year. At 1:59 PM, Blake booked the appointment. Historians will note the date.
            </PlanStep>
            <PlanStep num="04" title="Show Up. With Your Body. Inside The Building." done>
              <em>Done.</em> The big one. The hard one. He showed up, in person, in physical 3D space, as a complete unit, because his right ear staged a rebellion and Blake, heroically, responded. We are still not over it.
            </PlanStep>
            <PlanStep num="05" title="Tell Us You Went" done>
              Done. He told us. <em>&ldquo;Went to the doctor.&rdquo;</em> Three words. We are framing them. The cake has been ordered. We always said there would be a cake.
            </PlanStep>
          </div>
        </div>
      </section>

      <section id="consequences" className="consequences-section">
        <div className="container">
          <div className="section-label">
            <span className="num">04</span> The Fine Print <span className="line" /> Terms Of Celebration
          </div>
          <div className="classified-stamp">🎉 Celebration Order</div>
          <h2 className="section-title reveal">Blake attended. <span className="italic">The following is now in effect:</span></h2>
          <p className="hero-sub reveal" style={{ color: "rgba(242,233,213,0.78)", maxWidth: "60ch" }}>
            We are legally and emotionally unable to fully disclose the specifics. But trust us, and we cannot stress this part enough, it involves cake. The brothers have convened. The brothers have voted. The motion passed unanimously. The condition has been met.
          </p>

          <div className="redacted-doc reveal">
            <div className="header">
              <span>MEMORANDUM &middot; INTERNAL USE ONLY</span>
              <span>CLEARANCE: DISCORD</span>
            </div>
            <p>
              RE: Plan of Action Pursuant to Blake&apos;s <span className="black">long-awaited and frankly heroic</span> medical follow-through. <strong>ADDENDUM:</strong> Subject booked the appointment (<span className="black">Exhibit B</span>) and subsequently <span className="black">attended it</span> after reporting an inability to hear out of his right ear (<span className="black">Exhibit C: &ldquo;Went to the doctor&rdquo;</span>), elevating this matter to Mission Accomplished.
            </p>
            <p>
              Confirmation having been received that the Subject (&ldquo;Blake&rdquo;) has <em>attended</em> the booked appointment, the Coalition is hereby authorized to initiate <span className="black">a warm, deeply heartfelt</span> response, which may include but is not limited to: <span className="black">an intervention involving baked goods</span>, <span className="black">a celebratory Spotify playlist</span>, and, in best-case scenarios, <span className="black">a respectful nod from the houseplant</span>.
            </p>
            <p>
              Further celebration may involve <span className="black">a heartfelt letter read aloud at brunch</span>, the public deployment of <span className="black">flattering childhood photos</span>, the controlled release of <span className="black">certain </span>photographs <span className="black">obtained during the trip to that one </span>island,<span className="black"> the name of which we are </span><span className="black"> contractually unable to print here</span>, and ultimately <span className="black">[redacted, Appendix C, page 47]</span>.
            </p>
            <p>The Coalition wishes to be clear: this was never a threat. <em>It was a promise.</em> A very loving, deeply proud, slightly unhinged promise. He showed up. The promise is hereby activated. Bring the cake.</p>
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
            <span className="num">05</span> The Aftermath <span className="line" /> A Day In The Life, Post-Attendance
          </div>
          <h2 className="section-title reveal">No need to imagine. <span className="italic">This is</span> a Blake who has gone.</h2>

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
            <span className="glitch" data-text="HE.">HE.</span>{" "}
            <span className="glitch" data-text="ACTUALLY.">ACTUALLY.</span>{" "}
            <span className="glitch" data-text="WENT.">WENT.</span>
          </h2>
          <div style={{ position: "relative", fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic", fontSize: 28, opacity: 0.9, marginBottom: 12 }}>
            He booked it. He went. There is, genuinely, nothing left to nag about. We are stunned.
          </div>
          <button className="phone-num" onClick={() => alert("He went. He actually went. The cake is real and it is coming. We are so proud of you, Blake. Love you.")}>
            📞 1-800-HE-WENT
          </button>
          <div className="micro">Cake status: ordered. He earned it. Every crumb.</div>
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
            <p>Insurance Card &middot; Located</p>
            <p>Doctor&apos;s Number &middot; Dialed</p>
            <p>Right Ear &middot; Examined</p>
            <p>Excuses &middot; None Left</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>blake@please.health</p>
            <p>1-800-HE-WENT</p>
            <p>He told us when he went</p>
            <p>The cake is en route</p>
          </div>
          <div>
            <h4>Coalition Hours</h4>
            <p>24 / 7 / 365</p>
            <p>Currently: Celebrating</p>
            <p>We Are So Back</p>
          </div>
          <div className="disclaimer">
            This is a satirical campaign created with love by the brothers of Mu Eta Chapter of Phi Mu Alpha, of which Blake is chapter president and has, at long last, both booked AND attended a doctor&apos;s appointment. No actual Blakes were threatened in the making of this site. All testimonials are paraphrased. All statistics are vibes-based. All pride is, however, completely sincere. Phase 1 (booking) and Phase 2 (actually going) are both complete; the case is closed in triumph. If you, or a Blake you love, have been putting off a routine appointment, let this be your sign &mdash; he couldn&apos;t hear out of his right ear and he still made it, so you can too. 2026 Mu Eta Chapter, Phi Mu Alpha.
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
  done,
  children,
}: {
  num: string;
  title: string;
  difficulty?: number;
  done?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={done ? "plan-step done reveal" : "plan-step reveal"}>
      <div className="num">{num}</div>
      <div className="body">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {done ? (
        <div className="done-badge"><span className="check">✓</span> Done</div>
      ) : (
        <div className="difficulty">
          DIFFICULTY
          <div className="bars">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={i < (difficulty ?? 0) ? "bar on" : "bar"} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

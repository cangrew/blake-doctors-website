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
          VICTORY BULLETIN &middot; THE APPOINTMENT IS BOOKED &middot; NOW: AWAITING ATTENDANCE (DAY {day})
        </span>
        <span>
          FILE No.&nbsp;BLK-2026-001 &middot; MILESTONE LEVEL: HISTORIC &middot; {clock}
        </span>
      </div>

      <div className="breaking-banner">
        <span className="tag">🎉 Breaking Development</span>
        <span className="text">
          Subject has BOOKED THE APPOINTMENT &middot; Confirmation entered into evidence below &middot; Coalition convening emergency <em>celebration</em>
        </span>
        <span className="time-stamp">1:59 PM &middot; Today</span>
      </div>

      <nav className="nav">
        <div className="logo">
          <span className="seal">B</span>
          <span>Mu Eta Chapter of Phi Mu Alpha</span>
        </div>
        <ul>
          <li><a href="#stakes" onClick={(e) => { e.preventDefault(); scrollTo("stakes")(); }}>The Scoreboard</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo("testimonials")(); }}>Witnesses</a></li>
          <li><a href="#plan" onClick={(e) => { e.preventDefault(); scrollTo("plan")(); }}>What&apos;s Left</a></li>
          <li><a href="#consequences" onClick={(e) => { e.preventDefault(); scrollTo("consequences")(); }}>The Cake Plan</a></li>
        </ul>
        <button className="cta" onClick={scrollTo("final")}>Celebrate Blake</button>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="star">✦</span> MU ETA CHAPTER &middot; PHI MU ALPHA &middot; VICTORY COMMUNIQUE
            </span>
            <h1 className="hero-title">
              Blake,<br />
              <span className="italic">you actually</span><br />
              made the <span className="red wobble">appointment.</span>
            </h1>
            <p className="hero-sub">
              It had been an <em>unreasonable</em> amount of time. We asked nicely. We asked sweetly. We left voicemails. We @&apos;d you in the chapter Discord. We built a website. You saw the website. Your official, on-record response to the website was <em>&ldquo;Nuh uh.&rdquo;</em> And then &mdash; reader &mdash; against all odds, all precedent, and his own stated position, Blake <strong>booked the appointment.</strong> The brothers of Mu Eta Chapter of Phi Mu Alpha are overjoyed. There remains, however, one (1) small outstanding matter: <em>he has not actually gone yet.</em>
            </p>
            <div className="cta-row">
              <button className="btn-primary" onClick={scrollTo("final")}>
                See The Aftermath
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
              </button>
              <button className="btn-ghost" onClick={scrollTo("stakes")}>But Did He Go?</button>
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
              <span className="red">BOOKED &middot; ATTENDANCE PENDING</span>
            </div>
            <div className="stamp">Appt<br />Booked</div>
          </div>
        </div>
      </section>

      <div className="exhibit-section">
        <div className="exhibit-inner">
          <div className="exhibit-copy">
            <div className="exhibit-label">
              <span className="num">✓</span> New Evidence &middot; Entered Into Record &middot; 1:59 PM Today
            </div>
            <h2>He said <span className="red italic">&ldquo;Nuh uh.&rdquo;</span> Then he booked it.</h2>
            <p>
              For the record, we must acknowledge the dark days. The coalition deployed a full public information campaign. The brothers assembled. Jay&apos;s mom weighed in. A <em>website was built.</em> And Blake&apos;s official, on-record, timestamped response was: &ldquo;Nuh uh.&rdquo; That message remains entered as <strong>Exhibit A.</strong>
            </p>
            <p style={{ marginTop: 16 }}>
              But &ldquo;Nuh uh&rdquo; is no longer the latest word on record. At <strong>1:59 PM today</strong>, in the very same channel, the Subject posted five words that have since reduced multiple brothers to tears: <em>&ldquo;Made a doctors appointment.&rdquo;</em> It is now <strong>Exhibit B.</strong> The coalition notes, with cautious joy, that a booked appointment is not yet an <em>attended</em> appointment &mdash; but it is, undeniably, the furthest we have ever gotten.
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
          </div>
        </div>
      </div>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-track">
          <span>
            HE BOOKED IT <span className="dot">✦</span> PHASE ONE <span className="dot">✦</span> <span className="ghost">HE BOOKED IT</span> <span className="dot">✦</span> NOW SHOW UP <span className="dot">✦</span> HE BOOKED IT <span className="dot">✦</span> <span className="ghost">PHASE ONE</span> <span className="dot">✦</span>
          </span>
          <span>
            HE BOOKED IT <span className="dot">✦</span> PHASE ONE <span className="dot">✦</span> <span className="ghost">HE BOOKED IT</span> <span className="dot">✦</span> NOW SHOW UP <span className="dot">✦</span> HE BOOKED IT <span className="dot">✦</span> <span className="ghost">PHASE ONE</span> <span className="dot">✦</span>
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
                Accumulating in real time since the words &ldquo;Made a doctors appointment&rdquo; hit the channel at 1:59 PM. Every tick is another brother quietly tearing up. The number only goes up. So does the pride.
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
              <div className="stake-title">Appointment<br />On The Calendar</div>
              <div className="stake-body">
                A real one. Booked. Confirmed. Sitting on an actual calendar with an actual date. One asterisk remains, and it is a big one: an appointment on the calendar is not the same as a Blake in the waiting room. <em>Yet.</em>
              </div>
              <div className="counter"><span className="live-dot" />Attendance pending</div>
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
            A panel of medical professionals, the brothers of Mu Eta, and one very real mom have weighed in on the news. All quotes lightly paraphrased. All pride: 100% authentic. All still gently reminding him he has to actually show up.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial tilt-l reveal">
              <div className="stars">★★★★★</div>
              <div className="quote">I have not personally examined Blake, but I understand he has booked an appointment, which is, clinically speaking, an excellent start. The next step, also clinically speaking, is to attend it.</div>
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
              <div className="quote">I did not raise Blake, but I have heard about Blake, and I am telling you right now, as a mother, I am proud of him for booking it. Now he goes. He attends. I will not elaborate further. He goes.</div>
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
              <div className="quote">Please, I am not Blake, please stop congratulating me on the appointment. I am, however, Blake&apos;s friend, and I am begging him, for the love of all that is good and decent, to now actually walk into the building.</div>
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
            <span className="num">03</span> What&apos;s Left <span className="line" /> Three Down, Two To Go
          </div>
          <h2 className="section-title reveal">Most of the steps are <span className="italic">already done.</span></h2>
          <p className="hero-sub reveal" style={{ maxWidth: "62ch" }}>
            Here&apos;s the beautiful part, Blake: you already did the hard cognitive labor. The phone was located. The call was made. The appointment exists. Only two steps remain &mdash; and one of them is just texting us.
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
            <PlanStep num="04" title="Show Up. With Your Body. Inside The Building." difficulty={4}>
              This is the one that&apos;s left. The big one. Pack a snack. Wear the pants with the deep pockets. Bring headphones. <em>Crucially:</em> arrive in person, in physical 3D space, as a complete unit, on the day you booked.
            </PlanStep>
            <PlanStep num="05" title="Tell Us You Went" difficulty={1}>
              After you attend, text the chapter Discord. Send a single thumbs-up. We will throw, and this is a promise, a respectful, low-key, but genuinely heartfelt little party. There will be a cake. We have already picked out the cake.
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
          <h2 className="section-title reveal">Once Blake attends, <span className="italic">the following will occur:</span></h2>
          <p className="hero-sub reveal" style={{ color: "rgba(242,233,213,0.78)", maxWidth: "60ch" }}>
            We are legally and emotionally unable to fully disclose the specifics. But trust us, and we cannot stress this part enough, it involves cake. The brothers have convened. The brothers have voted. The motion passed unanimously.
          </p>

          <div className="redacted-doc reveal">
            <div className="header">
              <span>MEMORANDUM &middot; INTERNAL USE ONLY</span>
              <span>CLEARANCE: DISCORD</span>
            </div>
            <p>
              RE: Plan of Action Pursuant to Blake&apos;s <span className="black">long-awaited and frankly heroic</span> medical follow-through. <strong>ADDENDUM:</strong> Subject responded to coalition communications at 1:59 PM with the phrase <span className="black">&ldquo;Made a doctors appointment&rdquo;</span>, which has been admitted as Exhibit B and has elevated this matter to Celebration Status.
            </p>
            <p>
              Upon confirmation that the Subject (&ldquo;Blake&rdquo;) has <em>attended</em> the booked appointment, the Coalition is authorized to initiate <span className="black">a warm, deeply heartfelt</span> response, which may include but is not limited to: <span className="black">an intervention involving baked goods</span>, <span className="black">a celebratory Spotify playlist</span>, and, in best-case scenarios, <span className="black">a respectful nod from the houseplant</span>.
            </p>
            <p>
              Further celebration may involve <span className="black">a heartfelt letter read aloud at brunch</span>, the public deployment of <span className="black">flattering childhood photos</span>, the controlled release of <span className="black">certain </span>photographs <span className="black">obtained during the trip to that one </span>island,<span className="black"> the name of which we are </span><span className="black"> contractually unable to print here</span>, and ultimately <span className="black">[redacted, Appendix C, page 47]</span>.
            </p>
            <p>The Coalition wishes to be clear: this is not a threat. <em>It is a promise.</em> A very loving, deeply proud, slightly unhinged promise. Contingent, naturally, on him actually showing up.</p>
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
          <h2 className="section-title reveal">Imagine, <span className="italic">if you will,</span> a Blake who has actually gone.</h2>

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
            <span className="glitch" data-text="GO.">GO.</span>{" "}
            <span className="glitch" data-text="TO.">TO.</span>{" "}
            <span className="glitch" data-text="THE.">THE.</span>{" "}
            <span className="glitch" data-text="APPOINTMENT.">APPOINTMENT.</span>
          </h2>
          <div style={{ position: "relative", fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic", fontSize: 28, opacity: 0.9, marginBottom: 12 }}>
            You booked it. Now all you have to do is be there. That&apos;s the whole thing.
          </div>
          <button className="phone-num" onClick={() => alert("You booked it. We are so proud. Now ATTEND the real thing. We'll be holding the cake. Love you.")}>
            📞 1-800-BLAKE-GO
          </button>
          <div className="micro">By attending, you agree to receive one (1) celebratory cake.</div>
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
            <p>Excuses &middot; None Left</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>blake@please.health</p>
            <p>1-800-BLAKE-GO</p>
            <p>Or just text us when you go</p>
            <p>We&apos;ll be waiting with cake</p>
          </div>
          <div>
            <h4>Coalition Hours</h4>
            <p>24 / 7 / 365</p>
            <p>Especially Appointment Day</p>
            <p>We Will Be Cheering</p>
          </div>
          <div className="disclaimer">
            This is a satirical campaign created with love by the brothers of Mu Eta Chapter of Phi Mu Alpha, of which Blake is chapter president and has, at long last, booked a doctor&apos;s appointment. No actual Blakes were threatened in the making of this site. All testimonials are paraphrased. All statistics are vibes-based. All pride is, however, completely sincere. Phase 1 (booking) is complete; Phase 2 (actually attending) is pending. If you, or a Blake you love, have booked a routine appointment but not yet gone, this is your sign to show up. 2026 Mu Eta Chapter, Phi Mu Alpha.
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

import Reveal from "@/components/common/Reveal";
import RichText from "@/components/common/RichText";
import SocialIcon from "@/components/common/SocialIcon";
import { profile } from "@/data/content";
import CodeCard from "./CodeCard";
import TypewriterRole from "./TypewriterRole";

export default function Hero() {
  return (
    <header className="wrap">
      <div className="hero-grid">
        <div>
          <Reveal className="status">
            <span className="dot" />
            {profile.status}
          </Reveal>

          <Reveal as="h1" delay={1}>
            {profile.firstName}
            <br />
            <span className="grad-text">{profile.lastName}</span>
          </Reveal>

          <Reveal className="hero-role" delay={2}>
            <TypewriterRole roles={profile.roles} />
          </Reveal>

          <Reveal as="p" className="hero-sub" delay={2}>
            <RichText segments={profile.heroSub} />
          </Reveal>

          <Reveal className="hero-cta" delay={3}>
            <a
              className="btn-primary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume ↓
            </a>
            {profile.socials.map((social) => {
              const isMail = social.href.startsWith("mailto:");
              return (
                <a
                  key={social.label}
                  className="icon-btn"
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  {...(isMail
                    ? {}
                    : { target: "_blank", rel: "noreferrer" })}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={3}>
          {profile.floatChips[0] && (
            <span className="float-chip chip-1">{profile.floatChips[0]}</span>
          )}
          <CodeCard card={profile.codeCard} />
          {profile.floatChips[1] && (
            <span className="float-chip chip-2">{profile.floatChips[1]}</span>
          )}
        </Reveal>
      </div>
    </header>
  );
}

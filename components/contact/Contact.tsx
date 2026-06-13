import Reveal from "@/components/common/Reveal";
import { contact } from "@/data/content";

export default function Contact() {
  const mailto = `mailto:${contact.email}`;

  return (
    <section id="contact" className="wrap">
      <Reveal className="contact-card">
        <h2>{contact.heading}</h2>
        <p>{contact.body}</p>
        <a className="btn-primary" href={mailto}>
          Get in touch →
        </a>
        <p className="contact-mail">
          or write to <a href={mailto}>{contact.email}</a>
        </p>
      </Reveal>
    </section>
  );
}

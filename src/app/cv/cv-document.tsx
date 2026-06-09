import { cvData } from "@/lib/cv-data"

/**
 * A single-column, plain-text CV rendered only when printing / saving to PDF.
 * It is hidden on screen (`hidden`) and revealed in print (`print:block`).
 * Styling lives in the `@media print` block of globals.css. Kept deliberately
 * simple — real selectable text, standard headings, no images or columns — so
 * applicant tracking systems (ATS) parse it cleanly.
 */
export default function CvDocument() {
  const { person } = cvData

  const contact = [
    { label: person.email, href: `mailto:${person.email}` },
    { label: person.location, href: null },
    { label: person.website.label, href: person.website.href },
    { label: person.github.label, href: person.github.href },
    { label: person.linkedin.label, href: person.linkedin.href },
  ]

  return (
    <article className="cv-document" aria-hidden="true">
      <header className="cv-doc-header">
        <h1>{person.name}</h1>
        <p className="cv-doc-title">{person.title}</p>
        <p className="cv-doc-contact">
          {contact.map((item) => (
            <span key={item.label}>
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </span>
          ))}
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <div className="cv-summary">
          {cvData.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        {cvData.experiences.map((experience) => (
          <div
            key={experience.company}
            className={experience.roles ? "cv-entry" : "cv-entry cv-entry--simple"}
          >
            <div className="cv-entry-head">
              <h3>
                {experience.company} — {experience.subtitle}
              </h3>
              <span className="cv-period">{experience.period}</span>
            </div>
            {experience.location && <p className="cv-meta">{experience.location}</p>}
            {experience.bullets && <Bullets items={experience.bullets} />}
            {experience.roles?.map((role) => (
              <div key={`${experience.company}-${role.team ?? role.title}`} className="cv-subentry">
                <div className="cv-entry-head">
                  <h4>{role.team ? `${role.title} · ${role.team}` : role.title}</h4>
                  <span className="cv-period">{role.period}</span>
                </div>
                <Bullets items={role.bullets} />
              </div>
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {cvData.education.map((education) => (
          <div key={education.degree} className="cv-entry cv-entry--simple">
            <div className="cv-entry-head">
              <h3>{education.degree}</h3>
              <span className="cv-period">{education.period}</span>
            </div>
            <p className="cv-meta">
              {education.institution}, {education.location}
            </p>
            <Bullets items={education.bullets} />
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <div className="cv-skills">
          {cvData.skills.map((group) => (
            <p key={group.category}>
              <strong>{group.category}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2>Presentations</h2>
        {cvData.presentations.map((presentation) => (
          <div key={presentation.title} className="cv-entry cv-entry--simple">
            <div className="cv-entry-head">
              <h3>{presentation.title}</h3>
              <span className="cv-period">{presentation.period}</span>
            </div>
            <p className="cv-meta">
              {presentation.event}, {presentation.location}
            </p>
            <p>{presentation.description}</p>
          </div>
        ))}
      </section>
    </article>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

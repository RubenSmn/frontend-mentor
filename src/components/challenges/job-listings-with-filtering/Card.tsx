import type { Job } from "./JobList";

function Card({
  job,
  filters,
  onAddFilter,
}: {
  job: Job;
  filters: string[];
  onAddFilter: (filter: string) => void;
}) {
  return (
    <li>
      <article className="job-listing">
        <img
          src={`/frontend-mentor/challenges/job-listings-with-filtering/${job.logo}`}
          alt={job.logo.replace(".svg", " logo")}
          className="company-logo"
        />
        <div className="general-info">
          <div className="job-info">
            <h2>{job.company}</h2>
            {job.new ? <div className="pill new">NEW!</div> : null}
            {job.featured ? (
              <div className="pill featured">FEATURED</div>
            ) : null}
          </div>
          <h3>{job.position}</h3>
          <div className="features">
            <p>{job.postedAt}</p>
            <span>&#183;</span>
            <p>{job.contract}</p>
            <span>&#183;</span>
            <p>{job.location}</p>
          </div>
        </div>
        <hr />
        <ul>
          {[job.role, job.level, ...job.tools, ...job.languages].map((item) => {
            const activeClass = filters.includes(item) ? "active" : undefined;
            return (
              <li className={activeClass} onClick={() => onAddFilter(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </article>
    </li>
  );
}

export default Card;

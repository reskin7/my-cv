import { Job } from './components/Job';
import { jobs } from './jobs';
import './styles.css';

export const Experience = () => {
  return (
    <>
      <div className="row">
        <div className="column left">&nbsp;</div>
        <div className="column middle">
          <h1 className="title">About me</h1>

          <div className="container">
            <div className="wrapper">
              <ul className="jobs-timeline">
                {jobs.map((job) => (
                  <Job key={job.title} {...job} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="column right"></div>
      </div>
    </>
  );
};

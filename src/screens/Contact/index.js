import './styles.css';

export const Contact = () => {
  const urlLinkedin = 'https://www.linkedin.com/in/alan-reskin-38777815b/';
  const urlGithub = 'https://github.com/reskin7';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('alanreskin7@gmail.com');
      alert('Email copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div className="social_media_container">
        <a
          className="btn-social btn-linkedin"
          href={urlLinkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-linkedin"></span>
          LinkedIn
        </a>
        <a
          className="btn-social btn-github"
          href={urlGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-github"></span>
          Github
        </a>
        <button className="btn-social btn-email" onClick={copyEmail}>
          <span className="fa fa-envelope"></span>
          alanreskin7@gmail.com
          <i className="fa fa-copy clipboard"></i>
        </button>
      </div>
    </>
  );
};

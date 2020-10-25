import Marked from 'marked'
import jobs from './workHistory.json';

const MD = ({ text }) =>
  <div dangerouslySetInnerHTML={{ __html: Marked.parse(text) }}></div>


// A fun little divider for the top
const AppBarDivider = () => <span style={{ marginLeft: '16px', marginRight: '4px' }}><h4>|</h4></span>

const AppBarItem = ({ children, location = '' }) => {
  return <span class="navbar-text navbar-item"><a href={`#${location}`}>{children}</a></span>

}

const AppBar = () => <div class="navbar navbar-expand navbar-light bg-light sticky-top" >
  <AppBarItem ><b>Joel Longanecker</b></AppBarItem> <AppBarDivider />

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <AppBarItem location="projects" >Projects</AppBarItem> <AppBarDivider />
    <AppBarItem location="contact" >Contact</AppBarItem> <AppBarDivider />
    <AppBarItem location="education" >Education</AppBarItem> <AppBarDivider />
    <AppBarItem location="workHistory" >Work History</AppBarItem>
  </div>

</div>

const PageSection = ({ id, title, caption, children }) => {

  if (title || caption) {
    return <div className="container m-3 p-3 bg-light rounded"  >
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div>
            <h3 ><a class="text-dark" id={id} href={`#${id}`}>{title}</a></h3>
            <h5><em>{caption}</em></h5>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">

          {children}

        </div>


      </div>
    </div>
  }
  else {
    return <div className="container m-3 p-3 bg-light rounded"  >
      <div className="row">
        <div className="col-sm-12">

          {children}

        </div>
      </div>
    </div>
  }

}

const AboutMe = () => <PageSection id="">
  <MD text={`Hello! My name is Joel Longanecker. Thank you for visiting my Github page. 
I made this page to serve several different purposes.

* This is my living resume! It's way easier to show people you are a web developer than simply telling them.
* It's a great way to stay on top of the latest and greatest in web development.
* It's hard to have a portfolio page when all your projects are internal line of business apps.
* This will also sort of serve as my bespoke little mini blog.`} />

</PageSection>;

function App() {

  const WorkHistory = ()=> <PageSection id="workHistory" title="Work History" caption="Is a man not entitled to the sweat of his brow?">
    {jobs.map(job => {
      return <div id={job.name}>

        <h3>{job.name}</h3>
        <em>{job.dateStart} to {job.dateEnd}</em>
        <h4>{job.summary}</h4>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div>Roles:</div>
            <ul>
              {job.roles.map(role => <li>{role}</li>)}
            </ul>
            <div>Teams:</div>
            <ul>
              {job.teams.map(team => <li>{team}</li>)}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <div>Tools:</div>
            <ul>
              {job.tools.map(tool => <li>{tool}</li>)}
            </ul>
          </div>
        </div>
      </div>;
    })}
  </PageSection>;
  return (
    <div className="App bg-dark" style={{ height: '100%' }}>
      <AppBar />
      <AboutMe />
      <PageSection id="projects" title="Projects" caption="Things I have worked on independently.">
        <ul>
          <li>Bad Bits Game Engine</li>
        </ul>
      </PageSection>
      <PageSection id="contact" title="Contact" caption="Hey! I'm over here!">

      </PageSection>

      <PageSection id="education" title="Education" caption="I managed to convince them to give me a degree...">

      </PageSection>

      <WorkHistory/>
    </div>
  );
}

export default App;

import Marked from 'marked'

const MD = ({ text }) =>
  <div dangerouslySetInnerHTML={{ __html: Marked.parse(text) }}></div>


// A fun little divider for the top
const AppBarDivider = () => <span style={{ marginLeft: '16px', marginRight: '8px' }}><h4>|</h4></span>

const AppBarItem = ({ children, location = '' }) => {
  return <h4 class="navbar-text"><a href={`#${location}`}>{children}</a></h4>

}

const AppBar = () => <div class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
  <AppBarItem ><b>Joel Longanecker</b></AppBarItem> <AppBarDivider />
  <AppBarItem location="projects" >Projects</AppBarItem> <AppBarDivider />
  <AppBarItem location="contact" >Contact</AppBarItem> <AppBarDivider />
  <AppBarItem location="education" >Education</AppBarItem> <AppBarDivider />
  <AppBarItem location="workHistory" >Work History</AppBarItem>
</div>

const PageSection = ({ id, title, caption, children }) => {
  return <div className="container" >
    <div className="row">
      <div className="col-sm-3">
        <div>
      <h3 id={id}>{title}</h3>
      <h5><em>{caption}</em></h5>
      </div>
      </div>
      <div className="col-sm-9">
        <br/>
      {children}

      </div>
    
  
    </div>
    </div>
}

const AboutMe = ()=> <PageSection id="" title="About Me" caption="Thank you for visiting my GH Page.">
  <MD text={`
Hello! My name is Joel Longanecker. Thank you for visiting my Github page. 
I made this page to serve several different purposes.

* This is my living resume! It's way easier to show people you are a web developer than simply telling them.
* It's a great way to stay on top of the latest and greatest in web development.
* It's hard to have a portfolio page when all your projects are internal line of business apps.
* This will also sort of serve as my bespoke little mini blog.`} />

</PageSection>;

function App() {

  return (
    <div className="App">
      <AppBar />
     <AboutMe/>
     <br/>
      <PageSection id="projects" title="Projects" caption="Things I have worked on independently.">
        <ul>
          <li>Bad Bits Game Engine</li>
        </ul>
      </PageSection>
    </div>
  );
}

export default App;

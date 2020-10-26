import PageSection from './Components/PageSection';
import WorkHistory from './Sections/WorkHistory';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects';
import MD from './Components/Md';


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


function App() {


  return (
    <div className="App bg-dark" style={{ height: '100%' }}>
      <AppBar />
      <AboutMe />
      <Projects/>
      <PageSection id="contact" title="Contact" caption="Hey! I'm over here!">

      </PageSection>

      <PageSection id="education" title="Education" caption="I managed to convince them to give me a degree...">

      </PageSection>

      <WorkHistory />
    </div>
  );
}

export default App;

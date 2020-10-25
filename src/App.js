// A fun little divider for the top
const AppBarDivider = ()=> <span style={{marginLeft:'16px', marginRight:'8px'}}><h4>|</h4></span>

const AppBarItem = ({children, location=''})=>{
return <h4 class="navbar-text"><a href = {`#${location}`}>{children}</a></h4> 

}

const AppBar =()=> <div class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
  <AppBarItem ><b>Joel Longanecker</b></AppBarItem> <AppBarDivider/>
  <AppBarItem location="projects" >Projects</AppBarItem> <AppBarDivider/>
  <AppBarItem location="contact" >Contact</AppBarItem> <AppBarDivider/>
  <AppBarItem location="education" >Education</AppBarItem> <AppBarDivider/>
  <AppBarItem location="workHistory" >Work History</AppBarItem>
</div>

const PageSection = ({id, title, caption, children})=>{
  return <div className="container">
    <h3 id={id}>{title}</h3>
    <h5><em>{caption}</em></h5>
    {children}
  </div>
}

function App() {
  return (
    <div className="App">
    <AppBar/>
<PageSection>
  <p>Hello! My name is Joel Longanecker. Thank you for visiting my Github page. 
    I made this page to serve several different purposes.</p>
    <ol>
      <li>This is my living resume! It's way easier to show people you are a web developer than simply telling them.</li>
      <li>It's a great way to stay on top of the latest and greatest in web development.</li>
      <li>It's hard to have a portfolio page when all your projects are internal line of business apps.</li>
      <li>This will also sort of serve as my bespoke little mini blog.</li>
    </ol>
</PageSection>
    <PageSection id="projects" title="Projects" caption="Things I have worked on independently.">
      <ul>
        <li>Bad Bits Game Engine</li>
      </ul>
    </PageSection>
    </div>
  );
}

export default App;

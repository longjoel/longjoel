import PageSection from './Components/PageSection';
import WorkHistory from './Sections/WorkHistory';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects';

import historyLocation from './log.txt';

import {useState,useEffect} from 'react';

import MD from './Components/Md';


// A fun little divider for the top
const AppBarDivider = () => <span style={{ marginLeft: '16px', marginRight: '4px' }}><h4>|</h4></span>

const AppBarItem = ({ children, location = '' }) => {
  return <span class="navbar-text navbar-item"><a href={`#${location}`}>{children}</a></span>

}

const AppBar = () => <div class="navbar navbar-expand navbar-light bg-light sticky-top p-3" >
  <AppBarItem ><b>Joel Longanecker</b></AppBarItem> <AppBarDivider />

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <AppBarItem location="workHistory" >Work History</AppBarItem> <AppBarDivider />

    <AppBarItem location="projects" >Projects</AppBarItem> <AppBarDivider />
    <AppBarItem location="contact" >Contact</AppBarItem> <AppBarDivider />
    <AppBarItem location="education" >Education</AppBarItem> 
  </div>

</div>

const cleanHistory = (historyText)=>{

  return historyText.split('\n')
  .filter((x,i)=> i !== 0 &&  x.trim().length >0)
 .join('\n\n');
}

function App() {

 const [history, setHistory] = useState('');

 useEffect(()=>{
(async ()=>{
  const response = await fetch(historyLocation);
  const historyText =( await response.text()).split('commit').slice(0,5).map(x=>cleanHistory(x)).join('\n\n');
  setHistory(historyText);
  
})();
 },[history]);

  return (
    <div className="App bg-dark" style={{ height: '100%' }}>
      <AppBar />

      <AboutMe />
      <WorkHistory />
      
      <Projects/>
      <PageSection id="contact" title="Contact" >
        <div className="card p-3 m-3">
        <p>The best way to reach me is to email me at <a href="mailto:joel.longanecker@gmail.com">Joel.Longanecker@gmail.com</a>. </p>
        </div>
      </PageSection>

      <PageSection id="education" title="Education" >
      <div className="card p-3 m-3">
        <p>I graduated from North Dakota State University in the spring of 2010 with a Bachelors of Science degree in Computer Science.</p>
        </div>
      </PageSection>
      <PageSection title="Page History">
        <small><pre><MD text={history}/></pre></small>
      </PageSection>
    </div>
  );
}

export default App;

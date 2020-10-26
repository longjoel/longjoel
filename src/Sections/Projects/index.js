import PageSection from '../../Components/PageSection';
import myProjects from './myProjects.json';

export default () => <PageSection id="projects" title="My Projects" caption="Check out the cool things I have worked on!">

    {myProjects.map(project=> <div className="card p-3 m-3">
        <div className="card-body">
            <h4 className="card-title">{project.name}</h4>
            <h6 className="card-subtitle"><em className="text-secondary">{project.status}</em></h6>
            <p className="card-text">{project.summary}</p>
<a className="card-link" href={project.url}>{project.url}</a>
        </div>
        
    </div>)}

</PageSection>
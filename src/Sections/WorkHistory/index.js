import PageSection from '../../Components/PageSection';
import jobs from './workHistory.json';


const WorkHistoryTool = ({ tool }) => <span><span
  style={{
    marginLeft: '24px',
    whiteSpace: 'nowrap'
  }}>
  <em>{tool}</em></span><wbr /></span>

export default () => <PageSection
  id="workHistory"
  title="Work History"
  caption="I have a passion for learning and growing. Here are some of the places that I have been able to do that.">
  {jobs.map(job => {
    return <div className="card card p-3 m-3" id={job.name}>

<div className="card-body">
      <h4 className="card-title">{job.name}</h4>
      <h6 className="card-subtitle text-secondary"><em>{job.dateStart} to {job.dateEnd}</em></h6>
      <p>{job.summary}</p>
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
        <div className="col-md-8 col-sm-12">
          <div>Tools:</div>

          {job.tools.map(tool => <WorkHistoryTool tool={tool} />)}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>;
  })}
</PageSection>;

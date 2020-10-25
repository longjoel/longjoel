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
  caption="Is a man not entitled to the sweat of his brow?">
  {jobs.map(job => {
    return <div id={job.name}>

      <h3>{job.name}</h3>
      <em><b>{job.dateStart} to {job.dateEnd}</b></em>
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
      <br />
      <br />
    </div>;
  })}
</PageSection>;

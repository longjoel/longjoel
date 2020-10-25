import Marked from 'marked';

export default ({ text }) =>
  <div dangerouslySetInnerHTML={{ __html: Marked.parse(text) }}></div>;

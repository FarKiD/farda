import ResumeListItems from './ResumeListItems';

import classes from '../styles/components/ResumeProjects.module.scss';

const ResumeProjects = (props) => {
  return(
    <div className={classes.resumeListContainer}>
      <ResumeListItems state={props.state} data={props.data} />
    </div>
  );
};

export default ResumeProjects;


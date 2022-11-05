import uuid4 from 'uuid4';

const ResumeListItems = (props) => {
  const renderListItem = () => { // TODO: make it work with selectable filters
    // Maps through the given data, prints all out by default
      // returns the filtered items otherwise
    return props.state.query === ""
      ? props.data.map((data) => {
          return <li key={uuid4()}>{data.name}</li>;
        })
      : props.state.list.map((data) => {
          return <li key={uuid4()}>{data.name}</li>;
        });
  }

  return(
    <ul>
      { renderListItem() }
    </ul>
  );
};

export default ResumeListItems;


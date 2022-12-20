import uuid4 from 'uuid4';

const ResumeListItems = (props) => {
  const getItemsList = () => {
    // Print out the entire list if no user input is provided
    if (props.state.query === "") {
      return props.data.map((data) => {
        return <li key={uuid4()}>{data.name}</li>;
      });
    } else { // Print out based on user input
      return props.state.list.map((data) => {
        return <li key={uuid4()}>{data.name}</li>;
      });
    }
  }

  return(
    <ul>
      { getItemsList() }
    </ul>
  );
};

export default ResumeListItems;
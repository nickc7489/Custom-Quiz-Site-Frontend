function FreeOption(props) {
  function updateHandler(event) {
    const dummy = props.questions;
    dummy[props.num]["options"][props.optionNum]["text"] = event.target.value;
    props.updateQuestions(dummy);
  }
  if (props.questions[props.num]["options"][props.optionNum]["correct"]) {
    return (
      <>
        <br></br>
        <input
          type="text"
          defaultValue={props.text}
          placeholder="enter accepted answer here"
          onChange={updateHandler}
          checked
        />
      </>
    );
  } else {
    return (
      <>
        <br></br>
        &nbsp;
        <input
          type="text"
          defaultValue={props.text}
          placeholder="Enter Accepted Answer Here"
          onChange={updateHandler}
          style={{ width: "500px", display: "inline" }}
        />
      </>
    );
  }
}
export default FreeOption;

function MultipleOption(props) {
  function changeHandler(event) {
    const dummy = props.questions;
    dummy[props.num]["options"][props.optionNum]["correct"] =
      !dummy[props.num]["options"][props.optionNum]["correct"];
    props.updateQuestions(dummy);
  }
  function updateTextHandler(event) {
    const dummy = props.questions;
    dummy[props.num]["options"][props.optionNum]["text"] = event.target.value;
    props.updateQuestions(dummy);
  }
  return (
    <>
      <br></br>
      <tr>
      &nbsp;
        <td>
          <input
            type="text"
            defaultValue={props.text}
            placeholder="Option Name"
            onChange={updateTextHandler}
          />
        </td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td>
          <input
            type="radio"
            name={props.name}
            onChange={changeHandler}
            defaultChecked={
              props.questions[props.num]["options"][props.optionNum]["correct"]
            }
            style={{height: "13px", width: "13px"}}
          />
        </td>
      </tr>
    </>
  );
}

export default MultipleOption;

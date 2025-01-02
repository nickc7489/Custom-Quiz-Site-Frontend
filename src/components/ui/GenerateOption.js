function GenerateOptions(props) {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  if (props.type === "Multiple Choice") {
    const name = makeid(10);
    return (
      <>
        {props.options.map((option) => (
          <div key={makeid(10)}>
            <label htmlFor="id" style={{ display: "inline" }}>
              &nbsp;{option.text}
            </label>
            <input
              id="id"
              key={makeid(10)}
              name={name}
              type="radio"
              defaultChecked={false}
              style={{ height: "13px", width: "13px", display: "inline" }}
              onChange={function () {
                const dummy = props.record;
                dummy[props.id] = option.correct;
                props.setRecord(dummy);
              }}
            />
          </div>
        ))}
      </>
    );
  } else if (props.type === "Free Response") {
    const valid = [];
    for (var i = 0; i < props.options.length; i++) {
      valid.push(props.options[i]["text"]);
    }
    return (
      <><input
        type="text"
        placeholder="Type Answer Here"
        onChange={function (event) {
          if (valid.includes(event.target.value)) {
            const dummy = props.record;
            dummy[props.id] = true;
            props.setRecord(dummy);
          } else {
            const dummy = props.record;
            dummy[props.id] = false;
            props.setRecord(dummy);
          }
        } } /><br></br></>
    );
  }
}

export default GenerateOptions;

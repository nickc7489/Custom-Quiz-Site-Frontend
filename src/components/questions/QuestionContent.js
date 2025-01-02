import { useState } from "react";
import FreeOption from "./FreeOption";
import MultipleOption from "./MultipleOption";

function QuestionContent(props) {
  const [dummyState, setDummy] = useState(true);
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

  function freeAddHandler() {
    const num = props.questions[props.num]["options"].length;
    const dummy = props.questions;
    dummy[props.num]["options"].push({
      num: num,
      text: "",
    });
    props.updateQuestions(dummy);
    setDummy(!(dummyState));
  }

  function multAddHandler() {
    const num = props.questions[props.num]["options"].length;
    const dummy = props.questions;
    dummy[props.num]["options"].push({
      num: num,
      text: "",
      correct: false,
    });
    props.updateQuestions(dummy);
    setDummy(!(dummyState));
  }
  if (!props.questions[props.num].hasOwnProperty("options")) {
    props.questions[props.num]["options"] = [];
  }
  const options = props.questions[props.num]["options"];
  if (props.questions[props.num]["type"] === "Free Response") {
    return (
      <>
        <button type="button" onClick={freeAddHandler}>
          Add Accepted Response
        </button>
        <div>
          {options.map((option) => (
            <FreeOption
              optionNum={option.num}
              text={option.text}
              num={props.num}
              updateQuestions={props.updateQuestions}
              questions={props.questions}
              key={makeid(10)}
            />
          ))}
        </div>
      </>
    );
  } else {
    const buttonName = makeid(10);
    return (
      <>
        <button type="button" onClick={multAddHandler}>
          Add Possible Answer - Check Correct Answer
        </button>
        <div>
          {options.map((option) => (
            <MultipleOption
              optionNum={option.num}
              text={option.text}
              correct={option.correct}
              num={props.num}
              updateQuestions={props.updateQuestions}
              questions={props.questions}
              name={buttonName}
              key={makeid(10)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default QuestionContent;

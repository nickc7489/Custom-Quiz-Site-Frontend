import { useState } from "react";

import QuestionContent from "./QuestionContent";
import Card from "../ui/Card";

function Question(props) {
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

  function setFree(event) {
    const dummy = props.questions;
    dummy[props.num]["type"] = "Free Response";
    dummy[props.num]["options"] = [];
    props.updateQuestions(dummy);
    setDummy(!dummyState);
  }

  function setMult(event) {
    const dummy = props.questions;
    dummy[props.num]["type"] = "Multiple Choice";
    dummy[props.num]["options"] = [];
    props.updateQuestions(dummy);
    setDummy(!dummyState);
  }
  function setAsk(event) {
    const dummy = props.questions;
    dummy[props.num]["ask"] = event.target.value;
  }

  const buttonName = makeid(10);
  const isFree = props.questions[props.num]["type"] === "Free Response";

  return (
    <><Card>
      <input
        type="text"
        id="ask"
        name="ask"
        placeholder="Type Question Here"
        defaultValue={props.questions[props.num]["ask"]}
        onChange={setAsk} />
      <br></br>
      <label htmlFor="free-response" style={{ display: "inline" }}>&nbsp;Free Response</label>
      <input
        type="radio"
        id="free-response"
        name={buttonName}
        value="FREE-RESPONSE"
        onClick={setFree}
        defaultChecked={isFree}
        style={{ width: "auto", display: "inline" }} />
      <br></br>
      <br></br>
      <label htmlFor="multiple-choice" style={{ display: "inline" }}>&nbsp;Multiple Choice</label>
      <input
        type="radio"
        id="multiple-choice"
        name={buttonName}
        onClick={setMult}
        value="MULTIPLE-CHOICE"
        defaultChecked={!isFree}
        style={{ width: "auto", display: "inline" }} />
      <br></br>
      <br></br>
      &nbsp;
      <QuestionContent
        num={props.num}
        updateQuestions={props.updateQuestions}
        questions={props.questions} />
      <br></br>
    </Card><br></br></>
    
  );
}

export default Question;

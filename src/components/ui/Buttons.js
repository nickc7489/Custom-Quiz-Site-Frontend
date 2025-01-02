import classes from './Buttons.module.css';

function Buttons(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Buttons;
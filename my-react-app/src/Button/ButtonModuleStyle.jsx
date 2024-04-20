/*Stronger naming convention needed for larger applications*/
/*Since the Button component is in a Button folder with its own css file, we must import the css file in the Button component*/
import styles from './Button.module.css';

function ButtonModuleStyle() {
  return <button className={styles.button}>Click me! I'm styled via a module</button>;
}

export default ButtonModuleStyle;
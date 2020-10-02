import styles from "./Text.module.css";

const Text = (props) => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Text;

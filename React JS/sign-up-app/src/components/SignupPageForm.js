import React from "react";
import styles from "./SignupForm.module.css";
import Card from "./Card";

function SignupForm() {
  return (
    <Card>
      <form data-testid="signupForm">
        <span>&nbsp;</span>
        <h3 className={styles.heading}>Sign up here</h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.td}> Username : </td>
              <td className={styles.td}>
                <input type="text" data-testid="username" />{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Password :</td>
              <td className={styles.td}>
                <input type="password" data-testid="password"></input>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Confirm Password :</td>
              <td className={styles.td}>
                <input type="test" data-testid="confirmpassword"></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center" className={styles.td}>
                <button data-testid="submit"> Submit </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
}

export default SignupForm;

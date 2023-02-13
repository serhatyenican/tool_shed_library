import React from "react";
import styles from "./howDoesItWorkPage.module.css";
function HowDoesItWork() {
    return (
        <>
            <main>
                <h1>Want to find out how this works?</h1>
                <h2>Who are we? What is this? Where is the catch?</h2>
                <p className={styles.howdoesitwork}>
                    There is no catch! Here, at the tool shed library, we are on
                    a mission to help you complete your home project. In our
                    non-profit organization, our free of cost lending system
                    provides no cost access to home, garden, electrical,
                    woodworking and paint tools that would otherwise be very
                    expensive for you. This way, we are reducing the
                    cost-related barriers and encouraging people around us to
                    share their tools, time and knowledge. Would you like to
                    give back? Give us a call at 999-999-999 or send us an email
                    to thetoolshedlibrary@com and we will gladly inform you in
                    the ways you can teach others, help fix tools, or simply
                    donate.
                </p>
            </main>
        </>
    );
}
export default HowDoesItWork;

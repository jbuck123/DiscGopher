import React from "react"
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser] = useState('');
    const [ validName, setValidName] = useState(false);
    const [ userFocus, setUserFocus ] = useState(false); 

    const [pwd, setPwd] = useState('');
    const [ validPwd, setValidPwd] = useState(false);
    const [ pwdFocus, setPwdFocus ] = useState(false);

    const [matchPwd, setMatchPwd ] = useState(''); 
    const [validMatch, setValidMatch] = useState(false);
    const [ matchFocus, setMatchFocus] = useState(false);

    // usestate for possible err message 
    const [errMsg, setErrMsg] = useState('')
    const [ success, setSuccess ] = useState(false);


    // useeffect for user input form
    // checks userform input and pushes it to the array
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => { 
        //checking if username is valid
        const result = USER_REGEX.test(user); 
        console.log(result)
        console.log(user)
        setValidName(result)
        // the user is now in the array and now can go through validating and setting name

    }, [user])

    useEffect(() => {
        const result = PASS_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        // line below returns a boolean
        const match = pwd === matchPwd;
        // true or false (defaulted to false)
        setValidMatch(match)
        // dependencies
    }, [pwd, matchPwd] )


    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])
    return (
     <section className="section-registration-login ">
         <p ref={errRef} className={errMsg ? "errmsg" :
                // aria live is an accesibility tool for screen readers.
          "offscreen"} aria-live="assertive"> {errMsg}</p>
          <h1 className="section-title">Register</h1>
          <form onSubmit={handleSubmit} className="section-content">
              <label htmlFor="username">
                  Username:
                  <span className={validName ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} /> 
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                      <FontAwesomeIcon icon = { faTimes} />
                  </span>
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-onInvalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              ></input>
              <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br /> 
                  Must begin with a letter. <br /> 
                  Letters, numbers, underscores, hyphens allowed.
              </p>
            {/* //password section */}
            {/* {follows very similar logic } */}

            <label htmlFor="password">
                Password: 
                {/* neeed to go back into my css and add the classes "valid" and "hide"  and "invalid"*/}
                {/* logic behind this turnary is simple, if validPwd then give classname "valid",  */}
                {/* if not then give the class name of "hide" which then hides the icon below */}

                <span className={validPwd ? "valid" : "hide" }>
                    <FontAwesomeIcon icon={faCheck} /> 
                </span>
                <span className={ validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} /> 
                </span>
            </label>
            <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid = {validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}>
            </input>
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                8 to 24 characters. <br />
                Must include uppercase and lowercase letters, a number and a sepcial character. <br /> 
                Allowed special characers: <span aria-label="exclamation mark"> ! </span>
                <span aria-label="at symbol"> @ </span>
                <span aria-label=" hashtag"> # </span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent"> % </span>
            </p>
            <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} /> 
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} /> 
                </span>
            </label>
            <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid = {validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}>
            </input>
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                Password must match.
            </p>

            {/* SUBMIT BUTTON */}
            {/* cool turnary statement for the submit button */}

            <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign up !
            </button>
          </form>
          <p className="section-content">
              Already registered? <br /> 
              <span className="line">

                  {/* need to go back and fix the way this line below works. */}
              <NavLink className={"link"} to="/Login"><a className="btn">Login Here </a></NavLink>
              </span>
          </p>
     </section>
    )
}
import React from "react"
import { useRef, useState, useEffect } from " react ";
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
    return (
        <div>
            
        </div>
    )
}
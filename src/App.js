import './App.css';
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MdSmsFailed } from "react-icons/md"


const useStyle = makeStyles({

  SubmitButton: {
    backgroundColor: '#0F73E3',
    color: 'black',
    width: '350px',
    margin: "70px auto",
    letterSpacing: '3px'
  },

  letterSpace: {
    letterSpacing: '3px'
  },
  icon: {

    color: 'red',

  },
  //   redinput: {

  //     '&:after': { borderBottom: 'red' },
  //   ,
  //   '&:before': { borderBottom: 'red' },
  // }
  input: {
    minWidth: '350px',

  }
}

)


function App() {

  //material UI
  const classes = useStyle();

  // set useStates

  //EMAIL
  const [email, setEmail] = useState("");
  //email eroor message
  const [emailHelper, setEmailHelper] = useState("");
  //PASSWORD
  const [password, setPassword] = useState("");
  //password error message
  const [passwordHelper, setPasswordHelper] = useState("");
  //ICON
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    //mail validation
    let mailFormat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (email.match(mailFormat)) {
      //no message
      setEmailHelper("");
      // icon to red
      setError(false)
    }

    else {
      //show message
      setEmailHelper("you must digit a valid Email");
      // icon to red
      setError(true)
    }


    //password validation
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers)) {
      //no message
      setPasswordHelper("");
      // icon to red
      setError(false)
    }
    else {
      //show message
      setPasswordHelper("your password must contain at least: 1 lower case letter, 1 upper case letter, 1 number");
      // icon to red
      setError(true)
    }


  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3 className={classes.letterSpace}>Please, fill out the form below:</h3>

        <p className={classes.letterSpace}> E-mail</p>

        <div>
          <TextField className={classes.input}

            type="text" name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <MdSmsFailed className={classes.icon} />}

          <h5 className={classes.letterSpace}>{emailHelper}</h5>
          {/* <br/> */}
        </div>

        <div>
          <p className={classes.letterSpace}> Password</p>
          <TextField className={classes.input} type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {error && <MdSmsFailed className={classes.icon} />}
          <h5 className={classes.letterSpace}>{passwordHelper}</h5>
        </div>


        <p className={classes.letterSpace}>Choose your job</p>

        <select id="cars" name="cars">
          <option value="Front End Developer" >Front End Developer</option>
          <option value="UX designer">UX designer</option>
          <option value="Back End Developer">Back End Developer</option>
          <option value="IT Security">IT Security</option>
        </select>

        <Button className={classes.SubmitButton} variant="outlined" color="primary" type="submit" value="Submit" >
          submit
       </Button>

      </form>
    </div>
  );
}

export default App;

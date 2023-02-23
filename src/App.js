import './App.css';
import React from 'react'
import User_Details from './components/User_Details/User_Details';
import User_Repositry_Details from './components/User_Repositry_Details/User_Repositry_Details';

function App() {
return(
<>
<User_Details/>
<User_Repositry_Details owner="12shivam219" name="Cred-Clone"/>
</>
);

}

export default App;

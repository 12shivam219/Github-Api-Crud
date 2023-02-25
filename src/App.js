import './App.css';
import React from 'react'
import Authentication from './pages/HomePage/Authentication';
import Profile from './pages/ProfilePage/Profile';
import Header from './components/Header/Header';
import CommonContainer from './CommonContainer/CommonContainer';
// import Create_New_Repositry from './components/SET/Create_Repositry/Create_New_Repositry';
// import User_Details from './components/GET/User_Details/User_Details';
// import User_Repositories from './components/GET/User_Repositories/User_Repositories';
// import User_Repositry_Details from './components/GET/User_Repositry_Details/User_Repositry_Details';
// import Create_Issue from './components/SET/Create_Issue/Create_Issue';
// import Create_Pull_Request from './components/SET/Create_pull_Request/Create_Pull_Request';

function App() {
    return (
        <>
            {/* <User_Details />  */}

            {/* <User_Repositry_Details owner="12shivam219" name="Store" />
            <User_Repositories />
            <Create_New_Repositry />
            <Create_Issue id="R_kgDOJCEXdw" />
            <Create_Pull_Request />  */}

            {/* <Authentication/> */}
            {/* <Header /> */}



            <CommonContainer>
                <Profile />
            </CommonContainer>


        </>
    );

}

export default App;

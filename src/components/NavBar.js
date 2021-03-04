import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipeActions";

const NavBar = ({isLoggedIn}) => {
  const [logged, setLogged] = useState(false)

  const token = localStorage.getItem("token")
  const history = useHistory()

  useEffect(() =>{
    return token
  },[])

  const handleLogout = (e) => {
    e.preventDefault()

    console.log('lgout')

    localStorage.removeItem("token")
    history.push('/')

  }
  
  if(isLoggedIn){
    return(
      <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </LinksStyle>
    </NavStyle>
    )
  }

  return (
    <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </LinksStyle>
    </NavStyle>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return({
    isLoggedIn: state.userReducer.isLoggedIn
  })
}

export default connect(mapStateToProps)(NavBar);


const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 4vh;
  background-color: ${pr => pr.theme.primaryColor};
`;
const TitleStyle = styled.p`
  color: ${pr => pr.theme.fontColor};
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 0.8em;
  font-family: Georgia;
`;

const LinksStyle = styled.ul`
  display: flex;
  font-size: 0.8em;
  justify-content: space-evenly;
  ::marker {
    display: none;
  }
`;

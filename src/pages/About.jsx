import Mylist from "../components/UI/list/Mylist";
import "../styles/App.css";
import {  Link } from "react-router-dom";

const About = () => {
  const func =[
    'adding','deleting','sorting','filtering','search','login/logout', 'authorized access'
  ]
  const feature =['loader', 'page pagination', 'navbar', 'modal', 'a reusable components library', 'animation','endless feed of posts']
  const dependencies = ['React transition group', 'Axios', "React Router","Intersection Oberver API"]
  
  
  return (
     <div className="App">
      <h1 className="page__title"> This React App is created as a test task</h1>
      <p style={{marginBottom:50}}>An application that loads a test list of posts and models the typical functionality of a single-page app</p>
      
      <Mylist list={func} title='Functionality' />
      <Mylist list={feature} title='Features' />
      <Mylist list={dependencies} title='Dependencies' />

      <p >
        <Link to="/posts">Go to Posts</Link>
      </p>
      
     </div>
    

    
  )
}

export default About;
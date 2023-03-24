import PropTypes from "prop-types"
import Date from "../components/date"

function Header(props){
    function click(){
        if(props.mystyle =="light"){
            props.setStyle('dark')
        }
        else{
            props.setStyle('light')
        }
        props.setalert('This is a new alert')




        
    }
    return(
        
        <div className="nav-bar" style={props.style}>
            
            <div className="date">
            <Date />
            </div>
            <div className="links">
            <h1>{props.title}</h1>
            {props.links.map(e=>{
                 return <div>
                
                <ul>
                <a href="">{e}</a>
                </ul>
                </div>
          

            })}
            </div>
           <div className="btn">
            <button  onClick={click}>Darkmode</button>
            </div>
          

           
        </div>
        
    )


}
Header.propTypes ={
    title: PropTypes.string
}

export default Header

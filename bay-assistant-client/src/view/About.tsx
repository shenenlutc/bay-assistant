
const aboutDivStyle : React.CSSProperties = {
    fontSize: "xx-large",
    position: "relative",
    height: "300px",
    top: "10%",
    border: "solid 1px",
    textAlign: "center",
    alignItems:"center"
}


const About: React.FC = () => {
    return (
        <div style={aboutDivStyle}>
             <p>拜助理</p>
             <p>版本 3.16.4</p>
             <p >拜耳中国版权所有</p>
        </div>
    )
};
  
export default About;
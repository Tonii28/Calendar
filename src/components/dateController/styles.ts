const screenHeight = window.screen.height;
const screenWidth = window.screen.width;

export const container: React.CSSProperties = {
maxWidth: (screenWidth/7)+"px",
minWidth: (screenWidth/7)+"px",
 backgroundColor: 'white', 
 borderRadius: 5,
 minHeight: (screenHeight/35)+"px",
 display: "flex",
 flexDirection: "row",
 justifyContent: "space-around",
 alignItems: "center",
 border: '1px solid black',
 maxHeight: (screenHeight/35)+'px',

}

export const icon: React.CSSProperties = {
  color: "#585858",
  fontSize: "8px",
  fontWeight: 'bold'
    
}
export const date: React.CSSProperties = {
    fontSize: "11px",
    color: "#585858",
    padding: "0px",
    margin: "0px",
    
}
export const directionIcon: React.CSSProperties = {
    color: "#585858",
    fontSize: "6px",
    fontWeight: 'bold'
      
  }

export const calendarIcon: React.CSSProperties = {
    color: "#585858",
    fontSize: "10px",
    fontWeight: 'bold'
      
  }
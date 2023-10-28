const screenHeight = window.screen.height;
const screenWidth = window.screen.width;

export const container: React.CSSProperties = {
    backgroundColor: 'beige',
    
  color: 'white',
  padding: '8px 16px',
  borderRadius: '4px',
  minHeight: (screenHeight/12)+'px',
 
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
  
}

export const dropDown: React.CSSProperties = {
  minWidth: "65px",
  fontSize: "8px",
  color: "black",
  height: '25px',
  border: "0px solid black",
  
};
export const weekTotalLabel: React.CSSProperties = {
color: "#585858",
backgroundColor: "beige",
padding: "0px",
margin: "0px",
fontSize: "10px",
maxHeight: "20px",
marginTop: "1px"
};

export const weekTotal: React.CSSProperties = {
  color: "black",
  backgroundColor: "beige",
  padding: "0px",
  margin: "0px",
  fontSize: "12px",
  maxHeight: "20px",
  marginLeft: "7px"
  };

export const settingsIcon: React.CSSProperties = {
color: "black",
padding: "0px",
margin: "0px",

maxHeight: "0px",
marginTop: "6px"

  };

export const right: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minWidth: (screenWidth/3)+"px",
  backgroundColor: "beige",
 
};

export const weekTotalContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "5px"
};

export const today: React.CSSProperties = {

  color: "#585858",
backgroundColor: "beige",
padding: "0px",
margin: "0px",
fontSize: "10px",
maxHeight: "20px",
marginTop: "5px"
};

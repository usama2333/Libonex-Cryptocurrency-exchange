import boxesbackground from "../../assests/images/boxesbackground.png";
export const aboutContainer = {
    backgroundImage: `url(${boxesbackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: {xlg : '525px',lg : '380px', md : '380px', sm : '1000px' },
    width: {xlg : 'auto'}
}

export const textBox = {
    width : {xs : '80%' , md :'38%'},
    ml : {xlg : '140px' , lg : '100px', md :'50px', sm :'20px'}
}

export const boxImgSx = {
    position : {md : 'absolute' , sm : 'none'},
    left : {xlg : '-800px' , lg : '-610px', md : '-530px'},
    top : {xlg : '-108px', lg : '-81px',md : '-81px'},
    height : {xlg  : 'auto', lg : '511px',md : '511px',sm : '490px',xs :'250px'},
    width : {xlg : 'auto', lg : '511px', md : '511px',sm :'490px',xs : '250px'},
   mt :{sm : '80px' , md : '0px'},
}

export const aboutText = {
    
    fontFamily: "Helvetica",
    fontSize: {xlg : '54px', lg : '40px' , sm :'45px',xs : '40px'},
    fontWeight: 'bold',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.74",
    letterSpacing: "normal",
    textAlign: {xs : 'center' , md : 'left'},
    // mb : {sm : '50px' , md : '0px', xs :'40px'}
    color: "#fff",
    mb : {xlg : '15px' , lg : '12px', md : '11px', sm : '14px', xs : '10px'},
    mt : {xlg : '70px' , lg : '40px', md :'40px', sm : '40px', xs : '30px'}
    
}

export const aboutPara = {
    opacity : 0.8,
    fontFamily: "Helvetica",
    fontSize: {xlg : '22px' , lg :'16px',md : '16px', sm : '18px', xs : '16px'},
    fontWeight: 'normal',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.64",
    letterSpacing: "0.66px",
    textAlign: "left",
    // mb : {sm : '50px' , md : '0px', xs :'40px'}
    color: "#fff",
    mb : {xlg : '25px' , lg : '20px', md : '19px', sm : '20px',xs :'22px'}
    
}
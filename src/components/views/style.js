import viewsbackground from '../../assests/images/viewsbackground.png';

export const viewsUpperText = {
    fontFamily: "Helvetica",
    fontSize: {xlg : '72px' , lg : '45px', md : '45px', sm :'62px', xs :' 45px'},
    fontWeight: 'bold',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.31",
    letterSpacing: "normal",
    textAlign: "center",
    color : '#fff',
    mb : '15px'
}

export const viewsLowerText = {
    fontFamily: "Helvetica",
    fontSize: {xlg : '22px' , lg :'15px', sm : '17px', xs : '17px'},
    fontWeight: 'normal',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.27",
    letterSpacing: "0.66px",
    textAlign: "center",
    color : '#fff',
    mb :{xs :'30px' ,sm :'40px', md :'0px'}

}

export const viewStackSx = {
    pt : {xlg : '140px' , md : '80px', sm :'80px', xs :'60px'},
    pb : {xlg : '140px' , md : '80px', sm :'80px', xs :'60px'},
}

export const viewCon = { 
    backgroundImage: `url(${viewsbackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}
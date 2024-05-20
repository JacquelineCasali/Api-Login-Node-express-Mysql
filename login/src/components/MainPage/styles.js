import styled from "styled-components";



export const Buscar = styled.div`



display: flex;
align-items: center;
background-color: #f1f1f1;
min-width: 480px;
margin: 6rem  auto 0;
padding: 1rem;
gap:5px;

label{
  /* texto sem quebrar linha */
  flex-shrink: 0;
}

input{
   width: 100%;
  // padding: 0.4rem;

  padding: 10px 25px;
  border: 1px solid #333;
  border-radius: 10px;
  font-size: 20px;
  //margin:  20px 0 ;
  float: none;

  
   }

   .lupa{
 
    /* float:right; */
    margin:0px 0px 0px -40px;
    cursor:pointer;
    display: inline;
  
  } 
 
`;
export const Listar = styled.div`
width: 480px;
margin: 1rem auto;

.title{
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}


`
export const Lista = styled.ul`
list-style: none;
//margin: 0;
padding: 0;
width: 480px;
 margin: 0 auto;
.item{
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-bottom: 1px solid #d5d5d5;
  padding: 0.5rem;
}

/* tirar a ultima borda */

.item:last-child{
 
  border-bottom: none
 
}

 .item .info{
flex: 1;
}
 .item .info .name{
font-size: 1.5rem;
  }




`


export const Cadastrar = styled.div`


display: flex;
align-items: center;
background-color: #f1f1f1;
min-width: 480px;
margin: 0  auto;
padding: 1rem;
gap:5px;

label{
  /* texto sem quebrar linha */
  flex-shrink: 0;
}

input{
  width: 100%;
  padding: 0.4rem;
   }
 
`;


  
 

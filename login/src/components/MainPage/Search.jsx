import { useState } from "react";

import { Buscar } from "./styles";
//pesquisa
const Search=({onSearch})=>{
 //busca
 const [query, setQuery] = useState('');
    // controle que o usuario está digitando 

    const handleClear=()=>{
        setQuery('');
        onSearch('');

        } 
     

    return(
        <>
<Buscar>
     
     <label htmlFor="query">Procurar:</label>
        {/* filtro */}
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
       
          placeholder="Pesquise aqui"
        />

    <button onClick={handleClear}>Limpar</button>
    {/* passa a função anonima  */}
    <button onClick={()=>onSearch(query)}>Procurar</button>

    </Buscar>


    
    </>
)

}
export default Search;
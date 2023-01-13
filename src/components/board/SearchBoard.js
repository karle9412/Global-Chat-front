import Header from "../Header";
import board from "./Board";
import { useState, Link } from "react";

function SearchBoard() {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = board.filter((item) => item.title.includes(search) || item.content.includes(search));
        setSearchResult(result);
    };
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange} />
            <button type="submit">검색</button>
        </form>
        <div>
            {searchResult.map((item) => (
            <div key={item.id}>
                <Link to={`/board/${item.id}`}>{item.title}</Link>
            </div>
            ))}
        </div>
        </>
    );
}

export default SearchBoard;
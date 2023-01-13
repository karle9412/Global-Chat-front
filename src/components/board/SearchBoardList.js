
import SearchList from "./SearchList";
import { authheader } from '../../service/ApiService';

const SearchBoardList = ({searchDataList}) => {

    authheader();

    return (
        <>
        <div className="searchItem">
            <div className="content">
                {searchDataList.map((item) => (
                    <SearchList key={item.bno} {...item} />
                ))}
            </div>
        </div>
        </>
    )

};


export default SearchBoardList;
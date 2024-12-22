import "./MainList.css";

const MainList = ({results=2}) => {
    return (
        <div>
            <h1>List</h1>
            <p>There is list of elements</p>
            {results.length > 0 ? (
                <Items items={results} />
            ) : (
                <marquee>There is no data</marquee>
            )}
        </div>
    );
}

export default MainList;
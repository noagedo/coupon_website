import NavBar from "./NavBar";

export const HomePage = () => {
    return (
        <div>
           
            <label htmlFor="site-search">Search :</label>
            <input type="search" id="site-search" name="q" />
            <button>Search</button>
        </div>
    );
};

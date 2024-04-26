export const NavBar = () => {
    return <>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#Login">Login</a>
            <a href="#WishList">WishList</a>
            <a href="#Admin">Admin</a>
            <div class="dropdown">
                <a href="#Category" class="dropbtn">Category</a>
                <div class="dropdown-content">
                    <a href="#">Category 1</a>
                    <a href="#">Category 2</a>
                    <a href="#">Category 3</a>
                </div>
            </div>
        </div>
    </>
    
}
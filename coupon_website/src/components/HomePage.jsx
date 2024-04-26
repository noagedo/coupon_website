import myVideo from '../assets/Untitled design.mp4'
import myVideotwo from '../assets/zara.mp4';
export const HomePage = () => {
    return (
        <div>
           <br /><br />
           <div className='SearchContainer'>
  <div className='Search'>
    <input type="search" id="site-search" name="q" className='searchInput' />
    <button className='serchBotton'>Search</button>
  </div>
</div>


            <br />
            <br />
            <video autoPlay loop muted src={myVideo} className="navbar-video"></video>
            <br />
            <video autoPlay loop muted src={myVideotwo} className="navbar-video"></video>
        </div>
    );
};

export default HomePage;
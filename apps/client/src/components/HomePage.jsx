import myVideo from '../assets/Untitled design.mp4'
import myVideo2 from '../assets/zara.mp4';
import myVideo3 from '../assets/new Collection.mp4';
import myphoto from '../assets/its time for.png'

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
          
    <video autoPlay loop muted src={myVideo3} className="navbar-image"></video>
    <br /><br />
            <div className="gallery">
      <div className="row">
      <video autoPlay loop muted src={myVideo} className="navbar-video"></video>
      <video autoPlay loop muted src={myVideo2} className="navbar-video"></video>
      <img src={myphoto} alt="My Photo" className="navbar-video" />
      </div>
    </div>
            
            <br />
            
        </div>
    );
};

export default HomePage;

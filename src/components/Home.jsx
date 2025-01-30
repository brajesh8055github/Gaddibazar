import Download from '../components/Download'
import Filter from '../components/Filter'
import Hero from '../components/Hero'
import PopularCar from '../components/PopularCar'
import Recently from '../components/Recently'
import RecentlyLaunched from '../components/RecentlyLaunched'
import Recommended from '../components/Recommended'
import Sale from '../components/Sale'
import UsedCar from '../components/UsedCar'
const Home = () => {
  return (
    <div>
         <Hero/>
         <RecentlyLaunched/>
         <Filter/>
         <PopularCar/>
         <UsedCar/>
         <Recommended/>
         <Recently/>
         <Sale/>
         <Download/>
    </div>
  )
}

export default Home
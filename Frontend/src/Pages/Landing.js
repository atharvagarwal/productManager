
import styles from './index.module.css'
import About from '../Components/About'
import  Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Faq from '../Components/Faq'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.cross_fade_container}>
  <div className={styles.from}>
    <img src='1.png' className='w-full' alt=''/>
  </div>
  <div className={styles.to}>
  <img src='2.png' className='w-full' alt=''/>
  </div>
</div>
    <About/>
    <Faq></Faq>
    {/*<div className='relative w-full'>
    <img src='/mainCat.png' className='w-[100%] mt-36 p-2 md:p-0'></img>
    <button className='absolute top-10 bottom-10 left-10 right-10  text-yellow-300 text-5xl font-bold'><a href="/catalogue">View Items</a></button>
  </div>*/}
    <Footer></Footer>
    </>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import User from './index'

const Home = ({ searchParams }) => {
  const back = User;
  return (
    <div>
    <main className={styles.main}>
      <Link href={{ pathname: "/buyerInfo", query: { prop1: back } }}>Wow</Link>
      <Link href={{pathname:"/dashboard", query:{data:searchParams} }}>dashboard</Link>
    </main>
    </div>
  )
}

export default Home;

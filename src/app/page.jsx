import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* By default next js doesnt allow to use extenal domains , we need to add config in next config */}
      {/* https://images.pexels.com/photos/5214266/pexels-photo-5214266.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load */}
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.description}>Turning your ideas into reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}></div>
      <Image src={hero} className={styles.img} alt='hero' priority={true} />
    </div>
  )
}

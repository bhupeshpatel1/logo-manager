import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header>
          <svg className={styles.uswitchlogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" version="1.1" fill="#141423">
              <path d="M 0,0 V 207 H 207 V 0 Z m 162.21,120.76 c 0,36.45 -22.66,55.76 -58.71,55.76 -35.26,0 -58.71,-19.31 -58.71,-55.76 V 33.28 h 26.57 v 87.67 c 0,22.06 12,32.51 32.11,32.51 20.11,0 32.11,-10.45 32.11,-32.51 V 33.28 h 26.6 z"></path>
          </svg>
        <h1 className={styles.title}>
          Energy suppliers logo manager
        </h1>
      </header>

      <main className={styles.main}>
        
        <p className={styles.description}>
          Select supplier to edit logo
        </p>

        <div className={styles.grid}>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

          <a /*href="https://nextjs.org/docs"*/ className={styles.card}>
            <img src="https://uswitch-cms.imgix.net/uswitch-imgix/energy/supplier-logos/british-gas.png?w=122&h=50&fit=fill&bg=0fff&fm=png8"></img>
            <p>Insert Supplier Name</p>
          </a>

        </div>
      </main>
    </div>
  )
}

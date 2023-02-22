import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Icons/Icons.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Icons = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles['container']}>
      <div className={styles['container_icono_disenio']} data-aos="zoom-in-right">
        <Link href="/">
          <Image
            src="/assets/icono_disenio.svg"
            alt="Icono diseño"
            width={200}
            height={200}
          />
        </Link>
        <p className={styles['texto_icono']}>Diseño</p>
      </div>
      <div className={styles['container_icono_prog']} data-aos="zoom-in-left">
        <Link href="/">
          <Image
            src="/assets/icono_prog.svg"
            alt="Icono programación"
            width={200}
            height={200}
          />
        </Link>
        <p className={styles['texto_icono']}>Programación</p>
      </div>
    </div>
  );
};

export default Icons;

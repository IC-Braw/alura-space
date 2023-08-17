import React from 'react'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt='Ícone da home' />
          <a href='/'>Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt='Ícone de likes' />
          <a href='/'>Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt='Ícone de vistos' />
          <a href='/'>Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novasInativo} alt='Ícone com uma estrela brilhante' />
          <a href='/'>Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda} alt='Ícone de lâmpada' />
          <a href='/'>Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}

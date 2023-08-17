import React from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss';
import itens from './fotos.json';
import Cards from './Cards';

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}

import ListComics from '../ListComics/ListComics'
import React from 'react'
import styles from './ListContainer.module.css'

function ListContainer() {
  return (
    <div className={styles.container}>
        <ListComics />
    </div>
  )
}

export default ListContainer
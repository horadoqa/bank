'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detecta tamanho da tela
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <nav className={styles.menuContainer}>
      {isMobile && (
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      )}

      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.button} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/cadastro" className={styles.button} onClick={() => setIsOpen(false)}>
          Cadastro
        </Link>
        <Link href="/busca" className={styles.button} onClick={() => setIsOpen(false)}>
          Busca
        </Link>
      </div>

      {/* Overlay escuro para mobile */}
      {isMobile && isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </nav>
  )
}

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import styles from '@/components/nav.module.css'
import Nav from 'react-bootstrap/Nav'
import { TfiAlignJustify } from 'react-icons/tfi'
import { TfiClose } from 'react-icons/tfi'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function BrandNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./YouBike.png" width={100} height={40} alt="nav-logo" />
          </Navbar.Brand>
          <Nav className={`me-auto d-none d-md-flex ${styles['nav-group']}`}>
            <Nav.Link
              className={`mx-3 ${styles['nav-link']}`}
              href="https://www.youbike.com.tw/region/main/signup-way/"
            >
              使用說明
            </Nav.Link>
            <Nav.Link
              className={`mx-3 ${styles['nav-link']}`}
              href="https://www.youbike.com.tw/region/main/rate/"
            >
              收費方式
            </Nav.Link>
            <Nav.Link className={`mx-3 ${styles['nav-link']}`} href="#">
              站點資訊
            </Nav.Link>
            <Nav.Link
              className={`mx-3 ${styles['nav-link']}`}
              href="https://www.youbike.com.tw/region/main/news/status/"
            >
              最新消息
            </Nav.Link>
            <Nav.Link
              className={`mx-3 ${styles['nav-link']}`}
              href="https://activity.youbike.com.tw/"
            >
              活動專區
            </Nav.Link>
          </Nav>
          <Button
            className={`d-none d-md-block ${styles['button']}`}
            type="button"
          >
            登入
          </Button>
          <Button
            className={`d-block d-md-none ${styles['btn-tfiAlignJustify']}`}
            type="button"
            onClick={toggleMenu}
          >
            {menuOpen ? <TfiClose /> : <TfiAlignJustify />}
          </Button>
        </Container>
        {menuOpen && (
          <div className={`${styles['mobile-bg']} d-md-none`}>
            <Nav.Link
              className={`my-3 mx-4 ${styles['mb-link']}`}
              href="https://www.youbike.com.tw/region/main/signup-way/"
            >
              使用1說明
            </Nav.Link>
            <Nav.Link
              className={`my-3 mx-4 ${styles['mb-link']}`}
              href="https://www.youbike.com.tw/region/main/rate/"
            >
              收費方式
            </Nav.Link>
            <Nav.Link className={`my-3 mx-4 ${styles['mb-link']}`}>
              站點資訊
            </Nav.Link>
            <Nav.Link
              className={`my-3 mx-4 ${styles['mb-link']}`}
              href="https://www.youbike.com.tw/region/main/news/status/"
            >
              最新消息
            </Nav.Link>
            <Nav.Link
              className={`my-3 mx-4 ${styles['mb-link']}`}
              href="https://activity.youbike.com.tw/"
            >
              活動專區
            </Nav.Link>
            <Button className={`my-3 mx-4 ${styles['button']}`} type="button">
              登入
            </Button>
          </div>
        )}
      </Navbar>
    </>
  )
}

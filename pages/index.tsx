import { Container } from "react-bootstrap";
import Link from "next/link";
import Hero from "../components/Hero";

export default function Inicio() {
  return (
    <>
      <style jsx>{`
        body {
          background-color: red !important;
        }
      `}</style>
      <header>
        <Container className="header__container">
          <a href="/">
            <img src="favicon.png" />
          </a>
          <nav>
            <li>
              <>
                <Link href="/">Inicio</Link>
                <img src="/assets/img/home.svg" />
              </>
            </li>
            <li>
              <Link href="/academia">Academia</Link>
              <img src="/assets/img/academy.svg" />
            </li>
            <li>
              <Link href="/clases-en-vivo">Clases en vivo</Link>
              <img src="/assets/img/online-classes.svg" />
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
            <li className="nav__comenzar-btn">
              <Link href="/comenzar">Comenzar</Link>
            </li>
          </nav>
        </Container>
      </header>
      <Hero />
    </>
  );
}

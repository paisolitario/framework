import './Header.css'
export default function Header() {
  return (
    <header>
      <img src='./src/componentes/header/barbie.png'  className='barbie-img'/>
      <div>
       
        <h2 className='oi'>𝓼𝓮𝓳𝓪 𝓺𝓾𝓮𝓶 𝓿𝓸𝓬𝓮 𝓺𝓾𝓲𝓼𝓮𝓻!</h2>
      </div>
      <nav className='navbar'>
        <ul>
          <li>
            <a href="#">PAGINA INICIAL</a>
          </li>
          <li>
            <a href='#'>SOBRE</a>
          </li>
          <li>
            <a href='#'>PRODUTOS</a>
          </li>
          <li>
            <a href='#'>NOVIDADES</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

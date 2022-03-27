import '../style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <div id="section">
    <ul id="avengersList">

    </ul>
  </div>
`;

const avengersList = document.querySelector<HTMLInputElement>('#avengersList')!;

(() => {
  type Avenger = {
    name: string;
    weapon: string;
  }

  const IROMAN: Avenger = {
    name: 'Iroman',
    weapon: 'Armorsuit'
  }

  const CAP_AMERICA:Avenger = {
    name: 'Cap. America',
    weapon: 'Escudo'
  }

  const THOR:Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }


  const AVENGERS:Avenger[] = [IROMAN, CAP_AMERICA, THOR];

  for (const avenger of AVENGERS) {
    console.log(avenger);
    avengersList.innerHTML += `<ol>${avenger.name} - ${avenger.weapon}</ol>`;
    
  }
})()



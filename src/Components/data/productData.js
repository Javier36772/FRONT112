import HyperLi from "../images/HyperLi.jpg";
import LiesP from "../images/LiesP.jpg";
import Persona3 from "../images/Persona_3.jpg";
import ScrollsOn from "../images/Scrolls.jpg";
import GuiltyGear from "../images/Guilty_Gear.jpg";
import HellDivers from "../images/HellDivers.jpg";
import MW3 from "../images/MW3.jpg"
import RiskRa from '../images/RiskRain.jpg'

/* Plantilla de productos
 {
   name: 
   price: 
   image: 
   category: 
   seccion: 
   cantidad: 
 },
*/

const products = [
  {
    name: "HellDivers 2",
    price: "635 MXN",
    image: "https://imgs.search.brave.com/x3NjF8ItY8AfQT1begSrIrT90KCKeHVH3EV2oDCk20I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZ2FtZWNyYXRl/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDUvaGVs/bC03NzB4NDMzLmpw/ZWc",
    cuenta: "steam",
    det:
      "HELLDIVERS™ es un intenso juego de disparos cooperativo y de doble joystick de los creadores de Magicka. Como parte de una unidad selecta llamada HELLDIVERS, los jugadores deben trabajar juntos para proteger SUPER EARTH y derrotar a los enemigos de la humanidad en una intensa guerra intergaláctica.",
      prices: {
        Global: "Precio: $635",
        LATAM: "Precio: 500",
        Turkey: "Precio: 340",
        Argentina: "Precio: 290"
      }
  },
  {
    name: "Guilty Gear Strive",
    price: "867 MXN",
    image: "https://imgs.search.brave.com/63WS1JHJeg49Fw9YVa8uPEpDlsFPJkU4VzcdlJt64hA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9pbWcvcm5k/LzIwMjEwMS8yMDEw/L0JiVWRSektxZnJS/UmRsZUVqSnhEQWRH/Ry5qcGc",
    category: "Novedades",
    det:
      "Después de derrotar la amenaza conocida como Voluntad Universal , Sol Badguy disfrutó de un breve momento de paz... Hasta que escuchó la impactante noticia. Asuka R. Kreutz, conocido como Ese hombre que dejó su huella como el peor criminal de toda la historia al crear Gears e iniciar las Cruzadas , se rindió al gobierno de Estados Unidos.",
      prices: {
        Global: "Precio: $867",
        LATAM: "Precio: $675",
        Turkey: "Precio: $304",
        Argentina: "Precio: $422"
      },
      Fav : "Si",
  },
  {
    name: "Persona 3 Reload",
    price: "1300 MXN",
    image: "https://imgs.search.brave.com/M4UTZLixaG8Nj4wFOwGne-ZapXLLHYjLxy6h8hjsoXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZW5l/cmFjaW9ueGJveC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTEvcGVyc29u/YS0zLXJlbG9hZF8y/MDIzLTE1MzZ4ODY0/LmpwZw",
    category: "Novedades",
    det:
      "Ponte en la piel de un estudiante recién llegado que se ve arrojado a un destino inesperado cuando entra en la hora escondida entre un día y el siguiente. Despierta un increíble poder y persigue los misterios de la Hora Oscura, lucha por tus amigos y deja huella en su memoria. Remake de Persona 3 (2006).",
      prices: {
        Global: "Precio: $1300",
        LATAM: "Precio: $1300",
        Turkey: "Precio: $750",
        Argentina: "Precio: $900"
      },
      Fav : "Si",
  },
  {
    name: "Modern Warfare III",
    price: "1700 MXN",
    image: "https://imgs.search.brave.com/HJEHP_KaI6hmqiBkGuYu8v61u3m3N2bxtTxbAnYkmRc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9iYnljb25zb2xh/cy5jb20vc2l0ZXMv/bmF2aS5heGVsc3By/aW5nZXIuZXMvcHVi/bGljL21lZGlhL2lt/YWdlLzIwMjMvMTEv/Y2FsbC1kdXR5LW1v/ZGVybi13YXJmYXJl/LTMtMjAyMy0xNjk5/Mjk1NDM5MzIxLTMy/MTU2MTIuanBnP3Rm/PTM4NDB4",
    category: "Novedades",
    det:
      "Call of Duty: Modern Warfare III (abreviado COD: MW III) es un videojuego de disparos en primera persona desarrollado por Infinity Ward y Sledgehammer Games y publicado por Activision",
      prices: {
        Global: "Precio: $1700",
        LATAM: "Precio: $1400",
        Turkey: "Precio: $875",
        Argentina: "Precio: $979"
      },
      Carrito : "Si",
  },

  {
    name: "Hyper Light Drifter",
    price: " ̶1̶7̶9̶ $71.99 MNX",
    image: "https://imgs.search.brave.com/CYYnU8r3Crg1-NcNPckJa--AqZ5Nb_vlrvl_U3GcLK8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGNfbHBhZCx3XzEy/NDAvYl93aGl0ZS9m/X2F1dG8vcV9hdXRv/L25jb20vZXNfTEEv/Z2FtZXMvc3dpdGNo/L2gvaHlwZXItbGln/aHQtZHJpZnRlci1z/cGVjaWFsLWVkaXRp/b24tc3dpdGNoL2hl/cm8",
    category: "Ofertas",
    det:"Explora un mundo hermoso, amplio y arruinado, plagado de peligros y tecnologías perdidas. Los ecos de un pasado oscuro y violento resuenan en una tierra salvaje repleta de tesoros y sangre. Hyper Light Drifter es un juego de rol de aventuras y acción que emula a los mejores clásicos de 16 bits con mecánicas modernizadas y diseños a mayor escala.",
    prices: {
      Global: "Precio: 1̶7̶9̶ $71.99",
      LATAM: "Precio: $105",
      Turkey: "Precio: $60",
      Argentina: "Precio: $70"
    }
  },
  {
    name: "Lies of P",
    price: "$840 MXN",
    image: "https://imgs.search.brave.com/snKl4Vs0wLiuIl5C1A0hZiP-Czfg0MSe3c-7xkLD5_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9iYnljb25zb2xh/cy5jb20vc2l0ZXMv/bmF2aS5heGVsc3By/aW5nZXIuZXMvcHVi/bGljL21lZGlhL2lt/YWdlLzIwMjMvMDkv/bGllcy1wLTMxMzM3/ODQuanBnP3RmPTM4/NDB4",
    category: "Ofertas",
    det:"Escenario Inspirado en la novela de Carlo Collodi Las aventuras de Pinocho, Lies of P cuenta la historia de Pinocho, un títere robótico que se diferencia de otros títeres en su capacidad de mentir, que juega un papel en las decisiones importantes de la historia.",
    prices: {
      Global: "Precio: 1̶2̶0̶0̶ $840",
      LATAM: "Precio: $500",
      Turkey: "Precio: $300",
      Argentina: "Precio: $400"
    },
    Carrito : "Si",
  },
  
  {
    name: "The Elder Scrolls Online",
    price: "3̶5̶9̶ $89.75 MXN",
    image: "https://imgs.search.brave.com/ItTOuatsn7Vh94ojNOKmFKOq_aKz5iJIsyDkLXklCrY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMueGJveHNlcnZp/Y2VzLmNvbS9hc3Nl/dHMvODYvMmQvODYy/ZDI2ZWYtNjc2My00/YzMwLWJmMmMtNWVi/ZDA3N2E3YmE2Lmpw/Zz9uPTI5Mzg0MzBf/R0xQLVBhZ2UtSGVy/by0wXzEwODN4MTIy/Mi5qcGc",
    category: "Ofertas",
    det:"Explora un mundo de fantasía online vasto y creciente construido sobre el folclore y los mitos de la serie premiada The Elder Scrolls. Únete a más de 22 millones de jugadores en el premiado RPG online multijugador y experimenta una historia en constante crecimiento en un mundo persistente de Elder Scrolls.",
    prices: {
      Global: "Precio: 3̶5̶9̶ $89.75",
      LATAM: "Precio: $275",
      Turkey: "Precio: $150",
      Argentina: "Precio: $200"
    }
  },

  {
    name: "Risk of Rain 2",
    price: " ̶2̶3̶3̶.̶9̶9̶  $116.99 MXN",
    image: "https://imgs.search.brave.com/Z_yDx9gxeS2afCcYhUVe_Zjc7Pqx7weayiOPhk0ZwWU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxODA0/NzYuanBn",
    category: "Ofertas",
    det:
      "Lucha contra hordas de monstruos enloquecidos junto a tus amigos o en solitario para lograr escapar de un planeta alienígena sumido en el caos. Combina el botín de maneras asombrosas y domina cada personaje hasta encarnar la destrucción que tanto te aterraba tras tu primer aterrizaje forzoso.",
      prices: {
        Global: "Precio: 2̶3̶3̶.̶9̶9̶ $116.99",
        LATAM: "Precio: $150",
        Turkey: "Precio: $80",
        Argentina: "Precio: $90"
      }
  },

  {
    name: "Minecraft",
    price: " ̶$785.99 MXN",
    image: "https://imgs.search.brave.com/3jb5f7MrZSAnlrZ_R07ZLsGA6h24YOaBg1xehVBz-_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmVzdC1taW5l/Y3JhZnQtcGljdHVy/ZXMtbXAzMTJ1YTFo/dTRteGw5OC5qcGc",
    category: "Clasicos",
    det:
      "Lucha contra hordas de monstruos enloquecidos junto a tus amigos o en solitario para lograr escapar de un planeta alienígena sumido en el caos. Combina el botín de maneras asombrosas y domina cada personaje hasta encarnar la destrucción que tanto te aterraba tras tu primer aterrizaje forzoso.",
      prices: {
        Global: "Precio: 2̶3̶3̶.̶9̶9̶ $116.99",
        LATAM: "Precio: $150",
        Turkey: "Precio: $80",
        Argentina: "Precio: $90"
      }
  },
  
  
 

];

export default products; 

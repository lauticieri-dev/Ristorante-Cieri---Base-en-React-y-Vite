import pizzaImg from '../assets/images/carta/pizza.jpg';
import carbonaraImg from '../assets/images/carta/carbonara.jpg';
import bisteccaImg from '../assets/images/carta/Bistecca alla fiorentina.png';
import bruschettaImg from '../assets/images/carta/Bruschetta.jpg';
import malloredusImg from '../assets/images/carta/Malloredus.jpg';
import amarettoImg from '../assets/images/carta/Amaretto.jpg';
import genovesaImg from '../assets/images/carta/Genovesa.jpg';
import sodaItalianaImg from '../assets/images/carta/soda italiana.jpg';

export const menuData = {
  platos: [
    {
      // Menú completo según categorías
      id: 1,
      category: "Pizzas",
      image: pizzaImg,
      items: [
        { name: "Pizza Margherita", price: "$15000" },
        { name: "Pizza Fungyi", price: "$17000" },
        { name: "Pizza Napolitana", price: "$15000" },
        { name: "Pizza Quattro Stagioni", price: "$18000" },
        { name: "Pizza Pepperoni", price: "$16000" },
        { name: "Pizza Capricciosa", price: "$17500" },
        { name: "Pizza Diavola", price: "$16500" },
        { name: "Pizza Prosciutto", price: "$16000" }
      ]
    },
    {
      id: 2,
      category: "Pastas",
      image: carbonaraImg,
      items: [
        { name: "Pasta Carbonara", price: "$12000" },
        { name: "Pasta Bolognesa", price: "$13400" },
        { name: "Sorrentinos", price: "$14000" },
        { name: "Lasaña", price: "$14600" },
        { name: "Espaguetis", price: "$12900" },
        { name: "Pasta Amatriciana", price: "$13000" },
        { name: "Pasta Puttanesca", price: "$12800" },
        { name: "Fettuccine Alfredo", price: "$13500" },
        { name: "Ravioles de Ricota", price: "$14200" },
        { name: "Penne all'Arrabbiata", price: "$12600" }
      ]
    },
    {
      id: 3,
      category: "Carnes",
      image: bisteccaImg,
      items: [
        { name: "Bistecca alla Fiorentina", price: "$25000" },
        { name: "Osso Buco", price: "$22000" },
        { name: "Saltimbocca", price: "$20000" },
        { name: "Vitello Tonnato", price: "$19000" },
        { name: "Costoletta alla Milanese", price: "$21000" },
        { name: "Brasato al Barolo", price: "$23000" },
        { name: "Scaloppine al Limone", price: "$18500" }
      ]
    },
    {
      id: 4,
      category: "Antipasti",
      image: bruschettaImg,
      items: [
        { name: "Bruschetta", price: "$8000" },
        { name: "Antipasto Misto", price: "$12000" },
        { name: "Carpaccio", price: "$15000" },
        { name: "Prosciutto e Melone", price: "$11000" },
        { name: "Vitello Tonnato", price: "$13500" },
        { name: "Burrata", price: "$14000" },
        { name: "Olive Ascolane", price: "$9000" },
        { name: "Caponata", price: "$8500" }
      ]
    },
    {
      id: 5,
      category: "Risotti",
      image: malloredusImg,
      items: [
        { name: "Risotto ai Funghi", price: "$16000" },
        { name: "Risotto alla Milanese", price: "$15500" },
        { name: "Risotto ai Frutti di Mare", price: "$18000" },
        { name: "Risotto al Parmigiano", price: "$14500" },
        { name: "Risotto alle Verdure", price: "$14000" }
      ]
    }
  ],
  bebidas: [
    {
      id: 6,
      category: "Vinos Tintos",
      image: amarettoImg,
      items: [
        { name: "Chianti Classico", price: "$12000" },
        { name: "Barolo", price: "$18000" },
        { name: "Brunello di Montalcino", price: "$22000" },
        { name: "Montepulciano", price: "$10000" },
        { name: "Nero d'Avola", price: "$9500" }
      ]
    },
    {
      id: 7,
      category: "Vinos Blancos",
      image: genovesaImg,
      items: [
        { name: "Pinot Grigio", price: "$8500" },
        { name: "Soave", price: "$9000" },
        { name: "Vermentino", price: "$9500" },
        { name: "Frascati", price: "$8000" },
        { name: "Prosecco", price: "$10000" }
      ]
    },
    {
      id: 8,
      category: "Licores",
      image: amarettoImg,
      items: [
        { name: "Amaretto", price: "$6000" },
        { name: "Limoncello", price: "$5500" },
        { name: "Grappa", price: "$7000" },
        { name: "Sambuca", price: "$6500" },
        { name: "Frangelico", price: "$6800" }
      ]
    },
    {
      id: 9,
      category: "Bebidas sin alcohol",
      image: sodaItalianaImg,
      items: [
        { name: "Agua", price: "$2000" },
        { name: "Soda Italiana", price: "$3500" },
        { name: "Jugo Natural", price: "$3500" },
        { name: "Espresso", price: "$2500" },
        { name: "Cappuccino", price: "$3000" },
        { name: "Aranciata", price: "$3200" },
        { name: "Limonata", price: "$3200" }
      ]
    },
    {
      id: 10,
      category: "Dolci",
      image: amarettoImg,
      items: [
        { name: "Tiramisú", price: "$7000" },
        { name: "Panna Cotta", price: "$6500" },
        { name: "Cannoli Siciliani", price: "$7500" },
        { name: "Gelato", price: "$5000" },
        { name: "Affogato", price: "$5500" },
        { name: "Semifreddo", price: "$6800" }
      ]
    }
  ]
};
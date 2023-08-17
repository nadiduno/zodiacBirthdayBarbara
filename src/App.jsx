import { useEffect, useState } from "react"
import "./App.css"
export function App() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [randomNumber, setRandomNumber] = useState(1);
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 14);
  };


  useEffect(() => {

    fetch("https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0")
      .then((response) => response.json())

      .then((data) => {
        setAvatar(data.record.Zodic[randomNumber].avatar);
        setName(data.record.Zodic[randomNumber].name);
        setDescription(data.record.Zodic[randomNumber].description);
      })

      .catch((error) => console.error(error));
  }, [randomNumber]);


  useEffect(() => {

    const interval = setInterval(() => {

      setRandomNumber(generateRandomNumber());
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="App">
      <h1>Feliz Aniversário!</h1>
      <span className="text1">Este é um presente especial para você,</span>
      <span className="text1 text2">Bárbara</span>
      <span className="text1">que é fã dos Cavaleiros do Zodíaco.</span>
      <img src={avatar} title={description} alt={name} />
      <h3>{name}</h3>
      <span className="text3">Que você tenha um ano maravilhoso.</span>
    </div>
  );
}




"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./harryApi.module.css";

const HarryApi = () => {
  const url = "https://hp-api.onrender.com/api/characters"; // API URL

  const [films, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setFilmes(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar filmes na api");
        setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
        setLoading(false);
      }
    };
    fetchFilmes();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Estamos carregando as informações para você...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Bem-vindo ao Mundo de Harry Potter</h1>
        <p>Explore os personagens e suas características!</p>
      </header>
      <section className={styles.characterList}>
        {films.map((character) => (
          <article key={character.id} className={styles.characterCard}>
            <img
              src={character.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIHtmW355qafWOnXxIZzExrDPaMjkdDZ4mg&s"}
              alt={character.name || "Imagem do personagem"}
              className={styles.characterImage}
            />
            <div className={styles.characterInfo}>
              <h2>{character.name}</h2>
              <p><strong>Casa:</strong> {character.house || "Desconhecida"}</p>
              <p><strong>Ator:</strong> {character.actor || "Não informado"}</p>
              <p><strong>Espécie:</strong> {character.species || "Desconhecida"}</p>
              <p><strong>Data de nascimento:</strong> {character.dateOfBirth || "Não informada"}</p>
              <p><strong>Patrono:</strong> {character.patronus || "Desconhecido"}</p>
              <p><strong>Ascendência:</strong> {character.ancestry || "Desconhecida"}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default HarryApi;
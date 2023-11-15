import express from "express";
import fs from "fs";
import path from "path";

const Api = () => {
  const app = express();
  const port = 3001; // Utilisez un port différent de celui de votre frontend React
  const DATA_FILE = path.join(__dirname, "actus.json");
  const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 heures en millisecondes

  interface DataCache {
    instagram: any; // Remplacez 'any' par le type approprié
    twitter: any; // Remplacez 'any' par le type approprié
    lastUpdated: string;
  }

  // Fonctions pour lire et écrire dans le fichier JSON
  const readData = (): DataCache | null => {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    }
    return null;
  };

  const writeData = (data: DataCache): void => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  };

  // Fonction pour récupérer les données de l'API
  const fetchData = async (): Promise<DataCache> => {
    // Ajoutez votre logique pour récupérer les données Instagram et Twitter
    const instagramData = await fetchInstagramData();
    const twitterData = await fetchTwitterData();
    return {
      instagram: instagramData,
      twitter: twitterData,
      lastUpdated: new Date().toISOString(),
    };
  };

  // Endpoint pour obtenir les données
  app.get("/data", async (req, res) => {
    try {
      const cachedData = readData();
      if (
        cachedData &&
        new Date().getTime() - new Date(cachedData.lastUpdated).getTime() <
          CACHE_DURATION
      ) {
        res.json(cachedData);
      } else {
        const newData = await fetchData();
        writeData(newData);
        res.json(newData);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur");
    }
  });

  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });

  // Implémentez fetchInstagramData et fetchTwitterData
  async function fetchInstagramData(): Promise<any> {
    // Votre logique ici
    return {};
  }

  async function fetchTwitterData(): Promise<any> {
    // Votre logique ici
    return {};
  }
};

export default Api;

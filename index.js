import express from "express";
import ".env/config";

import livresRoutes from "./routes/livres.js";
import adherentsRoutes from "./routes/adherents.js";
import emprunts from "./routes/emprunts.js";


const app = express();
app.use(express.json());

app.use("/livres", livresRoutes);
app.use("/adherents", adherents);
app.use("/emprunts, emprunts);












// 3. Les emprunts

// GET /emprunts

app.get("/emprunts", (req, res) => {
    res.status(200).json(emprunts);
})


// POST /emprunts

app.post("/emprunts", (req, res) => {

  const { livreId, adherentId } = req.body;

  const livre = livres.find(l => l.id === livreId);
  
  const adherent = adherents.find(a => a.id === adherentId);

  if (!livre || !adherent) {
    return res.status(404).json({ erreur: "Livre ou adhérent introuvable" });
  }

  if (!livre.disponible) {
    return res.status(400).json({ erreur: "Le livre n'est pas disponible" });
  }

  
  livre.disponible = false;

  const nouvelEmprunt = {
    id: emprunts.length > 0 ? emprunts[emprunts.length - 1].id + 1 : 1,
    livreId,
    adherentId,

  };

  emprunts.push(nouvelEmprunt);

  res.status(201).json(nouvelEmprunt);
  
});



// PATCH /emprunts/:id/retour 

app.patch("/emprunts/:id/retour", (req, res) => {
    
})





app.listen(3000, () => console.log("Serveur sur http://localhost:3000"));




















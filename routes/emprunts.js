import {Router} from routes ;

const router = Router();


let emprunts = [];


// GET /emprunts

router.get("/emprunts", (req, res) => {
    res.status(200).json(emprunts);
})


// POST /emprunts

router.post("/emprunts", (req, res) => {

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


export default router;
import {Router} from routes ;

const router = Router();

let livres = [
   { id: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", disponible: true },
   { id: 2, titre: "Nedjma", auteur: "Kateb Yacine", disponible: true },
   { id: 3, titre: "L'Alchimiste", auteur: "Paulo Coelho", disponible: true }
];


// GET /livres
router.get("/", (req, res) => res.json(livres));


// GET /livres/:id

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const livre = livres.find(p => p.id === id);

  if (!livre) {
    return res.status(404).json({ erreur: "Livre non trouvé" });
  }
  res.status(200).json(livre);
});


// POST /livres

router.post("/livres", (req, res) => {
   
   const { titre, auteur } = req.body;
    
   if (!titre || !auteur) {
      return res.status(400).json({ erreur: "Le titre et l'auteur sont obligatoires" });
   }
    
   const nouveauLivre = {
    id: livres.length > 0 ? livres[livres.length - 1].id + 1 : 1,
    titre,
    auteur,
    disponible: true
  };
   
   livres.push(nouveauLivre);
   
   res.status(201).json(nouveauLivre);
});


// PATCH /livres/:id

router.patch("/livres/:id", (req, res) => {

    const livre = livres.find(l => l.id === parseInt(req.params.id));

    if (!livre) {
        return res.status(404).json({ erreur: "Livre non trouvé"});
    }

    const { titre, auteur} = req.body;

    if (titre !== undefined) livre.titre = titre;
    if (auteur !== undefined) livre.auteur = auteur;

    res.json(livre);


})




export default router;


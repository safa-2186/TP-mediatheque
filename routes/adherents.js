import {Router} from routes ;

const router = Router();

let adherents = [
   { id: 1, nom: "Salma", email: "salma@exemple.ma" },
   { id: 2, nom: "Yassine", email: "yassine@exemple.ma" }
];


// GET /adherents 

router.get("/adherents", (req, res) => {
    res.status(200).json(adherents);
})


// POST /adherents

router.post("/adherents", (req, res) => {

    const { nom, email } = req.body;

    if (!nom || !email) {
        return res.status(400).json({ erreur: "Le nom et l'email sont obligatoires"});
    }
    
    const nouvelAdherent = {
        id: adherents.length > 0 ? adherents[adherents.length - 1].id + 1 : 1,
        nom,
        email
    };

    adherents.push(nouvelAdherent);
    res.status(201).json(nouvelAdherent)
})

export default router;
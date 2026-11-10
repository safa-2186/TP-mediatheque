import express from "express";
import "dotenv/config";

import livresRoutes from "./routes/livres.js";
import adherentsRoutes from "./routes/adherents.js";
import emprunts from "./routes/emprunts.js";


const app = express();
app.use(express.json());


app.use("/livres", livresRoutes);
app.use("/adherents", adherentsRoutes);
app.use("/emprunts", empruntsRoutes);





app.listen(3000, () => console.log("Serveur sur http://localhost:3000"));










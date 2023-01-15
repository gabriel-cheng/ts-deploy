import express from "express";
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({message: "Hello, world! Estou gravando aqui!"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
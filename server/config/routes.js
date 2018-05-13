var path = require("path");
module.exports = (app)=>{
    var controller = require("../controllers/authors")();
    app.get("/authors", (req, res)=>{
        controller.index(req, res);
    })
    app.get("/authors/:id", (req, res)=>{
        controller.author(req, res);
    })
    app.post("/authors", (req, res)=>{
        controller.createAuthor(req, res);
    })
    app.put("/authors/edit/:id", (req, res)=>{
        controller.updateAuthor(req, res);
    })
    app.delete("/authors/delete/:id", (req, res)=>{
        controller.deleteAuthor(req, res);
    })
    // below app.all defaults to Angular Front-end routes after checking Server Back-end routes
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./Author/dist/Author/index.html"))
    })
}
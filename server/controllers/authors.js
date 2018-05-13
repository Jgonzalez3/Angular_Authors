module.exports = ()=>{
    require("../models/author")();
    return{
        index: (req, res)=>{
            Author.find({}, (err, authors)=>{
                err=err ? console.log("ERROR ALL:", err) & res.json({message: "INDEX ERROR"}): res.json({message: "Success", authors: authors});
            })
        },
        author: (req, res)=>{
            var authId = req.params.id
            Author.findById(authId, (err, author)=>{
                err=err ? console.log("ERROR THIS Author", err) & res.json({message: "Author ERROR", error:err}): res.json({message: "Success", author:author});
            })
        },
        createAuthor: (req, res)=>{
            newAuthor = new Author({name: req.body.name});
            newAuthor.save((err)=>{
                err =err ? console.log("Create ERROR") & res.json({message: "CREATE ERROR", error:err}): res.json({message: "Success"})
            })
        },
        updateAuthor: (req, res)=>{
            var authId = req.params.id;
            Author.findByIdAndUpdate(authId, {name: req.body.name}, (err)=>{
                err=err ? console.log("UPDATE ERROR", err) & res.json({error: err}): res.json({message: "Success"});
            })
        },
        deleteAuthor: (req, res)=>{
            var authId = req.params.id;
            console.log(authId);
            Author.deleteOne({_id: authId}, (err)=>{
                err=err ? console.log("ERRORS Remove", err) & res.json({error: err}): res.json({message: "Success"})
            })
        }
    }
}
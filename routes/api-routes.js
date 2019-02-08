var db = require('../models')

module.exports = function(app){

    app.post('/api/likes', function (req, res){
        db.Itili.create(req.body).then(function(result){
            res.json(result);
        });
    });

    app.get("/api/likes/", function (req, res){
        db.Itili.findAll({})
        .then(function(dbItili) {
            res.json(dbItili);
        });
    });

    app.get("/api/likes/category/:category", function(req, res){
        db.Itili.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbItili) {
            res.json(dbItili)
        });
    });

    app.get("/api/likes/rating/:rating", function(req, res){
        db.Itili.findAll({
            where: {
                rating: req.params.rating
            }
        }).then(function(dbItili) {
            res.json(dbItili)
        });
    });

    app.get("/api/likes/brand/:brand", function(req, res){
        db.Itili.findOne({
            where: {
                brand_location: req.params.brand_location
            }
        }).then(function(dbItili) {
            res.json(dbItili)
        });
    });

    app.delete("/api/likes/:id", function(req, res){
        db.Itili.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbItili){
            res.json(dbItili);
        });
    });

    app.put("/api/likes", function(req, res) {
        db.Itili.update(
            req.body,
            {where: { id: req/body.id}}
        ).then(function(dbItili) {
            res.json(dbItili);
        });
    });
}
module.exports = function (sequelize, DataTypes) {
    
    var Itili = sequelize.define("Itili", {

        brand_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Itili;
}
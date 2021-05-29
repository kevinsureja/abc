module.exports = (sequelize, DataTypes) => {
    const Family = sequelize.define("family", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        familyName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return Family;
};
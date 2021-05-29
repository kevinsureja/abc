module.exports = (sequelize, DataTypes) => {
    const FamilyMember = sequelize.define("familymember", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        familyId: {
            type: DataTypes.INTEGER,
        },
        personName: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['1', '2']
        },
        parentId: {
            type: DataTypes.UUID
        }
    },
        {
            timestamps: true,
            paranoid: true
        });
    return FamilyMember;
};
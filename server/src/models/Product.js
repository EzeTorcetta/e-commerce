const { INTEGER, FLOAT, STRING, TEXT } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Product",
        {
            id: {
                type: INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            price: {
                type: FLOAT(2),
                allowNull: false,
            },
            title: {
                type: STRING,
                allowNull: false,
            },
            image: {
                type: STRING,
                allowNull: false,
            },
            description: {
                type: TEXT,
                allowNull: false,
            },
            category: {
                type: STRING,
                allowNull: false,
            },



        },
        {
            timestamps: false,
        }
    );
};

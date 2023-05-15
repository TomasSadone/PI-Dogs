const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//agregar la cualidad opcional userCreated
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Dog',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.JSON,
        allowNull: false,
        /*
      {
        "imperial": "9 - 11.5",
        "metric": "23 - 29"
      },
      */
      },
      weight: {
        type: DataTypes.JSON,
        allowNull: false,
        /*
      {
        "imperial": "50 - 60",
        "metric": "23 - 27"
      }
      */
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_created: {
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: false }
  );
};
//puedo tener problemas de que no encuentre la tabla dogs porque es Dogs quizas, tenerlo en cuenta si hay quilombo

module.exports = function (sequelize, DataTypes) {
    var customers = sequelize.define("customers", {
        customerId: DataTypes.INTEGER,
        customerName: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        reviews: DataTypes.STRING,
        thumbUpDown: DataTypes.BOOLEAN,
    });
    return customers;
};
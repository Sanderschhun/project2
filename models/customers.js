module.exports = function (sequelize, DataTypes) {
    var customer = sequelize.define("customer", {
        customerId: DataTypes.INTEGER,
        customerName: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        reviews: DataTypes.STRING,
        thumbUpDown: DataTypes.BOOLEAN,
    });
    return customer;
};
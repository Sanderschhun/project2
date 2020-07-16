module.exports = function (sequelize, DataTypes) {
    var customer = sequelize.define("customer", {
        customerId: DataTypes.INTEGER,
        customerName:{
            type: DataTypes.STRING,
            len: [2,50],
            isNull: false,
        },
        phoneNumber:{
            type: DataTypes.INTEGER,
            isNumeric: true,
            isNull: false,
        },
        reviews:{
            type: DataTypes.STRING,
            len: [1,2000],
            isNull: false,
        },
        thumbUpDown:{
            type: DataTypes.BOOLEAN,
            isNull: false,
        },
    });
    return customer;
};
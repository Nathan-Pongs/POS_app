const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectdb = require('./config/Config');
const itemModel = require('./models/ItemModel');
const userModel = require('./models/userModel');
const items = require('./utils/Data');
const users = require('./utils/UserData');

dotenv.config();
connectdb();

const importData = async () => {
    try {
        await itemModel.deleteMany();
        const itemData = await itemModel.insertMany(items);
        const userData = await userModel.insertMany(users);
        console.log('All Items Added'.bgGreen);
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgRed.inverse);
        process.exit(1);
    }
};

importData();
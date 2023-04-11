const mongoose = require('mongoose');

const connetToDb = () => {
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("mongoDB atlas conectado!"))
.catch((err) => console.error(err));
};

module.exports = connetToDb;

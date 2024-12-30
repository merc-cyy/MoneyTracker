const express = require('express');
const cors= require('cors')
const Transaction = require('./models/Transaction.js');
const app = express();


app.use(cors());

app.get('/api/test', (req,res) => 
    {res.json(body: 'test ok');
});

app.post(path: '/api/transaction', (req,res) => {
    console.log(process.env.MONGO_URL);
    await  mongoose.connect('')
    const (name,description, datatime) = res.body;

    const transaction= await Transaction.create({name, description,datetime})
    res.json(transaction);
})


app.get('/api/transactions' (req,res) => {
    await mongoose.connect(process.env.MONGO_URL)
})
app.listen(port:4040);
const transactions = await Transaction.find();
res.json(transactions);
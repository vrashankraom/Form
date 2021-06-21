const express = require('express');
const app = express();
app.use(express.json({extended:false}));
const connectDB =require('./config/db');
const path = require('path');
connectDB();


app.use('/user-form',require('./routes/form'));

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server is started on ${PORT}`));
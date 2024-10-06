const express = require("express");
const app = express();
//? the next 4 modules was used for webhook integrations of clerk
const cors= require('cors');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
const {Webhook} = require('svix')
//? database connection build-up
const mongoose = require('mongoose')
const ConnectDB = require('./auth.js')
const ClientschemaModel = require('./models/clients.js')

dotenv.config();
app.use(cors());
// All your controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.post('api/webhook', bodyParser.raw({type: 'application/json'}), async function (req,res){
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;
  
      const wh = new Webhook(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_bm90ZWQtc2hlcGhlcmQtNTIuY2xlcmsuYWNjb3VudHMuZGV2JA');
      const evt = wh.verify(payloadString, svixHeaders);
      const { id, ...attributes } = evt.data;
      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`);
        const full_name = `${attributes.first_name} ${attributes.last_name}`
        const email = attributes.email_addresses.email_address
        const pwd = attributes.email_addresses.password
        const ClerkUser_id = attributes.id
        const user = new ClientschemaModel({
          full_name: full_name,
          email: email,
          pwd:pwd,
          ClerkUser_id: ClerkUser_id,
        }
        )
        await user.save();
        console.log(user);
      }
      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: err.message,
      }); 
    }
  })

  app.use(express.json());

ConnectDB();



mongoose.connection.once('open', () => {
  app.listen(5000, () => {
      console.log('server starting at 5000!');
      console.log(process.env)
  });
});
const express = require("express")
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")

const stripe = require("stripe")("sk_test_51HtE9FAl56aPQwavBOGIf3VVUCP2NrPsCZRjeZN14OEkzlP5A7YzJEvkY5t76znxN5ltGg2xkipBeJ8l65I7OA2m00k0iKGIAX")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/bluid", "index.html"));
  });
}

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log("Server running on port " + PORT);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "eur",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

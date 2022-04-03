const express = require("express");
const pool = require("./database");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.get("/home", async (req, res) => {
  const Categories = await pool.query("SELECT * FROM categories");
  res.json(Categories.rows);
});

app.get("/subcategories", async (req, res) => {
  const { parentcategory } = req.query;
  const subcategories = await pool.query(
    "select * from subcategories where parentcategory = $1",
    [parentcategory]
  );
  res.json(subcategories.rows);
});

app.get("/subsubcategories", async (req, res) => {
  const { parentcategory, grandcategory } = req.query;
  const subsubcategories = await pool.query(
    "select * from subsubcategories where parentcategory = $1 and grandcategory = $2",
    [parentcategory, grandcategory]
  );
  res.json(subsubcategories.rows);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //1) check if user already exist with the provided password
  const user = await pool.query("select * from users where email=$1", [email]);

  //2)if not return error
  if (user.rows.length === 0) {
    return res.status(404).send(`No user exists with email ${email}`);
  }
  //3)check if users password matches the one in db
  const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
  //4)if so,generate a token
  if (passwordMatch) {
    const token = jwt.sign(
      {
        userId: user.rows[0].user_id,
        username: user.rows[0].username,
        email: user.rows[0].email,
        role: user.rows[0].role,
      },
      "mysecret",
      { expiresIn: "7d" }
    );
    //5)send back the token to the client
    res.status(200).json(token);
  } else {
    res.status(401).send("password do not matches");
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  //1) check if user already exist
  const user = await pool.query("select * from users where email =$1", [email]);
  if (user.rows.length >= 1) {
    return res.status(422).send(`User already exists with email ${email}`);
  }

  //2)if not hash their password
  const hash = await bcrypt.hash(password, 10);
  //3))create user
  const role = "user";
  const newuser = await pool.query(
    "insert into users (username,email,password,role) values ($1,$2,$3,$4)RETURNING *",
    [username, email, hash, role]
  );
  console.log(newuser.rows[0].user_id);
  //4)create token for the new user
  const token = jwt.sign(
    {
      userId: user.rows[0].user_id,
      username: user.rows[0].username,
      email: user.rows[0].email,
      role: user.rows[0].role,
    },
    "mysecret",
    {
      expiresIn: "7d",
    }
  );
  res.status(201).json(token);
  //5)send back token
});

app.get("/item", async (req, res) => {
  const { userId, productId } = req.query;
  let isFav = false;
  const item = await pool.query(
    "select * from subsubcategories where subcategory_id = $1",
    [productId]
  );
  const Fav = await pool.query(
    "select * from favorites where user_id=$1 and product_id=$2",
    [userId, productId]
  );

  if (Fav.rows.length !== 0) {
    isFav = true;
  }
  res.json({ item: item.rows[0], isFav: isFav });
});

app.post("/order", async (req, res) => {
  const { userId, productId } = req.body;

  const order = await pool.query(
    "insert into orders (user_id,product_id) values ($1,$2) RETURNING*",
    [userId, productId]
  );
  res.json(order.rows[0]);
});
app.post("/addTocart", async (req, res) => {
  const { userId, productId } = req.body;

  const order = await pool.query(
    "insert into cart (user_id,product_id) values ($1,$2) RETURNING*",
    [userId, productId]
  );
  res.json(order.rows[0]);
});

app.get("/account", async (req, res) => {
  const { userId } = req.query;
  const orders = await pool.query(
    "select sum(salary) from orders o,subsubcategories s where o.user_id=$1 and o.product_id=s.subcategory_id",
    [userId]
  );
  res.json(orders.rows[0].sum);
});

app.post("/addfav", async (req, res) => {
  const { userId, productId, isFav } = req.body;
  if (isFav) {
    const query = await pool.query(
      "insert into favorites (user_id,product_id) values($1,$2)",
      [userId, productId]
    );
  } else {
    const query = await pool.query(
      "delete from favorites where user_id=$1 and product_id=$2",
      [userId, productId]
    );
  }
  res.json("done");
});
app.get("/Fav", async (req, res) => {
  const { userId } = req.query;
  const list = await pool.query(
    "select * from subsubcategories s,favorites f where f.user_id=$1 and f.product_id=s.subcategory_id",
    [userId]
  );
  res.json(list.rows);
});

app.get("/orders", async (req, res) => {
  const { userId } = req.query;
  const orders = await pool.query(
    "select * from subsubcategories s,orders o where o.user_id=$1 and s.subcategory_id=o.product_id",
    [userId]
  );
  res.json(orders.rows);
});
app.get("/Cart", async (req, res) => {
  const { userId } = req.query;
  const cart = await pool.query(
    "select * from subsubcategories s,cart o where o.user_id=$1 and s.subcategory_id=o.product_id",
    [userId]
  );
  res.json(cart.rows);
});
app.post("/removefromcart", async (req, res) => {
  const { userId, productId } = req.body;
  const cart = await pool.query(
    "delete from cart where user_id=$1 and product_id=$2",
    [userId, productId]
  );
  res.json("done");
});
app.post("/addcategory", async (req, res) => {
  const { name, img } = req.body;
  const categories = await pool.query(
    "insert into categories (name,img) values($1,$2)",
    [name, img]
  );
  res.json("done");
});
app.post("/addsubcategory", async (req, res) => {
  const { name, parentcategory } = req.body;
  const subcategories = await pool.query(
    "insert into subcategories (name,parentcategory) values($1,$2)",
    [name, parentcategory]
  );
  res.json("done");
});
app.post("/additem", async (req, res) => {
  const {
    name,
    img,
    parentcategory,
    grandcategory,
    title,
    description,
    salary,
    rate,
  } = req.body;
  console.log( name,
    img,
    parentcategory,
    grandcategory,
    title,
    description,
    salary,
    rate)
    const s= parseFloat(salary)
    const r= parseFloat(rate)
  const orders = await pool.query(
    "insert into subsubcategories (name,img,parentcategory,grandcategory,title,description,salary,rate) values($1,$2,$3,$4,$5,$6,$7,$8)",
    [name, img, parentcategory, grandcategory, title, description,s, r]
  );
  
  res.json("done");
});
app.listen(4000, () => console.log("connected"));

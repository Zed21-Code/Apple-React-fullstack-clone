import mysql from "mysql"
import express from "express"
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config();

let app = express()
let port = process.env.PORT
let ip = process.env.IP

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());
app.use(cors());

// create a database connection

let mysqlConnection = mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
})

mysqlConnection.connect((err)=>{
    if(err) console.log(err);
    else console.log("connected")
})

// create a table to store data

app.get("/install", (req, res)=>{
    let message = "Table created"
    let creatProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`;
    let createProdactDescription = `CREATE TABLE if not exists ProdactDescription(
        description_id int auto_increment,
        product_id int(11) not null,
        product_brief_description TEXT not null,
        product_description TEXT not null,
        product_img varchar(255) not null,
        product_link varchar(255) not null,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`
    let createProductPrice = `CREATE TABLE if not exists ProductPrice(
        price_id int auto_increment,
        product_id int(11) not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`

    mysqlConnection.query(creatProducts, (err, results, fields) => {
        if (err) console.log(err);
    });
    mysqlConnection.query(createProdactDescription, (err, results, fields) => {
        if (err) console.log(err);
    });
    mysqlConnection.query(createProductPrice, (err, results, fields) => {
        if (err) console.log(err);
    });

    res.end(message);
})


// insert full information

app.post("/addiphones", (req, res)=>{

    const { product_url, product_name, product_brief_description, product_description, product_img, product_link, starting_price, price_range } = req.body;

    
    let insertProduct = "INSERT INTO Products (product_url, product_name) VALUES('${}','${}')";
    let insertProdactDescription = `INSERT INTO ProdactDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES(?, ?, ?, ?, ?)`;
    let insertProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES(?, ?, ?)`;
   

    mysqlConnection.query(insertProduct, [product_url, product_name], (err, results, fields)=>{
        if(err) console.log(`Error Found: ${err}`)

    let id = results.insertId;

    mysqlConnection.query(insertProdactDescription, [id, product_brief_description, product_description, product_img, product_link], (err, results, fields)=>{
        if(err) console.log(`Error Found: ${err}`)
    })
    mysqlConnection.query(insertProductPrice, [id, starting_price, price_range], (err,results, fields)=>{
        if(err) console.log(`Error Found: ${err}`)
    })
    })

    res.end("Data inserted successfully!");
	console.log("Data inserted successfully!");
})


// select and get the information

app.get("/products-detail-info", (req, res) => {	
    mysqlConnection.query(
        "SELECT * FROM Products JOIN ProdactDescription JOIN ProductPrice ON Products.product_id = ProdactDescription.product_id AND Products.product_id = ProductPrice.product_id",
        (err, results, fields) => {
            if (err) console.log("Error During selection", err);
            console.log(results);
            res.send(results);
        }
    );
});


app.listen(port,ip, ()=>{
    console.log(`port listen ${ip}:${port}`)
})



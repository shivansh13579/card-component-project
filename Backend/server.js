import express from 'express';

const app = express()

const products = [
    {
        id:1,
        name: "Mango Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:2,
        name: "Banana Tree",
        price: "Rs 100" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRh_lPgFWU9YMp4Gs6xyHgLDFLhxxXdUJlA&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:3,
        name: "Lichi Tree",
        price: "Rs 200" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRh_lPgFWU9YMp4Gs6xyHgLDFLhxxXdUJlA&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:4,
        name: "Peepal Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:5,
        name: "Orange Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:6,
        name: "Gauva Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:7,
        name: "PineApple Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:8,
        name: "Apple Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:9,
        name: "Grapes Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
    {
        id:10,
        name: "Kiwi Tree",
        price: "Rs 300" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrNH9nKBu9l-SnVn8ux2lFGlp5V79pJ3ahQ&usqp=CAU",
        details:{
            title: "mangoes tree",
            price:"₹300",
            about:"This tree have a special breed which can help to grow in just few months."
        }
    },
 ]

app.get('/api/products',(req,res) => {


     if(req.query.search){
        const filterProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        )
        res.send(filterProducts)
        return;
     }


})

app.get('/api/products/:id',(req,res) => {
    const id = req.params.id;
    const productData = products.filter((data)=>{
        return data.id = id
    })

    // return productData[0];
    console.log(productData)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})








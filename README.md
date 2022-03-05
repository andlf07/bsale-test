## **Bsale-test**

This project was developed with NodeJS + Typescript, using as database Mysql, ORM sequelize, and HapiJS.

Download the project and run

    npm install

For devs porpuse I use:

    npm run start:tsc
    npm run start:dev

And for deploy

    npm run start

This endpoints will return a products list

    GET  /api/products

will return this `JSON`, status `code`, a `message`, and `prodcuts` is an Array of product in the db

    {
    	"code":  200,
    	"message":  "OK",
    	"products":  [
        		{
    				"id":  5,
    				"name":  string,
    				"url_image":  string,
    				"price":  int,
    				"discount":  int,
    				"category":  int
    			},
    }

Here we can search products for category

    GET /api/products/{category}

It will return a `JSON` like the JSON before in this case the key `products`is going to be an Array of products with the `category` we had pass

We can pass querys params to the endpoint and made a search more exact, using the products attributes

    GET /api/products?

`Query params`: `name = 'Pisco'` , `price = 4000` , `discount = 10`,
Using `name`it will search in the database `products` that his key `name` `startsWith`'Pisco'.
Using `price` it will search `products` with a `price >= 4000`.
and the same way `discount` works like the price query. We can use togetther or just one or just two.

If we want to know what are the category in our database we use:

    /api/category

It will return a JSON with `code`, `message`, and the list of `categorys`

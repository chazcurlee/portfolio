import atlbrew from "../assets/img/atlbrew.png";
import vinquery from "../assets/img/vinquery.png";
import mindify from "../assets/img/mindify.png";
import recipe from "../assets/img/recipecentral.png";
import letterle from "../assets/img/letterle.png";


const projects = {
    title: ["ATL Brew", "VINquery", "Mindify", "Recipe Central", "Letterle"],
    summary: [
        `A website designed for a "beer-review" group who needed a site to
        log their group's opinions and ratings for local Atlanta breweries.
        Utilizes OpenBreweries API, as well as, GoogleMap API for locating the brewery. This is made from a MERN stack with a MongoDB Atlas hosted backend. This is the model version of the site.`,

        `Commissioned by a car enthusiast, this site uses the the NHTSA API to pull information regarding a car's VIN. Car reviews are also shown with use of a Youtube API.`,

        `Mindify is a wellness site used to connect experts to followers in order to promote better lifestyle choices and help organize calendar events hosted by said experts. Utilizes a PERN stack and makes use of JWT authorization. (Hosted site is model as original site is defunct.)`,

        `Recipe Central is a site created for a client that stores cooking recipes for the user as well as recipes from leading chefs. Utilizes a MERN stack.`,

        `Letterle is an early commissioned site using only HTML/CSS to make a mock Wordle clone. User wanted to have the ability to play Wordle anytime of day, at any frequency.`
    ],
    tech: [
        `React, MongoDB, Express.js, Node.js, Heroku, MongoDB Atlas`,
        `React, Material UI`,
        `React, JWT Auth, PostgreSQL, Express.js, Node.js`,
        `React, MongoDB, Express.js, Node.js, Heroku`,
        `HTML/CSS, Surge`
    ],
    link: {
        github: [
            `https://github.com/chazcurlee/RSM`,
            `https://github.com/chazcurlee/NCS2`,
            `https://github.com/chazcurlee/back-end-prj3`,
            `https://github.com/chazcurlee/recipe-central`,
            `https://github.com/chazcurlee/Wordle-Project`
        ],
    
        host: [
            `https://atl-brew-db.herokuapp.com/`,
            `https://vinquery.netlify.app/`,
            `https://mindify.onrender.com/`,
            `https://recipe-central.onrender.com/`,
            `https://letterle.surge.sh/`
        ]
    },
    image: [atlbrew, vinquery, mindify, recipe, letterle]

}

export default projects
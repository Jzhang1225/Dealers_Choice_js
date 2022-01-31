const express = require('express')
const app = express()
const path = require('path');
const movieInfo = require('./movieInfo')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/movies/:rank', (req, res)=>{
    const rank = req.params.rank;
    const movie = movieInfo.find(rank);
    if (!movie.rank) {
      throw new Error()
    }
    res.send(`
    <html>
        <head>
            <title>${movie.title}</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
        <header><a href="/">Home</a></header>
            <div>
                <h3>
                    <span>Rank ${movie.rank}</span> ${movie.title} 
                </h3>
                <p>Released in ${movie.year}</p>
                <p class='description'>
                    ${movie.description}
                </p>
            </div>
        </body>
    </html>
        `)
})

app.get('/', (req, res) => {
    const movies = movieInfo.list
    res.send(`
    <html>
        <head>
            <title>Top Grossing Movies of All Time</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div>
                <img src = '/moneybag.jpeg'>
                <h1>Top Grossing Movies</h1>
                ${movies.map(movie => `
                    <div class = 'movie'>
                        <p>
                           <span>${movie.rank})</span> 
                           <a href="/movies/${movie.rank}">${movie.title}</a>
                           <span> Released:${movie.year}</span>
                        </p>
                        <p>
                            Made a lifetime gross of ${movie.lifetimeGross}
                        </p>
                    </div>`
                    ).join('')}
            </div>
        </body>
    </html>
        `
  );
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(404).send(`<html>
    <body>
        Not Found Try Again <br>
        <a href='/'>Home</a>
    </body>
    <html>`)
  })

const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`App listening in port ${port}`);
  });
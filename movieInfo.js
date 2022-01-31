const data = [
    {rank: 1, title: 'Avatar', year: 2009, lifetimeGross: '$2,847,246,203', 
    description:'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'},
    {rank: 2, title: 'Avengers: Endgame', year: 2019, lifetimeGross: '2,797,501,328',
    description: `After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`},
    {rank: 3, title: 'Titanic', year: 1997, lifetimeGross: '2,201,647,264',
    description: `A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.`},
    {rank: 4, title: 'Star Wars: Episode VII - The Force Awakens', year: 2015, lifetimeGross: '$2,069,521,700',
    description: `As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.`},
    {rank: 5, title: 'Avengers: Infinity War', year: 2018, lifetimeGross: '$2,048,359,754',
    description: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`},
    {rank: 6, title: 'Spider-Man: No Way Home', year: 2021, lifetimeGross: '$1,738,886,280',
    description: `With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.`},
    {rank: 7, title: 'Jurassic World', year: 2015, lifetimeGross: '$1,670,516,444',
    description: `A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.`},
    {rank: 8, title: 'The Lion King', year: 2019, lifetimeGross: '$1,662,899,439',
    description: `After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.`},
    {rank: 9, title: 'The Avengers', year: 2012, lifetimeGross: '$1,518,815,515',
    description: `Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.`},
    {rank: 10, title: 'Furious 7', year: 2015, lifetimeGross: '$1,515,341,399',
    description: `Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.`}
]

const list = [...data]
const find = (rank) => {
    const movie = list.find(movie => movie.rank === rank*1);
    return {...movie}; 
  }

module.exports = {list, find}

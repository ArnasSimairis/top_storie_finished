fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=G6UAg1ph0qbH6GLpPHKtqGiuzwIM7eIm')
 .then(Response => Response.json())
 .then(commits => {
    console.log(commits.results);
 })
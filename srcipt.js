let k = 0;
const mainDiv = document.getElementById('main_div');
const section_buttons = document.querySelector('header');


const all_items = async () => {
  try {
      const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=G6UAg1ph0qbH6GLpPHKtqGiuzwIM7eIm")
      const top_stories = await stories.json();
      const results = top_stories.results;
      console.log(results)

      if(k > 0){
          let j = k
          k = k - j
          removeElements(article)
          removeElements(document.querySelectorAll('#article'));
      }

      let h = 0

      for (let z in results){
          if(h < 30){
              const article = document.createElement('div');
              article.setAttribute('id', 'article');
              mainDiv.appendChild(article);
            //==================================================================================  
              const articleImg = document.createElement('img');
              articleImg.src = results[z].multimedia[1].url
              article.appendChild(articleImg)
            //==================================================================================
              const txtDiv = document.createElement('div')
              txtDiv.setAttribute('id', 'textdiv')
              article.appendChild(txtDiv)
            //==================================================================================
              const articleName = document.createElement('h2');
              articleName.innerText = results[z].title
              txtDiv.appendChild(articleName);
            //==================================================================================
              const articleSection = document.createElement('h3');
              articleSection.innerText = results[z].section
              txtDiv.appendChild(articleSection);
            //==================================================================================
              const articletxt = document.createElement('p');
              articletxt.innerText = results[z].abstract
              txtDiv.appendChild(articletxt);
            //==================================================================================
              const articlebutton = document.createElement('button');
              articlebutton.innerText = "Read More"
              articlebutton.classList.add("link-button");
              txtDiv.appendChild(articlebutton);
              const articlelink = document.createElement('a');
              articlelink.href = results[z].url
              articlebutton.appendChild(articlelink);
            //==================================================================================
              k += 1
              h += 1
          }
          else{
              continue
          }
          
      }
      //==================================================================================
      console.log(results);

      results.forEach(section => {
        const menu_button =document.createElement('button');
        menu_button.innerText = results.section;
        section_buttons.appendChild(menu_button);
      });
      //==================================================================================
  } catch(error){
      console.log(error)
  }


};

all_items();

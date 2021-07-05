const searchBtn=document.getElementById('search-btn');
const mealName =document.getElementById('meal');
const mealDetails=document.querySelector('.meal-details-content');
searchBtn.addEventListener('click', getMealName); 
const APP_ID='d7fec607';
const APP_KEY='84023795f344a2a230acc8c3eb91c090	';
const baseURl=`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
function getMealName()
{
  let searchInput=document.querySelector('#search-input').value;
   console.log(searchInput);
   fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY} `)
   .then(response=>response.json()).then(data=>
    {
        let innerHtml='';
        if(data.hits)
        {
            data.hits.forEach(meal => {
                innerHtml+=`
                            <div class="meal-item">
                                <div class=" meal-img">
                                        <img src="${meal.recipe.image}" alt="Sorry,Image not found!">
                                </div>
                                <div class="meal-name">
                                        <h3>${meal.recipe.label}</h3>
                                        <a href="${meal.recipe.url}" target="_blank" class="recipe-btn"> Get recipe</a>
                                </div>
                            </div>
                            `;
            });
            mealName.classList.remove('notfound');
        }
        else
        {
            innerHtml="Sorry!";
            mealName.classList.add('notfound');
        }
        mealName.innerHTML=innerHtml;
    });

}
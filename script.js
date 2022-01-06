import {article_data} from '/data.js';


window.onload=function(){
    let article_list;
    article_list = document.getElementById('article_list');
    var gozat_box = document.getElementById('gozat_box');

    article_data.forEach((item) => {
        let title = item['title'].slice(0,30);
        let content = item['content'].slice(0,250);
        let li = document.createElement('li');
        li.classList = 'article-card col-10 offset-1 col-lg-6 offset-lg-0 col-xl-2 offset-xl-0 text-center';
        li.innerHTML = `<a href="#" class="a-card">
        <p class=card-title>` 
        + title +`</p> 
          <p class='card-content p-3'>` +
          content +
        `</p>
         <p class=card-date>Temmuz 16, 2020</p>
       </a>`;
    article_list.appendChild(li);
});
}

function card_title_margin(x){
    if(!x.matches){
        document.getElementsByClassName[0].setAttribute('style', 'top: -18px;');
    } /* else{
        document.getElementsByClassName('card-title').forEach((e)=> {
            e.setAttributes('style', 'top: -18px');
        });
    } */
}




window.onload=function(){
    let article_list;
    article_list = document.getElementById('article_list');
    var gozat_box = document.getElementById('gozat_box');
    gozat_box.addEventListener('click', displayDate);

    
    let article_data = [
        {'title': 'İslam Keyifli Bir Tarzdır',
        'content': 'İslam sadece helal-haram gibi hükümlerin olduğu bir din değil. İslam bir düşünce biçimi bir hayat felsefesi, yaşam tarzı.'+
        'Sokakta yürümekten, izlediğiniz filme dinlediğiniz müziğe kadar -bir hükmü değil-, bir estetik anlayışı, alternatif bir teklifi var.'},
        {'title': 'Doğu ve Batı Edebiyatında Aşk Üzerine Bir Not',
        'content': `Necmettin Turinay, Bilge Yayınevi’nden çıkan Ahmet Mithat Efendi’nin Müşahedat romanı için bir “Notlar” kısmı hazırlamış.
        Kitapta geçen birçok tabir (romans, kalenderlik, bank-ı osmani gibi) bilgisiz okuyucu için açıklanmış.`},
        {'title':`THE THIRD GIRL, PART II`,
        'content': `The “crime and clues” and “investigation” segments are very much intertwined. We witness many people’s perspectives as we don’t follow one protagonist/narrator. Each point of view provides us with different clues respectively. The distribution of the clues is very similar to The Murders in The Rue Morgue, as we confront numerous clues and suspects which seem dubious.`},
        {'title':`BİZE VARDIK`,
        'content': `Daha çok erken.

        Misafir hazırlığı telaşı halinde içimizde inat.
        
        İçindekini göster bana, şeklinle barış ve iste.
        
        Artık kavganı iste, alın terini özlediğin için iste.
        
        Çuvaldızımız yoktu ama biz bizeydik,

        örtümüz ısıtırdı, ayaklarımız açık değildi,

        sözümüz sözdü, fazlasında gözümüz yoktu;
        
        zaten fazlaydık,`},
    ]; 

    article_data.forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = '<li class="article-card col-10 offset-1 col-lg-6 offset-lg-0 col-xl-2 offset-xl-0 text-center">' +
        `<div>
          <a href="#" class="a-card">
           <p class=card-title>` 
           + item['title'] +`</p> 
             <p class='card-content p-3'>` +
             item['content'] +
           `</p>
            <p class=card-date>Temmuz 16, 2020</p>
          </a>
        </div>
      </li>`;
    article_list.appendChild(li);
});
}




let counter = 1;

function displayDate() {
    gozat_box.innerHTML = counter;
    console.log('clicked the button '+counter + ' number of times');
    counter++;
    
}   
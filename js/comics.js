$.ajax({url: "https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=95a147c2e3843225815172beb49d6004",
 success: function(response){
        response.data.results.forEach(function(comic){
          var long = "";
          if(comic.title.length > 40){
            long = "long";
          }else{
            long = "";
          }
          $('#comicHolder').append( `
            <div class="filler">
            <div class="col-md-12 containerComic">
              <div class="panel col-md-4">
                <div class="block">
                </div>
                <h3 class="${long}">${comic.title}</h3>
              </div>
              <div class="comics" class="col-md-8">
              <div class="tint">
              </div>
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              </div>
              <div class ="scroll">
              <p>${comic.description}</p>
              </div>
            </div>
            </div>
          `);
      })
      $('.containerComic').click(function() {
          var tint = $(this).find('.tint');
          var par = $(this).find('p');
          par.toggle(100);
          par.css('font-size','14px');
          tint.toggle(200);
          if(par.text().length === 4){
            par.html('No Description Available')
          }
      })
}});
$('#bars').click(function(){
  $('.menuBars').toggle();
})

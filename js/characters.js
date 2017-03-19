$.ajax({
    url: "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=95a147c2e3843225815172beb49d6004",
    success: function(response) {
        response.data.results.forEach(function(comic) {
            $('#holder').append(`
            <div class="filler">
            <div class="col-md-12 containerComic">
              <div class="panel col-md-4">
                <div class="block">
                </div>
                <h3>${comic.name}</h3>
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
            tint.toggle(200);
            if (par.text().length === 0) {
                par.html('No Description Available')
            }
        })
    }
});
$('#bars').click(function(){
  $('.menuBars').toggle();
})

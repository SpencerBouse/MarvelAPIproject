$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=3&apikey=95a147c2e3843225815172beb49d6004",
 success: function(response){
        response.data.results.forEach(function(comic){
          $('#holder').append( `
            <div class="filler">
            <div class="col-md-12 containerComic">
              <div class="panel col-md-4">
                <div class="block">
                </div>
                <h3>${comic.name}</h3>
              </div>
              <div class="comics" class="col-md-8">
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              </div>
            </div>
            </div>
          `);
      })
}});

$.ajax({url: "https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=95a147c2e3843225815172beb49d6004",
 success: function(response){
        response.data.results.forEach(function(comic){
          $('#comicHolder').append( `
            <div class="filler">
            <div class="col-md-12 containerComic">
              <div class="panel col-md-4">
                <div class="block">
                </div>
                <h3>${comic.title}</h3>
              </div>
              <div class="comics" class="col-md-8">
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              </div>
            </div>
            </div>
          `);
      })
}});
$('#bars').click(function(){
  $('.menuBars').toggle();
})

// $('#holder').append( `
//   <div class="col-md-3 container">
//     <div class="panel col-md-4">
//       <div class="block">
//       </div>
//       <h3>${comic.name}</h3>
//       <p>${comic.description}</p>
//     </div>
//     <div class="characters" class="col-md-8">
//       <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
//     </div>
//   </div>
// `);

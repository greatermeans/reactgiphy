import $ from 'jquery';

export default function giphyAPI(query) {

  let search = query.split(' ').join('+')
  var key = "dc6zaTOxFJmzC"
  var url = "http://api.giphy.com/v1/gifs/search?"

 return $.ajax({
    url:url,
    data:{api_key:key,q:search}
    })
}
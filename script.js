var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
  $("#glasses").animate({scrollTop: '150px'}, 1500)
}
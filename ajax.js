<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$(document).ready(() => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    success: (result) => {
      console.log(result)
    },
    error: (err) => {
      console.error(err)
    },
  })
})

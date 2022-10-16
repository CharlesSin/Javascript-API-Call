<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => {
    console.error(err)
  })

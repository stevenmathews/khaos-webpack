module.exports = `
  <div class="layout">
    <h1>{{basename}}</h1>
  </div>
  <div id="app">
  </div>
  <script type="text/javascript">var env = "${process.env.NODE_ENV}"</script>
`

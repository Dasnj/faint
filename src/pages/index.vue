<template>
<div class="container">
  <section class="examples-grid">
    <h3>网格</h3>
    <div class="row">
      <div class="column">
        <span class="column-demo">.column</span>
      </div>
      <div class="column">
        <span class="column-demo">.column</span>
      </div>
      <div class="column">
        <span class="column-demo">.column</span>
      </div>
      <div class="column">
        <span class="column-demo">.column</span>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <span class="column-demo">.column</span>
      </div>
      <div class="column column-50 column-offset-25">
        <span class="column-demo">.column-50.column-offset-25</span>
      </div>
    </div>
  </section>
  <section class="examples-table">
    <h3>表格</h3>
    <div class="row">
      <div class="column">
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .examples-grid {
    h3 {
      margin-top: 2rem;
    }
      .column {
          margin-bottom: 10px;
          span {
              border-radius: 5px;
              display: block;
              background-color: #f5f5f5;
          }
      }
  }
  .examples-table {
    h3 {
      margin-top: 2rem;
    }
  }
</style>

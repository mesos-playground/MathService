# MathService
Provide simple math services to the cluster

## sum

Example

```node
seneca.act('role:math,cmd:sum,ver:1', { a: 1, b: 2 }, (err, res) => {
  /* 
   * Result: {
   *   sum: <NUMBER>
   * }
   */
});
```

## product

Example

```node
seneca.act('role:math,cmd:product,ver:1', { a: 1, b: 2 }, (err, res) => {
  /* 
   * Result: {
   *   product: <NUMBER>
   * }
   */
});
```

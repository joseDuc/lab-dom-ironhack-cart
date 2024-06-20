// ITERATION 1


function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  let cantidad = product.querySelector(".quantity").querySelector("input");
  let precio = product.querySelector(".price").querySelector("span");
  let subtotal = product.querySelector(".subtotal").querySelector("span");
  let res = 0;
  if (cantidad && precio ) {
    res = (parseFloat(cantidad.value) * parseFloat(precio.innerText)).toFixed(1);
  }
  subtotal.innerText = res;
  return parseFloat(res);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  console.log("calculando todo")
  let suma = 0;
  const total = document.querySelector("#total-value").querySelector("span");
  document.querySelectorAll('.product').forEach((producto) => {
    suma += updateSubtotal(producto);
  });
  total.innerText = suma.toFixed(1)

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  celda = target.parentNode;
  celda.parentNode.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let tbody = document.querySelector("#cart").querySelector("tbody");
  let tfoot = document.querySelector("#cart").querySelector("tfoot");
  let celda = null;
  let span = null;
  let filaF = tfoot.rows[0];
  let fila = null;
  let nombre ="";
  let precio=0;
  celda = filaF.cells[0];
  span = celda.querySelector("input");
  nombre=span.value;
  console.log(nombre)
  if (nombre.length ===0) {
    alert("Es necesario el nombre del producto");
    return
  }
  celda = filaF.cells[1];
  span = celda.querySelector("input");
  precio=span.value;

  fila = tbody.insertRow(tbody.rows.length);
  fila.classList.add("product");

  for (let i = 0; i < 5; i++) {
    celda = fila.insertCell(i);
    switch (i) {
      case 0:
        celda.classList = "name";
        span = document.createElement("span");
        span.innerText = nombre;
        celda.appendChild(span);
        break;
      case 1:
        celda.classList = "price";
        span = document.createElement("span");
        celda.innerText = '$';
        span.innerText = precio;
        celda.appendChild(span);
        break;
      case 2:
        celda.classList = "quantity";
        span = document.createElement("input");
        span.type="numbre;"
        span.min=0;
        span.value = 0;
        celda.appendChild(span);
        break;
      case 3:
        celda.classList = "subtotal";
        celda.innerText = '$';
        span = document.createElement("span");
        span.innerText = 0;
        celda.appendChild(span);
        break;
      case 4:
        celda.classList = "action";
        let btn = document.createElement("button");
        btn.classList = "btn btn-remove";
        btn.innerText="Remove";
        celda.appendChild(btn);
        break;
      default:
        break;
    }
  }
  addEventEliminarProducto(fila)
}


function addEventEliminarProducto(producto) {
  let btn = producto.querySelector(".action").querySelector("button");
  btn.addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  //... your code goes here
  const products = document.querySelector(".product");
  document.querySelectorAll('.product').forEach((producto) => {
    addEventEliminarProducto(producto);
  });
  let btnCreate = document.querySelector("#create");
  btnCreate.addEventListener("click", createProduct);

});

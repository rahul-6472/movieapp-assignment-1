let images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaphjR4JuDnzDMod7tMkrAX25r_VSxkSqyBmPbi49Cww&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdQBJpdd85JGsNxkxjRHaW7_wt7pzBGNtPQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_crIjek4rPOuuO0n42wdB4uNUyiZH9N0vg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOFgQXGzxW91eXSi5UMBCYbZeI6h3Y0Dl1w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gCA5PJd96UR07k-RSj2KUNzoDki49sDXSg&usqp=CAU",
];
let i = 0;

function myFunction() {
  document.getElementById("img").src = images[i];
  if (i < images.length) {
    i = i + 1;
  } else {
    i = 0;
  }
}

setInterval(myFunction, 2000);

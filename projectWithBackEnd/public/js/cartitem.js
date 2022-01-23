async function displayFruits() {
    const shop = await fetch("http://localhost:1234/products");
    const data = await shop.json();
    console.log(data);
    displayFruitss(data);
  }
  displayFruits()
  
  function displayFruitss(list) {
      document.getElementById("fruit-shops").innerHTML = "";
      let fruit_area = document.getElementsByClassName("fruit-area");
  
      list.map(function(shops) {
          let mainDiv = document.createElement("div");
          mainDiv.setAttribute("class", "mainDiv");
  
          let secondMainDiv = document.createElement("div");
          secondMainDiv.setAttribute("class","second-main")
  
          let add_btn_div = document.createElement("div");
  
  
          let div1 = document.createElement("div");
          div1.setAttribute("class", "div1");
  
          let img = document.createElement("img");
          img.setAttribute("class", "image");
          img.setAttribute("src",shops.p_image);
  
          let div2 = document.createElement("div");
          div2.setAttribute("class", "div2");
  
          let shopName = document.createElement("p");
          shopName.setAttribute("class", "SName");
          shopName.textContent = shops.p_name;
  
          // let location = document.createElement("p");
          // location.setAttribute("class", "location1");
          // location.textContent = shops.location;
  
  
          let div3 = document.createElement("div");
          div3.setAttribute("class", "div3");
  
          let distance = document.createElement("p");
          distance.setAttribute("class", "distance");
          distance.textContent = shops.p_price;
  
          let add_btn = document.createElement("button");
          add_btn.setAttribute("class", "add")
          add_btn.textContent = "Add";
  
  
          div1.append(img);
          div3.append(distance);
          div2.append(shopName,div3);
  
          add_btn_div.append(add_btn);
          secondMainDiv.append(add_btn_div)
          mainDiv.append(div1, div2, secondMainDiv);
          document.querySelector("#fruit-shops").append(mainDiv);
      })
  
      let goto = document.getElementById("fruit-shops");
      goto.addEventListener("click",go)
      function go() {
          window.location.href=""
      }
  }
  
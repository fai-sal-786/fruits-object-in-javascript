var list = document.getElementById("list");
var fruits = [
    {
    name: "Apple",
    title: "Phalon ka iron wala phal",
    types: ["Redapple", "Greenapple"],
    desc: "apple is very important fruit is iron point of you. ",
    image:
      "https://images.unsplash.com/photo-1589217157232-464b505b197f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Pineapple",
    title: "Garmi ka dushman",
    types: ["Phalon ka cool wala phal"],
    desc: "pineapple is very cool fruit . ",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "kiwi",
    title: "Juicy Peach",
    types: ["kiwi"],
    desc: "kiwi is very delicious fruit . ",
    image:
      "https://plus.unsplash.com/premium_photo-1671379487961-0da655f63015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S0lXSXxlbnwwfHwwfHx8MA%3D%3D",
    
  },
  {
    name: "BlackCherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    desc: "black cherry is very expensive fruit . ",
    image:
      "https://media.istockphoto.com/id/139968236/photo/two-black-cherries-on-their-vine.webp?b=1&s=170667a&w=0&k=20&c=zQNRTSogzXdGdrClU9WXyEGof2Y0rNtEbqMssW7ihd4=",
  },
  {
    name: "Orange",
    title: "Phalon ka vitamin bharmare",
    types: ["orange"],
    desc: "orange is most important fruit in vitamins purpose",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
  },
  {
    name: "BANANA",
    title: "Phalon ka SHANSHAH",
    types: ["BANANA"],
    desc: "Banana is very important frit in multivitamins. ",
    image:
      "https://plus.unsplash.com/premium_photo-1667926862695-629f15968976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    name: "STRAWBERRY",
    title: "Phalon ka DELICIOUS",
    types: ["strawberry"],
    desc: "Strawberry is very important FRUIT LACK OF BLOOD . ",
    image:
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Grappes",
    title: "Phalon ka jusicy fruit",
    types: ["grappes"],
    desc: "Grappes is very important fruit & jusicy fruit . ",
    image:
      "https://images.unsplash.com/photo-1603186741833-4a7cf699a8eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mango",
    title: "Phalon ka badshah",
    types: ["mango"],
    desc: "Mango is very delicious fruit . ",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8fDA%3D",
  },
];

fruits.forEach(function (data, ind) {
  var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
  <div class="flex relative h-[250px]">
    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
      data.image
    }">
    <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-black-200 bg-white opacity-0 hover:opacity-100">
      <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
        data.name
      }</h2>
      <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
        data.title
      }</h1>
      <p class="leading-relaxed">${data.types.join(" , ")}</p>
      <p class="leading-relaxed">${data.desc} </p>
      <button onclick="updateDesc(this)">update</button>
    </div>
  </div>
</div>`;
  list.innerHTML += ele;
});

function updateDesc(ele) {
  console.log("ele=>", ele.previousElementSibling);
  console.log("ele parentr=>", ele.parentElement);

  var index = ele.parentElement.id;
  fruits[index].desc = prompt("Desc");
  console.log("fruits-->", fruits);
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button onclick="updateDesc(this)">update</button>
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
  });
  //   var desc = prompt("Desc");
  //   ele.previousElementSibling.innerText = desc;
}
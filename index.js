alert(
    "Xar bir api dan kelayotgan ma'lumotni ni komentga qilib  qo'yganman ishlatayotganizda kamentan olib ishlatishingiz mumkin"
  );
  
  const wrapper = document.querySelector("#wrapper");
  const posts = document.querySelector("#posts");
  const albums = document.querySelector("#albums");
  const photos = document.querySelector("#photos");
  const todos = document.querySelector("#todos");
  const users = document.querySelector("#users");
  const button = document.querySelector("#btn");
  
  
  function createBlock(value) {
    return `
      <div class="block">
              <h3>${value.name}</h3>
              <h3${value.email}</h3>
              <p>${value.body}</p>
              <span>${value.id}</span>
          </div>
      `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 404) {
          throw new Error("API ga noto'g'ri murojat qilindi");
        }
      })
      .then((data) => {
        data.forEach((element) => {
          let card = createBlock(element);
          wrapper.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("API ga murjat tugadi");
      });
  });
  
  
  function createBlock(value) {
    return `
      <div class="block">
              <h3>${value.userId}</h3>
              <h3${value.id}</h3>
              <p>${value.title}</p>
              <span>${value.body}</span>
          </div>
      `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 404) {
          throw new Error("API ga noto'g'ri murojat qilindi");
        }
      })
      .then((data) => {
        data.forEach((element) => {
          let card = createBlock(element);
          posts.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("API ga murjat tugadi");
      });
  });
  
  
  function createBlock(value) {
    return `
      <div class="block">
              <h3>${value.userId}</h3>
              <h3${value.id}</h3>
              <p>${value.title}</p>
          </div>
      `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 404) {
          throw new Error("API ga noto'g'ri murojat qilindi");
        }
      })
      .then((data) => {
        data.forEach((element) => {
          let card = createBlock(element);
          albums.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("API ga murjat tugadi");
      });
  });
  
  
  function createBlock(value) {
    return `
      <div class="block">
              <h3>${value.albumId}</h3>
              <h3${value.id}</h3>
              <p>${value.title}</p>
              <span>${value.url}</span>
              <span>${value.thumbnailUrl}</span>
          </div>
      `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 404) {
          throw new Error("API ga noto'g'ri murojat qilindi");
        }
      })
      .then((data) => {
        data.forEach((element) => {
          let card = createBlock(element);
          photos.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("API ga murjat tugadi");
      });
  });
  
  
  function createBlock(value) {
    return `
      <div class="block">
              <h3>${value.userId}</h3>
              <h3${value.id}</h3>
               <p>${value.title}</p>
              <span>${value.completed}</span>
          </div>
      `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 404) {
          throw new Error("API ga noto'g'ri murojat qilindi");
        }
      })
      .then((data) => {
        data.forEach((element) => {
          let card = createBlock(element);
          todos.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("API ga murjat tugadi");
      });
  });
  
  
  button &&
    button.addEventListener("click", function (event) {
      event.preventDefault();
  
      button.style.display = "none";
  
      function createBlock(value) {
        return `
      <div class="block">
              <h3>${value.id}</h3>
              <h3${value.name}</h3>
               <p>${value.username}</p>
              <span>${value.email}</span>
          </div>
      `;
      }
  
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
          if (response.status == 404) {
            throw new Error("API ga noto'g'ri murojat qilindi");
          }
        })
        .then((data) => {
          data.forEach((element) => {
            let card = createBlock(element);
            users.innerHTML += card;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("API ga murjat tugadi");
        });
    });
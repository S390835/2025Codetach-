function toggleMenu() {
      document.getElementById("navbar").classList.toggle("active");
    }

    const tutorials = [
      {name: "HTML", link: "index2.html"},
      {name: "CSS", link: "index4.html"},
      {name: "JavaScript", link: "index5.html"},
      {name: "SQL", link: "index6.html"},
      {name: "Python", link: "index7.html"},
      {name: "php", link: "index8.html"},
      {name: "C", link: "index9.html"},
      {name: "C++", link: "index10.html"}
      
    ];

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      suggestionsBox.innerHTML = "";
      if (query) {
        const results = tutorials.filter(t =>
          t.name.toLowerCase().includes(query)
        );
        if (results.length) {
          suggestionsBox.style.display = "block";
          results.forEach(r => {
            const div = document.createElement("div");
            div.textContent = r.name;
            div.onclick = () => {
              window.location.href = r.link;
            };
            suggestionsBox.appendChild(div);
          });
        } else {
          suggestionsBox.style.display = "none";
        }
      } else {
        suggestionsBox.style.display = "none";
      }
    });

    function doSearch() {
      const query = searchInput.value.toLowerCase();
      const result = tutorials.find(t => t.name.toLowerCase() === query);
      if (result) {
        window.location.href = result.link;
      } else {
        alert("No results found!");
      }
    }
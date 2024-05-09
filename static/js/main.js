function clickme() {

  if (document.getElementById("my-btn").classList.contains("is-primary")) {
    document.getElementById("my-par").innerHTML = "Hello <strong>World</strong>!"
    document.getElementById("my-btn").classList.remove("is-primary")
    document.getElementById("my-btn").classList.add("is-danger")
  } else if (document.getElementById("my-btn").classList.contains("is-danger")) {
    document.getElementById("my-par").innerHTML = "My first website with <strong>Bulma</strong>!"
    document.getElementById("my-btn").classList.remove("is-danger")
    document.getElementById("my-btn").classList.add("is-primary")
  }
}
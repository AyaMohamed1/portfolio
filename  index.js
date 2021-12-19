function sendEmail() {
    var btn = document.getElementById("send");
    var myEmail = "ayamohamed102000@gmail.com";
    var userEmail = document.getElementById("email");
    var sub = document.getElementById("sub");
    var body = document.getElementById("comment");
    var h = `mailto:${myEmail}?subject=${sub}&body=${body}`
    btn.href = h;
  }
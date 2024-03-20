function login (){
    p1_name=document.getElementById("player1_name_input").value;
    p2_name=document.getElementById("player2_name_input").value;
    localStorage.setitem("player1_name", p1_name);
    localStorage.setitem("player2_name", p2_name);
    window.location.replace("game_page.html")
}
var w = $(window).width();

$(".gh-text-shadow").css({"background-color": "#343942", "border-radius": "6px", "width": "fit-content", "padding": "4px", "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace", "font-size": "13px", "margin": "none"});

$(".gh-cell, .gh-cell-head, .gh-cell-div").css({"color": "white"});

$(".gh-cell-div").css({"border-radius": "10px", "padding": "1em"});

$(".gh-cell").css({"border-bottom-left-radius": "10px", "border-bottom-right-radius": "10px", "color": "white", "position": "relative", "border-left": "1px solid #21262D", "border-right": "1px solid #21262D", "border-bottom": "1px solid #21262D", "padding": "1em", "display": "flex", "flex-direction": "column"});
$(".gh-cell-head").css({"padding": "8px", "border": "1px solid #21262D", "border-top-left-radius": "10px", "border-top-right-radius": "10px", "display": "flex", "font-size": "14px"});

$(".gh-options-icon").append(`<?xml version="1.0" encoding="iso-8859-1"?> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg fill="#7D8590" height="20px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.054 460.054" xml:space="preserve"> <g> <g> <path d="M40.003,69.679C17.914,69.679,0,87.592,0,109.697c0,22.089,17.914,39.987,40.003,39.987 c22.089,0,40.003-17.898,40.003-39.987C80.006,87.592,62.092,69.679,40.003,69.679z"/> </g> <g> <path d="M40.003,190.032C17.914,190.032,0,207.93,0,230.035c0,22.089,17.914,40.002,40.003,40.002 c22.089,0,40.003-17.913,40.003-40.002C80.006,207.93,62.092,190.032,40.003,190.032z"/> </g> <g> <path d="M40.003,310.37C17.914,310.37,0,328.283,0,350.372c0,22.089,17.914,40.003,40.003,40.003 c22.089,0,40.003-17.914,40.003-40.003C80.006,328.283,62.092,310.37,40.003,310.37z"/> </g> <g> <path d="M429.973,79.601H145.419c-16.611,0-30.081,13.47-30.081,30.096c0,16.612,13.469,30.081,30.081,30.081h284.554 c16.61,0,30.081-13.469,30.081-30.081C460.054,93.071,446.583,79.601,429.973,79.601z"/> </g> <g> <path d="M429.973,199.939H145.419c-16.611,0-30.081,13.469-30.081,30.096c0,16.612,13.469,30.081,30.081,30.081h284.554 c16.61,0,30.081-13.469,30.081-30.081C460.054,213.408,446.583,199.939,429.973,199.939z"/> </g> <g> <path d="M429.973,320.291H145.419c-16.611,0-30.081,13.469-30.081,30.081c0,16.611,13.469,30.08,30.081,30.08h284.554 c16.61,0,30.081-13.469,30.081-30.08C460.054,333.759,446.583,320.291,429.973,320.291z"/> </g> </g> </svg>`);

$(".gh-icon-button").css({"border": "none", "border-radius": "6px", "width": "28px", "height": "28px", "background": "transparent", "color": "white", "vertical-align": "middle", "align-content": "center"});
$(".gh-icon-button").hover(function() {
  $(this).css({"background-color": "#21262D"});
}, function() {
  $(this).css({"background": "transparent"})
});

$(".gh-bar-button").wrap(`<div style="padding-top: 8px; padding-bottom: 8px; margin-right: 8px; width: fit-content;"></div>`);
$(".gh-bar-button").css({"border": "none", "background": "transparent", "color": "white", "user-select": "none", "padding": "0.5em"});
$(".gh-bar-button").hover(function(){
  $(this).css({"background-color": "#171B20", "border-radius": "6px"});
}, function() {
  $(this).css({"background": "transparent"});
});

$(".gh-bar-button").click(function(){
  $(".gh-bar-button").css("font-weight", "500");
  $(".gh-bar-button").parent().css({"border-bottom": "0px"});
  $(this).css("font-weight", "550");
  $(this).parent().css("border-bottom", "2px solid #F78166");
})

$(".gh-bar-button-default").css("font-weight", "550");
$(".gh-bar-button-default").parent().css("border-bottom", "2px solid #F78166");

$(".gh-bar, .flex").css({"display": "flex"});
$(".gh-bar").css({"margin-bottom": "20px"});

$(".gh-header-button").css({"margin-left": "12px", "border": "none", "background": "transparent", "color": "white", "font-weight": "530"});
$(".gh-header-button").hover(function(){
  $(this).css({"color": "#AEBABD"});
}, function(){
  $(this).css({"color": "white"});
});

$(".gh-vertical-div").css({"padding-left": "22px", "padding-right": "22px", "padding-top": "32px", "height": "100%"});

$(".gh-body").css({"width": "100%", "height": "100%", "position": "absolute", "top": "62px", "color": "white", "display": "flex"});

$(".gh-search").css({"height": "24px", "border-radius": "8px", "border": "1px solid #30363D", "padding": "3px", "padding-left": "32px", "color": "white", "outline": "none", "transition": "all 0.2s", "user-select": "none", "background": `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%237D8590' width='122.879px' height='119.799px' viewBox='0 0 122.879 119.799' enable-background='new 0 0 122.879 119.799' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z'/%3E%3C/g%3E%3C/svg%3E") no-repeat left`, "background-size": "14px", "background-position": "left 10px top 9px", "background-color": "#161B22"});

$(".gh-header-logo").css({"width": "42px", "height": "42px", "margin-right": "16px"});

$(".gh-header").css({"width": "95.35%", "height": "36px", "position": "absolute", "top": "0px", "right": "0px", "background-color": "#161B22", "padding": "13px", "padding-left": "46px", "padding-right": "26px", "color": "white", "display": "flex", "align-items": "center"});

$(".gh-close-card").css({"background-color": "#0D1117", "padding": "1em", "border": "1px solid #21262D", "border-radius": "10px", "position": "relative"});
$(".gh-close-card").append(`<span style="background-color: transparent; position: absolute; right: 15px; top: 15px; color: #7D8590;" onClick="this.parentElement.style.display='none'"><?xml version="1.0" encoding="UTF-8"?> <svg width="11px" fill="#7D8590" height="11px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m533.68 537.1-183.68-183.62-183.68 183.62c-9.7227 9.7617-22.93 15.25-36.707 15.25-13.777 0-26.988-5.4883-36.711-15.25-9.7617-9.7227-15.25-22.934-15.25-36.711 0-13.777 5.4883-26.984 15.25-36.707l183.62-183.68-183.62-183.68c-9.7617-9.7227-15.25-22.93-15.25-36.707 0-13.777 5.4883-26.988 15.25-36.711 9.7227-9.7617 22.934-15.25 36.711-15.25 13.777 0 26.984 5.4883 36.707 15.25l183.68 183.62 183.68-183.62c9.7227-9.7617 22.93-15.25 36.707-15.25 13.777 0 26.988 5.4883 36.711 15.25 9.7617 9.7227 15.25 22.934 15.25 36.711 0 13.777-5.4883 26.984-15.25 36.707l-183.62 183.68 183.62 183.68c9.7617 9.7227 15.25 22.93 15.25 36.707 0 13.777-5.4883 26.988-15.25 36.711-9.7227 9.7617-22.934 15.25-36.711 15.25-13.777 0-26.984-5.4883-36.707-15.25z"/> </g> </svg></span>`);

$(".gh-input").css({"background-color": "#010409", "border": "1px solid #30363D", "border-radius": "6px", "padding": "6px", "color": "white", "outline": "none", "transition": "all 0.2s", "user-select": "none", "padding-left": "12px"});
$(".gh-input, .gh-search").on('focus', function() {
    $(this).css({"outline": "2px solid #388bfd"});
}).on('focusout', function() {
    $(this).css({"outline": "none"});
});

$(".gh-generic").css({"background-color": "#21262D", "border": "solid 1px #353a41", "color": "#C9D1D9", "padding": "6px", "border-radius": "8px", "padding-left": "10px", "padding-right": "10px", "user-select": "none"})
$(".gh-generic").hover(function() {
    $(this).css({"background-color": "#30363D", "border": "solid 1px #8B949E"});
}).on('mouseup mouseleave', function() {
    $(this).css({"background-color": "#21262D", "border": "solid 1px #353a41"});
});
$(".gh-generic").on('mousedown', function() {
    $(this).css({"background-color": "#282E33", "border": "solid 1px #434A52"});
}).on('mouseup mouseleave', function() {
    $(this).css({"background-color": "#21262D", "border": "solid 1px #353a41"});
});

$(".gh-card").css({"background-color": "#0D1117", "padding": "1em", "border": "1px solid #21262D", "border-radius": "10px"});

$("a").css({"text-decoration": "none", "color": "#4078c0", "font-size": "15px"});

$(".gh-new").css({"background-color": "#2dba4e", "padding": "5px", "padding-right": "10px", "padding-left": "10px", "border": "none", "border-radius": "7px", "color": "white", "user-select": "none"});
$(".gh-new").hover(function(){
  $(this).css("background-color", "#30c453");
  }, function(){
  $(this).css("background-color", "#2dba4e");
});

$(".gh-new").on('mousedown', function() {
    $(this).css("background-color", "#2dba4e");
}).on('mouseup mouseleave', function() {
    $(this).css("background-color", "#30c453");
});

$(document).ready(function(){
  $('#link_other a').attr('target', '_blank');
});

$(".gh-border, .gh-cell-div").css({"border": "1px solid #21262D"});
$(".gh-border-right").css({"border-right": "1px solid #21262D"});
$(".gh-border-left").css({"border-left": "1px solid #21262D"});
$(".gh-border-top").css({"border-top": "1px solid #21262D"});
$(".gh-border-bottom, .gh-bar").css({"border-bottom": "1px solid #21262D"});

$(".gh-white-link").css({"color": "#E6E3D0", "font-weight": "600", "line-height": "26px"});
$(".gh-white-link").hover(function() {
  $(this).css({"color": "#4078c0", "text-decoration": "underline"});
}, function() {
  $(this).css({"color": "#E6E3D0", "text-decoration": "none"});
})

$(".gh-blue-hover").hover(function() {
  $(this).css({"border-color": "#388bfd"});
}, function() {
  $(this).css({"border-color": "#21262D"});
})

$(".gh-gray-2").css({"background-color": "#161B22"});
$(".gh-gray").css({"background-color": "#0D1117"});
$(".gh-black").css({"background-color": "#010409"});
$(".body").css({"height": "100%", "width": "100%", "margin": "none", "position": "absolute", "top": "0px"});

document.head.innerHTML += "<style>*{font-family: sans-serif}body{background-color:#010409}::placeholder{color: #6E7681}html,body{height: 100vh;margin: 0;padding: 0;}*:not(body) {overflow: hidden;overflow-y:auto }::-webkit-scrollbar {display: none;}</style>";
/* Reset */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* Body */
body{
    font-family:Arial, sans-serif;
    background:#f4f7fb;
    color:#333;
    line-height:1.6;
}

/* Header */
header{
    background:#004080;
    color:white;
    padding:20px;
}

header h2{
    text-align:center;
    margin-bottom:10px;
}

/* Navigation */
nav{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

nav a{
    color:white;
    text-decoration:none;
    font-weight:bold;
    padding:8px 12px;
}

nav a:hover{
    background:white;
    color:#004080;
    border-radius:5px;
}

/* Sections */
section{
    padding:40px 20px;
    text-align:center;
}

/* Headings */
h1{
    color:#004080;
    margin-bottom:20px;
}

h2{
    color:#0066cc;
    margin-bottom:15px;
}

h3{
    color:#333;
    margin-bottom:10px;
}

/* Paragraphs */
p{
    margin-bottom:15px;
}

/* Buttons */
button,
input[type="submit"]{
    background:#004080;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:5px;
    cursor:pointer;
    font-size:16px;
}

button:hover,
input[type="submit"]:hover{
    background:#0066cc;
}

/* Course Cards */
div{
    background:white;
    margin:20px auto;
    padding:20px;
    width:80%;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
}

/* Images */
img{
    width:100%;
    max-width:300px;
    border-radius:10px;
}

/* Forms */
form{
    background:white;
    width:80%;
    margin:auto;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
}

input,
select{
    width:100%;
    padding:10px;
    margin-top:5px;
    margin-bottom:15px;
}

/* Footer */
footer{
    background:#004080;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:20px;
}

/* Mobile Responsive */
@media(max-width:768px){

nav{
    flex-direction:column;
    align-items:center;
}

div{
    width:95%;
}

form{
    width:95%;
}

}
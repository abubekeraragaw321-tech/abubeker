body{
margin:0;
font-family:Arial;
background:linear-gradient(135deg,#4facfe,#00f2fe);
color:white;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.app{
background:rgba(0,0,0,0.3);
padding:20px;
border-radius:20px;
backdrop-filter:blur(10px);
text-align:center;
width:90%;
max-width:400px;
}

.title{
margin-bottom:10px;
}

.status{
margin:10px;
font-size:20px;
font-weight:bold;
}

.board{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
margin:15px 0;
}

.cell{
aspect-ratio:1;
background:white;
color:black;
font-size:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:15px;
cursor:pointer;
transition:0.3s;
}

.cell:hover{
transform:scale(1.1);
background:#eee;
}

.scoreboard{
display:flex;
justify-content:space-around;
margin:10px 0;
font-size:18px;
}

button{
margin:5px;
padding:10px;
border:none;
border-radius:10px;
background:#ff9800;
color:white;
font-weight:bold;
cursor:pointer;
transition:0.3s;
}

button:hover{
transform:scale(1.1);
background:#ff5722;
}

.dark{
background:#111;
}

.dark .app{
background:#222;
}

.dark .cell{
background:#333;
color:white;
}

@media(max-width:400px){
.cell{
font-size:30px;
}
}

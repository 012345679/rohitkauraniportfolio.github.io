body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    width: 80%;
    margin: auto;
    text-align: center;
}

header {
    background: linear-gradient(to right, #4facfe, #00f2fe);
    color: white;
    padding: 80px 0;
}

h1 {
    margin-bottom: 10px;
}

section {
    padding: 60px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.card {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    background: #e0f7fa;
}

.btn {
    display: inline-block;
    background: #000;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 20px;
    border-radius: 5px;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

button {
    cursor: pointer;
    border: none;
}

footer {
    background: #111;
    color: white;
    padding: 20px;
}

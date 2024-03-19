exports.renderPage = () => `
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <form method="POST" action="/student">
        <input type="text" name="name" placeholder="Imię" required>
        <input type="text" name="lastname" placeholder="Nazwisko" required>
        <input type="number" name="age" placeholder="Wiek" required>
        <select name="gender" required>
            <option value="male">Mężczyzna</option>
            <option value="female">Kobieta</option>
            <option value="other">Inne</option>
        </select>
        <input type="number" name="code" placeholder="Numer albumu" required>
        <input type="text" name="studyField" placeholder="Kierunek studiów" required>
        <button type="submit">Wyślij</button>
    </form>
</body>
</html>
`;


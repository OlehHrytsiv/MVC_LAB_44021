exports.renderPage = (studentData) => `
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Student Profile</title>
</head>
<body>
    <h1>Student Profile</h1>
    ${studentData ? `
        <p>Code: ${studentData.code}</p>
        <p>Name: ${studentData.name}</p>
        <p>Lastname: ${studentData.lastname}</p>
        <p>Gender: ${studentData.gender}</p>
        <p>Age: ${studentData.age}</p>
        <p>Study Field: ${studentData.studyField}</p>
    ` : 'No data provided.'}
</body>
</html>
`;

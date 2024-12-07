import fs from 'fs';
import path from 'path';

const content = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Not Found</title>
    <script>
        // Get the current path
        let path = window.location.pathname;
        // Remove any trailing slash
        path = path.endsWith('/') ? path.slice(0, -1) : path;
        // Redirect to the requested path
        window.location.href = path;
    </script>
</head>
<body>
    <h1>404 - Page Not Found</h1>
</body>
</html>
`;

fs.writeFileSync(path.join(process.cwd(), 'build', '404.html'), content.trim());
console.log('404.html generated in build directory.');
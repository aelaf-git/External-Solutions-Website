const path = require('path');
const fs = require('fs');

// This file is a wrapper for the Next.js standalone server.
// It is useful for environments like DirectAdmin/Phusion Passenger 
// that expect a root-level startup file.

process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 3000;

/**
 * Recursively find the server.js file inside .next/standalone
 */
function findServerPath(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const result = findServerPath(fullPath);
            if (result) return result;
        } else if (file === 'server.js' && fullPath !== __filename) {
            return fullPath;
        }
    }
    return null;
}

const standaloneDir = path.join(__dirname, '.next', 'standalone');

if (fs.existsSync(standaloneDir)) {
    const serverPath = findServerPath(standaloneDir);
    if (serverPath) {
        console.log(`> Starting standalone server from: ${serverPath}`);
        require(serverPath);
    } else {
        console.error('Could not find server.js inside .next/standalone');
        process.exit(1);
    }
} else {
    console.error('.next/standalone directory not found. Please run "npm run build" first.');
    process.exit(1);
}

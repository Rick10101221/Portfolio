#!/bin/bash
npm run build
touch build/_redirects
echo "/* /index.html 200" > build/_redirects
netlify deploy --dir=./build
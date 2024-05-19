@Echo Off
call npm run build
start docker build -t guilhermeavp/auth:V1 .
exit
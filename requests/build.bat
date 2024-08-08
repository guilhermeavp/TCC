@echo off
call npm run build
start docker build -t guilhermeavp/pedidos:V1 .
exit
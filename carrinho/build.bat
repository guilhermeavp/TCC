@echo off
call npm run build
start docker build -t guilhermeavp/carrinho:V1 .
exit
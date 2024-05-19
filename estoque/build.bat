@echo off
call npm run build
start docker build -t guilhermeavp/estoque:V1 .
exit
@echo off
call npm run build
start docker build -t guilhermeavp/precos:V1 .
exit
@echo off
call npm run build
start docker build -t guilhermeavp/produtos:V1 .
exit
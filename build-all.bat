@echo off
cd api
START build.bat
cd ..
cd auth
START build.bat
cd ..
cd carrinho
START build.bat
cd ..
cd estoque
START build.bat
cd ..
cd payment
START build.bat
cd ..
cd pedidos
START build.bat
cd ..
cd precos
START build.bat
cd ..
cd produtos
START build.bat
exit /B
@echo off
echo 🔍 Verificando archivos antes del commit...
echo.

echo 📷 Verificando que las imágenes del carousel existan...
if not exist "public\images\reservas\Cocinero italiano.png" echo ❌ Falta: Cocinero italiano.png && exit /b 1
if not exist "public\images\reservas\Mesera.png" echo ❌ Falta: Mesera.png && exit /b 1  
if not exist "public\images\reservas\Bartender italiano.png" echo ❌ Falta: Bartender italiano.png && exit /b 1
if not exist "public\images\reservas\Pizza napolitana.png" echo ❌ Falta: Pizza napolitana.png && exit /b 1
if not exist "public\images\reservas\Carpaccio.png" echo ❌ Falta: Carpaccio.png && exit /b 1
if not exist "public\images\reservas\Lasaña.png" echo ❌ Falta: Lasaña.png && exit /b 1
if not exist "public\images\reservas\Spaghetti.jpg" echo ❌ Falta: Spaghetti.jpg && exit /b 1
echo ✅ Todas las imágenes están disponibles

echo.
echo 📝 Verificando archivos principales...
if not exist "src\App.jsx" echo ❌ Falta: App.jsx && exit /b 1
if not exist "src\main.jsx" echo ❌ Falta: main.jsx && exit /b 1
echo ✅ Archivos principales OK

echo.
echo 🎉 ¡Todo listo para commit!
exit /b 0
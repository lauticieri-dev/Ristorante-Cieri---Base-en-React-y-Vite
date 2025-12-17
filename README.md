Buenas tardes/noches/días, en esta Readme,md se encuentran instrucciones de como está organizado del programa y funcionalidad mas unos detalles

Este proyecto como su nombre lo menciona es mi antiguo proyecto con base en React y Vite que brinda mayor velocidad, efectividad y organización. El deploy fue realizado en Github Pages pero realizado con Github actions ya que desde la branch me genera fallas y no carga la página ni muestra contenido, de hecho hay código para arreglar fallas del deploy ya que tuvo fallas en eso. Los HTML Index.html y 404.html son soluciones a fallas de rutas y redireccionamientos en los que github pages no carga el contenido de la página

La mayoría de assets, components y páginas se encuentran en /src, en esa carpeta se encuentran, components, hook y pages y las images están en /public junto con 404.html

la página está en: https://lauticieri-dev.github.io/Ristorante-Cieri---Base-en-React-y-Vite/

En >assets se encuentran todas las imágenes dividida por cada page, luego encontrará los components Carousel (reservas), Hero section (inicio), Info section (inicio) y whatsapp button (en todas las pages)
y el menú de la carta (cards) junto con la section (layout de carta)Ç

El menú completo se encuentra en data junto con los timeslots 
En hooks se encuentra el menú responsive para pantallas pequeñas junto con un script para hacer más confiable la fecha y evitar problemas de la zona horaria

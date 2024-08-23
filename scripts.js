document.getElementById('menu-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    // Ajusta el main y el footer al estado actual del sidebar
    document.querySelector('main').classList.toggle('shifted', sidebar.classList.contains('active'));
    document.querySelector('footer').classList.toggle('shifted', sidebar.classList.contains('active'));
});

var temas = document.querySelectorAll('.tema');
temas.forEach(function(tema) {
    tema.addEventListener('click', function() {
        this.classList.toggle('active');
        var temaId = this.id;

        // Mostrar la descripción del tema
        if (this.classList.contains('active')) {
            showDescription(temaId);
            // Limpiar la información de subtemas al mostrar un nuevo tema
            document.getElementById('info-content').innerHTML = "<p>Seleccione uno de los sistemas operativos para ver su información.</p>";
        } else {
            document.getElementById('info-description').innerHTML = "<p>Seleccione un tema para ver la descripción.</p>";
        }
    });
});

document.querySelectorAll('.subcategorias li').forEach(function(link) {
    link.addEventListener('click', function() {
        var infoId = this.getAttribute('data-info');
        showContent(infoId);

        // Ocultar bienvenida
        document.getElementById('info-description').style.display = 'none';

        // Cerrar el menú hamburguesa automáticamente
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
        document.querySelector('main').classList.remove('shifted');
        document.querySelector('footer').classList.remove('shifted');
    });
});

function showDescription(temaId) {
    var descriptions = {
        "tema-apple": "<h2>SISTEMAS OPERATIVOS APPLE</h2><p>Aca podras observar todos los sistemas operativos de apple que han sido creados desde sus inicios.</p>",
        "tema-dos": "<h2>SISTEMAS OPERATIVOS D.O.S</h2><p>Aca podras observar todos los sistemas operativos de D.O.S que han sido creados desde sus inicios.</p>",
        "tema-windows-home": "<h2>SISTEMAS OPERATIVOS WINDOWS HOME</h2><p>Aca podras observar todos los sistemas operativos de Windows Home que han sido creados desde sus inicios.</p>",
        "tema-windows-server": "<h2>SISTEMAS OPERATIVOS WINDOWS SERVER</h2><p>Aca podras observar todos los sistemas operativos de Windows Server que han sido creados desde sus inicios.</p>"
    };

    var infoDescription = document.getElementById('info-description');
    infoDescription.innerHTML = descriptions[temaId] || "<p>Seleccione un tema para ver la descripción.</p>";
}

function showContent(infoId) {
    var content = {
        "apple1": `
            <table>
                <tr><th>NOMBRE</th><td>RHAPSODY DEVELOPER RELEASE</td></tr>
                <tr><th>VERSION (SO)</th><td>Rhapsody Developer Release 1997</td></tr>
                <tr><th>VERSION KERNEL</th><td>NeXTSTEP y BSD.</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1997</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC (G3, G4)</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz a 300 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>768 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz - 100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Compatibilidad con la arquitectura PowerPC.
*Soporte mejorado para gráficos a través de tarjetas gráficas avanzadas de la época.
*Soporte para dispositivos de almacenamiento SCSI y ATA.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Interfaz basada en NeXTSTEP, ofreciendo una experiencia de usuario avanzada.
*Integración de tecnologías avanzadas de BSD para mejorar la estabilidad y el rendimiento del sistema operativo.
*Entorno de desarrollo orientado a objetos con herramientas como Interface Builder y Project Builder.</td></tr>
            </table>
            <img src="images/rhapsody.jpg" alt="rhapsody">
        `,
        "apple2": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X SERVER 1.0</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X Server 1.07</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU (combinación de Mach 2.5 y elementos de BSD)</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1999</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G3</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 300 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>768 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz - 100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Compatibilidad con la arquitectura PowerPC G3.
*Soporte para tarjetas gráficas avanzadas para su tiempo.
*Compatibilidad con dispositivos de almacenamiento SCSI y ATA.
*Interfaces de red avanzadas, incluyendo Ethernet."</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Sistema operativo basado en una combinación de tecnología NeXTSTEP y elementos de BSD.
*Interfaz gráfica de usuario basada en el entorno NeXTSTEP.
*Herramientas de administración de servidores, incluyendo NetInfo para la administración de directorios."</td></tr>
            </table>
            <img src="images/server1.0.jpg" alt="server1.0">
        `,
        "apple3": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X DEVELOPER PREVIEW</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X Developer Preview</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU (combinación de Mach 3.0 y elementos de BSD)</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1999-2000</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC (G3, G4)</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 500 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Compatibilidad con arquitecturas PowerPC G3 y G4.
*Soporte mejorado para gráficos, incluyendo aceleración 3D.
*Compatibilidad con una gama de dispositivos de almacenamiento, incluyendo SCSI y ATA.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Nueva interfaz gráfica de usuario conocida como Aqua, que presentó elementos visuales modernos y efectos de transparencia.
*Utilización del sistema de ventanas Quartz, basado en PDF.
*Nuevo Finder con una interfaz más moderna y funcionalidad mejorada.</td></tr>
            </table>
            <img src="images/developer.jpg" alt="developer">
        `,
        "apple4": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X PUBLIC BETA</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X Public Beta</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU (combinación de Mach 3.0 y elementos de BSD)</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2000</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC (G3, G4)</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 500 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Compatibilidad con las arquitecturas PowerPC G3 y G4.
*Soporte mejorado para gráficos, incluyendo aceleración 3D.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de la nueva interfaz gráfica de usuario con elementos visuales modernos y efectos de transparencia.
*Una versión rediseñada del Finder con mejoras en la funcionalidad y la interfaz.
*Sistema de ventanas basado en PDF que ofrecía gráficos de alta calidad y precisión.</td></tr>
            </table>
            <img src="images/beta.jpg" alt="beta">
        `,
        "apple5": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.0</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU (combinación de Mach 3.0 y elementos de BSD)</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2001</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC (G3, G4)</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 500 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1.5 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Compatibilidad con PowerPC G3 y G4.
*Soporte mejorado para gráficos.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Interfaz Aqua.
*Sistema de ventanas Quartz.
*Finder rediseñado.
*Soporte para Cocoa y Carbon.
*Nuevas aplicaciones como Mail y TextEdit.</td></tr>
            </table>
            <img src="images/x10.0.jpg" alt="x10.0">
        `,
        "apple6": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.1</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2001</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G3, G4</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 733 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1.5 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el rendimiento gráfico.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Rendimiento mejorado.
*Mejor soporte para impresoras y dispositivos externos.</td></tr>
            </table>
            <img src="images/x10.1.jpg" alt="x10.1">
        `,
        "apple7": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.2</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.2</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2002</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G3, G4</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>2 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la aceleración gráfica.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de Quartz Extreme.
*Nuevo Mail, Address Book, y iChat.
*Soporte mejorado para redes.</td></tr>
            </table>
            <img src="images/x10.2.jpg" alt="x10.2">
        `,
        "apple8": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.3</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.3</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2003</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G3, G4</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz - 2 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>8 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>333 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte para PowerPC G5.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de Exposé.
*Mejoras en el Finder.
*Nuevo Safari.</td></tr>
            </table>
            <img src="images/x10.3.jpg" alt="x10.3">
        `,
        "apple9": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.4</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.4</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2005</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G3, G4, G5, y más tarde Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>300 MHz - 2.7 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC e Intel x86</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 2 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte inicial para procesadores Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Spotlight.
*Dashboard.
*Mejoras en el Mail.</td></tr>
            </table>
            <img src="images/x10.4.jpg" alt="x10.4">
        `,
        "apple10": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.5</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.5</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2007</td></tr>
                <tr><th>PROCESADOR</th><td>PowerPC G4, G5, y Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>867 MHz - 3 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>PowerPC e Intel x86</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 4 hilos por procesador, dependiendo del modelo</td></tr>
                <tr><th>TIPO</th><td>DDR2 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>667 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la compatibilidad con hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Time Machine.
*Spaces.
*Mail mejorado.</td></tr>
            </table>
            <img src="images/x10.5.jpg" alt="x10.5">
        `,
        "apple11": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.6</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.6</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2009</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.5 GHz - 3.33 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 4 hilos por procesador, dependiendo del modelo</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1066 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejora de rendimiento y estabilidad.
*OpenCL.
*Grand Central Dispatch.</td></tr>
            </table>
            <img src="images/x10.6.jpg" alt="x10.6">
        `,
        "apple12": `
            <table>
                <tr><th>NOMBRE</th><td>MAC OS X 10.7</td></tr>
                <tr><th>VERSION (SO)</th><td>Mac OS X 10.7</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2011</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.83 GHz - 3.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1333 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Launchpad.
*Mission Control.
*Auto Save y Versions.</td></tr>
            </table>
            <img src="images/x10.7.jpg" alt="x10.7">
        `,
        "apple13": `
            <table>
                <tr><th>NOMBRE</th><td>OS X 10.8</td></tr>
                <tr><th>VERSION (SO)</th><td>OS X 10.8</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2012</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.83 GHz - 3.6 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1600 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Integración con iCloud.
*Mensajes.
*Notificaciones.</td></tr>
            </table>
            <img src="images/x10.8.jpg" alt="x10.8">
        `,
        "apple14": `
            <table>
                <tr><th>NOMBRE</th><td>OS X 10.9</td></tr>
                <tr><th>VERSION (SO)</th><td>OS X 10.9</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2013</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 3.6 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1600 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*iBooks y Maps para Mac.
*Mejor gestión de energía.
*Finder con pestañas y etiquetas.</td></tr>
            </table>
            <img src="images/x10.9.jpg" alt="x10.9">
        `,
        "apple15": `
            <table>
                <tr><th>NOMBRE</th><td>OS X 10.10</td></tr>
                <tr><th>VERSION (SO)</th><td>OS X 10.10</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2014</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.0 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1600 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Interfaz rediseñada.
*Continuity.
*Handoff y AirDrop mejorado.</td></tr>
            </table>
            <img src="images/x10.10.jpg" alt="x10.10">
        `,
        "apple16": `
            <table>
                <tr><th>NOMBRE</th><td>OS X 10.11</td></tr>
                <tr><th>VERSION (SO)</th><td>OS X 10.11</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2015</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.0 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1600 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Split View.
*Mejoras en Mission Control.
*Metal para Mac.</td></tr>
            </table>
            <img src="images/x10.11.jpg" alt="x10.11">
        `,
        "apple17": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS X 10.12</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS X 10.12</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2016</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.2 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>1600 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Siri para Mac.
*Universal Clipboard.
*Apple Pay en la web.</td></tr>
            </table>
            <img src="images/x10.12.jpg" alt="x10.12">
        `,
        "apple18": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS X 10.13</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS X 10.13</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2017</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.2 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Sistema de archivos APFS.
*Mejoras en gráficos con Metal 2.
*Actualizaciones en Safari, Mail y Fotos.</td></tr>
            </table>
            <img src="images/x10.13.jpg" alt="x10.13">
        `,
        "apple19": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS X 10.14</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS X 10.14</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2018</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.2 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Modo oscuro.
*Escritorios dinámicos.
*Pilas en el escritorio.</td></tr>
            </table>
            <img src="images/x10.14.jpg" alt="x10.14">
        `,
        "apple20": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS X 10.15</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS X 10.15</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2019</td></tr>
                <tr><th>PROCESADOR</th><td>Intel</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz - 4.2 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Hasta 8 hilos por procesador, dependiendo del modelo.</td></tr>
                <tr><th>TIPO</th><td>DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para hardware Intel.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Fin de soporte para aplicaciones de 32 bits.
*Sidecar para usar un iPad como segunda pantalla.
*Nuevas aplicaciones: Música, Podcasts, Apple TV.</td></tr>
            </table>
            <img src="images/x10.15.jpg" alt="x10.15">
        `,
        "apple21": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS 11</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS 11</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2020</td></tr>
                <tr><th>PROCESADOR</th><td>Intel y Apple Silicon (M1)</td></tr>
                <tr><th>VELOCIDAD</th><td>1.6 GHz y 3.8 GHz (Intel) y 2.4 GHz (Apple M1)</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64 y ARM64 (Apple Silicon)</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Intel: Hasta 8 hilos por procesador. Apple Silicon (M1): Hasta 8 hilos por procesador.</td></tr>
                <tr><th>TIPO</th><td>DDR4 SDRAM (Intel) y LPDDR4X (Apple Silicon)</td></tr>
                <tr><th>CAPACIDAD</th><td>Hasta 64 GB (Intel) y 16 GB (Apple Silicon)</td></tr>
                <tr><th>FRECUENCIA</th><td>2666 MHz (Intel) y 4266 MHz (Apple Silicon)</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción de los primeros Mac con Apple Silicon (M1).</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Rediseño de la interfaz de usuario.
*Mayor compatibilidad con aplicaciones de iOS y iPadOS.
*Mejoras en seguridad y privacidad.</td></tr>
            </table>
            <img src="images/macos11.jpg" alt="macos11">
        `,
        "apple22": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS 12</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS 12</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2021</td></tr>
                <tr><th>PROCESADOR</th><td>Intel y Apple Silicon (M1, M1 Pro, M1 Max)</td></tr>
                <tr><th>VELOCIDAD</th><td>Varía según el modelo</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64 y ARM64 (Apple Silicon)</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Intel: Hasta 8 hilos por procesador. Apple Silicon (M1, M1 Pro, M1 Max): Hasta 10 hilos por procesador.</td></tr>
                <tr><th>TIPO</th><td>DDR4 SDRAM (Intel) y LPDDR4X (Apple Silicon)</td></tr>
                <tr><th>CAPACIDAD</th><td>64 GB (Intel) y 64 GB (Apple Silicon)</td></tr>
                <tr><th>FRECUENCIA</th><td>2666 MHz (Intel) y 4266 MHz (Apple Silicon)</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Nuevos chips M1 Pro y M1 Max.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Universal Control.
*AirPlay a Mac.
*Atajos (Shortcuts).</td></tr>
            </table>
            <img src="images/macos12.jpg" alt="macos12">
        `,
        "apple23": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS 13</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS 13</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2022</td></tr>
                <tr><th>PROCESADOR</th><td>Intel y Apple Silicon (M1, M1 Pro, M1 Max, M1 Ultra, M2)</td></tr>
                <tr><th>VELOCIDAD</th><td>Varía según el modelo</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64 y ARM64 (Apple Silicon)</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Intel: Hasta 8 hilos por procesador. Apple Silicon (M1, M1 Pro, M1 Max, M1 Ultra, M2): Hasta 12 hilos por procesador.</td></tr>
                <tr><th>TIPO</th><td>DDR4 SDRAM (Intel) y LPDDR4X (Apple Silicon)</td></tr>
                <tr><th>CAPACIDAD</th><td>Hasta 128 GB (Apple Silicon)</td></tr>
                <tr><th>FRECUENCIA</th><td>Varía según el modelo</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción de nuevos chips Apple Silicon.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Stage Manager.
*Mejoras en Mail, Safari y Mensajes.</td></tr>
            </table>
            <img src="images/macos13.jpg" alt="macos13">
        `,
        "apple24": `
            <table>
                <tr><th>NOMBRE</th><td>MACOS 14</td></tr>
                <tr><th>VERSION (SO)</th><td>macOS 14</td></tr>
                <tr><th>VERSION KERNEL</th><td>XNU</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2023</td></tr>
                <tr><th>PROCESADOR</th><td>Intel y Apple Silicon (M1, M1 Pro, M1 Max, M1 Ultra, M2, M2 Pro, M2 Max)</td></tr>
                <tr><th>VELOCIDAD</th><td>Varía según el modelo</td></tr>
                <tr><th>ARQUITECTURA</th><td>Intel x86-64 y ARM64 (Apple Silicon)</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>Intel: Hasta 8 hilos por procesador. Apple Silicon (M1, M1 Pro, M1 Max, M1 Ultra, M2, M2 Pro, M2 Max): Hasta 12 hilos por procesador.</td></tr>
                <tr><th>TIPO</th><td>DDR4 SDRAM (Intel) y LPDDR5 (Apple Silicon)</td></tr>
                <tr><th>CAPACIDAD</th><td>Hasta 128 GB (Apple Silicon)</td></tr>
                <tr><th>FRECUENCIA</th><td>Varía según el modelo</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el rendimiento de los nuevos chips Apple Silicon.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoras en la gestión de widgets.
*Herramientas avanzadas para la productividad y creatividad.</td></tr>
            </table>
            <img src="images/macos14.jpg" alt="macos14">
        `,
        "dos1": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 1.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 1.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1981</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8088</td></tr>
                <tr><th>VELOCIDAD</th><td>4.77 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 kb - 640 kb</td></tr>
                <tr><th>FRECUENCIA</th><td>4,77 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Fue uno de los primeros ordenadores personales ampliamente disponibles y utilizó el MS-DOS 1.0 como sistema operativo.
*Utilización de disquetes de 5.25 pulgadas.
*Disponibilidad de tarjetas para aumentar la RAM, tarjetas gráficas, puertos serie, entre otros.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Ofrecía una compatibilidad limitada con el popular sistema operativo CP/M.
*Disponibilidad de lenguajes como BASIC, ensamblador, y otros lenguajes de programación para desarrollar software en la plataforma.
*Comenzaron a aparecer aplicaciones como procesadores de texto, hojas de cálculo y programas de contabilidad adaptados para MS-DOS.</td></tr>
            </table>
            <img src="images/dos1.0.png" alt="dos1.0">
        `,
        "dos2": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 1.1</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 1.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1982</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8088</td></tr>
                <tr><th>VELOCIDAD</th><td>4.77 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 kb - 640 kb</td></tr>
                <tr><th>FRECUENCIA</th><td>4,77 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte mejorado para disquetes, incluyendo la capacidad de leer y escribir en disquetes de doble cara, aumentando la capacidad de almacenamiento por disquete.
*Continuación en el uso de tarjetas de expansión para mejorar capacidades del sistema, como gráficos, memoria y comunicaciones.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoró la compatibilidad con una gama más amplia de software, facilitando la transición de otras plataformas.
*Soporte para el sistema de archivos de doble cara, aumentando la eficiencia en el almacenamiento y manejo de archivos.
*Incremento en el desarrollo de aplicaciones empresariales como procesadores de texto, hojas de cálculo, y programas de contabilidad, que empezaban a aprovechar las capacidades del sistema operativo.</td></tr>
            </table>
            <img src="images/dos1.1.png" alt="dos1.1">
        `,
        "dos3": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 2.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 2.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1983</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8088</td></tr>
                <tr><th>VELOCIDAD</th><td>4.77 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 kb - 640 kb</td></tr>
                <tr><th>FRECUENCIA</th><td>4,77 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción del IBM PC/XT, que incluía un disco duro de 10 MB como estándar, una novedad importante en comparación con los modelos anteriores que solo usaban disquetes.
*El PC/XT contaba con más ranuras de expansión ISA, permitiendo una mayor capacidad de expansión y mejora del hardware.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Fue el primer sistema operativo DOS que ofreció soporte nativo para discos duros, mejorando significativamente la capacidad de almacenamiento y la gestión de archivos.
*Introducción del sistema de archivos jerárquico, permitiendo directorios y subdirectorios, lo que mejoró la organización y gestión de archivos.
*Se agregaron nuevas utilidades y comandos, como el comando tree para mostrar la estructura de directorios y el comando path para establecer rutas de búsqueda para los ejecutables.</td></tr>
            </table>
            <img src="images/dos2.0.webp" alt="dos2.0">
        `,
        "dos4": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 2.1</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 2.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1983</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8088</td></tr>
                <tr><th>VELOCIDAD</th><td>4.77 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>64 kb - 128 kb</td></tr>
                <tr><th>FRECUENCIA</th><td>4,77 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción del IBM PCjr, un ordenador personal orientado al mercado doméstico y educativo.
*El PCjr ofrecía mejores capacidades gráficas en comparación con el IBM PC original, incluyendo un chip gráfico que permitía mayores resoluciones y más colores.
*Incluía puertos para joystick, orientado a la experiencia de juegos.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 2.1 incluía mejoras y adaptaciones específicas para el IBM PCjr, aprovechando sus características de hardware, como los gráficos mejorados y la gestión de memoria.
*Mejoras en la compatibilidad de software para facilitar la ejecución de aplicaciones desarrolladas para versiones anteriores de MS-DOS en el nuevo hardware del PCjr.</td></tr>
            </table>
            <img src="images/dos2.1.webp" alt="dos2.1">
        `,
        "dos5": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 3.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 3.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1984</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286</td></tr>
                <tr><th>VELOCIDAD</th><td>6 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 KB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>6 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción del IBM PC/AT, que utilizaba el procesador Intel 80286, ofreciendo un rendimiento significativamente mejorado sobre los modelos anteriores.
*Incluía discos duros de mayor capacidad, típicamente de 20 MB.
*Soporte para nuevas tarjetas de expansión ISA de 16 bits, aprovechando la arquitectura mejorada del 80286.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 3.0 mejoró el soporte para discos duros, permitiendo la utilización de discos de hasta 32 MB con el sistema de archivos FAT12.
*Introducción de mejoras en la gestión de memoria, aunque todavía limitado a 640 KB de memoria convencional para la mayoría de las aplicaciones.
*Se agregaron nuevas utilidades y comandos, y se mejoraron los existentes, facilitando la administración del sistema y los archivos.
*Introducción de capacidades básicas de red, permitiendo la conectividad entre varios PCs para compartir archivos y recursos.</td></tr>
            </table>
            <img src="images/dos3.0.jpg" alt="dos3.0">
        `,
        "dos6": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 3.1</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 3.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1985</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286</td></tr>
                <tr><th>VELOCIDAD</th><td>6 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 KB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>6 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el IBM PC/AT con opciones de mayor capacidad de memoria y almacenamiento.
*Introducción de nuevas tarjetas de expansión ISA de 16 bits, así como mejoras en las tarjetas gráficas y de red.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 3.1 introdujo soporte básico para redes locales, permitiendo a los usuarios compartir archivos e impresoras a través de una red.
*Optimización del sistema de archivos para mejorar el rendimiento y la eficiencia en el manejo de discos duros y disquetes.
*Adición de nuevas utilidades y comandos para mejorar la administración del sistema, como herramientas para la gestión de red y la configuración del entorno de trabajo.
*Adaptaciones y mejoras en el sistema operativo para soportar nuevas tecnologías de hardware que estaban emergiendo en ese momento.</td></tr>
            </table>
            <img src="images/dos3.1.JPG" alt="dos3.1">
        `,
        "dos7": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 3.2</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 3.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1986</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286</td></tr>
                <tr><th>VELOCIDAD</th><td>6 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 KB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>6 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Con MS-DOS 3.2, los sistemas empezaron a incluir discos duros de mayor capacidad y disquetes de 3.5 pulgadas, que ofrecían una mayor densidad y fiabilidad.
*Continuaron las mejoras en las tarjetas de expansión ISA de 16 bits, y empezaron a aparecer tarjetas especializadas para gráficos, sonido y redes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 3.2 añadió soporte para disquetes de 3.5 pulgadas, que ofrecían una capacidad de 720 KB, una mejora significativa respecto a los disquetes de 5.25 pulgadas.
*Mejoras continuas en el soporte de redes, facilitando la conexión y el intercambio de recursos en redes locales.
*Mejoras adicionales en el sistema de archivos, aumentando la eficiencia y la velocidad de acceso a los datos en discos duros y disquetes.
*Se agregaron nuevas utilidades y comandos para facilitar la administración del sistema y el uso de nuevas tecnologías de hardware.</td></tr>
            </table>
            <img src="images/dos3.2.png" alt="dos3.2">
        `,
        "dos8": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 3.3</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 3.3</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1987</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286</td></tr>
                <tr><th>VELOCIDAD</th><td>6 - 8 - 10 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 KB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>6 - 10 MHz = Velocidad del bus</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción y soporte para disquetes de alta densidad de 3.5 pulgadas con una capacidad de 1.44 MB, que comenzaron a reemplazar a los disquetes de 5.25 pulgadas.
*Discos duros con capacidades mayores, superando los 40 MB y acercándose a los 100 MB.
*Aparición de tarjetas gráficas EGA y las primeras VGA, que ofrecían una mejor resolución y más colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 3.3 añadió soporte completo para los nuevos disquetes de alta densidad de 3.5 pulgadas (1.44 MB), mejorando significativamente la capacidad de almacenamiento portátil.
*Optimización en la gestión del sistema de archivos FAT, lo que permitió una mejor organización y acceso a los datos en los discos.
*Se agregaron nuevas utilidades y comandos para mejorar la funcionalidad del sistema operativo, como herramientas de diagnóstico y de configuración del sistema.
*Continuación de las mejoras en la conectividad de redes, facilitando la integración en entornos de red más complejos y el intercambio de archivos y recursos en redes locales.</td></tr>
            </table>
            <img src="images/dos3.3.jpg" alt="dos3.3">
        `,
        "dos9": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 4.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 4.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1988</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286/80386</td></tr>
                <tr><th>VELOCIDAD</th><td>*80286 = 8 - 12 MHz. *80386 = 16 - 33 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>*80286 = 16 bits. *80386 = 32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>640 KB - 16 MB o más</td></tr>
                <tr><th>FRECUENCIA</th><td>*80286 = 8 - 12 MHz. *80386 = 16 - 33 MHz. </td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Comenzó a ganar popularidad en los sistemas de alto rendimiento, ofreciendo una arquitectura de 32 bits y soporte para multitarea en modo protegido.
*Los discos duros continuaron aumentando en capacidad, con unidades de 100 MB o más volviéndose comunes.
*La VGA (Video Graphics Array) se convirtió en el estándar para gráficos, ofreciendo una resolución de 640x480 y 16 colores, o 320x200 y 256 colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 4.0 introdujo el DOSSHELL, una interfaz gráfica básica que facilitaba la navegación y gestión de archivos.
*Soporte mejorado para memoria expandida y extendida, facilitando el uso de aplicaciones que requerían más memoria que los 640 KB convencionales.
*Mejoras en el sistema de archivos para soportar particiones de disco más grandes, hasta 2 GB con FAT16.
*Introducción de nuevas utilidades y comandos para mejorar la administración y configuración del sistema.</td></tr>
            </table>
            <img src="images/dos4.0.webp" alt="dos4.0">
        `,
        "dos10": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 4.1</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 4.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1989</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80286/80386</td></tr>
                <tr><th>VELOCIDAD</th><td>*80286 = 8 - 12 MHz. *80386 = 16 - 33 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>*80286 = 16 bits. *80386 = 32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>640 KB - 16 MB o más</td></tr>
                <tr><th>FRECUENCIA</th><td>*80286 = 8 - 12 MHz. *80386 = 16 - 33 MHz. </td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuó ganando popularidad en los sistemas de alto rendimiento, ofreciendo una arquitectura de 32 bits y soporte para multitarea en modo protegido.
*Los discos duros continuaron aumentando en capacidad, con unidades de 100 MB o más volviéndose comunes.
*La VGA (Video Graphics Array) se convirtió en el estándar para gráficos, ofreciendo una resolución de 640x480 y 16 colores, o 320x200 y 256 colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 4.1 continuó con el DOSSHELL, una interfaz gráfica básica que facilitaba la navegación y gestión de archivos.
*Soporte mejorado para memoria expandida y extendida, facilitando el uso de aplicaciones que requerían más memoria que los 640 KB convencionales.
*Mejoras en el sistema de archivos para soportar particiones de disco más grandes, hasta 2 GB con FAT16.
*Introducción de nuevas utilidades y comandos para mejorar la administración y configuración del sistema.
*MS-DOS 4.1 incluyó varias correcciones de errores y mejoras de estabilidad en comparación con la versión 4.0, que había recibido críticas por algunos problemas de fiabilidad.</td></tr>
            </table>
            <img src="images/dos4.1.jpg" alt="dos4.1">
        `,
        "dos11": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 5.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 5.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1991</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80386/80486</td></tr>
                <tr><th>VELOCIDAD</th><td>*80386 = 16 - 33 MHz. *80486 = 20 - 50 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>*80386 = 32 bits. *80486 = 32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 MB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>16 MHz - 50 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción del Intel 80486, que ofrecía una mayor velocidad y una arquitectura más avanzada con un coprocesador matemático integrado.
*Discos duros con capacidades que empezaban a superar los 100 MB y llegando a 500 MB o más.
*La SVGA (Super VGA) se convirtió en el estándar para gráficos, ofreciendo resoluciones más altas y una mayor cantidad de colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 5.0 introdujo un nuevo shell gráfico llamado DOS Shell, que mejoraba la navegación y gestión de archivos.
*Incluyó el editor de texto "Edit" como una herramienta estándar, ofreciendo una interfaz más amigable en comparación con el editor de línea de comandos anterior.
*Mejoras significativas en la gestión de memoria, incluyendo soporte para memoria extendida y superior a 640 KB, aprovechando las capacidades del procesador 80386.
</td></tr>
            </table>
            <img src="images/dos5.0.jpg" alt="dos5.0">
        `,
        "dos12": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 6.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 6.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1993</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80486 / Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>*80486 = 20 - 50 MHz. *Pentium = 60 MHz - 100 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>*80486 = 32 bits. *Pentium = 32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 MB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>25 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introducción del procesador Intel Pentium, ofreciendo un rendimiento significativamente mejorado con arquitectura superscalar y soporte para operaciones en paralelo.
*Los discos duros continuaron aumentando en capacidad, con unidades que superaban los 1 GB.
*La SVGA (Super VGA) seguía siendo el estándar para gráficos, ofreciendo resoluciones de hasta 800x600 y más colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 6.0 introdujo herramientas de administración de discos avanzadas, como el "Disk Defragmenter" para optimizar el rendimiento del disco duro.
*Introducción de la utilidad "DriveSpace" (anteriormente conocida como "DoubleSpace") para comprimir los discos duros y aumentar la capacidad de almacenamiento.</td></tr>
            </table>
            <img src="images/dos6.0.png" alt="dos6.0">
        `,
        "dos13": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 6.2</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 6.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1994</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 MB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuación del uso de los procesadores Intel Pentium, con velocidades de hasta 100 MHz y mejoras en rendimiento y capacidad de cálculo.
*Aumento de la capacidad de los discos duros a más de 1 GB, con unidades de varios gigabytes volviéndose comunes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 6.2 mejoró la utilidad "DriveSpace", que se introdujo en MS-DOS 6.0, ofreciendo una mejor compresión de disco y optimización del espacio de almacenamiento.
*Continuación de la utilidad "ScanDisk", con mejoras en la capacidad para detectar y reparar errores en discos duros.
*Incorporación de nuevas herramientas y mejoras en la administración del sistema, como actualizaciones en el "Disk Defragmenter".</td></tr>
            </table>
            <img src="images/dos6.2.webp" alt="dos6.2">
        `,
        "dos14": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 6.21</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 6.21</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1994</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 MB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuación del uso de los procesadores Intel Pentium, con velocidades de hasta 100 MHz y mejoras en rendimiento.
*Los discos duros continuaron aumentando en capacidad, con unidades de más de 1 GB y acercándose a varios gigabytes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*MS-DOS 6.21 mejoró la utilidad "DriveSpace", que había sido introducida en MS-DOS 6.0, con mejoras en la compresión de discos y en la gestión del espacio de almacenamiento.
*Esta versión incluyó correcciones y mejoras específicas en la funcionalidad de "DriveSpace" en respuesta a problemas reportados en versiones anteriores.</td></tr>
            </table>
            <img src="images/dos6.21.jpg" alt="dos6.21">
        `,
        "dos15": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 6.22</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 6.22</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1994</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 MB - 16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>60 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuación del uso de los procesadores Intel Pentium, que ofrecían un rendimiento mejorado y capacidades avanzadas en comparación con los procesadores anteriores.
*Los discos duros continuaron aumentando en capacidad, con unidades que superaban los 1 GB y alcanzaban varios gigabytes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Se hicieron mejoras adicionales en "ScanDisk" para una detección y reparación más efectiva de errores en discos duros.
*Mejoras continuas en la compatibilidad y soporte para redes locales, facilitando la integración con diversos tipos de redes y configuraciones.</td></tr>
            </table>
            <img src="images/dos6.22.webp" alt="dos6.22">
        `,
        "dos16": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 7.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 7.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1995</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>75 MHz - 200 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>8 MB - 64 MB </td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Los discos duros continuaron aumentando en capacidad, con unidades que superaban los 1 GB y alcanzaban varios gigabytes.
*Uso de tarjetas gráficas avanzadas que soportaban resoluciones de hasta 1024x768 y una amplia gama de colores.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoras continuas en la compatibilidad y soporte para redes locales, facilitando la integración con diversos tipos de redes y configuraciones.
*Optimización del sistema de archivos para mejorar la eficiencia y el rendimiento en discos duros grandes.</td></tr>
            </table>
            <img src="images/dos7.0.png" alt="dos7.0">
        `,
        "dos17": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 7.1</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 7.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1996</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>75 MHz - 200 MHz.</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>8 MB - 64 MB </td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz - 100 MHz.</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Tarjetas como la 3dfx Voodoo Graphics permitieron gráficos 3D mucho más detallados y fluidos, impulsando la industria de los videojuegos.
*Mayor soporte para resoluciones superiores y profundidades de color más altas, mejorando la calidad visual en aplicaciones gráficas.
*Comenzó a reemplazar DRAM, ofreciendo mayores velocidades y mejor rendimiento en sistemas.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Versión mejorada de la utilidad de compresión de discos, incluida en Windows 95 OSR2.
*Herramienta más robusta para la detección y reparación de errores en discos duros.
* Mejoras en los protocolos de red y compatibilidad con diversos tipos de redes.</td></tr>
            </table>
            <img src="images/dos7.1.webp" alt="dos7.1">
        `,
        "dos18": `
            <table>
                <tr><th>NOMBRE</th><td>MS-DOS 8.0</td></tr>
                <tr><th>VERSION (SO)</th><td>MS-DOS 8.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2000</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium III</td></tr>
                <tr><th>VELOCIDAD</th><td>450 MHz - 1.5 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits.</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1 Hilo (monoprocesador)</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>64 MB - 512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz - 133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Tarjetas como la NVIDIA GeForce 2 y ATI Radeon ofrecían gráficos 3D avanzados, mejorando significativamente la experiencia en videojuegos y aplicaciones gráficas.
*Mayor soporte para resoluciones superiores (hasta 1600x1200) y profundidades de color más altas (32 bits).
*Estándar en la mayoría de los sistemas, con velocidades de 100 MHz a 133 MHz, proporcionando un rendimiento más rápido y eficiente.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mayor integración y soporte para la conexión a Internet, con la popularización de navegadores como Internet Explorer 5.5 y Netscape Navigator 6.
*Lanzamiento de Microsoft Office 2000, con mejoras en Word, Excel, PowerPoint y la introducción de nuevas características colaborativas.
*Mejora en los videojuegos gracias a las capacidades avanzadas de gráficos 3D, con títulos como The Sims, Deus Ex, y Quake III Arena liderando el mercado.</td></tr>
            </table>
            <img src="images/dos7.1.webp" alt="dos7.1">
        `,
        "wh1": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 1.0</td></tr>
                <tr><th>VERSION (SO)</th><td>1.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>1.00</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1985</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8086/8088</td></tr>
                <tr><th>VELOCIDAD</th><td>4.77 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 KB</td></tr>
                <tr><th>FRECUENCIA</th><td>4.77 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Uno de los primeros sistemas operativos en ofrecer soporte para dispositivos de entrada de ratón, mejorando la facilidad de uso.
*Se ejecutaba en computadoras con procesadores Intel 8086/8088, que eran los procesadores más comunes en las PC de la época.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Windows 1.0 utilizaba el manejo de memoria proporcionado por MS-DOS, con capacidades limitadas en comparación con versiones posteriores.
*Permitía ejecutar programas de MS-DOS directamente desde la interfaz gráfica, facilitando la transición para los usuarios que estaban acostumbrados a trabajar en modo texto.</td></tr>
            </table>
            <img src="images/1.0.png" alt="1.0">
        `,
        "wh2": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 2.0</td></tr>
                <tr><th>VERSION (SO)</th><td>2.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>2.00</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1987</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 8086/8088</td></tr>
                <tr><th>VELOCIDAD</th><td>6 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>512 KB</td></tr>
                <tr><th>FRECUENCIA</th><td>4.77 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Aumentó la capacidad gráfica al soportar monitores VGA.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introdujo una interfaz de ventanas superpuestas y una mayor capacidad de multitarea.
*Permitió el uso de memoria extendida y expandida.</td></tr>
            </table>
            <img src="images/2.0.jpg" alt="1.0">
        `,
        "wh3": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 3.0</td></tr>
                <tr><th>VERSION (SO)</th><td>3.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>3.00</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1990</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80386</td></tr>
                <tr><th>VELOCIDAD</th><td>12 - 22 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>6 - 20 MHZ</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Aprovechó las capacidades del procesador Intel 80386 para la administración de memoria y multitarea.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introdujo la multitarea cooperativa y la gestión de ventanas.
*Nuevas herramientas para la gestión de programas y archivos.</td></tr>
            </table>
            <img src="images/3.0.png" alt="1.0">
        `,
        "wh4": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 3.1</td></tr>
                <tr><th>VERSION (SO)</th><td>3.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>3.10</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1992</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80386</td></tr>
                <tr><th>VELOCIDAD</th><td>12 - 33 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>.16 bits / 32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>20 MHZ</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejor compatibilidad con periféricos modernos.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introdujo TrueType fonts y soporte mejorado para gráficos.
*Implementó la multitarea cooperativa con mejor rendimiento.</td></tr>
            </table>
            <img src="images/3.1.png" alt="1.0">
        `,
        "wh5": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 95</td></tr>
                <tr><th>VERSION (SO)</th><td>4.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>4.00</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1995</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 80486</td></tr>
                <tr><th>VELOCIDAD</th><td>66 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits / 32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>EDO DRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>33 MHZ</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Introdujo soporte para hardware más avanzado y configuraciones de hardware plug-and-play.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td> *Introdujo el menú de inicio y la barra de tareas.
*Facilita la instalación y configuración de hardware.
*Soporte para nombres de archivos largos (hasta 255 caracteres).</td></tr>
            </table>
            <img src="images/95.jpg" alt="1.0">
        `,
        "wh6": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 98</td></tr>
                <tr><th>VERSION (SO)</th><td>4.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>4.10</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1998</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>66 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>16 bits / 32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejora en el soporte de hardware y drivers.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introdujo nuevas herramientas de diagnóstico y recuperación.
*Añadió soporte para dispositivos USB.</td></tr>
            </table>
            <img src="images/98.png" alt="1.0">
        `,
        "wh7": `
            <table>
                <tr><th>NOMBRE</th><td>Windows ME</td></tr>
                <tr><th>VERSION (SO)</th><td>4.9</td></tr>
                <tr><th>VERSION KERNEL</th><td>4.90</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>200</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium II</td></tr>
                <tr><th>VELOCIDAD</th><td>150 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para nuevos dispositivos y periféricos.
*Optimización de la gestión de memoria y dispositivos para un rendimiento más eficiente en hardware más moderno.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de la función de restauración del sistema que permite revertir el sistema a un estado anterior en caso de fallos.
*Nueva aplicación para la edición y creación de videos.
*Incluye mejoras en la navegación web y la compatibilidad con estándares web.</td></tr>
            </table>
            <img src="images/me.png" alt="1.0">
        `,
        "wh8": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 2000</td></tr>
                <tr><th>VERSION (SO)</th><td>5.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 5.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2000</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium III</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>64 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte mejorado para servidores multiprocesador, permitiendo un mejor rendimiento en entornos de servidores.
*Mejoras en la compatibilidad con dispositivos modernos de almacenamiento y redes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de un sistema de directorio basado en LDAP que facilita la administración de usuarios y recursos.
*Implementación del protocolo de autenticación Kerberos para mejorar la seguridad.
*Permite agrupar recursos de varios servidores en un sistema de archivos unificado.</td></tr>
            </table>
            <img src="images/2000.png" alt="1.0">
        `,
        "wh9": `
            <table>
                <tr><th>NOMBRE</th><td>Windows XP</td></tr>
                <tr><th>VERSION (SO)</th><td>5.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 5.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2001</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium III</td></tr>
                <tr><th>VELOCIDAD</th><td>233 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>128 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejora en la compatibilidad con nuevos dispositivos y periféricos.
*Mejoras en la administración de memoria y recursos del sistema para mejorar el rendimiento en hardware más moderno.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción del diseño de la interfaz de usuario “Luna” con un aspecto más moderno y amigable.
*Permite a múltiples usuarios cambiar entre cuentas sin cerrar sesión.
*Mejora en la gestión y reproducción de medios digitales.
*Introducción de un firewall integrado para proteger el sistema contra amenazas de red.</td></tr>
            </table>
            <img src="images/xp.webp" alt="1.0">
        `,
        "wh10": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Vista</td></tr>
                <tr><th>VERSION (SO)</th><td>6.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2006</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium IV</td></tr>
                <tr><th>VELOCIDAD</th><td>800 mhz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Requiere una tarjeta gráfica compatible con DirectX 9.0 para la interfaz Aero.
*Mejoras en la compatibilidad con nuevos dispositivos y tecnologías emergentes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejora en la seguridad mediante solicitudes de confirmación para realizar cambios en el sistema.
*Mejoras en la búsqueda de archivos y documentos con un sistema de indexación más rápido.</td></tr>
            </table>
            <img src="images/vista.png" alt="1.0">
        `,
        "wh11": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 7</td></tr>
                <tr><th>VERSION (SO)</th><td>6.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2009</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium IV</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR2,SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la compatibilidad con nuevos dispositivos y periféricos.
*Mejoras en la administración de recursos del sistema para mejorar el rendimiento en hardware más moderno.
*Mejoras en la capacidad gráfica y el rendimiento para juegos y aplicaciones multimedia.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejora en la administración de dispositivos conectados, proporcionando una vista centralizada de las tareas y funciones.
*Mejoras en la reproducción y gestión de medios, con soporte para una amplia gama de formatos.</td></tr>
            </table>
            <img src="images/7.png" alt="1.0">
        `,
        "wh12": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 8</td></tr>
                <tr><th>VERSION (SO)</th><td>6.2</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2012</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Core i3</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR2,DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>533 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte para pantallas táctiles y dispositivos híbridos con capacidades táctiles.
*Mejoras en el rendimiento y la compatibilidad con los últimos procesadores y tecnologías de almacenamiento.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Barra lateral que proporciona acceso rápido a funciones como búsqueda, configuración y compartir.
*Sistema de copias de seguridad de archivos que permite restaurar versiones anteriores de archivos.</td></tr>
            </table>
            <img src="images/8.jpg" alt="1.0">
        `,
        "wh13": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 8.1</td></tr>
                <tr><th>VERSION (SO)</th><td>6.3</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.3</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2013</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Core i3</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR2,DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>1 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>533 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejora en el soporte para dispositivos y periféricos más recientes.
*Mejoras en la administración de recursos y el rendimiento general del sistema en hardware moderno.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Permite ajustar múltiples aplicaciones en pantalla de manera más eficiente, con la capacidad de ajustar el tamaño de las ventanas.
*Integración mejorada con la búsqueda de Bing para proporcionar resultados más relevantes y rápidos.</td></tr>
            </table>
            <img src="images/8.1.webp" alt="1.0">
        `,
        "wh14": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 10</td></tr>
                <tr><th>VERSION (SO)</th><td>10.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 10.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2015</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Core i3</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR2,DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>2 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>800 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la administración de recursos del sistema para una mayor eficiencia en hardware moderno.
*Mejora en la experiencia en dispositivos híbridos y 2 en 1, con una interfaz optimizada para pantallas táctiles y tradicionales.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Herramientas para la anotación y la escritura a mano en dispositivos con pantalla táctil y lápices digitales.
*Centro de notificaciones y acceso rápido a configuraciones y ajustes del sistema.</td></tr>
            </table>
            <img src="images/10.png" alt="1.0">
        `,
        "wh15": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 11 </td></tr>
                <tr><th>VERSION (SO)</th><td>10.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 10.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2021</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Core i5 octava generacion o superires</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2</td></tr>
                <tr><th>TIPO</th><td>DDR4,SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>4 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte solo para dispositivos con TPM 2.0, arranque seguro y procesadores compatibles con características específicas.
*Mejoras en el soporte para pantallas de alta resolución y dispositivos 2 en 1.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoras en el rendimiento gráfico y en la experiencia de juego.
*Rediseño completo de la tienda de aplicaciones con una interfaz más rápida y eficiente.</td></tr>
            </table>
            <img src="images/11.webp" alt="1.0">
        `,
        "ws1": `
            <table>
                <tr><th>NOMBRE</th><td>Windows NT Server 3.1</td></tr>
                <tr><th>VERSION (SO)</th><td>3.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 3.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1993</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 386</td></tr>
                <tr><th>VELOCIDAD</th><td>25 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>EDO RAM</td></tr>
                <tr><th>CAPACIDAD</th><td>16 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>66 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el soporte de hardware, incluyendo ratones y impresoras.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introdujo íconos de programa mejorados y capacidades de manejo de fuentes TrueType.
*Mejor soporte para multitarea cooperativa.</td></tr>
            </table>
            <img src="images/server 3.1.png" alt="server 3.1">
        `,
        "ws2": `
            <table>
                <tr><th>NOMBRE</th><td>Windows NT Server 3.5 </td></tr>
                <tr><th>VERSION (SO)</th><td>3.5</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 3.5</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1994</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 486</td></tr>
                <tr><th>VELOCIDAD</th><td>33 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>EDO RAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Permitía el uso de múltiples procesadores en servidores compatibles.
*Incluía soporte para hardware específico de servidores, como adaptadores de red y dispositivos de almacenamiento avanzados.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mayor compatibilidad con aplicaciones existentes de Windows y DOS.
*Mejoras en la gestión de redes y servidores, incluyendo soporte para dominios y controladores de dominio.</td></tr>
            </table>
            <img src="images/server 3.5.webp" alt="server 3.5">
        `,
        "ws3": `
            <table>
                <tr><th>NOMBRE</th><td>Windows NT Server 3.51</td></tr>
                <tr><th>VERSION (SO)</th><td>3.51</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 3.51</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1995</td></tr>
                <tr><th>PROCESADOR</th><td>Intel 486</td></tr>
                <tr><th>VELOCIDAD</th><td>33 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>EDO RAM</td></tr>
                <tr><th>CAPACIDAD</th><td>32 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>100 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuación del soporte para múltiples procesadores, mejorando el rendimiento en servidores multiprocesador.
*Mayor compatibilidad con hardware específico de servidores, como controladores RAID y dispositivos de almacenamiento avanzados.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejor compatibilidad con aplicaciones de 32-bit, incluidos algunos programas diseñados para Windows 95.
*Mejoras en la capacidad de incrustar y vincular objetos entre aplicaciones.</td></tr>
            </table>
            <img src="images/server 3.51.png" alt="server 3.51">
        `,
        "ws4": `
            <table>
                <tr><th>NOMBRE</th><td>Windows NT Server 4.0</td></tr>
                <tr><th>VERSION (SO)</th><td>4.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 4.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>1996</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium</td></tr>
                <tr><th>VELOCIDAD</th><td>90 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>EDO RAM</td></tr>
                <tr><th>CAPACIDAD</th><td>64 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Continuó y mejoró el soporte para múltiples procesadores, lo que permitió un mejor rendimiento en servidores multiprocesador.
*Mayor compatibilidad con una amplia gama de hardware de servidor, incluidos dispositivos de almacenamiento avanzados y controladores RAID.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Servidor web incluido para facilitar la creación y gestión de sitios web y servicios en red.
*Mejor rendimiento y compatibilidad con aplicaciones de 32-bit.</td></tr>
            </table>
            <img src="images/Server 4.0.webp" alt="server 4.0">
        `,
        "ws5": `
            <table>
                <tr><th>NOMBRE</th><td>Windows 2000 Server</td></tr>
                <tr><th>VERSION (SO)</th><td>5.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 5.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2000</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium II</td></tr>
                <tr><th>VELOCIDAD</th><td>133 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>256 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>200 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte mejorado para servidores multiprocesador, permitiendo un mejor 
*Mejoras en la compatibilidad con dispositivos modernos de almacenamiento y redes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Implementación del protocolo de autenticación Kerberos para mejorar la seguridad.
*Permite agrupar recursos de varios servidores en un sistema de archivos unificado.</td></tr>
            </table>
            <img src="images/windows 2000.png" alt="windows 2000">
        `,
        "ws6": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2003</td></tr>
                <tr><th>VERSION (SO)</th><td>5.2</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 5.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2003</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium III</td></tr>
                <tr><th>VELOCIDAD</th><td>550 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR</td></tr>
                <tr><th>CAPACIDAD</th><td>512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte mejorado para tecnologías de almacenamiento avanzadas como SAN y NAS.
*Incluye soporte para IPv6 y otras tecnologías de red emergentes.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mayor seguridad y rendimiento para servidores web.
*Permite administrar y distribuir actualizaciones en la red.</td></tr>
            </table>
            <img src="images/server 2003 r2.jpg" alt="server 2003">
        `,
        "ws7": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2003 R2</td></tr>
                <tr><th>VERSION (SO)</th><td>5.2</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 5.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2005</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Pentium III</td></tr>
                <tr><th>VELOCIDAD</th><td>550 MHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits / 64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>1</td></tr>
                <tr><th>TIPO</th><td>DDR SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejor soporte y rendimiento para procesadores de 64-bit.
*Incluye mejores capacidades de gestión y compatibilidad con SAN y NAS.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Permite la implementación de una federación de identidades para compartir el acceso con partners de confianza.
*Versión ligera de Active Directory que puede ejecutarse como un servicio y no requiere un dominio.</td></tr>
            </table>
            <img src="images/server 2003 r2.jpg" alt="server 2003 r2">
        `,
        "ws8": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2008</td></tr>
                <tr><th>VERSION (SO)</th><td>6.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2008</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Itanium 2</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>32 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2 o más</td></tr>
                <tr><th>TIPO</th><td>DDR2/DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la compatibilidad con procesadores multicore y avanzados.
*Mejoras en la compatibilidad con dispositivos de almacenamiento como SAN y NAS.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Plataforma de virtualización que permite crear y gestionar máquinas virtuales.
*Controlador de dominio de solo lectura que mejora la seguridad en ubicaciones remotas.</td></tr>
            </table>
            <img src="images/server 2008.png" alt="server 2008">
        `,
        "ws9": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2008 R2</td></tr>
                <tr><th>VERSION (SO)</th><td>6.1</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.1</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2009</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2 o más</td></tr>
                <tr><th>TIPO</th><td>DDR2/DDR3 SDRAM</td></tr>
                <tr><th>CAPACIDAD</th><td>512 MB</td></tr>
                <tr><th>FRECUENCIA</th><td>400 MHZ</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en la compatibilidad con nuevos dispositivos de almacenamiento y redes.
*Mejora del soporte y rendimiento para entornos virtualizados.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejora en la instalación mínima de Windows Server con menos componentes y mayor seguridad.
*Nuevas funcionalidades como la opción de RODC (Read-Only Domain Controller) y mejoras en la gestión de grupos.</td></tr>
            </table>
            <img src="images/server 2008 r2.png" alt="server 2008 r2">
        `,
        "ws10": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2012 </td></tr>
                <tr><th>VERSION (SO)</th><td>6.2</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.2</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2012</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2 o más</td></tr>
                <tr><th>TIPO</th><td>DDR3</td></tr>
                <tr><th>CAPACIDAD</th><td>4 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>800 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejora del soporte para entornos virtualizados con capacidades avanzadas y mejor rendimiento.
*Mejoras en la compatibilidad con nuevos estándares de red y almacenamiento.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejora en la plataforma de virtualización con características como el soporte para máquinas virtuales de hasta 1 TB de RAM.
*Nueva característica para la creación de pools de almacenamiento y la administración de discos virtuales.</td></tr>
            </table>
            <img src="images/server 2012.png" alt="server 2012">
        `,
        "ws11": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2012 R2</td></tr>
                <tr><th>VERSION (SO)</th><td>6.3</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 6.3</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2013</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2 o más</td></tr>
                <tr><th>TIPO</th><td>DDR3</td></tr>
                <tr><th>CAPACIDAD</th><td>2 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>800 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejoras en el rendimiento y la gestión de entornos virtualizados.
*Compatibilidad mejorada con nuevas tecnologías emergentes en redes y almacenamiento.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoras en la gestión de almacenamiento, incluyendo soporte para el almacenamiento en caché y la resiliencia de datos.
*Nuevas funcionalidades para la administración de servidores y roles, incluyendo mejoras en la interfaz y la capacidad de gestionar servidores remotos.</td></tr>
            </table>
            <img src="images/server 2012 r2.webp" alt="server 2012 r2">
        `,
        "ws12": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2016</td></tr>
                <tr><th>VERSION (SO)</th><td>10.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 10.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2016</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>2 o más</td></tr>
                <tr><th>TIPO</th><td>DDR4</td></tr>
                <tr><th>CAPACIDAD</th><td>8 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Mejor soporte para nuevos procesadores, almacenamiento y tecnologías de red.
*Optimización de rendimiento y capacidades de administración para entornos virtualizados.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Introducción de contenedores de Windows para la virtualización a nivel de sistema operativo.
*Mejoras en la virtualización, incluyendo soporte para contenedores, nuevas características como la replicación y la capacidad de usar discos duros virtuales (VHDX) de mayor tamaño.</td></tr>
            </table>
            <img src="images/server 2016.webp" alt="server 2016">
        `,
        "ws13": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2019</td></tr>
                <tr><th>VERSION (SO)</th><td>10.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 10.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2018</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>4</td></tr>
                <tr><th>TIPO</th><td>DDR4</td></tr>
                <tr><th>CAPACIDAD</th><td>8 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Soporte mejorado para nuevos procesadores, almacenamiento y tecnologías de red.
*Optimización del rendimiento y la administración de entornos virtualizados, incluyendo soporte para la virtualización anidada y mejoras en Hyper-V.</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Facilita la migración de datos y configuraciones de servidores antiguos a nuevos.
*Mejoras en la administración de almacenamiento y la creación de clústeres de almacenamiento altamente disponibles.</td></tr>
            </table>
            <img src="images/server 2019.jpg" alt="server 2019">
        `,
        "ws14": `
            <table>
                <tr><th>NOMBRE</th><td>Windows Server 2022</td></tr>
                <tr><th>VERSION (SO)</th><td>10.0</td></tr>
                <tr><th>VERSION KERNEL</th><td>NT 10.0</td></tr>
                <tr><th>AÑO LANZAMIENTO</th><td>2021</td></tr>
                <tr><th>PROCESADOR</th><td>Intel Xeon</td></tr>
                <tr><th>VELOCIDAD</th><td>1.4 GHz</td></tr>
                <tr><th>ARQUITECTURA</th><td>64 bits</td></tr>
                <tr><th>NUMERO DE HILOS</th><td>8</td></tr>
                <tr><th>TIPO</th><td>DDR4</td></tr>
                <tr><th>CAPACIDAD</th><td>16 GB</td></tr>
                <tr><th>FRECUENCIA</th><td>2133 MHz</td></tr>
                <tr><th>NOVEDADES DEL HARDWARE</th><td>*Nuevas capacidades en Hyper-V para una mayor eficiencia y rendimiento, incluyendo soporte para máquinas virtuales protegidas y capacidades avanzadas de administración.
*Compatibilidad mejorada con nuevas tecnologías de almacenamiento como NVMe y redes definidas por software (SDN).</td></tr>
                <tr><th>NOVEDADES DEL SOFTWARE</th><td>*Mejoras en la migración de datos y configuraciones de servidores antiguos a nuevos.
*Mejoras en el rendimiento y la seguridad de las comunicaciones de archivos.</td></tr>
            </table>
            <img src="images/server 2022.jpg" alt="server 2022">
        `,
    };

    var infoContent = document.getElementById('info-content');
    infoContent.innerHTML = content[infoId] || "<p>Seleccione uno de los sistemas para ver más información.</p>";
}
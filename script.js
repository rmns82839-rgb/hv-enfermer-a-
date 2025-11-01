document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para animar las Barras de Habilidad
    // Esta función busca todos los elementos con la clase 'skill-bar'
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level'); // Obtiene el valor de habilidad (ej: "90")
        
        // Crear el elemento de relleno (filler) que será visible
        const filler = document.createElement('div');
        filler.className = 'skill-filler';
        bar.appendChild(filler);
        
        // Usar un pequeño timeout para forzar la animación
        // Esto asegura que el CSS se haya renderizado antes de iniciar la transición
        setTimeout(() => {
            // Aplicar el ancho al elemento 'skill-filler' para iniciar la animación CSS
            filler.style.width = level + '%';
        }, 100); 
    });


    // 2. Lógica para el Resaltado de la Experiencia Laboral (Interactivo)
    // Agrega un efecto visual a los trabajos al pasar el mouse/tocar la pantalla
    const jobEntries = document.querySelectorAll('.job-entry');

    jobEntries.forEach(entry => {
        // Evento para cuando el cursor entra (o toque en móvil)
        entry.addEventListener('mouseover', () => {
            // Se aplica el estilo de sombra al pasar el ratón (desktop)
            entry.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.4)'; 
        });
        
        // Evento para cuando el cursor sale
        entry.addEventListener('mouseout', () => {
            // Se quita el estilo de sombra
            entry.style.boxShadow = 'none'; 
        });
    });

    // 3. Lógica para el Botón de Imprimir
    // El evento 'onclick="window.print()"' ya está en el HTML, 
    // pero podemos asegurar que el botón funcione incluso si se elimina el atributo.
    const printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
});

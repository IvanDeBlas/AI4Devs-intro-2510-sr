// Función para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Crear la interfaz de usuario cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos de la interfaz
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 600px; margin: 50px auto; padding: 20px; font-family: Arial, sans-serif;';
    
    const title = document.createElement('h1');
    title.textContent = 'Invertir Cadena de Texto';
    title.style.cssText = 'color: #333; text-align: center;';
    
    const inputLabel = document.createElement('label');
    inputLabel.textContent = 'Introduce un texto:';
    inputLabel.style.cssText = 'display: block; margin-bottom: 10px; color: #555; font-weight: bold;';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'textInput';
    input.placeholder = 'Ej: AI4Devs';
    input.style.cssText = 'width: 100%; padding: 10px; font-size: 16px; border: 2px solid #ddd; border-radius: 4px; box-sizing: border-box;';
    
    const button = document.createElement('button');
    button.textContent = 'Invertir';
    button.style.cssText = 'margin-top: 15px; padding: 12px 30px; font-size: 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%;';
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#007bff';
    });
    
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.style.cssText = 'margin-top: 25px; padding: 15px; background-color: #f8f9fa; border-radius: 4px; min-height: 50px; display: none;';
    
    const resultLabel = document.createElement('p');
    resultLabel.textContent = 'Resultado:';
    resultLabel.style.cssText = 'margin: 0 0 10px 0; font-weight: bold; color: #555;';
    
    const resultText = document.createElement('p');
    resultText.id = 'resultText';
    resultText.style.cssText = 'margin: 0; font-size: 18px; color: #007bff; word-break: break-all;';
    
    // Ensamblar los elementos
    resultDiv.appendChild(resultLabel);
    resultDiv.appendChild(resultText);
    
    container.appendChild(title);
    container.appendChild(inputLabel);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(resultDiv);
    
    document.body.appendChild(container);
    
    // Evento para invertir el texto
    button.addEventListener('click', function() {
        const inputText = input.value;
        
        if (inputText.trim() === '') {
            alert('Por favor, introduce algún texto');
            return;
        }
        
        const reversed = reverseString(inputText);
        resultText.textContent = reversed;
        resultDiv.style.display = 'block';
    });
    
    // También permitir invertir con la tecla Enter
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            button.click();
        }
    });
});
const http = require('http');
// Создание сервера
const server = http.createServer((req, res) => {  
    // Отправка ответа на запрос  
    res.statusCode = 200;  res.setHeader('Content-Type', 'text/plain');  res.end('Привет, мир!');});
    // Установка порта, на котором будет слушать сервер
    const port = 3000;
    server.listen(port, () => {  
        console.log(`Сервер запущен на http://localhost:${port}/`);});
        server.listen(3000, 'localhost', () => {
            const serverUrl = `http://${server.address().address}:${server.address().port}`;
            console.log(`Server running at ${serverUrl}`);
            });
            
        document.querySelector('form').addEventListener('submit', function(event) { 
            event.preventDefault(); 
            // предотвращаем отправку формы по умолчанию  
            // получаем все данные из формы  
            var formData = new FormData(document.querySelector('form')); 
             // отправляем данные на сервер  
            fetch('http://localhost:3000/send-email', {    
                method: 'POST',    body: formData  })  
                .then(function(response) {    if (response.ok) {      
                    alert('Данные успешно отправлены на почту');} 
                    else {      
                    alert('Произошла ошибка при отправке данных');    
                }  
            })  
            .catch(function(error) {    
                console.error('Произошла ошибка:', error);  
            });});
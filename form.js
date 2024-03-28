document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем отправку формы по умолчанию
    
    // получаем все данные из формы
    var formData = new FormData(document.querySelector('form'));
    
    // отправляем данные на сервер
    fetch('https://yourserver.com/send-email', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        alert('Данные успешно отправлены на почту');
      } else {
        alert('Произошла ошибка при отправке данных');
      }
    })
    .catch(function(error) {
      console.error('Произошла ошибка:', error);
    });
  });
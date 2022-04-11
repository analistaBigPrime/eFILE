document.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');

    for (let i = 1; i <= 4; i++) { // сюда будем помещать drug-&-drop файлы (4) 
        window['uploadDragFiles_'+i] = new Object();
    }

    document.querySelectorAll('.upload-file__wrapper').forEach(function (current_item, index) {

        const inputFile = current_item.querySelector('.upload-file__input');
        const filesList = current_item.querySelector('.upload-file__files');

        // создаём массив файлов 
        let fileList = [];
        let files = [];
        let aFiles;

        /////////// Кнопка «Прикрепить файл» /////////// 
        let textSelector = current_item.querySelector('.upload-file__text');

        // Событие выбора файла(ов) 
        inputFile.addEventListener('change', function (ev) {
            fileList.push(...inputFile.files);
            // console.log(inputFile.files); 
            // вызов функции для каждого файла 
            fileList.forEach(file => {
            	files.push(file.name);
                uploadFile(file);
            });
        });

        // Проверяем размер файлов и выводим название 
        const uploadFile = (file) => {
            console.log(fileList);
            // размер файла <5 Мб 
            if (file.size > 20 * 1024 * 1024) {
                alert('El archivo no debe tener más de 20 MB.');
                return;
            }

            // Показ загружаемых файлов 
            if (fileList.length >= 1) {
            	for (let i = 0; i < fileList.length; i++) {
                    let size = fileList[i].size / 512;
                    let fileSize = (size > 1024) ? Math.round(size / 1024) + ' Mb' : Math.round(size) + ' Kb';

                    filesList.insertAdjacentHTML('beforeEnd', '<div class="upload-file__block"><div class="upload-file__name">' + fileList[i].name + '<br><span class="upload-file__size">' + fileSize + '</span></div><a class="upload-file__download" target="_blank" href="' + URL.createObjectURL(fileList[i]) + '"></a>'  + '</div>');
				}
            }
            fileList = [];
        }


        /////////// Загрузка файлов при помощи «Drag-and-drop» /////////// 
        // const dropZones = document.querySelectorAll('.upload-file__label'); 
        const dropZone = current_item.querySelector('.upload-file__label');
        const dropZoneText = current_item.querySelector('.upload-file__text');
        const maxFileSize = 20000000; // максимальный размер файла - 20 мб. 

        // Проверка поддержки «Drag-and-drop» 
        if (typeof (window.FileReader) == 'undefined') {
            dropZone.textContent = 'Drag&Drop Не поддерживается браузером!';
            dropZone.classList.add('error');
        }
        // Событие - перетаскивания файла 
        dropZone.ondragover = function () {
            this.classList.add('hover');
            return false;
        };
        // Событие - отмена перетаскивания файла 
        dropZone.ondragleave = function () {
            this.classList.remove('hover');
            return false;
        };
        // Событие - файл перетащили 
        dropZone.addEventListener('drop', function (e) {
            e.preventDefault();
            this.classList.remove('hover');
            this.classList.add('drop');

            uploadDragFiles = e.dataTransfer.files[0]; // один файл 
            uploadFiles = e.dataTransfer.files; // много файлов

            let dropFiles = []

            // Проверка размера файла 
            if (uploadDragFiles.size > maxFileSize) {
                dropZoneText.textContent = 'El archivo no debe tener más de 20 MB.';
                this.addClass('error');
                return false;
            }


            // Показ загружаемых файлов 
            if (uploadFiles.length >= 1) {
            	for (let i = 0; i < uploadFiles.length; i++) {
                    let size = uploadFiles[i].size / 512;
                    let fileSize = (size > 1024) ? Math.round(size / 1024) + ' Mb' : Math.round(size) + ' Kb';

                	filesList.insertAdjacentHTML('beforeEnd', '<div class="upload-file__block"><div class="upload-file__name">' + uploadFiles[i].name + '<br><span class="upload-file__size">' + fileSize + '</span></div><a class="upload-file__download" target="_blank" href="' + URL.createObjectURL(uploadFiles[i]) + '"></a>'  + '</div>');
				}
            }

            // добавляем файл в объект "uploadDragFiles_i" 
            window['uploadDragFiles_'+index] = uploadDragFiles;
        });

    });


    // Отправка формы на сервер 
    const postData = async (url, fData) => { // имеет асинхронные операции 

        // начало отправки 
        // здесь можно сообщить пользователю о начале отправки 

        // ждём ответ, только тогда наш код пойдёт дальше 
        let fetchResponse = await fetch(url, {
            method: 'POST',
            body: fData
        });

        // ждём окончания операции 
        return await fetchResponse.text();
    };

    if (forms) {
        forms.forEach(el => {
            el.addEventListener('submit', function (e) {
                e.preventDefault();

                // создание объекта FormData 
                let fData = new FormData();

                // Добавление всех input, кроме type="file" 
                el.querySelectorAll('input:not([type="file"])').forEach(input => {
                    fData.append(input.name, input.value);
                });

                // Добавление файлов input type file 
                el.querySelectorAll('.upload-file__input').forEach((one_file, index) => {
                    for (let i = 0; i < (one_file.files.length); i++) {
                        fData.append('files[]', one_file.files[i]); // добавляем файлы, добавленные кнопкой 
                    }
                    fData.append('files[]', window['uploadDragFiles_'+index]); // добавляем drug-&-drop файлы 
                });

                // Отправка на сервер 
                postData('./mail-files.php', fData)
                    .then(fetchResponse => {
                        swal({
                            title: 'Спасибо!',
                            text: 'Данные отправлены.',
                            icon: 'success',
                            button: 'Ok'
                        });
                        // console.table('Данные успешно отправлены!', fetchResponse); 
                        el.reset(); // Очистка полей формы 
                        document.querySelectorAll('.upload-file__text').forEach(this_text => {
                            this_text.textContent = 'Выберите файл или перетащите в поле';
                        });
                    })
                    .catch(function (error) {
                        swal({
                            title: error,
                            icon: 'error',
                            button: 'Ok'
                        });
                        // console.table('Ошибка!', error); 
                    });
            });
        });
    };

});
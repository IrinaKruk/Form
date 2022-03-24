"use strict"

function dynForm(form) {

   let newForm = document.createElement('form');

   newForm.method = "post";
   newForm.action = "https://fe.it-academy.by/TestForm.php";
   document.body.append(newForm);

   for (let i = 0; i < form.length; i++) {
      console.log(form[i]);

      let newLabel = document.createElement('label');
      console.log(newLabel);
      newLabel.innerHTML = form[i].label;
      newForm.append(newLabel);
      newLabel.insertAdjacentHTML('afterend', '<br/>');
      let newInput = document.createElement('input');
      newInput.name = form[i].name;
      newInput.type = form[i].kind;
      newLabel.append(newInput);
      /*let newCaption = document.createElement('input');
      newCaption.type = form[i].kind;
      newCaption.value = form[i].caption;*/
   }
}


let form2 = [
   { label: 'Фамилия', kind: 'longtext', name: 'lastname' },
   { label: 'Имя', kind: 'longtext', name: 'firstname' },
   { label: 'Отчество', kind: 'longtext', name: 'secondname' },
   { label: 'Возраст', kind: 'number', name: 'age' },
   { caption: 'Зарегистрироваться', kind: 'submit' },
];

dynForm(form2);

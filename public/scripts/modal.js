export default function Modal() {

  const cancelButton = document.querySelector('.button.cancel');

  const modalWrapper = document.querySelector('.modal-wrapper');

  cancelButton.addEventListener("click", close);

  function open(){
    // funcionalidade de atribuir a classe active ao modal
    modalWrapper.classList.add('active');
  }
  function close(){
    // funcionalidade de retirar a classe active ao modal
    modalWrapper.classList.remove('active');
  }

  return {
    open,
    close
  }

}
const form = document.getElementById('form-agenda');
const imgCheck = '<img src="./image/check.png" alt="Emoji checked" />';
const imgWarning = '<img src="./image/warning.png" alt="Emoji checked" />';
const agenda = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputFoneAgenda = document.getElementById('fone-agenda');

    if (agenda.includes(inputFoneAgenda.value)){
        alert(`Esse número de telefone: ${inputFoneAgenda.value} já foi inserido`)
    } else {
        agenda.push(inputFoneAgenda.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputFoneAgenda.value}</td>`;
        linha += `<td>${inputFoneAgenda.value >=100000 ? imgCheck : imgWarning}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAgenda.value = '';
    inputFoneAgenda.value = '';

})
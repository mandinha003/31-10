
function cadastrarAluno() {
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const anoConclusao = document.getElementById('anoConclusao').value;
   
    if (nome && curso && anoConclusao) {
      const aluno = { nome, curso, anoConclusao };
      const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
      alunos.push(aluno);
      localStorage.setItem('alunos', JSON.stringify(alunos));
      alert('Aluno cadastrado com sucesso!');
      limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
   
  function mostrarTodosAlunos() {
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
   
    if (alunos.length === 0) {
      resultado.innerHTML = '<p>Nenhum aluno cadastrado.</p>';
    } else {
      alunos.forEach((aluno, index) => {
        resultado.innerHTML += `<div class="result-item">
          <p><strong>Nome:</strong> ${aluno.nome}</p>
          <p><strong>Curso:</strong> ${aluno.curso}</p>
          <p><strong>Ano de Conclusão:</strong> ${aluno.anoConclusao}</p>
          <button onclick="atualizarAluno(${index})">Atualizar</button>
          <button onclick="removerAluno(${index})">Remover</button>
        </div>`;
      });
    }
  }
   
  function mostrarAluno() {
    const nomeBusca = document.getElementById('buscaNome').value;
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
   
    const aluno = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca.toLowerCase());
   
    if (aluno) {
      resultado.innerHTML = `<div class="result-item">
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Curso:</strong> ${aluno.curso}</p>
        <p><strong>Ano de Conclusão:</strong> ${aluno.anoConclusao}</p>
      </div>`;
    } else {
      resultado.innerHTML = '<p>Aluno não encontrado.</p>';
    }
  }
   

  function atualizarAluno(index) {
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const aluno = alunos[index];
   
    const novoNome = prompt('Atualize o Nome:', aluno.nome);
    const novoCurso = prompt('Atualize o Curso:', aluno.curso);
    const novoAnoConclusao = prompt('Atualize o Ano de Conclusão:', aluno.anoConclusao);
   
    if (novoNome && novoCurso && novoAnoConclusao) {
      alunos[index] = { nome: novoNome, curso: novoCurso, anoConclusao: novoAnoConclusao };
      localStorage.setItem('alunos', JSON.stringify(alunos));
      mostrarTodosAlunos();
      alert('Dados do aluno atualizados!');
    } else {
      alert('Todos os campos devem ser preenchidos.');
    }
  }
   
 
  function removerAluno(index) {
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.splice(index, 1);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    mostrarTodosAlunos();
    alert('Aluno removido com sucesso!');
  }
   

  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('anoConclusao').value = '';
  }
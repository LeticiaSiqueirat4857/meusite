function podeEstudar(concluiuEnsinoMedio, idade, cursandoOutraFaculdade) {
    return concluiuEnsinoMedio &&idade>=18 &&!cursandoOutraFaculdade}
   /// Dados para testar a função
   let concluiuEnsinoMedio = true 
   let idade = 22
   let cursandoOutraFaculdade = false
   // Verificar se pode estudar na faculdade
   let resultado = podeEstudar(concluiuEnsinoMedio,idade,cursandoOutraFaculdade)

   // Exibindo resultados
   if(resultado){
    console.log("Você pode entrar na faculdade")
   }
   else{
    console.log("Você não pode entrar na faculdade")
   }

podeEstudar(concluiuEnsinoMedio,idade,cursandoOutraFaculdade)
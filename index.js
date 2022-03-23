class Noticia{
    constructor(titulo, data_da_publicacao, resumo, texto){
        this.titulo = titulo;
        this.data_da_publicacao = data_da_publicacao;
        this.resumo = resumo;
        this.texto = texto;
    }


 mostrarNoticia(){
    return this.titulo + "\n" + this.data_da_publicacao + "\n" + this.resumo + "\n\n" + this.texto
    
  }
}
let noticia = new Noticia("Evento promove reflexão sobre temática indígena", "23/04/2021", "II Dia da Consciência Indígena do IFMS foi realizado de forma online nessa terça-feira, 22, com palestras, mesas-redondas e apresentações culturais", "O Instituto Federal de Mato Grosso do Sul (IFMS) realizou nessa terça-feira, 22, o II Dia da Consciência Indígena, evento com uma série de atividades que visaram promover o debate e a reflexão acerca da luta e da história indígenas no Brasil, e ainda sobre racismo e preconceito, entre outras temáticas.")

console.log(noticia.mostrarNoticia())
module.exports = {
  user : "ADMSTEF",
  password : "S7EFAN1N178",
  connectString : "192.189.1.13/natbanco",
  query: "select * from inf_pessoais ip left join informacoes_funcionais if on ip.cod_empresa = if.cod_empresa and ip.matricula = if.matricula where if.situacao = '01'"
}
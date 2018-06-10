export default [
  { id: 28, title: 'Villa Ravenna Residencial', path: 'villa-ravenna-residencial', address: 'Rua São Simão, 99', neighbour: 'Bairro Bom Jesus', completionDate: '01/2016' },
  { id: 24, title: 'Residencial Villaggio Sorrento', path: 'residencial-villaggio-sorrento', address: 'Rua Domingos Crescêncio, 965', neighbour: 'Bairro Santana', completionDate: '01/2014' },
  { id: 5, title: 'Residencial Villaggio Monte Bianco', path: 'residencial-villaggio-monte-bianco', address: 'Rua Toropi, 111', neighbour: 'Bairro Petrópolis ', completionDate: '12/2010' },
  { id: 14, title: 'Residencial Estrela Adhara', path: 'residencial-estrela-adhara', address: 'Rua Professor Fitzgerald, 189 ', neighbour: 'Bairro Petrópolis', completionDate: '02/2008' },
  { id: 15, title: 'Residencial 25 de julho', path: 'residencial-25-de-julho', address: 'Rua Marcelo Gama, 1001', neighbour: 'Bairro Higienópolis', completionDate: '02/2007' },
  { id: 16, title: 'Residencial Cônego Viana', path: 'residencial-conego-viana', address: 'Rua Cônego Viana, 78 ', neighbour: 'Bairro Rio Branco', completionDate: '30/04/2005' },
  { id: 9, title: 'Residencial da Figueira', path: 'residencial-da-figueira', address: 'Travessa da Saúde, 92 ', neighbour: 'Bairro Auxiliadora', completionDate: '30/08/2004' },
  { id: 8, title: 'Residencial Villa Franca Di Verona', path: 'residencial-villa-franca-di-verona', address: 'Rua Luiz Manoel Gonzaga, 100 ', neighbour: 'Bairro Petrópolis', completionDate: '30/12/2003' },
  { id: 17, title: 'Residencial Lago di Garda', path: 'residencial-lago-di-garda', address: 'Rua Marcelo Gama, 1189', neighbour: 'Bairro Higienópolis', completionDate: '30/04/2002' },
  { id: 20, title: 'Residencial Cortina D`Ampezzo', path: 'residencial-cortina-dampezzo', address: 'Rua Mariz e Barros, 392', neighbour: 'Bairro Petrópolis', completionDate: '30/11/2001' },
  { id: 21, title: 'Residencial Isidoro Tressi', path: 'residencial-isidoro-tressi', address: 'Rua Isidoro Tressi, 556', neighbour: 'Bairro Jardim Botânico', completionDate: '09/2000' },
  { id: 22, title: 'Residencial Condado de San Lorenzo', path: 'residencial-condado-de-san-lorenzo', address: 'Rua João Caetano, 53', neighbour: 'Bairro Petrópolis', completionDate: '06/1997' },
  { id: 23, title: 'Residencial Itaúba', path: 'residencial-itauba', address: 'Avenida Palmeira, 660', neighbour: 'Bairro Petrópolis', completionDate: '07/1994' },
  { id: 19, title: 'Sede Krebs Engenharia Ltda', path: 'sede-krebs-engenharia-ltda', address: 'Rua Souza Lobo 666', neighbour: 'Bairro Vila Jardim', completionDate: '' },
]

export function getImage(building) {
  return `/static/files/${building.id}/folder/folder.jpg`;
}

export function getMemorialDescritivo(building) {
  return `/static/files/${building.id}/folder/folder.jpg`;
}

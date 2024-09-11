const { select } = require('@inquirer/prompts')

let metas = [
  {
    value: 'Caminhar todos os dias',
    checked: false
  },
  {
    value: 'Estudar programação',
    checked: false
  },
  {
    value: 'Beber no mínimo 2L de água',
    checked: false
  },
  {
    value: 'Ler 1 (um) Livro por mês',
    checked: false
  }
]

const start = async () => {
  while(true) {
    const options = await select({
      message: 'Menu >',
      choices: [
        {
          name: "Cadastrar meta",
          value: 'cadastrar'
        },
        {
          name: 'Listar Metas',
          value: 'listar'
        },
        {
          name: 'Sair',
          value: 'sair'
        }
      ]
    })
    switch(options){
      case 'cadastrar':
        console.log('Vamos cadastrar')
        break
      case 'listar':
        console.log('Vamos listar')
        break
      case 'sair':
        return
    }
  }
}

start()
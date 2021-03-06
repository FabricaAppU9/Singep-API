define({ "api": [
  {
    "type": "post",
    "url": "/api/api/getLogin",
    "title": "Login",
    "version": "0.1.0",
    "name": "getLogin",
    "group": "Acesso",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>Flag de acesso da API</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do participante</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "documento",
            "description": "<p>Documento do participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"login\": \"true\",\n    \"email\": \"autor@instituicao.com\",\n    \"documento\": \"123456789\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Retorna um TOKEN para ser utilizado em todas as requisições da API</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna o Token, código e nome do participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_participante\": 457,\n    \"nome\": \"Pedro Matias\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Login.php",
    "groupTitle": "Acesso"
  },
  {
    "type": "post",
    "url": "/api/api/getLogout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "getLogout",
    "group": "Acesso",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>False</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"login\": \"false\",\n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Retorna uma mensagem de desconexão</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna a mensagem de desconexão</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"Desconectado com Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Login.php",
    "groupTitle": "Acesso"
  },
  {
    "type": "post",
    "url": "/api/agenda/getAll",
    "title": "Agendamentos",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Agenda",
    "description": "<p>Apresenta todos os agendamentos realizados pelo participante</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um Array com todos os agendamentos.<br><br> <strong>Observação:</strong> Realizar a verificação da data e hora para habilitar ou não o botão de remoção e, caso ja tenha sido apresentado, informar ao usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": 45,\n        \"data\": \"10/11/2015\",\n        \"horario\": \"16:00 as 17:30\",\n        \"area\": \"Sustentabilidade\",\n        \"tema\": \"Tópicos especiais em Sustentabilidade\",\n        \"local\": 522,\n        \"tipo_trabalho\": \"Artigo\",\n        \"titulo\": \"O DESENVOLVIMENTO DA CADEIA PRODUTIVA DO BAMBU...\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n  \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Agenda.php",
    "groupTitle": "Agenda"
  },
  {
    "type": "put",
    "url": "/api/agenda/setAgendar",
    "title": "Agendar",
    "version": "0.1.0",
    "name": "setAgendar",
    "group": "Agenda",
    "description": "<p>Realiza o agendamento de um artigo para participação</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Código do artigo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_artigo\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_agenda\": 1,\n    \"codigo_participante\": 1,\n    \"codigo_artigo\": 45\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Agendado:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"artigo jah agendado\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Agenda.php",
    "groupTitle": "Agenda"
  },
  {
    "type": "delete",
    "url": "/api/agenda/setRemover",
    "title": "Cancelar",
    "version": "0.1.0",
    "name": "setRemover",
    "group": "Agenda",
    "description": "<p>Realiza o cancelamento de um agendamento</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Código do artigo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_artigo\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"Agendamento cancelado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Agenda.php",
    "groupTitle": "Agenda"
  },
  {
    "type": "post",
    "url": "/api/area/getAll",
    "title": "Áreas [Todas]",
    "version": "0.1.0",
    "name": "getAllAreas",
    "group": "Apoio",
    "description": "<p>Recupera todas as áreas</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "\n{\n    \"token\": \"70010500-28d38-fe14-67833256-1467833256\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com as áreas disponíveis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_area\": 1,\n        \"descricao\": \"Gestão de Projetos\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/tema/getAll",
    "title": "Temas [Todos]",
    "version": "0.1.0",
    "name": "getAllTemas",
    "group": "Apoio",
    "description": "<p>Recupera todos os temas disponíveis</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "\n{ \n    \"token\": \"70010500-28d38-fe14-67833256-1467833256\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com os temas disponíveis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_tema\": 1,\n        \"descricao\": \"Áreas de Especialização em Gestão de Projetos\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/area_tema/getAreaTemas",
    "title": "Áreas => Temas",
    "version": "0.1.0",
    "name": "getAreaTemas",
    "group": "Apoio",
    "description": "<p>Retorna todas as áreas com os respectivos temas</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "\n{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um objeto JSON associativo com as áreas e seus temas respectivos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"area_tema\": \n    [\n        {\n            \"codigo_area\": 1,\n            \"descricao\": \"Gestão de Projetos\",\n            \"temas\": \n            [\n                {\n                    \"codigo_tema\": 1,\n                    \"descricao\": \"Áreas de Especialização em Gestão de Projetos\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/area/getCodigo",
    "title": "Área [Específica]",
    "version": "0.1.0",
    "name": "getCodigo",
    "group": "Apoio",
    "description": "<p>Realiza a busca específica de uma área pelo seu código</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_area",
            "description": "<p>Código da área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "\n{\n    \"token\": \"70010500-28d38-fe14-67833256-1467833256\",\n    \"codigo_area\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna a área específica</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "\nHTTP/1.1 200 OK\n{\n    \"codigo_area\": 1,\n    \"descricao\": \"Gestão de Projetos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/tema/getCodigo",
    "title": "Tema [Específico]",
    "version": "0.1.0",
    "name": "getCodigoTema",
    "group": "Apoio",
    "description": "<p>Realiza a busca específica de um tema pelo seu código</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_tema",
            "description": "<p>Código do tema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"70010500-28d38-fe14-67833256-1467833256\",\n    \"codigo_tema\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna o tema solicitado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_tema\": 1,\n    \"codigo_area\": 1,\n    \"descricao\": \"Logística Reversa\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/data/getDataHorario",
    "title": "Data/Horário [Todos]",
    "version": "0.1.0",
    "name": "getDataHorario",
    "group": "Apoio",
    "description": "<p>Recupera todas as datas e horários do congresso</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "\n{ \n    \"token\": \"70010500-28d38-fe14-67833256-1467833256\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com as datas/horários disponíveis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_data\": 1,\n        \"data\": \"08/11/2015\",\n        \"dia_semana\": \"Domingo\",\n        \"codigo_horario\": 1,\n        \"horario\": \"17:30 às 18:30\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Apoio.php",
    "groupTitle": "Apoio"
  },
  {
    "type": "post",
    "url": "/api/artigo/getAll",
    "title": "Todos",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Artigo",
    "description": "<p>Recupera todos os artigos cadastrados</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um Array com todos o artigos cadastrados.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Artigo completo em PDF para download no diretório (/download/codigo_artigo)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": \"527\",\n        \"titulo\": \"2015 INTERNATIONAL MODULE ...\",\n        \"data\": \"08/11/2015\",\n        \"horario\": \"17:30 as 18:30\",\n        \"local\": \"HALL\",\n        \"tipo_trabalho\": \"Pôster\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getAreaTema",
    "title": "Pesquisa Area=>Tema",
    "version": "0.1.0",
    "name": "getAreaTema",
    "group": "Artigo",
    "description": "<p>Realiza a busca dos artigos de acordo com a área e o tema selecionado</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>Área do artigo</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "tema",
            "description": "<p>Tema relacionado a área</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>Data da apresentação</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": true,
            "field": "horario",
            "defaultValue": "null",
            "description": "<p>Horário da apresentação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Padrão:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"area\": \"Inovação\",\n    \"tema\": \"Inovação e Marketing\",\n    \"data\": \"null\",\n    \"horario\": \"null\"\n}",
          "type": "json"
        },
        {
          "title": "Filtro Completo:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"area\": \"Inovação\",\n    \"tema\": \"Inovação e Marketing\",\n    \"data\": \"09/11/2015\",\n    \"horario\": \"14:00 as 15:30\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um array com todos os artigos encontrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": \"149\"\n        \"data\": \"09/11/2015\"\n        \"horario\": \"14:00 as 15:30\"\n        \"area\": \"Inovação\"\n        \"tema\": \"Inovação e Marketing\"\n        \"local\": \"516\"\n        \"tipo_trabalho\": \"Artigo\"\n        \"titulo\": \"UMA ANÁLISE DA GESTÃO FINANCEIRA PESSOAL DOS CONSUMIDORES...\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getArtigoDetalhe",
    "title": "Detalhe=>Artigo",
    "version": "0.1.0",
    "name": "getArtigoDetalhe",
    "group": "Artigo",
    "description": "<p>Realiza a busca do artigo especificado, incluindo o resumo</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Código do artigo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_artigo\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um Array com o artigo e os autores participantes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"detalhe_artigo\": \n        {\n            \"codigo_artigo\": 542,\n            \"titulo\": \"APLICAÇÃO DA TEORIA DE OPÇÕES REAIS EM PROJETO DE GERAÇÃO EÓLICA...\",\n            \"data\": \"09/11/2015\",\n            \"horario\": \"14:00 as 15:30\",\n            \"local\": 511,\n            \"tipo_trabalho\": \"Artigo\",\n            \"resumo\": \"Este artigo apresenta critérios de precificação de opções reais em...\"\n            \"autores\": \n            [\n                {\n                    \"nome\": \"Haroldo G. Brasil\",\n                    \"filiacao\": \"IBMEC - MG\"\n                }\n            ]\n        }\n    }    \n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getArtigos",
    "title": "Artigos=>Autor",
    "version": "0.1.0",
    "name": "getArtigos",
    "group": "Artigo",
    "description": "<p>Realiza a busca dos artigos onde o autor participa</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_autor",
            "description": "<p>Código do autor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_autor\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um array com todos os artigos de um determinado autor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": 78,\n        \"data\": \"09/11/2015\",\n        \"horario\": \"14:00 as 15:30\",\n        \"local\": 508,\n        \"tipo_trabalho\": \"Relato\",\n        \"titulo\": \"UTILIZAÇÃO DE PRÁTICAS ÁGEIS EM GRANDES PROJETOS DE DESENVOLVIMENTO...\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getCodigo",
    "title": "Específico",
    "version": "0.1.0",
    "name": "getCodigo",
    "group": "Artigo",
    "description": "<p>Realiza a busca específica de um artigo pelo seu código</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Código do artigo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_artigo\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um artigo específico</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Artigo completo em PDF para download no diretório (/download/codigo_artigo)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_artigo\": 1,\n    \"data\": \"09/11/2015\",\n    \"horario\":\"15:00 às 16:00\",\n    \"local\": 515,\n    \"tipo_trabalho\": \"Relato|Artigo|Pôster\",\n    \"area\": \"Inovação\",\n    \"tema\": \"Inovação e Marketing\",\n    \"titulo\": \"Título do artigo\",\n    \"resumo\": \"O estudo buscou compreender...\",\n    \"inativo\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getResumo",
    "title": "Resumo",
    "version": "0.1.0",
    "name": "getResumo",
    "group": "Artigo",
    "description": "<p>Realiza a busca (LIKE) pelo campo resumo do artigo</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "resumo",
            "description": "<p>Valor procurado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"resumo\": \"inovação\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com os resumos encontrados para a palavra chave</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": 1,\n        \"titulo\": \"Título do artigo\",\n        \"resumo\": \"O estudo buscou compreender...\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/artigo/getTitulo",
    "title": "Título",
    "version": "0.1.0",
    "name": "getTitulo",
    "group": "Artigo",
    "description": "<p>Realiza a busca (LIKE) pelo campo título do artigo</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "titulo",
            "description": "<p>Retorna um Array com todos os títulos localizados com base na palavra pesquisada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"titulo\": \"inovação\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna os artigos que contém a palavra pesquisada</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "codigo_artigo",
            "description": "<p>Artigo completo em PDF para download no diretório (/download/codigo_artigo)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_artigo\": \"527\",\n        \"titulo\": \"2015 INTERNATIONAL MODULE ...\",\n        \"data\": \"08/11/2015\",\n        \"horario\": \"17:30 as 18:30\",\n        \"local\": \"HALL\",\n        \"tipo_trabalho\": \"Pôster\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Artigo.php",
    "groupTitle": "Artigo"
  },
  {
    "type": "post",
    "url": "/api/autor/getAll",
    "title": "Todos",
    "description": "<p>Utilizado para recuperação de todos os autores cadastrados</p>",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Autor",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com todos os autores cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_autor\": 1,\n        \"nome\": \"Pedro Matias\",\n        \"cidade\": \"São Paulo\",\n        \"estado\": \"SP\",\n        \"email\": \"autor@instituicao.xxx\",\n        \"filiacao\": \"UNINOVE - Universidade Nove de Julho\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Autor.php",
    "groupTitle": "Autor"
  },
  {
    "type": "post",
    "url": "/api/autor/getCodigo",
    "title": "Específico",
    "version": "0.1.0",
    "name": "getCodigo",
    "group": "Autor",
    "description": "<p>Utilizado para recuperação de um autor específico por meio do seu código</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_autor",
            "description": "<p>Código do autor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_autor\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Recupera os dados de um autor específico</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_autor\": 1,\n    \"nome\": \"Pedro Matias\",\n    \"cidade\": \"São Paulo\",\n    \"estado\": \"SP\",\n    \"email\": \"autor@instituicao.xxx\",\n    \"filiacao\": \"UNINOVE - Universidade Nove de Julho\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Autor.php",
    "groupTitle": "Autor"
  },
  {
    "type": "post",
    "url": "/api/autor/getFiliacao",
    "title": "Filiação",
    "version": "0.1.0",
    "name": "getFiliacao",
    "group": "Autor",
    "description": "<p>Realiza a busca (LIKE) no campo filiação (Universidade) do autor</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "filiacao",
            "description": "<p>Palavra chave para a pesquisa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"filiacao\": \"Uninove\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um Array com os autores na filiação pela palavra chave informada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_autor\": 1,\n        \"nome\": \"Pedro Matias\",\n        \"cidade\": \"São Paulo\",\n        \"estado\": \"SP\",\n        \"email\": \"autor@instituicao.xxx\",\n        \"filiacao\": \"UNINOVE - Universidade Nove de Julho\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Autor.php",
    "groupTitle": "Autor"
  },
  {
    "type": "post",
    "url": "/api/autor/getNome",
    "title": "Nome",
    "version": "0.1.0",
    "name": "getNome",
    "group": "Autor",
    "description": "<p>Realiza a busca (LIKE) no campo nome do autor</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Palavra chave para pesquisa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"nome\": \"Pedro Matias\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um array com todos os autores pesquisados pelo fragmento informado no campo nome</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_autor\": 1,\n        \"nome\": \"Pedro Matias\",\n        \"cidade\": \"São Paulo\",\n        \"estado\": \"SP\",\n        \"email\": \"autor@instituicao.xxx\",\n        \"filiacao\": \"UNINOVE - Universidade Nove de Julho\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Autor.php",
    "groupTitle": "Autor"
  },
  {
    "type": "post",
    "url": "/api/notificacao/getAll",
    "title": "Todas",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Notificacao",
    "description": "<p>Recupera todas as notificações - lidas e não lidas</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Geral:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_notificacao\": 2\n        \"texto\": \"Mensagem INDIVIDUAL\"\n        \"data_envio\": \"13/07/2016\"\n        \"data_leitura\": null\n    },\n    {\n        \"codigo_notificacao\": 1\n        \"texto\": \"Mensagem GERAL\"\n        \"data_envio\": \"13/07/2016\"\n        \"data_leitura\": \"14/07/2016\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Notificacao.php",
    "groupTitle": "Notificacao"
  },
  {
    "type": "post",
    "url": "/api/notificacao/getNovas",
    "title": "Novas",
    "version": "0.1.0",
    "name": "getNovas",
    "group": "Notificacao",
    "description": "<p>Recupera todas as notificações novas</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Geral:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_notificacao\": 2\n        \"texto\": \"Mensagem INDIVIDUAL\"\n        \"data_envio\": \"13/07/2016\"\n        \"data_leitura\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Notificacao.php",
    "groupTitle": "Notificacao"
  },
  {
    "type": "put",
    "url": "/api/notificacao/setEnviar",
    "title": "Enviar",
    "version": "0.1.0",
    "name": "setEnviar",
    "group": "Notificacao",
    "description": "<p>Registra uma nova notificação a ser lida pelo cliente</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "texto",
            "description": "<p>Texto da notificação</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>Geral (0) ou Individual (1)</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": true,
            "field": "codigo_participante",
            "description": "<p>Código do participante quando individual</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Geral:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"texto\": \"Confira os novos artigos aprovados....\",\n    \"tipo\": 0\n}",
          "type": "json"
        },
        {
          "title": "Individual:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"texto\": \"Confira os novos artigos aprovados....\",\n    \"tipo\": 1,\n    \"codigo_participante\": 48\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"Notificação inserida com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Notificacao.php",
    "groupTitle": "Notificacao"
  },
  {
    "type": "put",
    "url": "/api/notificacao/setLida",
    "title": "Lida",
    "version": "0.1.0",
    "name": "setLida",
    "group": "Notificacao",
    "description": "<p>Marca uma notificação como lida</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_notificacao",
            "description": "<p>Código da notificação</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_participante",
            "description": "<p>Código do participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Geral:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_notificacao\": 3,\n    \"codigo_participante\": 48\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Notificacao.php",
    "groupTitle": "Notificacao"
  },
  {
    "type": "post",
    "url": "/api/palestrante/getAll",
    "title": "Todos",
    "description": "<p>Utilizado para recuperação de todos os palestrante cadastrados. O caminho da imagem é images/</p>",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Palestrante",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com todos os palestrantes cadastrados</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foto",
            "description": "<p>Nome do arquivo em (/fotos/)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_palestrante\": 1,\n        \"nome\": \"Pedro Matias\",\n        \"filiacao\": \"UNINOVE - Universidade Nove de Julho\",\n        \"foto\": \"arquivo.jpg\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Palestrante.php",
    "groupTitle": "Palestrante"
  },
  {
    "type": "post",
    "url": "/api/palestrante/getCodigo",
    "title": "Específico",
    "version": "0.1.0",
    "name": "getCodigo",
    "group": "Palestrante",
    "description": "<p>Utilizado para recuperação de um palestrante específico por meio do seu código. O caminho da imagem é images/</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_autor",
            "description": "<p>Código do palestrante.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_palestrante\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Recupera os dados de um palestrante específico</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foto",
            "description": "<p>Nome do arquivo em (/fotos/)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"codigo_palestrante\": 1,\n        \"nome\": \"Pedro Matias\",\n        \"cidade\": \"São Paulo\",\n        \"estado\": \"SP\",\n        \"email\": \"autor@instituicao.xxx\",\n        \"filiacao\": \"UNINOVE - Universidade Nove de Julho\",\n        \"curriculo\": \"Professor titular....\",\n        \"foto\": \"arquivo.jpg\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Palestrante.php",
    "groupTitle": "Palestrante"
  },
  {
    "type": "post",
    "url": "/api/sessao/getAll",
    "title": "Todas",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Presenca_Sessao",
    "description": "<p>Recupera todas as presenças confirmadas em todas as salas de todos os participantes</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array contendo o registro das presenças em todas as salas ordenados por sala</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_sessao\": 1,\n        \"codigo_participante\": 1,\n        \"sala\": 502,\n        \"data_hora\": \"2016-11-28 14:55:28\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Sessao.php",
    "groupTitle": "Presenca_Sessao"
  },
  {
    "type": "post",
    "url": "/api/sessao/getCodigo",
    "title": "Pesquisar",
    "version": "0.1.0",
    "name": "getCodigo",
    "group": "Presenca_Sessao",
    "description": "<p>Realiza a busca de todas as presenças de um participante em todas as sessões</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "codigo_participante",
            "description": "<p>Código do participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"codigo_participante\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Retorna um Array com os registro das presenças do participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_sessao\": 1,\n        \"codigo_participante\": 1,\n        \"sala\": 502,\n        \"data_hora\": \"2016-11-28 14:55:28\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n  \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Sessao.php",
    "groupTitle": "Presenca_Sessao"
  },
  {
    "type": "put",
    "url": "/api/sessao/setSessao",
    "title": "Registrar",
    "version": "0.1.0",
    "name": "setSessao",
    "group": "Presenca_Sessao",
    "description": "<p>Registra a presença de um participante na sessão lida pelo QRCode</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          },
          {
            "group": "Parâmetro",
            "type": "int",
            "optional": false,
            "field": "sala",
            "description": "<p>Número da sala onde ocorrerá a apresentação. Este valor deverá ser obtido por meio da leitura do QRCode fixado na porta das salas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\",\n    \"sala\": 506\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Registro da presença</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_sessao\": 1,\n    \"codigo_participante\": 1,\n    \"sala\": 502,\n    \"data_hora\": \"2016-11-28 14:55:28\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Sessao.php",
    "groupTitle": "Presenca_Sessao"
  },
  {
    "type": "post",
    "url": "/api/programacao/getAll",
    "title": "Completa",
    "description": "<p>Utilizado para recuperação a programação do evento (tela inicial do APP).</p>",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Programacao",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com toda a programação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_programacao\": 1,\n        \"data\": \"21/11/2016\",\n        \"hora\": \"16:00 as 19:30\",\n        \"titulo\": \"Workshop - Gamificação\",\n        \"conteudo\": \"Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES). Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES).\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Programacao.php",
    "groupTitle": "Programacao"
  },
  {
    "type": "post",
    "url": "/api/programacao/getPrimeiroDia",
    "title": "Primeiro Dia",
    "description": "<p>Utilizado para recuperação a programação do evento Primeiro Dia (tela inicial do APP).</p>",
    "version": "0.1.0",
    "name": "getPrimeiroDia",
    "group": "Programacao",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com toda a programação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_programacao\": 1,\n        \"data\": \"21/11/2016\",\n        \"hora\": \"16:00 as 19:30\",\n        \"titulo\": \"Workshop - Gamificação\",\n        \"conteudo\": \"Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES). Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES).\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Programacao.php",
    "groupTitle": "Programacao"
  },
  {
    "type": "post",
    "url": "/api/programacao/getSegundoDia",
    "title": "Segundo Dia",
    "description": "<p>Utilizado para recuperação a programação do evento Segundo Dia (tela inicial do APP).</p>",
    "version": "0.1.0",
    "name": "getSegundoDia",
    "group": "Programacao",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\": \"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Array com toda a programação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"codigo_programacao\": 1,\n        \"data\": \"22/11/2016\",\n        \"hora\": \"16:00 as 19:30\",\n        \"titulo\": \"Workshop - Gamificação\",\n        \"conteudo\": \"Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES). Palestrante: Prof. Dr. José da Silva (Diretor de Avaliação da CAPES).\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Programacao.php",
    "groupTitle": "Programacao"
  },
  {
    "type": "post",
    "url": "/api/sobre/getAll",
    "title": "Sobre",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Sobre",
    "description": "<p>Realiza a recuperação do sobre</p>",
    "parameter": {
      "fields": {
        "Parâmetro": [
          {
            "group": "Parâmetro",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de acesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de uso:",
          "content": "{ \n    \"token\":\"9503afdf-9520-11e5-8bdb-04017fd5d401\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "object",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno-Successo:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo_sobre\": 1,\n    \"conteudo\": \"html formatado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Retorno-Vazio:",
          "content": "HTTP/1.1 200 OK\n{\n    \"retorno\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/Sobre.php",
    "groupTitle": "Sobre"
  }
] });

# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos possíveis usuários. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

| Mariana Pimentel        |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/69054000/189426437-17f0a25e-b6f1-4074-bcd5-12f9161e5b1d.png)|**Idade:** 39  anos - **Ocupação:** Produtora de Eventos  |Aplicativos: Instagram, Facebook, Linkedin, Aplicativos de bancos.|
|**Motivações:**  Controle dos agendamentos das minhas consultas, a fim de ter sob controle a minha saúde bucal. |**Frustrações:** Não ter encontrado ainda um app que atenda as minhas necessidades.  |**Hobbies, História:** 	Viajar, ver filmes, escutar músicas.| 

| Marcela Silva        |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/69054000/189426814-cb1b3661-cb93-4606-adf2-b33295969d94.png)|**Idade:** 26  anos - **Ocupação:** Dentista na clinica  |Aplicativos: Instagram, Linkedin|
|**Motivações:**  Manter uma agenda organizada, controlando os horários e datas das consultas, podendo entrar em contato com os clientes para ajustar ou remarcar. |**Frustrações:** Atualmente o controle é feito através de agenda em papel, o que limita o controle e torna mais passível de erros.  |**Hobbies, História:** 	Formada desde os 23 anos, com seus 3 anos de experiência na área já esqueceu algumas vezes de uma consulta por falta de uma agenda automatizada.| 

| Rodrigo Paiva        |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/69054000/189427306-bc8fe229-804d-47c8-b0a5-5c707db43b01.png)|**Idade:** 19  anos - **Ocupação:** Estudante  |Aplicativos: TikTok, Facebook, Linkedin|
|**Motivações:**  Encontrar uma forma de marcar uma consulta de forma fácil e que seja notificado quando estiver próximo do atendimento. |**Frustrações:** 	Por vezes na correria do dia a dia, passa batido a data visita de rotina ao dentista e isso afeta a saúde bucal.  |**Hobbies, História:** 		Gravar vídeos para redes sociais, tirar fotos e viajar.| 


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário  | Agilidade na marcação de uma consulta.           | Evitar gasto desnecessário de tempo.               |
|Médico       | Controle profissional da agenda de atendimento.| Melhorar a eficiência dos atendimentos, podendo aumentar a produtividade da empresa. |
|Usuário       | Ser notificado quando estiver próximo da minha consulta.                 | Não esquecer de comparecer ao dentista na correria do dia a dia. |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Como mencionado anteriormente existe a necessidade de uma melhor organização nos ambientes de consulta, afim de que as consultas não sejam perdidas resultando em economia de tempo e custos tanto dos profissionais que prestam o serviço quanto dos clientes que procuram por eles. 

Entendemos que isso por se só viabiliza a proposta da nossa aplicação. Atualmente as consultas são marcadas via telefone ou troca de whatsapp, gerando a falta de controle dos clientes em assumir os compromissos agendados. 

### Descrição Geral da Proposta

A proposta da nossa aplicação visa oferecer um maior controle e organização para os envolvidos na marcação de uma consulta, colaboradores e cliente. 

A aplicação disponibilizará a possibilidade de fazer cadastros de clientes e colaboradores, marcação de consultas e seu cancelamento, calendário com disponibilidade de datas e horários, e esclarecimento de dúvidas.

Como oportunidade de melhoria podemos destacar a perda de tempo e custos por parte dos envolvidos no processo.


### Processo – AGENDAMENTO DE CONSULTA

A seguir apresentamos o modelo de processo de agendamento de consulta, seguindo o padrão BPMN. 

![Processo 1](https://user-images.githubusercontent.com/90862748/189537840-b91f62fa-b0b4-470f-b594-42eeb5e509a0.png)

## Indicadores de Desempenho

![Sem Título-1](https://user-images.githubusercontent.com/62525275/189546406-3b1e374b-1b94-4c15-8192-f1747f7d1d3e.jpg)                            
                                          

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir o cadastro de usuários, com as seguintes informações: nome, CPF, e-mail, telefone, senha e data de nascimento. | ALTA | 
|RF-002| O sistema deverá ter dois tipos de usuário: Médicos e Clientes, cada um com funcionalidades e permissões diferente.  | ALTA |
|RF-003| O usuário deverá estar logado para utilizar o sistema.  | ALTA |
|RF-004| Médicos poderão fazer cadastro de clientes, procedimentos e consultas.  | ALTA |
|RF-005| Clientes terão acesso a agenda disponível e poderá marcar uma consulta.  | ALTA |
|RF-006| O sistema deve permitir que o usuário/médico altere, exclua ou atualize os dados de sua consulta/cadastro;  | ALTA |
|RF-007| Se o usuário não está em dia com os seus compromissos:<p>  1. O sistema exibe mensagem informando ao usuário sobre o atraso de sua consulta e disponibiliza a opção para um novo agendamento de consulta;</p><p>   2. o atraso de sua consulta e disponibiliza a opção para agendamento de consulta em outra data disponível;</p>| MÉDIA |
|RF-008| O usuário atualiza o histórico após a regularização de suas consultas  | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá ser desenvolvida em React Native.  | ALTA | 
|RNF-002| O aplicativo será desenvolvido com enfoque a plataforma Android. |  ALTA | 
|RNF-003| Deverá ser disponibilizado para download através da PlayStore. |  MÉDIA | 
|RNF-004| Deve existir um repositório Git para versionamento e controle de documentação do projeto |  ALTA | 
|RNF-005| Acessibilidade para deficientes visuais |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/12/2022. |
|02| O aplicativo deve se restringir às tecnologias básicas aplicadas no semestre em percurso.        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.        |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama_caso_uso](https://user-images.githubusercontent.com/69054000/189424154-cd27bae2-40ac-4e21-bb91-c0ffb6f6e177.png)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

|         | RF-01 | RF-02 | RF-03 |RF-04|RF-05|RF-06|RF-07|RF-08|RNF-01|RNF-02|RNF-03|RNF-04|RNF-05|
| ------ | ------ |--------|-------|-------|------|-----|-----|----|-----|----|----|---|------|
|RF-01   |    x  |        |       |    x     || x ||x|||||x
|RF-02   |      |  x   |   x     |        ||x||||||||
|RF-03   |         | x       |  x    |        |x|||||||||
|RF-04|x|||x||x||x|||||x|
|RF-05   |         |    x     |   x    |       |  x   |     |   x  |      |      |        |       |      |      |
|RF-06   | x          |         |         | x       |       |   x   |      |   x  |     |     |    |    |   x |
|RF-07   |            |         |        |        |  x   |     |  |       |     |      |      |      |   x |    |
|RF-08| x |   |    |   x   |       |x     |      |x       |   |     |     |    |  x   |
|RNF-01|||||||||x|||x||
|RNF-02||||||||||x|x|||||
RNF-03||||||||||x|x|||||
RNF-04|||||||||x|||x|||||
RNF-05|x||x|x|x||x||||||x|


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![diagrama](file:///C:/Users/gabri/Desktop/DIAGRAMA%20odonto.pdf)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)

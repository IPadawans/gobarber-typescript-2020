# Recuperação de senha

**RF(Requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha;

**RNF(Requisitos não funcionais)**

- Utilizar Mailtrap para testar envio em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em 2 plano (background job);

**RN(Regra de negócio)**

- O link enviado por e-mail para setar senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**RF(Requisitos funcionais)**

- O usuário deve poder atualizar seu nome, email, e senha

**RNF(Requisitos não funcionais)**

**RN(Regra de negócio)**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar a senha, o usuário deve informar a senha antiga;
- Para atualizar a senha, o usuário precisa confirmar a nova senhaç

# Painel do prestador

**RF(Requisitos funcionais)**

- O usuário deve poder listar os seus agendamentos em determinado dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF(Requisitos não funcionais)**

- Os agendamentos de prestador no dia serão carregados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN(Regra de negócio)**

-  A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF(Requisitos funcionais)**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF(Requisitos não funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN(Regra de negócio)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
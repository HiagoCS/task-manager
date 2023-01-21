Utilização do sistema TaskManager em servidor local

-- Requisitos --
PHP v8.0 (minimun)
Node.JS v8.9 (minimun)

1) Baixe e instale uma aplicação de servidor local (usbwebserver, wampserver, xamppserver, apache, dentre outros)

2) Clone o repositório na pasta onde o servidor local inicia

3) Crie uma base de dados no servidor com o nome "laravel" e configure o usuário para "root" sem senha

4) Inicie o prompt de comando na raiz do repositório e siga o comandos a seguir

- cd ./frontend/
- npm install
- npm run dev
-- NÃO FECHE O TERMINAL --

5) Volte para a raiz, inicie o prompt e siga os comandos a seguir

- cd ./backend/
- php artisan migrate:fresh
- php artisan serve

Aplicação estará funcionando em sua maquina localmente.

#!/usr/bin/env sh

# остановить скрипт при ошибке
set -e

# сборка проекта
npm run build

# перейти в папку со сборкой
cd dist

# удалить старый git-репозиторий
rm -rf .git

# инициализация git
git init
git add -A
git commit -m 'deploy'

# пушим в gh-pages через HTTPS
git push -f https://github.com/maershaa/profile.git main:gh-pages

# вернуться назад
cd -

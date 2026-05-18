issues with git:
To fix it, reset the URL to HTTPS:

git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
BTW, you may check your URL using the command:

git remote -v
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)


# adding fastapi
uv add fastapi --extra standard

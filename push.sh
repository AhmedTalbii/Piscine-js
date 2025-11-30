#!/bin/bash
set -x
MSG=$1

# Add remotes if not already added
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# Stage changes
git add .

# Commit and push to GitHub
git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" commit -m "$MSG"
git push github

# Reset last commit but keep changes staged
git reset --soft HEAD~1

# Commit and push to Gitea
git -c user.name="ahtalbi" -c user.email="obetox1@gmail.com" commit -m "$MSG"
git push gitea

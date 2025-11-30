#!/bin/bash
set -x
MSG=$1

# Add remotes if not already added
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# Commit changes
git add .
git commit -m "$MSG"

# Push to GitHub
git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" push github

# Push to Gitea
git -c user.name="ahtalbi" -c user.email="obetox1@gmail.com" push gitea

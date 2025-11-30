#!/bin/bash
set -x
MSG=$1

# Add remotes if not exist
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# --- Push to GitHub ---
git add .
git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" commit -m "$MSG" || true
git push github main || {
    git pull --rebase github main
    git push github main
}

# --- Push to Gitea ---
git stash
git pull --rebase gitea main || {
    git rebase --abort
    echo "Resolve conflicts manually"
    exit 1
}
git stash pop || true
git add .
git -c user.name="ahtalbi" -c user.email="obetox1@gmail.com" commit -m "$MSG" || true
git push gitea main

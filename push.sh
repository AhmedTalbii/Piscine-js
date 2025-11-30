#!/bin/bash

set -x
MSG=$1

# GitHub config
git remote set-url origin https://github.com/AhmedTalbii/Piscine-js.git
git config --global user.name "AhmedTalbii"
git config --global user.email "ahmedtalbi459@gmail.com"
git config --global credential.helper store
git add .
git commit -m "$MSG"
git push

# Gitea config
git remote set-url origin https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git
git config --global user.name "ahtalbi"
git config --global user.email "obetox1@gmail.com"
git config --global credential.helper store
git push

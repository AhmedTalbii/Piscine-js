#!/bin/bash
set -x
MSG=$1

# --- 0. PREPARATION & REMOTE SETUP ---

# Add remotes if not already added (silently)
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# Stage any current working directory changes
git add .

# Check if there are staged changes that need to be committed
if ! git diff --cached --quiet; then
    # Commit the staged changes with the GitHub identity
    git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" commit -m "$MSG (GitHub)"
fi

# --- 1. PUSH TO GITHUB ---

# Integrate remote changes (THIS IS CRITICAL)
# Use 'git pull' without rebase for simplicity, but handle potential conflicts manually if they occur.
echo "Integrating changes from GitHub..."
git pull github main
# If the pull succeeds, we might have an extra merge commit, but our local is now ahead.

# Push to GitHub
echo "Pushing to GitHub..."
git push github main

# --- 2. PUSH TO GITEA (Changing Author) ---

# We need a new commit on top of the GitHub commit with the Gitea identity.
# Since the changes are already committed (by Commit A), we use --amend
# to change the author of the *last* commit (Commit A) to be Commit B.
# WARNING: This rewrites the history for the Gitea push, requiring force.

# AVOID FORCE PUSH SOLUTION:
# To strictly avoid force push, we must create a NEW commit on top of the existing one.

# Create the Gitea commit by amending the previous one and changing the author/committer.
# This will create a new commit hash (Commit B) that is a child of the Parent.
git commit --amend --no-edit --allow-empty \
    -c user.name="ahtalbi" \
    -c user.email="obetox1@gmail.com" \
    -m "$MSG (Gitea)"

# Now, your local HEAD is Commit B.
# We must ensure Gitea is up-to-date with GitHub (which has Commit A) before pushing B.
echo "Integrating changes from Gitea (which should now include the GitHub push)..."
git pull gitea main

# Push to Gitea
echo "Pushing to Gitea..."
git push gitea main
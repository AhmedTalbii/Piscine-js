#!/bin/bash
set -x
MSG=$1

# 1. Setup Remotes (unchanged)
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# 2. Stage Changes (unchanged)
git add .

## --- GitHub Workflow (Commit A) ---
# 3. Create Commit A (for GitHub)
git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" commit -m "$MSG"

# 4. Push Commit A to GitHub
git push github

## --- Gitea Workflow (Commit B) ---
# 5. Create a temporary branch *without* Commit A
# The Gitea remote expects the commit history from GitHub, so we first ensure our local branch
# is aligned with the remote history we just pushed to GitHub.
git branch temp_gitea main
git reset --soft HEAD~1
# NOTE: At this point, the changes are staged, and HEAD is back before Commit A

# 6. Create Commit B (for Gitea) - This commit has a *different parent* than Commit A
git -c user.name="ahtalbi" -c user.email="obetox1@gmail.com" commit -m "$MSG"

# 7. Push Commit B to Gitea
# This will be a non-fast-forward push because the remote Gitea is still pointing to the
# commit *before* Commit A.

# The **simplest non-force fix** is to ensure Gitea sees the linear history (A followed by B):

# 8. Rebase Commit B onto Commit A's history.
# We do this by checking out the temp branch (which has Commit A) and then applying Commit B on top.
git checkout temp_gitea # Now HEAD is Commit A
# Stash any working directory changes from step 6 (though they should be committed)
git cherry-pick main # Apply Commit B onto Commit A. Now temp_gitea has A -> B.

# 9. Push the linear history (A -> B) to Gitea
git push gitea temp_gitea:main

# 10. Clean up
git checkout main
git branch -D temp_gitea
# Since Commit A and B have the same changes, you might need to decide which commit you want 
# on your local 'main' branch or if you want both. For simplicity, let's leave 'main' with Commit B.
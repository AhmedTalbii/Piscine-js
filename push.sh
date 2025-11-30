#!/bin/bash
set -x
MSG=$1

# 0. Preparation: Ensure local is up to date to avoid non-fast-forward issues.
# This should ideally be run manually before the script, but we include a basic check.
# The user needs to integrate changes if any exist.
git pull --rebase github main

# 1. Setup Remotes (optional, but safe)
git remote add github https://github.com/AhmedTalbii/Piscine-js.git 2>/dev/null
git remote add gitea https://learn.zone01oujda.ma/git/ahtalbi/piscine-js.git 2>/dev/null

# 2. Stage Changes
git add .

# --- Commit A (GitHub) ---
# 3. Create Commit A on 'main'
git -c user.name="AhmedTalbii" -c user.email="ahmedtalbi459@gmail.com" commit -m "$MSG (GitHub)"

# 4. Push Commit A to GitHub (Fast-forward, assuming step 0 succeeded)
git push github main

# --- Commit B (Gitea) ---
# 5. Create Commit B (for Gitea) directly on top of Commit A.
# Note: The commit message is slightly changed to distinguish it, though the content is the same.
git -c user.name="ahtalbi" -c user.email="obetox1@gmail.com" commit -m "$MSG (Gitea)"

# 6. Push the linear history (A -> B) to Gitea.
# This will be a fast-forward operation for Gitea, as Commit A is now the common ancestor.
git push gitea main

# 7. Post-Cleanup (Optional, but recommended to keep the history clean on GitHub)
# This step is complex. If GitHub doesn't need Commit B, you'd have to undo B only for GitHub.
# The simplest approach that avoids force push is to leave the linear history (A->B) on all remotes.
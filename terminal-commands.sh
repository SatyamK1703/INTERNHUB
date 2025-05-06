# Step 1: Initialize Git repository (if not already done)
git init

# Step 2: Add all files to staging
git add .

# Step 3: Commit the files
git commit -m "Initial commit: InternHub project"

# Step 4: Create a new branch called main (if you're not already on it)
git branch -M main

# Step 5: Add the remote GitHub repository
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/internhub.git

# Step 6: Push your code to GitHub
git push -u origin main
#!/bin/bash

# 1. Update Code
echo "📦 Updating code..."
git pull

# 2. Install Dependencies
echo "📥 Installing dependencies..."
npm install

# 3. Build Project
echo "🏗️ Building project..."
npm run build

# 4. Start/Restart Server
echo "🚀 Starting server..."
# Check if pm2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Start or Reload
if pm2 list | grep -q "power-station"; then
    pm2 reload power-station
else
    pm2 serve out 3000 --spa --name "power-station"
fi

echo "✅ Deployed successfully! Access at http://<your-ip>:3000"

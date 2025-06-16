# DevOps Web App Deployment 

## Overview
This project demonstrates dockerizing a web application and deploying it on AWS EC2.

## Architecture
- **Application**: Node.js Express web server
- **Containerization**: Docker
- **Deployment**: AWS EC2
- **Version Control**: GitHub

## Prerequisites
- AWS Account
- Docker installed locally
- GitHub account
- SSH client

## Local Development

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/godofmind09/devops-web-app.git
cd devops-web-app-deployment
\`\`\`

### 2. Build and run with Docker
\`\`\`bash
docker build -t devops-web-app .
docker run -p 3000:3000 devops-web-app
\`\`\`

## AWS EC2 Deployment

### 1. Launch EC2 Instance
- Instance type: t2.micro
- Security groups: SSH (22), HTTP (80), Custom TCP (3000)
- Key pair: Download and secure the .pem file

### 2. Connect to EC2
\`\`\`bash
chmod 400 your-key.pem
ssh -i your-key.pem ec2-user@YOUR_EC2_IP
\`\`\`

### 3. Install Docker on EC2
\`\`\`bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -a -G docker ec2-user
\`\`\`

### 4. Deploy Application
\`\`\`bash
# Clone repository 
git clone https://github.com/godofmind09/devops-web-app.git

# Navigate to the project directory
cd devops-web-app-deployment

# Build the Docker image
docker build -t devops-web-app .

# Run the container in detached mode
docker run -d -p 3000:3000 --name web-app devops-web-app

# Check if container is running
docker ps
\`\`\`

## Access the Application
- Local: http://localhost:3000
- AWS: http://YOUR_EC2_PUBLIC_IP:3000

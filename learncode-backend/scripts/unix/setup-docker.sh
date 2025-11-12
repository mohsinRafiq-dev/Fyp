#!/bin/bash

echo "Setting up LearnCode AI Docker environment..."

# Build Python base image
docker build -t learncode-ai-python-base -f docker/Dockerfile.python .

# Build C++ base image
docker build -t learncode-ai-cpp-base -f docker/Dockerfile.cpp .

# Build JavaScript base image
docker build -t learncode-ai-javascript-base -f docker/Dockerfile.javascript .

echo "Setup complete! Docker images are ready for code execution."
echo "Available languages: Python, C++, JavaScript"

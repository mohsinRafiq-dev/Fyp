@echo off
echo Setting up LearnCode AI Docker environment...

echo Building Python runtime image...
docker build -t learncode-python-base -f docker/Dockerfile.python .

echo Building C++ runtime image...
docker build -t learncode-cpp-base -f docker/Dockerfile.cpp .

echo Building JavaScript runtime image...
docker build -t learncode-javascript-base -f docker/Dockerfile.javascript .

echo Setup complete! Docker images are ready for code execution.
echo Available languages: Python, C++, JavaScript
pause
